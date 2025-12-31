import React from "react";

export const BrowserRouter = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);

export const Link = ({
  to,
  children,
  ...props
}: {
  to: string;
  children: React.ReactNode;
  [key: string]: unknown;
}) => (
  <a href={to} {...props}>
    {children}
  </a>
);

export const Navigate = ({ to }: { to: string }) => <div>Navigate to {to}</div>;

export const RouterProvider = ({ router }: { router: unknown }) => {
  React.useEffect(() => {
    const routes = (router as { routes?: Array<{ loader?: () => void }> })
      ?.routes;
    if (routes?.[0]?.loader) {
      try {
        routes[0].loader();
      } catch (error) {
        // Error is handled by errorElement
      }
    }
  }, [router]);

  const routes = (
    router as {
      routes?: Array<{
        errorElement?: React.ReactNode;
        element?: React.ReactNode;
      }>;
    }
  )?.routes;
  return <div>{routes?.[0]?.errorElement || routes?.[0]?.element}</div>;
};

export const createMemoryRouter = (
  routes: unknown[],
  config?: Record<string, unknown>
) => ({
  routes,
  ...(config || {}),
});

export const useSearchParams = () => {
  const [searchParams, setSearchParams] = React.useState(
    new URLSearchParams(window.location.search)
  );

  const updateSearchParams = React.useCallback(
    (
      updater: URLSearchParams | ((prev: URLSearchParams) => URLSearchParams)
    ) => {
      if (typeof updater === "function") {
        setSearchParams((prev) => {
          const newParams = updater(prev);
          window.history.replaceState({}, "", `?${newParams.toString()}`);
          return newParams;
        });
      } else {
        const newParams = new URLSearchParams(updater);
        window.history.replaceState({}, "", `?${newParams.toString()}`);
        setSearchParams(newParams);
      }
    },
    []
  );

  return [searchParams, updateSearchParams] as const;
};

export const useRouteError = () => {
  // This will be mocked in tests
  return null;
};

export const isRouteErrorResponse = (error: unknown) => {
  return error && typeof (error as Record<string, unknown>).status === "number";
};

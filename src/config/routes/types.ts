export enum RoutePath {
  HOME = "/",
  NOT_FOUND = "/404",
}

export interface RouteConfig {
  path: string;
  element: JSX.Element;
  errorElement?: JSX.Element;
}

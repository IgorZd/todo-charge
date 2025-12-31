export enum RoutePath {
  HOME = "/",
  NOT_FOUND = "/404",
}

export interface RouteConfig {
  path: string;
  element: React.ReactElement;
  errorElement?: React.ReactElement;
}

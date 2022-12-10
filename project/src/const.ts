export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '/not-found',
}
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum ViewCardCount {
  Init = 8,
  Step = 8,
  Similar = 4,
}

export enum APIRoute {
  Login = '/login',
  Logout = '/logout',
}

export const TIMEOUT_SHOW_ERROR = 2000;

export enum StatusCodes {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
}

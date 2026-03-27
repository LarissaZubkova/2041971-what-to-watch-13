export enum Tab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export enum AppRoute {
    Main = '/',
    SignIn = '/login',
    MyList = '/mylist',
    Film = '/films/',
    AddReview = '/films/:id/review',
    Player = '/player/:id',
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export enum NameSpace {
    Films = 'FILMS',
    FilmCard = 'FILM_CARD',
    Favorite = 'FAVORITE',
    Promo = 'PROMO',
    User = 'USER',
}

export enum APIRoute {
    Films = '/films',
    Favorite = '/favorite',
    Promo = '/promo',
    Login = '/login',
    Logout = '/logout',
    Comments = '/comments',
}

export enum Rating {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood ='Very good',
  Awesome = 'Awesome',
  Default = '',
}

export const DateFormat = {
  DATE_TIME_FORMAT: 'YYYY-MM-DD',
  REVIEW_DATE_FORMAT: 'MMMM DD, YYYY',
};

export const AUTH_TOKEN_KEY_NAME = 'wtw-token';
export const USER_AVATAR_KEY_NAME = 'avatar-url';
export const BACKEND_URL = 'https://13.design.htmlacademy.pro/wtw';
export const REQUEST_TIMEOUT = 5000;
export const DEFAULT_TAB = 'Overview';
export const DEFAULT_GENRE = 'All genres';
export const DEFAULT_FILMS_COUNT = 8;
export const MAX_GENRES_COUNT = 9;
export const MAX_SIMILAR_COUNT = 4;
export const DURATION_DIGIT = 60;
export const RATING_DIGIT = 1;
export const ReviewLength = {
  MIN_LENGTH: 50,
  MAX_LENGTH: 400,
};


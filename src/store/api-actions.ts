import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { FilmShortCard, PromoFilmCard, FilmCard } from '../types/film';
import { State } from '../types/state';
import { AppDispatch } from '../types/state';
import { UserData } from '../types/user-data.';
import { AuthData } from '../types/auth-data';
import { APIRoute, AppRoute } from '../const';
import { dropToken, saveToken } from '../services/token';
import { dropAvatarUrl, saveAvatarUrl } from '../services/user';
import { redirectToRoute } from './action';

export const fetchFilmsAction = createAsyncThunk<FilmShortCard[], undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'fetchFilms',
  async(_arg, {extra: api}) => {
    const {data} = await api.get<FilmShortCard[]>(APIRoute.Films);
    return data;
  }
);

export const fetchFilmByIdAction = createAsyncThunk<FilmCard, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilmById',
  async(id, {extra: api}) => {
    const {data} = await api.get<FilmCard>(`${APIRoute.Films}/${id}`);
    return data;
  }
);

export const fetchFavoriteAction = createAsyncThunk<FilmShortCard[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFavorite',
  async(_arg, {extra: api}) => {
    const {data} = await api.get<FilmShortCard[]>(APIRoute.Favorite);
    return data;
  }
);

export const fetchPromoFilmAction = createAsyncThunk<PromoFilmCard, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchPromoFilm',
  async(_arg, {extra: api}) => {
    const {data} = await api.get<PromoFilmCard>(APIRoute.Promo);
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {
    extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
dispatch: AppDispatch;
state: State;
extra: AxiosInstance;
}>(
  'user/login',
  async (login, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, login);
    saveToken(data.token);
    saveAvatarUrl(data.avatarUrl);
    dispatch(redirectToRoute(AppRoute.Main));
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {
    extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dropAvatarUrl();
  },
);

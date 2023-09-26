import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilmsProcess } from '../../types/state';
import { DEFAULT_FILMS_COUNT, NameSpace, DEFAULT_GENRE } from '../../const';
import { fetchFilmsAction } from '../api-actions';

const initialState: FilmsProcess = {
  films: [],
  filmsCount: DEFAULT_FILMS_COUNT,
  filmsByGenreCount: 0,
  checkedGenre: DEFAULT_GENRE,
  isFilmsLoading: false,
};

export const filmsProcess = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    changeGenre: (state, action: PayloadAction<string>) => {
      state.checkedGenre = action.payload;
    },
    resetFilmGenre: (state) => {
      state.checkedGenre = DEFAULT_GENRE;
    },
    changeFilmsCount: (state) => {
      state.filmsCount += DEFAULT_FILMS_COUNT;
    },
    resetFilmsCount: (state) => {
      state.filmsCount = DEFAULT_FILMS_COUNT;
    },
    setFilmsCountByGenre: (state, action: PayloadAction<number>) => {
      state.filmsByGenreCount = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmsLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isFilmsLoading = false;
      });
  }
});

export const { changeGenre, resetFilmGenre, changeFilmsCount, resetFilmsCount, setFilmsCountByGenre } = filmsProcess.actions;

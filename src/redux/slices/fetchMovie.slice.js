import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovie, getMovieGenre } from "../../api/getTmdbData";

const apiKey = import.meta.env.VITE_API_KEY;

export const getMoviesThunk = createAsyncThunk(
  "movie/getMovie",
  async (payload, { rejectWithValue }) => {
    try {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
      const data = await getMovie(url);
      return data;
    //   console.log
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);
export const getMovieGenresThunk = createAsyncThunk(
  "movie/getMovieGenres",
  async (payload, { rejectWithValue }) => {
    try {
      const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
      const data = await getMovieGenre(url);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  movies: [],
  genres: [],
  fetchStatus: {
    movies: {
      isLoading: false,
      isSuccess: false,
      isFailed: false,
    },
    genres: {
      isLoading: false,
      isSuccess: false,
      isFailed: false,
    },
  },
  errors: {
    movies: null,
    genres: null,
  },
};

// const movieSlice = createSlice({
//   initialState,
//   name: "movie",
//   extraReducers: (builder) => {
//     builder
//       .addAsyncThunk(getMoviesThunk, {
//         pending: (prevState) => {
//           prevState.fetchStatus.movies.isLoading = true,
//             prevState.fetchStatus.movies.isSuccess = false,
//             prevState.fetchStatus.movies.isFailed = false;
//         },
//         fulfilled: (prevState) => {
//           prevState.fetchStatus.movies.isLoading = false,
//             prevState.fetchStatus.movies.isSuccess = true,
//             prevState.movies.payload;
//         },
//         rejected: (prevState) => {
//           prevState.fetchStatus.movies.isLoading = true,
//             prevState.fetchStatus.movies.isSuccess = false,
//             prevState.errors.movies.payload;
//         },
//       })
//       .addAsyncThunk(getMovieGenresThunk, {
//         panding: (prevState) => {
//             prevState.fetchStatus.genres.isLoading = true,
//             prevState.fetchStatus.genres.isSuccess = false,
//             prevState.fetchStatus.genres.isFailed = false;
//         },
//         fulfilled: (prevState) => {
//           prevState.fetchStatus.genres.isLoading = false,
//             prevState.fetchStatus.genres.isSuccess = true,
//             prevState.genres.payload;
//         },
//         rejected: (prevState) => {
//          prevState.fetchStatus.genres.isLoading = true,
//          prevState.fetchStatus.genres.isSuccess = false,
//          prevState.errors.genres.payload;
//         },
//       });
//   },
// });

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesThunk.pending, (state) => {
        state.fetchStatus.movies.isLoading = true
        state.fetchStatus.movies.isSuccess = false
        state.fetchStatus.movies.isFailed = false
      })
      .addCase(getMoviesThunk.fulfilled, (state, action) => {
        state.fetchStatus.movies.isLoading = false
        state.fetchStatus.movies.isSuccess = true
        state.movies = action.payload
      })
      .addCase(getMoviesThunk.rejected, (state, action) => {
        state.fetchStatus.movies.isLoading = false
        state.fetchStatus.movies.isFailed = true
        state.errors.movies = action.payload
      })
      .addCase(getMovieGenresThunk.pending, (state) => {
        state.fetchStatus.genres.isLoading = true
        state.fetchStatus.genres.isSuccess = false
        state.fetchStatus.genres.isFailed = false
      })
      .addCase(getMovieGenresThunk.fulfilled, (state, action) => {
        state.fetchStatus.genres.isLoading = false
        state.fetchStatus.genres.isSuccess = true
        state.genres = action.payload
      })
      .addCase(getMovieGenresThunk.rejected, (state, action) => {
        state.fetchStatus.genres.isLoading = false
        state.fetchStatus.genres.isFailed = true
        state.errors.genres = action.payload
      })
  },
})

export const movieActions = {
  ...movieSlice.actions,
  getMoviesThunk,
  getMovieGenresThunk,
};



export default movieSlice.reducer;

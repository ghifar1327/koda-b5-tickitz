import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginThunk = createAsyncThunk(
  "auth/loginThunk",
  async (payload, { rejectWithValue }) => {
    try {
      await new Promise((res) => setTimeout(res, 5000));
      return payload;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logoutThunk",
  async (_, { rejectWithValue }) => {
    try {
      await new Promise((res) => setTimeout(res, 5));
      return true;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  user: null,
  token: null,
  fetchStatus: {
    login: { isLoading: false, isSuccess: false, isFailed: false },
    logout: { isLoading: false, isSuccess: false, isFailed: false },
  },
  error: {
    login: null,
    logout: null,
  },
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.fetchStatus.login.isLoading = true;
        state.fetchStatus.login.isSuccess = false;
        state.fetchStatus.login.isFailed = false;
        state.error.login = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.fetchStatus.login.isLoading = false;
        state.fetchStatus.login.isSuccess = true;
        state.fetchStatus.login.isFailed = false;
        state.user = action.payload;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.fetchStatus.login.isLoading = false;
        state.fetchStatus.login.isSuccess = false;
        state.fetchStatus.login.isFailed = true;
        state.error.login = action.payload;
      })
      .addCase(logoutThunk.pending, (state) => {
        state.fetchStatus.logout.isLoading = true;
        state.fetchStatus.logout.isSuccess = false;
        state.fetchStatus.logout.isFailed = false;
        state.error.logout = null;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.fetchStatus.logout.isLoading = false;
        state.fetchStatus.logout.isSuccess = true;
        state.fetchStatus.logout.isFailed = false;
        state.user = null;
        state.token = null;
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        state.fetchStatus.logout.isLoading = false;
        state.fetchStatus.logout.isSuccess = false;
        state.fetchStatus.logout.isFailed = true;
        state.error.logout = action.payload;
      });
  },
});

export default authSlice.reducer;

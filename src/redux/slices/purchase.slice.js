import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movie: '',
  cinema: '',
  location: '',
  dates: {
    day: '',
    date: '',
    time: '',
  },
  subtotal: 0,
  choosed_seats: [],
};

const purchaseSlice = createSlice({
  name: 'purchase',
  initialState,
  reducers: {
    setMovie(state, action) {
      state.movie = action.payload;
    },

    setCinema(state, action) {
      state.cinema = action.payload;
    },

    setDates(state, action) {
      state.dates = { ...state.dates, ...action.payload };
    },

    setChoosedSeat(state, action) {
      const seat = action.payload;
      const exists = state.choosed_seats.includes(seat);

      if (exists) {
        state.choosed_seats = state.choosed_seats.filter((s) => s !== seat);
      } else {
        state.choosed_seats.push(seat);
      }
    },

    setSubtotal(state, action) {
      state.subtotal = action.payload;
    },

    resetPurchase(state) {
      state.movie = '';
      state.cinema = '';
      state.location = '';
      state.dates = { day: '', date: '', time: '' };
      state.subtotal = 0;
      state.choosed_seats = [];
    },
  },
});

export const {
  setMovie,
  setCinema,
  setDates,
  setChoosedSeat,
  setSubtotal,
  resetPurchase,
} = purchaseSlice.actions;

export default purchaseSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { TICK, getUser, tickB } from './action';

export const getDefaultUserState = () => ({
  light: false,
  lastUpdate: 0,
  count: 0,
  userId: '',
  user: {},
});

const userSlice = createSlice({
  name: 'user',
  initialState: getDefaultUserState(),
  reducers: {
    [TICK](state, action) {
      console.log('tick action!', state, action);
      return { ...state, lastUpdate: action.payload.lastUpdate, light: action.payload.light };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(tickB, (state, action) => {
      console.log('tickB reduced!', state, action);
      return { ...state, lastUpdate: action.payload.lastUpdate, light: action.payload.light };
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      console.log('getUser.fulfilled', { state, action });
      return { ...state, userId: action.payload.userId, user: action.payload.data };
    });
  },
});

export default userSlice;

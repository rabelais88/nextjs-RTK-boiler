import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const TICK = 'TICK';
const GET_USER = 'user/GET_USER';

export const tickB = createAction(TICK, (light) => {
  console.log('action tickB');
  return { payload: { light, lastUpdate: Date.now() } };
});

export const tick = createAction(`user/${TICK}`, (light) => {
  console.log('action, tick', light);
  return {
    payload: {
      light,
      lastUpdate: Date.now(),
    },
  };
});

export const getUser = createAsyncThunk(GET_USER, async (userId, thunkAPI) => {
  console.log('getUser activated!');
  // https://redux-toolkit.js.org/api/createAsyncThunk
  const { dispatch, getState, extra, requestId, signal, rejectWithValue } = thunkAPI;
  const req = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
  return { userId, data: req.data[0] };
});

export default {
  tick,
  getUser,
};

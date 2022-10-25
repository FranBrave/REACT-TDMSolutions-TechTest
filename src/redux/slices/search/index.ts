import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError, AxiosResponse } from 'axios';

import axios from 'utils/axios';
import { Thunk } from 'redux/store';
import { Search } from 'interfaces';

const initialState: Search = {
  searchUser: []
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchUser: (state, action: PayloadAction<[]>) => {
      state.searchUser = action.payload;
    }
  }
});

export const { setSearchUser } = searchSlice.actions;
export default searchSlice.reducer;

export const search =
  (data: Search): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    try {
      const response: AxiosResponse = await axios.post('/users', data);
      dispatch(setSearchUser(response.data.data));
      return response;
    } catch (error) {
      return error as AxiosError;
    }
  };

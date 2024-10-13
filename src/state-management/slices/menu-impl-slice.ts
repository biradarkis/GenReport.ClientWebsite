// src/redux/slices/dataSlice.ts
import { HttpResponse } from '@/utils/models/shared/http-response';
import ApiClient from '@/utils/services/api-client';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface DataState {
  data: any;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: DataState = {
  data: null,
  status: 'idle',
  error: null,
};

// Thunk to fetch data from the API
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await ApiClient.sendHttpGet<MenuImpl>("");
  if(response.successResponse){
    return response.successResponse.data
  }
  console.error("Error Fetching data",response.errorResponse)
});

const menuSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default menuSlice.reducer;

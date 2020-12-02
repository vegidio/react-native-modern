import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GithubService, NetworkState } from '../services';
import { serialize } from 'serializr';

export interface UserState {
    user: {
        state: NetworkState;
        errorMessage: string;
        data: any;
    };
}

// region - Async
export const userFetch = createAsyncThunk('user/fetch', async (username: string) => {
    const service = new GithubService();
    const user = await service.getUser(username);
    return serialize(user);
});
// endregion

// region - Reducer Slice
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        state: NetworkState.Idle,
        errorMessage: '',
        data: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userFetch.pending, (state) => {
            state.state = NetworkState.Loading;
        });
        builder.addCase(userFetch.fulfilled, (state, { payload }) => {
            state.state = NetworkState.Idle;
            state.data = payload;
        });
        builder.addCase(userFetch.rejected, (state, { error }) => {
            state.errorMessage = error.message!;
            state.state = NetworkState.Error;
        });
    },
});
// endregion

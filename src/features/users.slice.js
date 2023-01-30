import { createAsyncThunk, createSlice } from "@redux/toolkit";

const initialstate = {
  users: [],
  user: null,
  posts: [],
  error: null,
  loading: false,
};

export const getUsers = createAsyncThunk("get/users", async (_, thunkAPI) => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = res.json();
    return users;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getUser = createAsyncThunk("get/user", async (id, thunkAPI) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = res.json();
    return user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getPostsByUserId = createAsyncThunk(
  "get/post",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}/posts`
      );
      const posts = res.json();
      return posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const usersSlice = createSlice({
  name: users,
  initialstate,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fullfilled, (state, action) => {
        state.users = action.paylod;
        state.loading = false;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
    builder
      .addCase(getPostsByUserId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPostsByUserId.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(getPostsByUserId.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default usersSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCharactersApi, fetchSingleCharacterApi } from "../../Api/Index";

export const fetchCharacterData = createAsyncThunk(
  "character/fetchCharacterData",
  async ({ page = 1, query = "" }, { rejectWithValue }) => {
    try {
      return await fetchCharactersApi(page, query);
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || error.message);
    }
  }
);

export const fetchCharacterId = createAsyncThunk(
  "character/fetchSingleCharacter",
  async (id, { rejectWithValue }) => {
    try {
      return await fetchSingleCharacterApi(id);
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || error.message);
    }
  }
);

const initialState = {
  character: [],
  singleCharacter: null,
  isLoading: false,
  isError: "",
  pagination: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacterData.pending, (state) => {
        state.isLoading = true;
        state.isError = "";
      })
      .addCase(fetchCharacterData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.character = action.payload.results;
        state.pagination = action.payload.info;
      })
      .addCase(fetchCharacterData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(fetchCharacterId.pending, (state) => {
        state.isLoading = true;
        state.isError = "";
      })
      .addCase(fetchCharacterId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.singleCharacter = action.payload;
      })
      .addCase(fetchCharacterId.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const selectData = (state) => state.character.character;
export const paginationData = (state) => state.character.pagination;
export const statusData = (state) => state.character.status;
export const selectCurrentQuery = (state) => state.character.currentQuery;
export const singleData = (state) => state.character.singleCharacter;

export default characterSlice.reducer;

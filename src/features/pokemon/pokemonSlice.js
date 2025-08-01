import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPokemons, fetchPokemonDetails } from '../../services/api';

export const getPokemons = createAsyncThunk(
  'pokemon/getPokemons',
  async ({ limit, offset }, { rejectWithValue }) => {
    try {
      const response = await fetchPokemons(limit, offset);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getPokemonDetails = createAsyncThunk(
  'pokemon/getPokemonDetails',
  async (name, { rejectWithValue }) => {
    try {
      const response = await fetchPokemonDetails(name);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const searchPokemons = createAsyncThunk(
  'pokemon/searchPokemons',
  async (searchTerm, { rejectWithValue }) => {
    try {
      const response = await fetchPokemons(1000, 0); // Fetch all to search
      const filtered = response.results.filter(pokemon => 
        pokemon.name.includes(searchTerm.toLowerCase())
      );
      return { results: filtered };
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    list: [],
    details: null,
    loading: false,
    error: null,
    count: 0,
    offset: 0,
    limit: 20,
    searchTerm: '',
  },
  reducers: {
    setOffset: (state, action) => {
      state.offset = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPokemons.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.results;
        state.count = action.payload.count;
      })
      .addCase(getPokemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getPokemonDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPokemonDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.details = action.payload;
      })
      .addCase(getPokemonDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(searchPokemons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchPokemons.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.results;
        state.count = action.payload.results.length;
      })
      .addCase(searchPokemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setOffset, setSearchTerm } = pokemonSlice.actions;
export default pokemonSlice.reducer;
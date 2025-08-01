import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../features/pokemon/pokemonSlice';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

const SearchBar = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((state) => state.pokemon);

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleClear = () => {
    dispatch(setSearchTerm(''));
  };

  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search Pokémon by name..."
      value={searchTerm}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: searchTerm && (
          <InputAdornment position="end">
            <IconButton onClick={handleClear}>
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{ marginBottom: 3 }}
    />
  );
};

export default SearchBar;
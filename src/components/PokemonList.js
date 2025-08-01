import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, searchPokemons } from '../features/pokemon/pokemonSlice';
import { Grid, CircularProgress, Alert } from '@mui/material';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
  const dispatch = useDispatch();
  const { list, loading, error, offset, limit, searchTerm } = useSelector((state) => state.pokemon);

  useEffect(() => {
    if (searchTerm) {
      dispatch(searchPokemons(searchTerm));
    } else {
      dispatch(getPokemons({ limit, offset }));
    }
  }, [dispatch, limit, offset, searchTerm]);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Grid container spacing={3}>
      {list.map((pokemon) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.name}>
          <PokemonCard pokemon={pokemon} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PokemonList;
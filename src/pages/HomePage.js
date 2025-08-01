import React from 'react';
import { Container, Typography } from '@mui/material';
import SearchBar from '../components/SearchBar';
import PokemonList from '../components/PokemonList';
import Pagination from '../components/Pagination';

const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4, paddingBottom: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ textAlign: 'center', marginBottom: 4 }}>
        Pokémon Explorer
      </Typography>
      <SearchBar />
      <PokemonList />
      <Pagination />
    </Container>
  );
};

export default HomePage;
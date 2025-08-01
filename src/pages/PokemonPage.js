import React from 'react';
import { Container } from '@mui/material';
import PokemonDetails from '../components/PokemonDetails';

const PokemonPage = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4, paddingBottom: 4 }}>
      <PokemonDetails />
    </Container>
  );
};

export default PokemonPage;
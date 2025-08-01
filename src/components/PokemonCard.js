import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();
  const pokemonId = pokemon.url.split('/').slice(-2, -1)[0];
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

  return (
    <Card 
      sx={{ 
        cursor: 'pointer', 
        '&:hover': { transform: 'scale(1.03)', transition: 'transform 0.3s' } 
      }}
      onClick={() => navigate(`/pokemon/${pokemon.name}`)}
    >
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={pokemon.name}
        sx={{ objectFit: 'contain', padding: '1rem' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ textTransform: 'capitalize' }}>
          {pokemon.name}
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip label={`#${pokemonId}`} color="primary" size="small" />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
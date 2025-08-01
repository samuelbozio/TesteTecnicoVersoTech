import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPokemonDetails } from '../features/pokemon/pokemonSlice';
import { Box, Typography, CircularProgress, Alert, Paper, Chip, Stack, Divider } from '@mui/material';
import styled from '@emotion/styled';

const DetailSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const PokemonDetails = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { details, loading, error } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemonDetails(name));
  }, [name, dispatch]);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;
  if (!details) return null;

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${details.id}.png`;

  return (
    <Box sx={{ maxWidth: '800px', margin: '0 auto', padding: 2 }}>
      <Typography variant="h3" sx={{ textTransform: 'capitalize', marginBottom: 2 }}>
        {details.name}
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        <Box sx={{ flex: 1 }}>
          <img src={imageUrl} alt={details.name} style={{ width: '100%', maxWidth: '400px' }} />
        </Box>
        
        <Box sx={{ flex: 2 }}>
          <DetailSection elevation={3}>
            <Typography variant="h5" gutterBottom>Basic Info</Typography>
            <Stack direction="row" spacing={1} sx={{ marginBottom: 2 }}>
              <Chip label={`#${details.id}`} color="primary" />
              <Chip label={`Height: ${details.height / 10}m`} />
              <Chip label={`Weight: ${details.weight / 10}kg`} />
            </Stack>
            
            <Typography variant="h6">Types</Typography>
            <Stack direction="row" spacing={1} sx={{ marginBottom: 2 }}>
              {details.types.map((type, index) => (
                <Chip key={index} label={type.type.name} color="secondary" sx={{ textTransform: 'capitalize' }} />
              ))}
            </Stack>
          </DetailSection>
          
          <DetailSection elevation={3}>
            <Typography variant="h5" gutterBottom>Abilities</Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {details.abilities.map((ability, index) => (
                <Chip 
                  key={index} 
                  label={ability.ability.name.replace('-', ' ')} 
                  sx={{ textTransform: 'capitalize', marginBottom: 1 }} 
                />
              ))}
            </Stack>
          </DetailSection>
          
          <DetailSection elevation={3}>
            <Typography variant="h5" gutterBottom>Stats</Typography>
            {details.stats.map((stat, index) => (
              <Box key={index} sx={{ marginBottom: 1 }}>
                <Typography variant="body1" sx={{ textTransform: 'capitalize' }}>
                  {stat.stat.name.replace('-', ' ')}: {stat.base_stat}
                </Typography>
                <Box sx={{ width: '100%', height: 8, backgroundColor: '#e0e0e0', borderRadius: 4 }}>
                  <Box 
                    sx={{ 
                      width: `${(stat.base_stat / 255) * 100}%`, 
                      height: '100%', 
                      backgroundColor: stat.base_stat > 100 ? '#4caf50' : '#2196f3',
                      borderRadius: 4
                    }} 
                  />
                </Box>
              </Box>
            ))}
          </DetailSection>
        </Box>
      </Box>
    </Box>
  );
};

export default PokemonDetails;
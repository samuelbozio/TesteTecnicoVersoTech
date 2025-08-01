import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOffset } from '../features/pokemon/pokemonSlice';
import { Pagination as MuiPagination, Stack } from '@mui/material';

const Pagination = () => {
  const dispatch = useDispatch();
  const { count, limit, offset } = useSelector((state) => state.pokemon);
  const pageCount = Math.ceil(count / limit);
  const currentPage = offset / limit + 1;

  const handleChange = (event, value) => {
    dispatch(setOffset((value - 1) * limit));
  };

  if (pageCount <= 1) return null;

  return (
    <Stack spacing={2} sx={{ marginTop: 3, alignItems: 'center' }}>
      <MuiPagination
        count={pageCount}
        page={currentPage}
        onChange={handleChange}
        color="primary"
        showFirstButton
        showLastButton
      />
    </Stack>
  );
};

export default Pagination;
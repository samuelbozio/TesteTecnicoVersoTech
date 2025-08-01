import { GlobalStyles as MuiGlobalStyles } from '@mui/material';

const GlobalStyles = () => (
  <MuiGlobalStyles
    styles={{
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
      },
      body: {
        lineHeight: 1.5,
      },
      img: {
        maxWidth: '100%',
        height: 'auto',
      },
    }}
  />
);

export default GlobalStyles;
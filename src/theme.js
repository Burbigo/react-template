import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const color = {
  // TODO: Define your color's instance
  grey: {
    background: '#f3f3f6',
    desaturated: '#e0d9ed'
  }
};

const typography = {
  // TODO: temporaty fix for providing older version supporting 
  useNextVariants: true
};

const theme = createMuiTheme({
  typography,
  color
});

export default theme;
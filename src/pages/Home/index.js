import React, { Component } from 'react';
import classNames from 'classnames';
 
import withStyles from '@material-ui/core/styles/withStyles';
 
const styles = () => ({
  root: {
    padding: '1rem',
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classNames(
        'Home',
        classes.root
      )}>
        Home page
      </div>
    )
  }
};

export default withStyles(styles)(Home); 
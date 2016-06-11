import React, { PropTypes } from 'react';
import HomeNavBar from '../../containers/HomeNavBar';
import Footer from './Footer';
import Snackbar from 'material-ui/lib/snackbar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const HomeLayout = ({ children, openSnackbar, onCloseSnackbar,
  snackbarMessage }) => (
  <div>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <HomeNavBar />

      <div className="flex-container">
        {children}
      </div>

      <Footer />

      <Snackbar
        open={openSnackbar}
        message={snackbarMessage}
        autoHideDuration={8000}
        onRequestClose={onCloseSnackbar}
      />
    </MuiThemeProvider>
  </div>
);

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
  openSnackbar: PropTypes.bool.isRequired,
  onCloseSnackbar: PropTypes.func.isRequired,
  snackbarMessage: PropTypes.string.isRequired
};

export default HomeLayout;

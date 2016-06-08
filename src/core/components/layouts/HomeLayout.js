import React, { PropTypes } from 'react';
import HomeNavBar from '../../containers/HomeNavBar';
import Footer from './Footer';
import Snackbar from 'material-ui/lib/snackbar';

const HomeLayout = ({ children, openSnackbar, onCloseSnackbar,
  snackbarMessage }) => (
  <div>
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

  </div>
);

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
  openSnackbar: PropTypes.bool.isRequired,
  onCloseSnackbar: PropTypes.func.isRequired,
  snackbarMessage: PropTypes.string.isRequired
};

export default HomeLayout;

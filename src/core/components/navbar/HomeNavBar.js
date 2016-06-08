import React, { PropTypes } from 'react';
import {
  Fixed,
  NavItem,
  Space,
  Toolbar,
  Button
} from 'rebass';

import FaBars from 'react-icons/fa/bars';
import LeftNav from 'material-ui/lib/left-nav';
import Dialog from 'material-ui/lib/dialog';

import Login from '../../containers/account/login';
import SignUp from '../../containers/account/signup';
import AuthenticatedNavigation from '../../containers/navbar/authenticated-nav';
import PublicNavigation from './public-nav';
import MobilePubNavigation from './mobile-pub-nav';
import MobileAuthNavigation from './mobile-auth-nav';
import ResetPwd from '../../containers/account/reset-password';

const styles = {
  menuIcon: {
    marginRight: 25,
    marginLeft: -25,
    display: 'none',
  },
  dialogContent: {
    width: '90%',
    maxWidth: 320,
    display: 'flex',
    flexDirection: 'column',
  },
};

const arrDialogContent = {
  login: { node: <Login />, title: '' },
  signup: { node: <SignUp />, title: 'Sign Up' },
  resetPwd: { node: <ResetPwd />, title: 'Reset Password' },
};


const HomeNavBar = ({ openLeftNav, onToggleLeftNav, onCloseLeftNav, openDialog,
  onCloseDialog, dialogContent, showLoginDialog, handleLogout, userExists, firstName }) => (
  <Fixed top left right zIndex={1}>
    <Toolbar>
      <FaBars
        className="material-icons mobile-only"
        style={styles.menuIcon}
        onClick={onToggleLeftNav}
      />
      <Space />
      <NavItem className="brand" href='/' children='Rent People' />
      <Space auto />
      <div className="desktop-only flex-container">
        {userExists ? <AuthenticatedNavigation
          onLogout={handleLogout}
          firstName={firstName}
        /> : <PublicNavigation showLoginDialog={showLoginDialog} />}
        <NavItem href='/' children='Services' />
        <Space />
        <Button
          backgroundColor="primary"
          color="white"
          inverted
          rounded
        >
          List your house
        </Button>
      </div>
      <Space />
    </Toolbar>

    <LeftNav
      docked={false}
      width={250}
      open={openLeftNav}
      onRequestChange={onCloseLeftNav}
    >
      {userExists ? <MobileAuthNavigation
        onLogout={handleLogout}
        firstName={firstName}
      /> : <MobilePubNavigation showLoginDialog={showLoginDialog} />}

    </LeftNav>

    <Dialog
      title={arrDialogContent[dialogContent].title}
      modal={false}
      open={openDialog}
      onRequestClose={onCloseDialog}
      contentStyle={styles.dialogContent}
      autoScrollBodyContent
    >
      {arrDialogContent[dialogContent].node}

    </Dialog>

  </Fixed>
)

HomeNavBar.propTypes = {
  openLeftNav: PropTypes.bool.isRequired,
  onToggleLeftNav: PropTypes.func.isRequired,
  onCloseLeftNav: PropTypes.func.isRequired,
  openDialog: PropTypes.bool.isRequired,
  onCloseDialog: PropTypes.func.isRequired,
  dialogContent: PropTypes.string.isRequired,
  showLoginDialog: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  userExists: PropTypes.bool.isRequired,
};

export default HomeNavBar;

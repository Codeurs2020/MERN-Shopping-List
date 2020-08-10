import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'reactstrap';

import { logout } from '../../actions/authActions';

const Logout = ({ logout }) => {
  return (
    <>
      <NavLink onClick={logout} href="#">
        Logout
      </NavLink>
    </>
  );
};

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(Logout);

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { Menu, Button } from 'semantic-ui-react';

export const Header = ({ startLogout }) => (
  <Menu secondary pointing size='large' stackable className='nav'>
    <Menu.Menu>
      <Menu.Item name='Brand' >
        <Link to='/dashboard'>
          <h3 className='brand__name'>Xpendify </h3>
        </Link>
      </Menu.Item>
    </Menu.Menu>

    <Menu.Menu position='right'>
      <Menu.Item name='overview' />
      <Menu.Item name='features' />
      <Menu.Item name='about' />
      <Menu.Item name='Create xpense' />
      <Menu.Item>
        <Button
          content='Log out'
          inverted
          onClick={startLogout}
        />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
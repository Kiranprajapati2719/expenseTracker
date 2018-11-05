import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { Menu, Container } from 'semantic-ui-react';

export const Header = ({ startLogout }) => (
  <Menu secondary size='large' stackable>
    <Container>
      <Menu.Item name='Brand'>
        <Link to='/dashboard'>
          <h2 className='brand__name'>Xpendify </h2>
        </Link>
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item name='Expenses' />
        <Menu.Item name='Report' />
        <Menu.Item name='Create xpense'>
          <Link to='/create'>
            Add
          </Link>
        </Menu.Item>
        <Menu.Item
          onClick={startLogout}
          name='Log out'
        >
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
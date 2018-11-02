import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';
import {Menu, Button} from 'semantic-ui-react';

class Navbar extends Component {
  render() {
    const {startLogin} = this.props;
    return (
    <Menu secondary size='large' stackable padded='true'> 
      <Menu.Item name='Brand'/>
      <Menu.Menu position='right'>
        <Menu.Item name='overview'/> 
        <Menu.Item name='features'/>
        <Menu.Item name='about'/>
        <Menu.Item>
          <Button className='btn' onClick={startLogin}> Login </Button>
        </Menu.Item>
      </Menu.Menu>  
    </Menu>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Navbar);
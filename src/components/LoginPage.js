import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { Grid, Button, Icon, Transition } from 'semantic-ui-react';

export class LoginPage extends Component {
  state = { visible: false };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ visible: !this.state.visible });
    }, 500);
  }
  render() {
    const { visible } = this.state;
    const { startLogin } = this.props;
    return (
      <Grid stackable className='hero'>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Transition visible={visible} animation='fade up' duration='1000'>
              {visible &&
                <div className='textBox'>
                  <h1 className='brand__name'>xpendify</h1>
                  <h2> Get your expenses under control</h2>
                  <p>Xpendify helps you keep track of your expenses
                    so you can efficiently manage your finance. </p>
                  <Button onClick={startLogin} >
                    <Icon name='google plus g' color='red'></Icon>
                    &nbsp;
                    Sign in with Google
                  </Button>
                </div>
              }
            </Transition>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

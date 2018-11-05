import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import { Container, Segment, Grid } from 'semantic-ui-react';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <Container>
    <Segment>
      <Grid container textAlign='center'>
        <Grid.Column floated='left' textAlign='left' width={12}>
          <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
          </Link>
        </Grid.Column>
        <Grid.Column floated='right' width={4}>
          <h3>{numeral(amount / 100).format('$, 0.00')}</h3>
          <p className='normalFont'>{moment(createdAt).format('MMM Do, YYYY')}</p>
        </Grid.Column>
      </Grid>
    </Segment>
  </Container>
);
export default ExpenseListItem; 
import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import { Container, Segment, Grid } from 'semantic-ui-react';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <Container className="bg__list">
    <Segment>
      <Grid.Row>
        <Grid.Column floated='left' textAlign='left' width={10}>
          <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
          </Link>
        </Grid.Column>
        <Grid.Column floated='right' width={6}>
          <h3 style={{ fontWeight: 'lighter' }}>{numeral(amount / 100).format('$, 0.00')}</h3>
          <p className='normalFont'>{moment(createdAt).format('MMM Do, YYYY')}</p>
        </Grid.Column>
      </Grid.Row>
    </Segment>
  </Container>
);
export default ExpenseListItem; 
import React from 'react'
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import { Container, Grid } from 'semantic-ui-react';

export class ExpenseListFilters extends React.Component {
  state = { calenderFocused: null };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calenderFocused) => {
    this.setState(() => ({ calenderFocused }));
  };

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }

  onSortChange = (e) => {
    if (e.target.value === "date") {
      this.props.sortByAmount();
    } else if (e.target.value === "amount") {
      this.props.sortByDate();
    }
  }

  render() {
    return (
      <Container>
        <Grid stackable>
          <Grid.Row columns={3}>
            <Grid.Column>
              <input
                type="text"
                value={this.props.filters.text}
                onChange={this.onTextChange}
                placeholder="Filter expenses"
              />
            </Grid.Column>
            <Grid.Column>
              <span as="h4">Sort By:</span>
              <button className="btn__round"
                value={this.props.filters.sortBy}
                onClick={this.onSortChange}
              > {this.props.filters.sortBy}</button>
            </Grid.Column>
            <Grid.Column>
              <DateRangePicker
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calenderFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container >
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
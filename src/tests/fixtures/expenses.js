import moment from 'moment';

export default [{
  id:'1',
  description: 'Rent',
  note: '',
  amount:9000,
  createdAt: 0
},
{
  id:'2',
  description: 'Bill',
  note: 'To be paid soon',
  amount:8000,
  createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
  id:'3',
  description: 'Credit',
  note: 'From a friend',
  amount:7000,
  createdAt: moment(0).add(4, 'days').valueOf()
}];

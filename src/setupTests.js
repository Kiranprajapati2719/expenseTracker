import dotenv from 'dotenv';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

dotenv.config({path: '.env.test'});

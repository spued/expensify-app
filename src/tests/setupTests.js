import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import dotenv from 'dotenv';

Enzyme.configure({ adapter: new Adapter() });

dotenv.config({ path:'.env.test' })
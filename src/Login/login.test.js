import React from 'react';
import {shallow,configure} from 'enzyme';
import Login from './login';

// import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('Login', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow(<Login />)
            // console.log("Component",component.debug())
            expect(component).toMatchSnapshot()
        });
    });
});
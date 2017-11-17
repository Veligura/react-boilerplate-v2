import React                  from 'react'
import { configure, shallow } from 'enzyme'
import Adapter                from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() })

import App from '../src/components/App'

// Snapshot test
test('renders a main component', () => {
	const component = renderer.create(<App/>);
	
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

// Test via enzyme usage
test('has the right text', () => {
	const component = shallow(<App />)
	expect(component.text()).toEqual('Hello and welcome :)');
});
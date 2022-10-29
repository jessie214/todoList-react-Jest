import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoList from '../../index';
import Header from '../../components/Header'

Enzyme.configure({ adapter: new Adapter() });

it('The initialization list should be empty', () => {
  const wrapper = shallow(<TodoList />);
  expect(wrapper.state('undoList')).toEqual([]);
});

it('TodoLIst should pass a method to add undoList content to Header', () => {
  const wrapper = shallow(<TodoList />);
  let HeaderComponent = wrapper.find(Header);
  expect(HeaderComponent.props.addUndoItem).toBe(wrapper.instance.addUndoItem);
});

it('When the Header presses enter, the undoList list should add new content', () => {
  const wrapper = shallow(<TodoList />);
  let HeaderComponent = wrapper.find(Header);
  const addFunc = HeaderComponent.prop('addUndoItem');
  console.log(HeaderComponent.props)
  addFunc('learn react');
  expect(wrapper.state('undoList').length).toBe(1);
  expect(wrapper.state('undoList')[0]).toBe('learn react');
});


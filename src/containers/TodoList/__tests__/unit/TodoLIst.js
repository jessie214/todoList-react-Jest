import React from 'react';
import {shallow} from 'enzyme';
import TodoList from '../../index';
import Header from '../../components/Header'

describe("TodoList component", () => {
  it('The initialization list should be empty', () => {
    const wrapper = shallow(<TodoList />);
    expect(wrapper.state('undoList')).toEqual([]);
  });
  
  it('TodoLIst should pass a method to add undoList content to Header', () => {
    const wrapper = shallow(<TodoList />);
    let HeaderComponent = wrapper.find(Header);
    expect(HeaderComponent.prop('addUndoItem')).toBeTruthy();
  });
  
  it('When addUndoItem is executed, the undoList list should add new content', () => {
    const wrapper = shallow(<TodoList />);
    const { addUndoItem } = wrapper.instance();
    const content ='learn react'
    addUndoItem(content);
    expect(wrapper.state('undoList').length).toBe(1);
    expect(wrapper.state('undoList')[0]).toBe(content);
    addUndoItem(content);
    expect(wrapper.state('undoList').length).toBe(2);
  });
  
  it('The undoList component should take the list and deleteItem parameters', () => {
    const wrapper = shallow(<TodoList />);
    const UndoList = wrapper.find('UndoList');
    expect(UndoList.prop('list')).toBeTruthy();
    expect(UndoList.prop('deleteItem')).toBeTruthy();
  });
  
  it('The deleteItem method is called and the undoList data item is deleted', () => {
    const wrapper = shallow(<TodoList />);
    wrapper.setState({
      undoList: ['learn react', 'learn jest', 'learn unit test']
    });
    wrapper.instance().deleteItem(1);
    expect(wrapper.state('undoList')).toEqual(['learn react', 'learn unit test'])
  });
  
 })



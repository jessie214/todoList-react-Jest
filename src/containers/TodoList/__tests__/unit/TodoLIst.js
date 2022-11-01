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
    expect(wrapper.state('undoList')[0]).toEqual({status:'div',value:content});
    addUndoItem(content);
    expect(wrapper.state('undoList').length).toBe(2);
  });
  
  it('The undoList component should take the list , deleteItem,handleBlur,valueChange and changeStatus parameters', () => {
    const wrapper = shallow(<TodoList />);
    const UndoList = wrapper.find('UndoList');
    expect(UndoList.prop('list')).toBeTruthy();
    expect(UndoList.prop('deleteItem')).toBeTruthy();
    expect(UndoList.prop('deleteItem')).toBeTruthy();
    expect(UndoList.prop('handleBlur')).toBeTruthy();
    expect(UndoList.prop('valueChange')).toBeTruthy();
  });
  
  it('The deleteItem method is called and the undoList data item is deleted', () => {
    const wrapper = shallow(<TodoList />);
    const data =  [
      { status: 'div', value: 'learn react' },
      { status: 'div', value: 'learn jest' },
      { status: 'div', value: 'learn unit test' }
    ]
    wrapper.setState({undoList: data});
    wrapper.instance().deleteItem(1);
    expect(wrapper.state('undoList')).toEqual([data[0], data[2]])
  });

  it('The changeStatus method is called and the undoList data item is changed', () => {
    const wrapper = shallow(<TodoList />);
    const data =  [
      { status: 'div', value: 'learn react' },
      { status: 'div', value: 'learn jest' },
      { status: 'div', value: 'learn unit test' }
    ]
    wrapper.setState({undoList: data});
    wrapper.instance().changeStatus(1);
    expect(wrapper.state('undoList')[1]).toEqual({
      ...data[1],
      status:'input'
    })
  });

  it('The handleBlur method is called and the status of item is changed in undoList', () => {
    const wrapper = shallow(<TodoList />);
    const data =  [
      { status: 'input', value: 'learn react' },
      { status: 'div', value: 'learn jest' },
      { status: 'div', value: 'learn unit test' }
    ]
    wrapper.setState({undoList: data});
    wrapper.instance().handleBlur(0);
    expect(wrapper.state('undoList')[0]).toEqual({
      ...data[0],
      status:'div'
    })
  });

  it('The valueChange method is called,  the undoList data item value is changed', () => {
    const wrapper = shallow(<TodoList />);
    const data =  [
      { status: 'input', value: 'learn react' },
      { status: 'div', value: 'learn jest' }
    ]
    const value = 'dell lee';
    wrapper.setState({undoList: data});
    wrapper.instance().valueChange(0,value);
    expect(wrapper.state('undoList')[0]).toEqual({
      ...data[0],
      value,
    })
  });
  
 })



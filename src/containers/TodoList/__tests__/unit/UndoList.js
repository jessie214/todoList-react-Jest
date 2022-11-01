import React from 'react';
import {shallow} from 'enzyme';
import UndoList from '../../components/UndoList';
import { findTestWrapper } from '../../../../utils/testUtils';

describe("UodoList component", () => { 
  it('UndoList render is normal', () => {
    const wrapper = shallow(<UndoList list={[]} />);
    expect(wrapper).toMatchSnapshot();
  })
  it('When the undoList is an empty array, the count number is 0, and the list has no content', () => {
    const wrapper = shallow(<UndoList list={[]} />); 
    const countElem = findTestWrapper(wrapper, "count");
    const listItems = findTestWrapper(wrapper, "list-item");
    expect(countElem.text()).toEqual("0");
    expect(listItems.length).toEqual(0);
  });
  
  it('When the undoList is not empty, the count number is the length of undoLIst, and the list has content', () => {
    const wrapper = shallow(<UndoList list={['learn react']} />); 
    const countElem = findTestWrapper(wrapper, "count");
    const listItems = findTestWrapper(wrapper, "list-item");
    expect(countElem.text()).toEqual("1");
    expect(listItems.length).toEqual(1);
  });
  
  it('When there is content in the undolist, there is a delete button', () => {
    const wrapper = shallow(<UndoList list={['learn react']} />); 
    const deleteItems = findTestWrapper(wrapper, "delete-item");
    expect(deleteItems.length).toEqual(1);
  });
  
  it('When the undoList is not empty, click delete method to call click method', () => {
    const listData = [
      { status: 'div', value: 'learn react' },
      { status: 'div', value: 'learn jest' },
      { status: 'div', value: 'learn unit test' }]
    const fn = jest.fn();
    const wrapper = shallow(<UndoList deleteItem={fn} list={listData} />);   
    const deleteItems = findTestWrapper(wrapper, "delete-item");
    // simulat e.stopPropagation()
    deleteItems.at(1).simulate('click', {
      stopPropagation:()=>{}
    });
    expect(fn).toHaveBeenLastCalledWith(1);
  });

  it('When an item is clicked, execute the changeStatus function', () => {
    const listData = [
      { status: 'div', value: 'learn react' },
      { status: 'div', value: 'learn jest' },
      { status: 'div', value: 'learn unit test' }]
    const fn = jest.fn();
    const wrapper = shallow(<UndoList changeStatus={fn} list={listData} />);   
    const deleteItems = findTestWrapper(wrapper, "list-item");
    deleteItems.at(1).simulate('click');
    expect(fn).toHaveBeenLastCalledWith(1);
  });

  it('When status of an item is input, display the Input', () => {
    const listData = [
      { status: 'div', value: 'learn react' },
      { status: 'input', value: 'learn jest' },
      { status: 'div', value: 'learn unit test' }]
    const wrapper = shallow(<UndoList list={listData} />);   
    const inputItems = findTestWrapper(wrapper, "input");
    expect(inputItems.length).toBe(1);
  });

  it('When an input box loses focus, execute the handleBlur method', () => {
    const listData = [
      { status: 'div', value: 'learn react' },
      { status: 'input', value: 'learn jest' },
      { status: 'div', value: 'learn unit test' }]
    const fn = jest.fn();
    const wrapper = shallow(<UndoList handleBlur={fn} list={listData} />);   
    const inputelem = findTestWrapper(wrapper, "input");
    inputelem.simulate('blur');
    expect(fn).toHaveBeenLastCalledWith(1);
  });

  it('When an input is changed, execute the valueChange method', () => {
    const listData = [
      { status: 'input', value: 'learn react' }]
    const fn = jest.fn();
    const wrapper = shallow(<UndoList valueChange={fn} list={listData} />);   
    const inputelem = findTestWrapper(wrapper, "input");
    const value = 'learn TDD';
    inputelem.simulate('change', {
      target:{value}
    });
    expect(fn).toHaveBeenLastCalledWith(0,value);
  });

})

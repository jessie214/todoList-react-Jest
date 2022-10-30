import React from 'react';
import {shallow} from 'enzyme';
import UndoList from '../../components/UndoList';
import { findTestWrapper } from '../../../../utils/testUtils';


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
  const listData=['learn react','learn jest','learn unit test']
  const fn = jest.fn();
  const wrapper = shallow(<UndoList deleteItem={fn} list={listData} />);   
  const deleteItems = findTestWrapper(wrapper, "delete-item");
  deleteItems.at(1).simulate('click');
  expect(fn).toHaveBeenLastCalledWith(1);
});
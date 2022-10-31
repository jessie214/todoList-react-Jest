import React from 'react';
import {shallow} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Header from '../../components/Header';
import { findTestWrapper } from '../../../../utils/testUtils';

// Enzyme.configure({ adapter: new Adapter() });
describe("Header component", () => {
  it('style is normal', () => {
    const wrapper = shallow(<Header />); 
    expect(wrapper).toMatchSnapshot();
  });

  it('It include a input', () => {
    const wrapper = shallow(<Header />);
    const inputElem = findTestWrapper(wrapper, 'input');
    expect(inputElem.length).toBe(1);
  });

  it('The initialization input should be empty', () => {
    const wrapper = shallow(<Header />);
    const inputElem = findTestWrapper(wrapper, 'input');
    expect(inputElem.prop('value')).toEqual('');
  });
  
  it('The input changes as the user enters content', () => {
    const wrapper = shallow(<Header />);
    const inputElem = findTestWrapper(wrapper, 'input');
    inputElem.simulate('change', { target: { name: 'email', value: 50 } });
    wrapper.update();
    expect(
      wrapper
        .find("[data-test='input']")
        .props().value,
    ).toEqual(50);
  });

  it('If there is no input content when press Enter, there is no action', () => {
    const fn = jest.fn();
    const wrapper = shallow(<Header addUndoItem={fn} />);
    wrapper.setState({value:''})
    findTestWrapper(wrapper, 'input').simulate('keyUp', {
      keyCode: 13
    });
    expect(fn).not.toHaveBeenCalled();
  });
  
  it('called when there is content after press Enter', () => {
    const fn = jest.fn();
    const wrapper = shallow(<Header addUndoItem={fn} />);
    const userInput ='learn react'
    wrapper.setState({value:userInput})
    findTestWrapper(wrapper, 'input').simulate('keyUp', {
      keyCode: 13
    });
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenLastCalledWith(userInput);
  
  });
  
  it('the content of input should be cleared after press Enter', () => {
    const fn = jest.fn();
    const wrapper = shallow(<Header addUndoItem={fn} />);
    const inputElem = findTestWrapper(wrapper, 'input');
    const userInput ='learn react'
    wrapper.setState({value:userInput})
    wrapper.find("[data-test='input']").simulate('keyUp', {
      keyCode: 13
    });
    const newInputelem = findTestWrapper(wrapper, 'input');
    expect(newInputelem.prop('value')).toBe('')
  });  

})









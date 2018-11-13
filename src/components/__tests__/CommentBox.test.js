import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it('has a textarea and two buttons', () => {
  expect(wrapper.find('textarea').length).toEqual(1);
  expect(wrapper.find('button').length).toEqual(2);
});

describe ('the text area', () => {
  beforeEach(() => {
    wrapper.find('textarea').simulate('change', {
      target: { value: 'new comment' }  
        // passes 'new comment' through e.target.value onChange(e) event
    });
    wrapper.update(); 
    // force update to finsih before running the actual test
  });

  it('has a textarea that users can type in', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
      // checks <textarea value={...} /> to equal the simulated change
  });

  it('when form is submitted textarea is emptied', () => {
    wrapper.find('form').simulate('submit');
    wrapper.update();
    expect(wrapper.find('textarea').prop('value')).toEqual('');
  });
});

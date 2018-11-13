import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentList from 'components/CommentList';

let wrapper;

beforeEach(() => {
  const initialState = { 
    comments: ['comment1', 'comment2'],
  };

  wrapper = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it('It creates one LI per comment', () => {
  expect(wrapper.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
  expect(wrapper.render().text()).toContain('comment1')
  expect(wrapper.render().text()).toContain('comment2')
});



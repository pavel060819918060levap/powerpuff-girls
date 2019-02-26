import React from 'react';
import { shallow } from 'enzyme';
import { Show } from './';

it('should not render show when it is not passed', () => {
  const mockOnInitCallback = jest.fn();
  const component = shallow(<Show
    onInit={mockOnInitCallback}
    match={{
      params: {
        showId: '20',
      },
    }}
  />);

  expect(mockOnInitCallback).toHaveBeenCalledWith('20');
  expect(component).toMatchSnapshot();
});

it('should render show when it is passed', () => {
  const mockOnInitCallback = jest.fn();
  const component = shallow(<Show
    onInit={mockOnInitCallback}
    match={{
      params: {
        showId: '20',
      },
    }}
    details={{
      show: {
        name: 'Test show',
        image: {
          medium: 'http://testurl.com',
        },
        summary: '<p>This is test show</p>',
        id: 123,
      },
      episodes: [
        {
          id: 30,
          season: 2,
          number: 3,
          image: {
            medium: 'http://testurl.com',
          },
        },
        {
          id: 31,
          season: 1,
          number: 4,
          image: {
            medium: 'http://testurl.com',
          },
        },
      ],
    }}
  />);

  expect(mockOnInitCallback).toHaveBeenCalledWith('20');
  expect(component).toMatchSnapshot();
});

it('should not render show when there is some error', () => {
  const mockOnInitCallback = jest.fn();
  const component = shallow(<Show
    onInit={mockOnInitCallback}
    match={{
      params: {
        showId: '20',
      },
    }}
    error={true}
    details={{
      show: {
        name: 'Test show',
        image: {
          medium: 'http://testurl.com',
        },
        summary: '<p>This is test show</p>',
        id: 123,
      },
      episodes: [
        {
          id: 30,
          season: 2,
          number: 3,
          image: {
            medium: 'http://testurl.com',
          },
        },
        {
          id: 31,
          season: 1,
          number: 4,
          image: {
            medium: 'http://testurl.com',
          },
        },
      ],
    }}
  />);

  expect(mockOnInitCallback).toHaveBeenCalledWith('20');
  expect(component).toMatchSnapshot();
});

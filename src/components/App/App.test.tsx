import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders h1 title', () => {
  const { getByText } = render(<App />);
  const h1 = getByText(/Project Template/i);
  expect(h1).toBeInTheDocument();
});

test('has a bg color', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  const el:HTMLElement|null = div.querySelector('.App');
  expect(el?.style.backgroundColor).not.toBe('')
});
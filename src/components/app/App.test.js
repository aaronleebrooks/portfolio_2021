import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders', () => {
    const {container} = render(<App />);
    expect(container).toMatchSnapshot();
  });
})
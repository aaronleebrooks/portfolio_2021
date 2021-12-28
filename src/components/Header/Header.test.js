import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('renders', () => {
    const {container} = render(<Header />);
    expect(container).toMatchSnapshot();
  });
})
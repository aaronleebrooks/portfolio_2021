import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  test('renders', () => {
    const {container} = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
})

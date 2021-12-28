import { render } from '@testing-library/react';
import Contact from './Contact';

describe('Contact', () => {
  test('renders', () => {
    const { container } = render(<Contact />);
    expect(container).toMatchSnapshot();
  });
})

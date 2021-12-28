import { render } from '@testing-library/react';
import Projects from './Projects';

describe('Projects', () => {
  test('renders', () => {
    const { container } = render(<Projects />);
    expect(container).toMatchSnapshot();
  });
})

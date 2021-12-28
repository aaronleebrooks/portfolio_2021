import { render } from '@testing-library/react';
import Link from './Link';

describe('Link', () => {
  const baseProps = {
    children: "test element"
  };

  test('renders with props', () => {
    const { container } = render(<Link {...baseProps} />);
    expect(container).toMatchSnapshot();
  });
})

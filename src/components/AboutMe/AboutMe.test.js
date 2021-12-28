import { render } from '@testing-library/react';
import AboutMe from './AboutMe';

describe('AboutMe', () => {
  test('renders', () => {
    const { container } = render(<AboutMe />);
    expect(container).toMatchSnapshot();
  });
})

import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
const baseProps = {
  onClick: jest.fn(),
  child: "test element"
};

  test('renders with props', () => {
    const {container} = render(<Button {...baseProps} />);
    expect(container).toMatchSnapshot();
  });

  test('no-op when button is clicked', () => {
    const {getByText} = render(<Button {...baseProps} />);
    fireEvent.click(getByText(baseProps.child));
    expect(baseProps.onClick).toHaveBeenCalledTimes(1);
  });
})
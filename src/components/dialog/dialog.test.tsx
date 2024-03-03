import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormDialog from './index';

describe('FormDialog Component', () => {
  it('renders FormDialog component correctly', () => {
    render(<FormDialog />);

    // Check if the dialog and its elements are rendered
    expect(screen.getByTestId('dialog-component')).toBeInTheDocument();
    expect(screen.getByTestId('dialog-header')).toHaveTextContent('Login');
    expect(screen.getByTestId('dialog-content')).toBeInTheDocument();
    expect(screen.getByTestId('user-input')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });
});

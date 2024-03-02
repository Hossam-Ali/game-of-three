import { render, screen, fireEvent } from '@testing-library/react';
import Header from './index';

describe('Header Component', () => {
  it('renders Header component correctly', () => {
    render(<Header />);

    // Check if the Game Of Three text is rendered
    expect(screen.getByText('Game Of Three')).toBeInTheDocument();

    // Check if the LOGO text is rendered
    expect(screen.getByText('LOGO')).toBeInTheDocument();
  });

  it('opens the user menu on click', () => {
    render(<Header />);

    // Find the user settings button and click it
    const userSettingsButton = screen.getByTestId('user-settings');
    fireEvent.click(userSettingsButton);

    // Check if the menu is open
    const menu = screen.getByTestId('menu-items');
    expect(menu).toBeInTheDocument();
  });

  it('closes the user menu on click', () => {
    render(<Header />);

    // Find the user settings button and click it
    const userSettingsButton = screen.getByTestId('user-settings');
    fireEvent.click(userSettingsButton);

    // Check if the menu is open
    const menu = screen.getByTestId('menu-items');
    expect(menu).toBeInTheDocument();

    // Close the menu
    fireEvent.click(menu);

    // Check if the menu is closed
    expect(menu).not.toBeInTheDocument();
  });
});

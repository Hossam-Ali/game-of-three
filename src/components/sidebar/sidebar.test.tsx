import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from './index';

describe('Sidebar Component', () => {
  it('renders Sidebar component correctly', () => {
    render(<Sidebar />);

    // Check if the component is rendered
    expect(screen.getByText('Berlin CPU')).toBeInTheDocument();
    expect(screen.getByText('Amsterdam CPU')).toBeInTheDocument();
    expect(screen.getByText('Hossam')).toBeInTheDocument();
  });

  it('handles room change on click', () => {
    render(<Sidebar />);

    // Find the list item and click it
    const listItem = screen.getByText('Amsterdam CPU');
    fireEvent.click(listItem);

    const rooms = screen.getAllByTestId('rooms-list');

    // Check if the active room is set correctly
    expect(rooms.some((room) => room.classList.contains('active-room'))).toBe(
      true
    );
  });
});

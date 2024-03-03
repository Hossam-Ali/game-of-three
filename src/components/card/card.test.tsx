import { render, screen } from '@testing-library/react';
import ChatCard from './index';

describe('ChatCard Component', () => {
  it('renders with custom props', () => {
    render(<ChatCard direction="right" choosedNumber={5} />);

    const badgeElement = screen.getByTestId('badge');
    const cardElement = screen.getByTestId('card');

    expect(badgeElement).toBeInTheDocument();
    expect(cardElement).toBeInTheDocument();
  });
});

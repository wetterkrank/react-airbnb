import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a card', () => {
  render(<App />);
  const cardElement = screen.getByText(/Trendy Apt in Buttes Montmartre/i);
  expect(cardElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<PomodoroApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

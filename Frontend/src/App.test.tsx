import { render, screen } from '@testing-library/react';
import App from './App.tsx';
 

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/File/i);
  expect(linkElement).toBeInTheDocument();
});
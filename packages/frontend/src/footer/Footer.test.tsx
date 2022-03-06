import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

test('renders footer with contact info', () => {
  render(<Footer />);
  const contactInfoEle = screen.getByText(/yost/i);
  expect(contactInfoEle).toBeInTheDocument();
});

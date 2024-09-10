import Logo from '@/components/ui/logo';
import { render, screen } from '@testing-library/react';

describe('Logo', () => {
  it('should show the logo in the DOM', () => {
    render(<Logo />);

    screen.getByRole('img', {
      name: 'logo',
    });
  });
});

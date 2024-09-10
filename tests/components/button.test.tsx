import { Button } from '@/components/ui/button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('should show the button in the DOM', () => {
    render(<Button>Test</Button>);

    screen.getByText(/Test/i);
  });
});

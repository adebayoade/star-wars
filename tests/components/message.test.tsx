import { render, screen } from '@testing-library/react';
import Message from '@/components/message';

describe('Message', () => {
  it('should show the message component in the DOM', () => {
    const text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, maiores?';
    render(<Message text={text} />);

    screen.getByText(/Lorem/i);
  });
});

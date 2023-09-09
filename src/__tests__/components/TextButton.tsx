import { TextButton } from '@/components/base/button/TextButton'; // Điều chỉnh đường dẫn tương ứng
import { render, screen } from '@testing-library/react';

describe('TextButton component', () => {
    // Happy Case
    it('should render correctly with given text', () => {
        render(<TextButton>Click Me</TextButton>);
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    it('should have the correct styles', () => {
        render(<TextButton>Click Me</TextButton>);
        const button = screen.getByRole('button', { name: 'Click Me' });
        expect(button).toHaveStyle({ fontSize: 16, lineHeight: '24px', fontWeight: 600 });
    });

    it('should have type button by default', () => {
        render(<TextButton>Click Me</TextButton>);
        expect(screen.getByRole('button', { name: 'Click Me' })).toHaveAttribute('type', 'button');
    });

    // Creepy Cases
    it('should render correctly even without children', () => {
        render(<TextButton>{null}</TextButton>);

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should apply additional props to the button', () => {
        render(<TextButton data-testid="my-button">Click Me</TextButton>);
        expect(screen.getByTestId('my-button')).toBeInTheDocument();
    });
});

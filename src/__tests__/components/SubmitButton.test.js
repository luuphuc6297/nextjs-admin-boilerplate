import { SubmitButton } from '@/components/base/button/SubmitButton';
import { render, screen } from '@testing-library/react';
import * as React from 'react';

describe('SubmitButton component', () => {
    it('should render correctly', () => {
        render(<SubmitButton>Click Me</SubmitButton>);
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    it('should have type submit', () => {
        render(<SubmitButton>Click Me</SubmitButton>);
        expect(screen.getByRole('button', { name: 'Click Me' })).toHaveAttribute('type', 'submit');
    });
});
// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { Button } from '../Button';

// describe('Button Component', () => {
//   it('renders button with children', () => {
//     render(<Button>Test Button</Button>);
//     expect(screen.getByText('Test Button')).toBeInTheDocument();
//   });

//   it('applies primary variant styling by default', () => {
//     render(<Button>Primary Button</Button>);
//     const button = screen.getByText('Primary Button');
//     expect(button.className).toContain('btn-primary');
//   });

//   it('applies secondary variant styling when specified', () => {
//     render(<Button variant="secondary">Secondary Button</Button>);
//     const button = screen.getByText('Secondary Button');
//     expect(button.className).toContain('btn-secondary');
//   });

//   it('calls onClick handler when clicked', () => {
//     const handleClick = vi.fn();
//     render(<Button onClick={handleClick}>Click Me</Button>);
//     fireEvent.click(screen.getByText('Click Me'));
//     expect(handleClick).toHaveBeenCalledTimes(1);
//   });

//   it('displays loading state when isLoading is true', () => {
//     render(<Button isLoading>Submit</Button>);
//     expect(screen.getByText('Cargando...')).toBeInTheDocument();
//     expect(screen.queryByText('Submit')).not.toBeInTheDocument();
//   });

//   it('should be disabled when isLoading is true', () => {
//     render(<Button isLoading>Submit</Button>);
//     const button = screen.getByText('Cargando...').closest('button');
//     expect(button).toBeDisabled();
//   });
// }); 
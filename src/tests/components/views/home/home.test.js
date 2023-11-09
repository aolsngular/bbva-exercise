import { fireEvent, render, screen } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import '../../../../components/views/home/home-view';

describe('HomeView test', () => {
    it('renders the form correctly', () => {
        render(`<home-view></home-view>`);
        const form = screen.getByRole('form');
        expect(form).toBeInTheDocument();
    });

    it('updates userName on input', () => {
        render(`<home-view></home-view>`);
        const input = screen.getByLabelText('Username:');
        fireEvent.input(input, { target: { value: 'Test User' } });
        expect(input.value).toBe('Test User');
    });
});

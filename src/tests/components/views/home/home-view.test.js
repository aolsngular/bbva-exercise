import { describe, it, expect, beforeEach, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import '../../../../components/views/home/home-view';

describe('home-view component', () => {
    let element;

    beforeEach(async () => {
        element = await fixture(html`<home-view></home-view>`);
    });

    it('should render form elements', () => {
        const form = element.shadowRoot.querySelector('.form');
        const input = form.querySelector('input[type="text"]');
        const button = form.querySelector('button[type="submit"]');

        expect(form).toBeDefined();
        expect(input).toBeDefined();
        expect(button).toBeDefined();
    });

    it('should update userName on input', async () => {
        const input = element.shadowRoot.querySelector('input[type="text"]');
        input.value = 'New User';
        input.dispatchEvent(new Event('input'));
        expect(element.userName).toBe('New User');
    });

    it('should dispatch start-game event with userName', async () => {
        const startGameSpy = vi.fn();
        element.addEventListener('start-game', startGameSpy);
        element.userName = 'Test User';

        const form = element.shadowRoot.querySelector('form');
        form.dispatchEvent(new Event('submit'));

        expect(startGameSpy).toHaveBeenCalled();
        expect(startGameSpy).toHaveBeenCalledWith(
            expect.objectContaining({ detail: 'Test User' })
        );
    });
});

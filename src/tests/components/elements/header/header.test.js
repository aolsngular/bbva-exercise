import { describe, it, expect, beforeEach, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import '../../../../components/elements/header/header';

describe('header-user component', () => {
    let element;

    beforeEach(async () => {
        element = await fixture(html`<header-user userName="Antonio" color="red" level="low"></header-user>`);
    });

    it('should have a username property', () => {
        expect(element.userName).toBe('Antonio');
    });
    it('should have a colors property', () => {
        expect(element.color).toBe('red');
    });
    it('should render the levels in dropdown', () => {
        const options = element.shadowRoot.querySelectorAll('select[name="level"] option');
        expect(options.length).toBeGreaterThan(0);
    });
    it('should have correct background color', () => {
        const headerDiv = element.shadowRoot.querySelector('.header');
        expect(headerDiv.style.backgroundColor).toBe('red');
    });
    it('should dispatch duration-change event on level change', async () => {
        const changeEventSpy = vi.fn();
        element.addEventListener('duration-change', changeEventSpy);
        const selectElement = element.shadowRoot.querySelector('select[name="level"]');
        selectElement.value = '10000';
        selectElement.dispatchEvent(new Event('change'));
        expect(changeEventSpy).toHaveBeenCalled();
    });
    it('should have default values when properties are not provided', async () => {
        const defaultElement = await fixture(html`<header-user></header-user>`);
        expect(defaultElement.userName).toBe('User');
        expect(defaultElement.color).toBe('#007bff');
    });
});

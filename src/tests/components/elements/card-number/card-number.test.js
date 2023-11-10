import { describe, it, expect, beforeEach, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import '../../../../components/elements/card-number/card-number';

describe('card-number component', () => {
    let element;

    beforeEach(async () => {
        element = await fixture(html`<card-number></card-number>`);
    });

    it('should render with default properties', () => {
        expect(element.number).toBe(0);
        expect(element.hide).toBe(false);
        expect(element.isCorrect).toBe(null);
    });

    it('should toggle hide property on revealCard call', () => {
        element.revealCard();
        expect(element.hide).toBe(true);
    });

    it('should apply hide class when hide is true', async () => {
        element.hide = true;
        await element.updateComplete;
        const cardDiv = element.shadowRoot.querySelector('.card-number');
        expect(cardDiv.classList.contains('hide')).toBe(true);
    });

    it('should display number when not hidden', async () => {
        element.hide = false;
        await element.updateComplete;
        const cardDiv = element.shadowRoot.querySelector('.card-number');
        expect(cardDiv.textContent).toContain(element.number);
    });

    it('should apply correct class when isCorrect is true', async () => {
        element.isCorrect = true;
        await element.updateComplete;
        const cardDiv = element.shadowRoot.querySelector('.card-number');
        expect(cardDiv.classList.contains('correct')).toBe(true);
    });

    it('should apply incorrect class when isCorrect is false', async () => {
        element.isCorrect = false;
        await element.updateComplete;
        const cardDiv = element.shadowRoot.querySelector('.card-number');
        expect(cardDiv.classList.contains('incorrect')).toBe(true);
    });
});


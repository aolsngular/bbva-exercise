import { describe, it, expect, beforeEach, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import '../../../../components/views/game/game-view';

describe('game-view component', () => {
    let element;

    beforeEach(async () => {
        element = await fixture(html`<game-view></game-view>`);
    });

    it('should render with default properties', () => {
        expect(element.points).toBe(0);
        expect(element.startGame).toBe(false);
        expect(element.gameMessage).toBeDefined();
    });

    it('should handle startGameHandler correctly', async () => {
        element.startGameHandler();
        expect(element.startGame).toBe(true);
        expect(element.numbers).toBeDefined();
        expect(element.number).toBeGreaterThan(0);
        expect(element.number).toBeLessThanOrEqual(9);
    });

    it('should shuffle numbers on startGameHandler', async () => {
        const initialNumbers = [...element.numbers];
        element.startGameHandler();
        expect(element.numbers).not.toEqual(initialNumbers);
    });

});

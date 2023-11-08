import { LitElement, html } from 'lit';
import '../../elements/card-number/card-number.js';

class GameView extends LitElement {
  static get properties() {
    return {
      username: { type: String },
      numbers: { type: Array },
      level: { type: String }
    };
  }
  constructor() {
    super();
    this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.level = 'low'
  }
  suffleNumbers() {
    shuffle(numbers);
  }
  render() {
    return html`
      <p>Juego iniciado para: ${this.username} con nivel ${this.level}</p>
      <div class="container-game">
        ${this.numbers.map((number) =>
      html`
            <card-number @fill-number="this.handleNumber(${number})" ></card-number>
          `)
      }
      </div>
      `
  }
}

customElements.define('game-view', GameView);

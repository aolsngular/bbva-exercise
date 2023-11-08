import { LitElement, html, css } from 'lit';
import '../../elements/card-number/card-number.js';

class GameView extends LitElement {
  static get properties() {
    return {
      username: { type: String },
      numbers: { type: Array },
      number: { type: Number },
      level: { type: String },
      points: { type: Number },
    };
  }
  constructor() {
    super();
    this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.number = Math.floor(Math.random() * 9) + 1;
    this.level = 'low';
    this.points = 0;
    this.shuffle();
  }
  static styles = css`
    .container-game{
      display: flex;
      width: 80%;
      max-width: 450px;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      align-content: center;
      margin: 0 auto;
    
    }
  `;
  shuffle() {
    this.numbers.sort(() => Math.random() - 0.5);
  }
  updatePoints(e) {
    this.points += e.value;
  }
  render() {
    return html`
      <p>${this.username} level: ${this.level}</p>
      <div>
        <span>Points: ${this.points}</span>
      </div>
      <div class="tips-game>Memorize the cards</div>
      <div class="guess-game><span>Where is the number ${this.number}? </span></div>
      <div class="container-game">
        ${this.numbers.map((number) =>
      html`
            <card-number number="${number}" ></card-number>
          `)
      }
      </div>
      `
  }
}

customElements.define('game-view', GameView);

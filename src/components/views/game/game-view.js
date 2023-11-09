import { LitElement, html, css } from 'lit';
import '../../elements/card-number/card-number.js';
import '../../elements/header/header.js';
import { LEVELS } from '../../constants/levels.js'
class GameView extends LitElement {
  static get properties() {
    return {
      username: { type: String },
      numbers: { type: Array },
      number: { type: Number },
      level: { type: String },
      points: { type: Number },
      startGame: { type: Boolean },
      hideCardsDuration: { type: Number },
    };
  }
  constructor() {
    super();
    this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.number = Math.floor(Math.random() * 9) + 1;
    this.level = LEVELS['low'].type;
    this.points = 0;
    this.startGame = false;
    this.gameMessage = 'Click the play button to start a new game';
    this.hideCardsDuration = LEVELS['low'].time;
    this.addEventListener('duration-change', this.updateDuration.bind(this));

  }
  startGameHandler() {
    this.startGame = true;
    this.gameMessage = 'Memorize the cards!';
    this.shuffle();
    this.number = Math.floor(Math.random() * 9) + 1;
    setTimeout(() => this.hideCards(), this.hideCardsDuration);
  }

  showAllCards() {
    const cards = this.shadowRoot.querySelectorAll('card-number');
    cards.forEach(card => {
      card.showCard();
    });
    this.requestUpdate();
  }

  hideCards() {
    const cards = this.shadowRoot.querySelectorAll('card-number');
    cards.forEach(card => {
      card.hideCard();
    });
    this.gameMessage = `Where is the number ${this.number}?`;
    this.requestUpdate();
  }

  cardClicked(e) {
    const cardComponent = e.target;
    const revealedNumber = cardComponent.number;
    cardComponent.revealCard();
    if (revealedNumber === this.number) {
      cardComponent.isCorrect = true;
      this.points += this.generatePoint(this.level);
    } else {
      cardComponent.isCorrect = false;
    }
    setTimeout(() => this.playAgain(), 1500);
  }
  playAgain() {
    this.showAllCards();
    this.startGameHandler();
  }
  generatePoint(level) {
    return LEVELS[level].points;
  }
  updateDuration(e) {
    this.hideCardsDuration = Number(e.detail.duration);
    this.level = e.detail.level;
  }
  static styles = css`
    .game-container, .game-action{
      display: flex;
      width: 80%;
      max-width: 450px;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      align-content: center;
      margin: 0 auto;
      margin-top: 20px;
    }
    .game-message{
      text-align: center;
    }
    .game-points{
      text-align: right;
      margin: 20px;
    } 
    .game-points span{
      font-size: 24px;
    }
    button {
      width: 100px; 
      padding: 10px; 
      border: none; 
      background-color: #007bff;
      color: white; 
      border-radius: 4px; 
      font-size: 16px; 
      cursor: pointer;
      text-transform: uppercase;
    }
    
    button:hover {
      background-color: #0056b3;
    }
  `;
  shuffle() {
    this.numbers.sort(() => Math.random() - 0.5);
  }
  handleDurationChange(e) {
    this.hideCardsDuration = e.target.value;
  }
  render() {
    return html`
      <header-user .userName="${this.username}" .level="${this.level}" .color="#fff"></header-user>
      <div class="game-points">
        <span>Points: ${this.points}</span>
      </div>
      ${!this.startGame ? html`
      <div class="game-message"><b>${this.gameMessage}</b></div>
      <div class="game-action">
        <button @click="${this.startGameHandler}">play</button>
        ` : ''}
      </div>
      
      ${this.startGame ? html`
      <div class="game-message"><b>${this.gameMessage}</B></div>
        <div class="game-container">
          ${this.numbers.map((number) => html`
            <card-number .number="${number}" .duration="${this.hideCardsDuration}" @click="${this.cardClicked}" ></card-number>
          `)}
        </div>
      ` : ''}
    `;
  }
}

customElements.define('game-view', GameView);

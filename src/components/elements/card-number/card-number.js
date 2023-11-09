import { LitElement, html, css } from 'lit';

class CardNumber extends LitElement {
    static properties = {
        number: Number,
        hide: Boolean,
        isCorrect: Boolean,
        duration: Number
    };
    static styles = css`
        .card-number{
            width: 75px;
            height: 75px;
            font-size: 40px;
            border: 2px solid black;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin: 10px;
            cursor: pointer;
            transition: background-image 0.5s;
            background-size: cover;
        }
        .hide{
            background-image: url(/bbva-exercise/icons/android-chrome-72x72.png);
        }
        .correct {
            background-color: green; 
        }
        .incorrect {
            background-color: red;
        }
    `;
    constructor() {
        super();
        this.number = 0;
        this.duration = 10000;
        this.hide = false;
        this.isCorrect = null;
        setTimeout(() => this.hideCard(), (this.duration));
    }
    revealCard() {
        this.hide = !this.hide;
        this.requestUpdate();
        if (!this.hide) {
            if ('vibrate' in navigator) {
                navigator.vibrate(200);
            }
        }
    }
    showCard() {
        this.hide = false;
        this.isCorrect = null;
    }
    hideCard() {
        this.hide = true;
        this.isCorrect = null;
        this.requestUpdate();
    }

    render() {
        return html`
          <div class="card-number ${this.hide ? 'hide' : ''} ${this.isCorrect !== null ? (this.isCorrect ? 'correct' : 'incorrect') : ''}">
            ${this.hide ? '' : this.number}
          </div>
        `;
    }
}

customElements.define('card-number', CardNumber);

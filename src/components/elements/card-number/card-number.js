import { LitElement, html, css } from 'lit';

class CardNumber extends LitElement {
    static properties = {
        number: Number,
        hide: Boolean
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
    `;
    constructor() {
        super();
        this.number = 0;
        this.hide = false;
        setTimeout(() => this.handleNumber(), 2000);
    }
    handleNumber() {
        this.hide = !this.hide;
        this.requestUpdate();
        if (!this.hide) {
            if ('vibrate' in navigator) {
                navigator.vibrate(200);
            }
            let event = new CustomEvent('card-revealed', {
                detail: { number: this.number },
                bubbles: true,
                composed: true
            });
            this.dispatchEvent(event);
        }
    }
    render() {
        return html`
        <div class="card-number ${this.hide ? 'hide' : ''}" @click=${this.handleNumber}>
        ${!this.hide ? this.number : ''}
      </div>
    `;
    }
}

customElements.define('card-number', CardNumber);

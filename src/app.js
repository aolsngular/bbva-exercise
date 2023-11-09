import { LitElement, html } from 'lit';
import './components/views/home/home-view.js';
import './components/views/game/game-view.js';

class App extends LitElement {
    constructor() {
        super();
        this.showGame = false;
    }

    static get properties() {
        return {
            showGame: { type: Boolean }
        };
    }
    handleStartGame(username) {
        this.showGame = true;
        this.username = username;
        this.requestUpdate();
    }

    render() {
        return html`
        ${this.showGame ?
                html`<game-view .username=${this.username}></game-view>` :
                html`<home-view @start-game="${(e) => this.handleStartGame(e.detail)}"></home-view>`
            }
    `;
    }
}

customElements.define('app-container', App);

import { LitElement, html } from 'lit';

class CardNumber extends LitElement {
    static properties = {
        number: Number,
    };
    constructor() {
        super();
        this.number = 0;
    }
    handleNumber() {
        alert("number", this.number);
        this.dispatchEvent(new CustomEvent('fill-number', { detail: this.number }));
        this.requestUpdate();
    }
    render() {
        return html`
        <div class="card-number">
            ${this.number}
        </div>
    `;
    }
}

customElements.define('card-number', CardNumber);

import { LitElement, css, html } from 'lit';

export class MyElement extends LitElement {
  static properties = {
    name: {},
    color: ''
  };
  static styles = css`
    :host {
      color: blue;
    }
  `;

  constructor() {
    super();
    this.name = 'World';
    this.color = 'red';
  }

  // Render the UI as a function of component state
  render() {
    return html`<p style="color: ${this.color};">Hello, ${this.name}!</p>`;
  }
}
customElements.define('my-element', MyElement);

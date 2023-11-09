import { LitElement, html, css } from 'lit';

class HomeView extends LitElement {
  static properties = {
    userName: { type: String }
  };
  static styles = css`
       .form {
        width: 80%; 
        max-width: 400px;
        padding: 20px; 
        box-sizing: border-box; 
        margin: 0 auto;
        margin-top: 150px;
      }
      label {
        color: #007bff;
      }
      input {
        width: 100%; 
        padding: 10px; 
        margin: 10px 0;
        border: none;
        border-bottom: 1px solid #ccc; 
        border-radius: 4px;
        box-sizing: border-box;
        outline: none;
        padding-left: 0;

      }
      button {
        width: 100%; 
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
      .icon-login{
        display: block;
        width: 20px; 
        height: 20px; 
        background-image: url(/bbva-exercise/icons/computer-mouse-solid.svg);
        background-size: contain; 
        background-repeat: no-repeat;
        margin: 0 auto;
        margin-bottom: 20px; 
      }
    `;
  constructor() {
    super();
    this.userName = '';
  }
  handleInput(e) {
    this.userName = e.target.value;
  }
  handleStartGame() {
    const username = this.userName.trim();
    if (username.trim()) {
      this.dispatchEvent(new CustomEvent('start-game', { detail: username }));
    } else {
      alert('Por favor, introduce tu nombre.');
    }
  }
  render() {
    return html`
        <div class="form">
            <span class="icon-login"></span>
            <form id="register-form" @submit="${this.handleStartGame}">
                <label>Name</label>
                <input type="text" .value="${this.userName}" @input="${this.handleInput}" placeholder="Enter your name" required />
                <button type="submit">Join</button>
            </form >
        </div >
            `;
  }
}
customElements.define('home-view', HomeView);

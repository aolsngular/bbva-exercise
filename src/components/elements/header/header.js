import { LitElement, html, css, unsafeCSS } from 'lit';
import { LEVELS } from '../../constants/levels.js'

class HeaderUser extends LitElement {
    static get properties() {
        return {
            userName: { type: String },
            levels: { type: Array },
            color: { type: String }
        };
    }
    static styles = css`
        .header{
            width: 100%;
            height: 50px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: left;
            align-items: center;
            align-content: center;
            color : #fff;
        }
        .header-user, .header-level{
            font-size: 22px;
            display: flex;
            flex-direction: row;
            justify-content: left;
            width: 35%;
            align-items: center;
            text-transform: capitalize;
            margin: 0 20px;
        }
        .header-user-icon{
            display: block;
            width: 20px; 
            height: 20px; 
            background-image: url(/bbva-exercise/icons/user-solid.svg);
            background-size: contain; 
            background-repeat: no-repeat; 
            margin-right: 10px;
        }
        select{
            border: none;
            color: #fff;
            font-size: 16px;
        }
    `;
    constructor() {
        super();
        this.userName = "User";
        this.levels = Object.values(LEVELS);
        this.color = "#007bff";
    }
    handleDurationChange(e) {
        const selectedDuration = e.target.value;
        const levelType = e.target.options[e.target.selectedIndex].dataset.levelType;
        this.dispatchEvent(new CustomEvent('duration-change', {
            detail: { duration: selectedDuration, level: levelType },
            bubbles: true,
            composed: true
        }));
    }
    render() {
        return html`
          <div class="header" style="background-color: ${this.color}">
            <div class="header-user"> <span class="header-user-icon"></span>${this.userName}</div>
            <div class="header-level">
                <span>Level: </span>
                <select name="level" id="level" style="background-color: ${this.color}" @change="${this.handleDurationChange}"s>
                ${Object.values(this.levels).map((level) => html`
                    <option value="${level.time}" data-level-type="${level.type}">${level.type}</option>
                `)}
                </select>
            </div>
          </div>
        `;
    }
}

customElements.define('header-user', HeaderUser);

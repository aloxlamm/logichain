import {html,render}from 'lit-html';

export class Lc_Sidebar extends HTMLElement {

    constructor(){
        super();


        this._template = html`
            <div class="sidebar-inner">
                <ul>
                    <li>
                        
                    </li>
                </ul>
            </div>
        `;
    }

    connectedCallback(){
        render(this._template, this);   
        
    }
}

customElements.define('lc-sidebar', Lc_Sidebar);
import { html, css } from 'lit';

import Base from './Base.js';
import checkConnectivity from './network.js'; 

class TaskApp extends Base {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  firstUpdated() {
    checkConnectivity();
    document.addEventListener('connection-changed', ({ detail: isOnline }) => {
      console.log({ isOnline });
    });
  }

  render() {
    return html`
      <section class="relative">
        <header class="h-14 bg-indigo-600 flex items-center justify-center text-white">
          <h1 class="text-2xl"><a href="/">Fire Task 🚀</a></h1>
        </header>
        <main>
          <task-list></task-list>
        </main>
      </section>
    `;
  }
}

customElements.define('task-app', TaskApp);

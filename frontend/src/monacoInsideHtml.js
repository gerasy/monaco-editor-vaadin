import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import 'monaco-element';


class DemoElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          font-family: sans-serif;
          --icon-toggle-color: lightgrey;
          --icon-toggle-outline-color: black;
          --icon-toggle-pressed-color: red;
        }
      </style>


      <monaco-element
        value='System.out.println("Hello World !!!")'
        language="java"
        theme="vs-dark"
        on-value-changed="handleEvent">
      </monaco-element>

    `;
  }

}
customElements.define('demo-element', DemoElement);

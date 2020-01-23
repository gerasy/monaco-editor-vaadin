import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import {dom} from '@polymer/polymer/lib/legacy/polymer.dom.js';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
//import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
//import styles from 'monaco-editor/min/vs/editor/editor.main.css';
//
//import worker from 'monaco-editor/esm/vs/editor/editor.worker.js';

class DemoElement extends HTMLElement {

	setValue(val) {
	    this.editor.clipboard.dangerouslyPasteHTML(0, val);
    }

    getValue() {
        return this.editor.container.querySelector('#xeditor-container').innerHTML;
    }

    constructor(self) {
		self = super(self);
		// Creates the shadow root
		var shadowRoot;
		if (self.attachShadow && self.getRootNode) {
		    shadowRoot = self.attachShadow({mode: 'open'});
		} else {
		    shadowRoot = self.createShadowRoot();
		}
//		shadowRoot.innerHTML = `
//            <link href="/monaco/editor.main.css" rel="stylesheet"/>
//		     <div id="xeditor-container" style="width:500px; height: 500px;"></div>
//		`;
        shadowRoot.innerHTML = `
              <div id="xeditor-container" style="width:500px; height: 500px;"></div>
            `;


        self.editorContainer = shadowRoot.querySelector('#xeditor-container');
        self.MonacoEnvironment = {
        	getWorkerUrl: function (moduleId, label) {
        		if (label === 'json') {
        			return './json.worker.bundle.js';
        		}
        		if (label === 'css') {
        			return './css.worker.bundle.js';
        		}
        		if (label === 'html') {
        			return './html.worker.bundle.js';
        		}
        		if (label === 'typescript' || label === 'javascript') {
        			return './ts.worker.bundle.js';
        		}
        		return './editor.worker.bundle.js';
        	}
        }
        setTimeout(() => {
        console.log('creating monaco editor...');
            monaco.editor.create(self.editorContainer, {
                      value: [
                        'function x() {',
                        '\tconsole.log("Hello world!");',
                        '}'
                      ].join('\n'),
                      language: 'javascript'
                    });
        }, 500);



		return self;
	}
}
customElements.define('monaco-element', DemoElement);

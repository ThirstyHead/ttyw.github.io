window.customElements.define('ttyw-header',
  class TtywHeader extends HTMLElement{
    constructor(){
      super();
    }

    connectedCallback(){
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(this.style);
      shadowRoot.appendChild(this.content);
    }

    get style(){
      let style = document.createElement('style');
      style.innerHTML = `
        header{
          padding: 1em 1em 0.25em 1em;
          background-color: var(--page-header-background-color);
          color: var(--page-header-color);
          border-bottom: 1px solid var(--divider-color);
        }

        a{
          color: var(--page-header-color);
          text-decoration: none;
        }

        a:hover{
          border-bottom: 2px solid var(--accent-color);
        }

        h1{
          display: inline-block;
          margin: 0;
          font-family: sans-serif;
        }

        nav{
          display: inline-block;
        }

        ul{
          list-style-type: none;
        }

        li{
          display: inline-block;
          padding-left: 3em;
          font-family: sans-serif;
        }

        .accent{
          color: var(--accent-color);
        }
      `;
      return style;
    }

    get content(){
      let header = document.createElement('header');
      header.innerHTML = `
        <a href="/"><h1><span class="accent">&asymp;</span> The Thousand Year Web</h1></a>

        <nav>
          <ul>
            <li><a href="/html">HTML</a></li>
            <li><a href="/css">CSS</a></li>
            <li><a href="/javascript">JavaScript</a></li>
            <li><a href="/examples">Examples</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      `;
      return header;
    }
  }
);

window.customElements.define('ttyw-refactoring-sidebar',
  class TtywRefactoringSidebar extends HTMLElement{
    constructor(){
      super();
    }

    connectedCallback(){
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(this.style);
      shadowRoot.appendChild(this.content);

      //set open sidebar topic
      if(this.open){
        this.openSidebar(this.open);
      }
    }

    get baseUrl(){
      return '/examples/refactoring';
    }

    get open(){
      return this.getAttribute('open');
    }

    set open(liNumber){
      this.setAttribute('open', liNumber);
    }

    openSidebar(liNumber){
      let lis = this.shadowRoot.querySelectorAll('ol li');
      let index = liNumber - 1;
      console.log(index);
      lis[index].querySelector('details').setAttribute('open', '');
    }
    
    
    get style(){
      let style = document.createElement('style');
      style.innerHTML = `
        .lesson{
          padding-left: 2em;
        }
      `;
      return style;
    }

    get content(){
      let section = document.createElement('section');
      section.classList.add('sidebar');
      section.innerHTML = `
        <ol>
          <li>
            <details>
              <summary>Introduction</summary>
                <div class="lesson">
                  <a href='${this.baseUrl}/introduction/'>Slides</a><br>
                </div>
              </details>
          </li>

          <li>
            <details>
              <summary>Web Browsers</summary>
                <div class="lesson">
                  <a href='${this.baseUrl}/browsers/'>Slides</a><br>
                </div>
              </details>
          </li>

          <li>
            <details>
              <summary>Web Servers</summary>
                <div class="lesson">
                  <a href='${this.baseUrl}/servers/'>Slides</a><br>
                </div>
              </details>
          </li>

          <li>
            <details>
              <summary>Browser-Native Tech</summary>
                <div class="lesson">
                  <a href='${this.baseUrl}/browser-native/'>Slides</a><br>
                </div>
              </details>
          </li>


<!--
          <li>
            <details>
              <summary>Conclusion</summary>
                <div class="lesson">
                  <a href="${this.baseUrl}/conclusion/">Explanation</a><br>
                  <a href="${this.baseUrl}/conclusion/exercise">Exercise</a>
                </div>
            </details>
          </li>
-->
        </ol>

      `;
      return section;
    }
  }
);

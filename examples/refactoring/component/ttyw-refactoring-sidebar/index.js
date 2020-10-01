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

        </ol>

      `;
      return section;
    }
  }
);

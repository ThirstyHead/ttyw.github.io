window.customElements.define('ttyw-conferenceworks-sidebar',
  class TtywConferenceworksSidebar extends HTMLElement{
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
      return '/examples/conferenceworks';
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
                  <a href='${this.baseUrl}/introduction/'>Explanation</a><br>
                  <a href='${this.baseUrl}/introduction/exercise'>Exercise</a>
                </div>
              </details>
          </li>
          
          <li>
            <details>
              <summary>Sections and Web Components</summary>
                <div class="lesson">
                  <a href="${this.baseUrl}/sections/">Explanation</a><br>
                  <a href="${this.baseUrl}/sections/exercise">Exercise</a>
                </div>
            </details>
          </li>
          
          <li>
            <details>
              <summary>Content and Responsive Web Design</summary>
                <div class="lesson">
                  <a href="${this.baseUrl}/content/">Explanation</a><br>
                  <a href="${this.baseUrl}/content/exercise">Exercise</a>
                </div>
            </details>
          </li>

          <li>
            <details>
              <summary>Tables and LocalStorage</summary>
                <div class="lesson">
                  <a href="${this.baseUrl}/tables/">Explanation</a><br>
                  <a href="${this.baseUrl}/tables/exercise">Exercise</a>
                </div>
            </details>
          </li>

          <li>
            <details>
              <summary>Forms and Validation</summary>
                <div class="lesson">
                  <a href="${this.baseUrl}/forms/">Explanation</a><br>
                  <a href="${this.baseUrl}/forms/exercise">Exercise</a>
                </div>
            </details>
          </li>

          <li>
            <details>
              <summary>Progressive Web Apps (PWAs)</summary>
                <div class="lesson">
                  <a href="${this.baseUrl}/pwas/">Explanation</a><br>
                  <a href="${this.baseUrl}/pwas/exercise">Exercise</a>
                </div>
            </details>
          </li>

          <li>
            <details>
              <summary>Conclusion</summary>
                <div class="lesson">
                  <a href="${this.baseUrl}/conclusion/">Explanation</a><br>
                  <a href="${this.baseUrl}/conclusion/exercise">Exercise</a>
                </div>
            </details>
          </li>

        </ol>

      `;
      return section;
    }
  }
);

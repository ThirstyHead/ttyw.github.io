window.customElements.define('ttyw-conferenceworks-sidebar',
  class TtywConferenceworksSidebar extends HTMLElement{
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
                  <a href="introduction/explanation">Explanation</a><br>
                  <a href="introduction/exercise">Exercise</a>
                </div>
              </details>
          </li>
          
          <li>
            <details>
              <summary>Sections and Web Components</summary>
                <div class="lesson">
                  <a href="sections/explanation">Explanation</a><br>
                  <a href="sections/exercise">Exercise</a>
                </div>
            </details>
          </li>
          
          <li>
            <details>
              <summary>Content and Responsive Web Design</summary>
                <div class="lesson">
                  <a href="content/explanation">Explanation</a><br>
                  <a href="content/exercise">Exercise</a>
                </div>
            </details>
          </li>

          <li>
            <details>
              <summary>Tables and Dates</summary>
                <div class="lesson">
                  <a href="tables/explanation">Explanation</a><br>
                  <a href="tables/exercise">Exercise</a>
                </div>
            </details>
          </li>

          <li>
            <details>
              <summary>Forms and Validation</summary>
                <div class="lesson">
                  <a href="forms/explanation">Explanation</a><br>
                  <a href="forms/exercise">Exercise</a>
                </div>
            </details>
          </li>

          <li>
            <details>
              <summary>Progressive Web Apps (PWAs) and the Offline / "Airplane Mode" Experience</summary>
                <div class="lesson">
                  <a href="pwas/explanation">Explanation</a><br>
                  <a href="pwas/exercise">Exercise</a>
                </div>
            </details>
          </li>

          <li>
            <details>
              <summary>Conclusion</summary>
                <div class="lesson">
                  <a href="conclusion/explanation">Explanation</a><br>
                  <a href="conclusion/exercise">Exercise</a>
                </div>
            </details>
          </li>

        </ol>

      `;
      return section;
    }
  }
);

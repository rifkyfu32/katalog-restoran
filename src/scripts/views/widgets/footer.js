class FooterWidget extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <p>© 2016 - ${new Date().getFullYear()} Delizia Apps. 
      Data from 
      <a href="https://restaurant-api.dicoding.dev/" target="_blank" rel="noreferrer">Dicoding</a>.
    </p>
      `;
  }
}

customElements.define('footer-widget', FooterWidget);

class FooterWidget extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <p>© 2016 - ${new Date().getFullYear()} Delizia Apps.</p>
      `;
  }
}

customElements.define('footer-widget', FooterWidget);

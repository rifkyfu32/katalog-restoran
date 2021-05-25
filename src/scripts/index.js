import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/icon.css';
import 'img-lightbox/css/img-lightbox.css';
import App from './views/app';
import './views/widgets/footer';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

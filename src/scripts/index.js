import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import 'img-lightbox/css/img-lightbox.css';
import 'img-lightbox/js/img-lightbox';

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});
const header = document.querySelector('.header');
// const elementRestaurant = document.querySelector('.restaurants');
const footer = document.querySelector('#footer');
/* const shortenText = (str, maxLen, separator = ' ') => {
  if (str.length <= maxLen) return str;
  return str.substr(0, str.lastIndexOf(separator, maxLen));
}; */

// add header sticky
window.onscroll = () => {
  if (window.pageYOffset >= header.offsetTop) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

// create element explore restaurant from DATA.json
/* let itemRestaurants = `
<article class="restaurant-item">
  <div class="restaurant-item_content">
    <h3 class="restaurant-item_title"><a href="#">Belum ada data</a></h3>
  </div>
</article>
`; */
/* if (exploreRestaurants.restaurants && exploreRestaurants.restaurants.length > 0) {
  // eslint-disable-next-line no-unused-vars
  itemRestaurants = '';
  exploreRestaurants.restaurants.forEach((element) => {
    console.log(element);
    itemRestaurants += `
          <article class="restaurant-item" id="${element.id}">
            <figure class="restaurant-figure" aria-label="${element.name}">
              <a href="${element.pictureId}"
              class="img-lightbox-link"
              data-src="${element.pictureId}"
              aria-hidden="true"
              rel="lightbox">
                <img class="restaurant-item_thumbnail"
                 src="${element.pictureId}"
                 alt="Gambar ${element.name}">
              </a>
              <figcaption class="restaurant-item_location">Kota ${element.city}</figcaption>
              <figcaption class="restaurant-item_address">${element.address}</figcaption>
            </figure>
            <div class="restaurant-item_content">
              <h3 class="restaurant-item_rating">Rating : ${element.rating}</h3>
              <h3 class="restaurant-item_title"><a href="#${element.id}">${element.name}</a></h3>
              <p class="restaurant-item_description">${shortenText(element.description, 160)}...</p>
              <a href="#${element.id}" class="restaurant-item-btn">Selengkapnya</a>
            </div>
          </article>
          `;
  });
}
elementRestaurant.innerHTML = itemRestaurants;
 */
// add footer copyright content
footer.innerHTML = `<p>© 2016 - ${new Date().getFullYear()} Delizia Apps, All rights reserved.</p>`;

// make image lightbox on click
document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-undef
  imgLightbox('img-lightbox-link');
});

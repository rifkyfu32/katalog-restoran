/* eslint-disable max-len */
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
// const header = document.querySelector('.header');
// const elementRestaurant = document.querySelector('.restaurants');
const footer = document.querySelector('#footer');
/* const shortenText = (str, maxLen, separator = ' ') => {
  if (str.length <= maxLen) return str;
  return str.substr(0, str.lastIndexOf(separator, maxLen));
}; */

// add header sticky
/* window.onscroll = () => {
  if (window.pageYOffset >= header.offsetTop) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}; */

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
            <div class="restaurant-item_header">
              <a href="${element.pictureId}"
                class="img-lightbox-link"
                data-src="${element.pictureId}"
                aria-hidden="true"
                rel="lightbox">
                  <img class="restaurant-item_header_photo"
                  src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}"
                  alt="Photo ${element.name}">
              </a>
              <div class="restaurant-item_header_rating">
                <p>⭐️<span class="restaurant-item_header_rating_score">${restaurant.rating}</span></p>
              </div>
            </div>
            <div class="restaurant-item_content">
                <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
                <p>${shortenText(restaurant.description, 160)}...</p>
                <a href="${`/#/detail/${restaurant.id}`}" class="restaurant-item-btn">Selengkapnya</a>
            </div>
          </article>
          `;
  });
}
elementRestaurant.innerHTML = itemRestaurants;
 */
// add footer copyright content
footer.innerHTML = `<p>© 2016 - ${new Date().getFullYear()} Delizia Apps, All rights reserved. All data obtained from <a href="https://restaurant-api.dicoding.dev/" target="_blank" rel="noreferrer">Dicoding</a>.</p>`;

// make image lightbox on click
document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-undef
  imgLightbox('img-lightbox-link');
});

import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import explore_restaurants from '../DATA.json';
import 'img-lightbox/css/img-lightbox.css';
import 'img-lightbox/js/img-lightbox.js';

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');
const header = document.querySelector('.header');
const sticky = header.offsetTop;
const elementRestaurant = document.querySelector('.restaurants');
const footer = document.querySelector('#footer');
const shortenText = (str, maxLen, separator = ' ') => {
	if (str.length <= maxLen) return str;
	return str.substr(0, str.lastIndexOf(separator, maxLen));
}

// handle hamburger button
menu.addEventListener('click', function (event) {
	drawer.classList.toggle('open');
	event.stopPropagation();
});

// close popup menu if area hero or main click
hero.addEventListener('click', function () {
	drawer.classList.remove('open');
});

main.addEventListener('click', function () {
	drawer.classList.remove('open');
});

// add header sticky
window.onscroll = () => {
	if (window.pageYOffset >= sticky) {
		header.classList.add("sticky")
	} else {
		header.classList.remove("sticky");
	}
};

// create element explore restaurant from DATA.json
let item_restaurants = `
<article class="restaurant-item">
  <div class="restaurant-item_content">
    <h3 class="restaurant-item_title"><a href="#">Belum ada data</a></h3>
  </div>
</article>
`;
if (explore_restaurants.restaurants && explore_restaurants.restaurants.length > 0) {
	item_restaurants = '';
	explore_restaurants.restaurants.forEach(element => {
		item_restaurants += `
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
              <p class="restaurant-item_description">${shortenText(element.description,160)}...</p>
              <a href="#${element.id}" class="restaurant-item-btn">Selengkapnya</a>
            </div>
          </article>
          `;
	});
}
elementRestaurant.innerHTML = item_restaurants;

// add footer copyright content
footer.innerHTML = `<p>© 2016 - ${new Date().getFullYear()} Delizia Apps, All rights reserved.</p>`;

// make image lightbox on click
document.addEventListener('DOMContentLoaded', () => {
  imgLightbox("img-lightbox-link");
});

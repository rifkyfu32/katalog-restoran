import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantDetailTemplate,
  createReviewTemplate,
  createAddReviewTemplate,
  createAlertTemplate,
  createBookmarkButtonTemplate,
  createBookmarkedButtonTemplate,
} from '../templates/template-creator';
import 'img-lightbox/js/img-lightbox';

const Detail = {
  async render() {
    return `
    <section class="content">
      <article id="restaurant" class="restaurant"></article>
      <div id="bookmarkButtonContainer"></div>
      <div id="bookmarkedButtonContainer"></div>
      <div id="error_view"></div>
    </section>
    <div class="loader"></div>
    `;
  },

  async afterRender() {
    document.body.classList.add('loading');
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantSource.detailRestaurant(url.id);
      console.log(restaurant);
      const restaurantContainer = document.querySelector('#restaurant');
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
      // eslint-disable-next-line no-undef
      imgLightbox('img-lightbox-link');
      const customerReviewsContainer = document.querySelector('#customerReviews');
      restaurant.customerReviews.forEach((review) => {
        customerReviewsContainer.innerHTML += createReviewTemplate(review);
      });
      customerReviewsContainer.innerHTML += createAddReviewTemplate();
      const bookmarkButtonContainer = document.querySelector('#bookmarkButtonContainer');
      bookmarkButtonContainer.innerHTML = createBookmarkButtonTemplate();
      const bookmarkedButtonContainer = document.querySelector('#bookmarkedButtonContainer');
      bookmarkedButtonContainer.innerHTML = createBookmarkedButtonTemplate();
    } catch (error) {
      const errorContainer = document.querySelector('#error_view');
      errorContainer.innerHTML = createAlertTemplate(error);
    } finally {
      document.body.classList.remove('loading');
    }
  },
};

export default Detail;

import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantDetailTemplate,
  createReviewTemplate,
  createAddReviewTemplate,
  createAlertTemplate,
} from '../templates/template-creator';
import 'img-lightbox/js/img-lightbox';
import BookmarkButtonInitiator from '../../utils/bookmark-button-initiator';

const Detail = {
  async render() {
    return `
    <section class="content">
      <article id="restaurant" class="restaurant"></article>
      <div id="bookmarkButtonContainer"></div>
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
      const restaurantContainer = document.querySelector('#restaurant');
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
      // eslint-disable-next-line no-undef
      imgLightbox('img-lightbox-link');
      const customerReviewsContainer = document.querySelector('#customerReviews');
      restaurant.customerReviews.forEach((review) => {
        customerReviewsContainer.innerHTML += createReviewTemplate(review);
      });
      customerReviewsContainer.innerHTML += createAddReviewTemplate();
      BookmarkButtonInitiator.init({
        bookmarkButtonContainer: document.querySelector('#bookmarkButtonContainer'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          address: restaurant.address,
          city: restaurant.city,
          category: restaurant.category,
          rating: restaurant.rating,
          menus: restaurant.menus,
          description: restaurant.description,
          pictureId: restaurant.pictureId,
          customerReviews: restaurant.customerReviews,
        },
      });
    } catch (error) {
      const errorContainer = document.querySelector('#error_view');
      errorContainer.innerHTML = createAlertTemplate(error);
    } finally {
      document.body.classList.remove('loading');
    }
  },
};

export default Detail;

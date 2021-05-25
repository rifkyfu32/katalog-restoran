import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantDetailTemplate,
  createReviewTemplate,
  createAddReviewTemplate,
  createErrorTemplate,
} from '../templates/template-creator';
import 'img-lightbox/js/img-lightbox';
import BookmarkButtonInitiator from '../../utils/bookmark-button-initiator';
import ReviewPost from '../../utils/review-post';

const Detail = {
  async render() {
    return `
    <section class="content">
      <article id="restaurant" class="restaurant"></article>
      <div id="bookmarkButtonContainer"></div>
      <div id="errorView"></div>
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

      const addReviewsContainer = document.querySelector('#addReviews');
      addReviewsContainer.innerHTML += createAddReviewTemplate();

      const reviewError = document.querySelector('#reviewError');
      const reviewName = document.querySelector('#reviewName');
      const reviewMessage = document.querySelector('#reviewMessage');
      const btnSubmitReview = document.querySelector('#btnSubmitReview');
      ReviewPost.init({
        customerReviews: customerReviewsContainer,
        reviewError,
        reviewID: url.id,
        reviewName,
        reviewMessage,
        btnSubmitReview,
      });

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
      const errorContainer = document.querySelector('#errorView');
      errorContainer.innerHTML = createErrorTemplate(error);
    } finally {
      document.body.classList.remove('loading');
    }
  },
};

export default Detail;

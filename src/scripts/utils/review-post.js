import { createAlertTemplate, createReviewTemplate } from '../views/templates/template-creator';
import RestaurantSource from '../data/restaurant-source';

const ReviewPost = {
  init({
    customerReviews, reviewError, reviewID, reviewName, reviewMessage, btnSubmitReview,
  }) {
    this.customerReviews = customerReviews;
    this.reviewError = reviewError;
    this.reviewID = reviewID;
    this.reviewName = reviewName;
    this.reviewMessage = reviewMessage;
    this.lengthRequireName = 4;
    this.lengthRequireMessage = 8;
    this.keyUpHandler(this.reviewName, this.lengthRequireName);
    this.keyUpHandler(this.reviewMessage, this.lengthRequireMessage);
    btnSubmitReview.addEventListener('click', (event) => {
      event.stopPropagation();
      this.validateInput(reviewName, reviewMessage);
    });
  },

  keyUpHandler(element, fieldLenght) {
    element.addEventListener('keyup', () => {
      if (element.value.length < fieldLenght) {
        element.classList.remove('is-success');
        element.classList.add('is-error');
        // eslint-disable-next-line no-param-reassign
        element.nextElementSibling.innerHTML = `Minimal karakter ${fieldLenght}`;
        element.nextElementSibling.classList.remove('valid-feedback');
        element.nextElementSibling.classList.add('invalid-feedback');
      } else {
        element.classList.remove('is-error');
        element.classList.add('is-success');
        // eslint-disable-next-line no-param-reassign
        element.nextElementSibling.innerHTML = 'Keren!';
        element.nextElementSibling.classList.remove('invalid-feedback');
        element.nextElementSibling.classList.add('valid-feedback');
      }
    });
  },

  resetInput() {
    this.reviewName.value = '';
    this.reviewName.classList.remove('is-success');
    this.reviewName.classList.remove('is-error');
    this.reviewName.nextElementSibling.innerHTML = '';
    this.reviewName.nextElementSibling.classList.remove('invalid-feedback');
    this.reviewName.nextElementSibling.classList.remove('valid-feedback');
    this.reviewMessage.value = '';
    this.reviewMessage.classList.remove('is-success');
    this.reviewMessage.classList.remove('is-error');
    this.reviewMessage.nextElementSibling.innerHTML = '';
    this.reviewMessage.nextElementSibling.classList.remove('invalid-feedback');
    this.reviewMessage.nextElementSibling.classList.remove('valid-feedback');
  },

  showErrorReview(message) {
    this.reviewError.innerHTML = createAlertTemplate(message);
  },

  validateInput() {
    if (this.reviewName.value.length < this.lengthRequireName) {
      this.showErrorReview('Format field name not correct!');
      this.reviewName.focus();
    } else if (this.reviewMessage.value.length < this.lengthRequireMessage) {
      this.showErrorReview('Format field message not correct!');
      this.reviewMessage.focus();
    } else {
      const data = {
        id: this.reviewID,
        name: this.reviewName.value,
        review: this.reviewMessage.value,
      };
      this.submit(data);
    }
  },

  async submit(data) {
    try {
      const reviewResponse = await RestaurantSource.reviewRestaurant(data);
      this.customerReviews.innerHTML = '';
      reviewResponse.forEach((review) => {
        this.customerReviews.innerHTML += createReviewTemplate(review);
      });
      this.resetInput();
    } catch (error) {
      this.showErrorReview(error);
    }
  },
};

export default ReviewPost;

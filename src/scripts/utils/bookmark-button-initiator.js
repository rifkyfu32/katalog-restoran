import ServiceRestaurantIdb from '../data/restaurant-idb';
import { createBookmarkButtonTemplate, createUnBookmarkButtonTemplate } from '../views/templates/template-creator';

const BookmarkButtonInitiator = {
  async init({ bookmarkButtonContainer, restaurant }) {
    this.bookmarkButtonContainer = bookmarkButtonContainer;
    this.restaurant = restaurant;
    await this.renderButton();
  },

  async renderButton() {
    const { id } = this.restaurant;
    if (await this.isRestaurantExist(id)) {
      this.renderUnBookmark();
    } else {
      this.renderBookmark();
    }
  },

  async isRestaurantExist(id) {
    const restaurant = await ServiceRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  renderBookmark() {
    this.bookmarkButtonContainer.innerHTML = createBookmarkButtonTemplate();
    const bookmarkButton = document.querySelector('#bookmarkButton');
    bookmarkButton.addEventListener('click', async () => {
      await ServiceRestaurantIdb.putRestaurant(this.restaurant);
      this.renderButton();
    });
  },

  renderUnBookmark() {
    this.bookmarkButtonContainer.innerHTML = createUnBookmarkButtonTemplate();
    const bookmarkButton = document.querySelector('#bookmarkButton');
    bookmarkButton.addEventListener('click', async () => {
      await ServiceRestaurantIdb.deleteRestaurant(this.restaurant.id);
      this.renderButton();
    });
  },
};

export default BookmarkButtonInitiator;

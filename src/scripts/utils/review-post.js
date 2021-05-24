const ReviewPost = {
  init({ button, data }) {
    button.addEventListener('click', (event) => {
      this.validate(event, data);
    });
  },

  validate(event, data) {
    event.stopPropagation();
    data.classList.toggle('open');
  },

  closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default ReviewPost;

import RestaurantSource from '../../data/restaurant-source';

const ExploreRestaurants = {
  async render() {
    return `
    <section class="content">
            <div class="explore">
                <h2 class="explore_label">Explore Restaurant</h2>
                <div class="restaurants">    
                </div>
            </div>
        </section>
    `;
  },
  async afterRender() {
    const restaurants = await RestaurantSource.exploreRestaurants();
    console.log(restaurants);
  },
};

export default ExploreRestaurants;

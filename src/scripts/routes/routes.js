import ExploreRestaurants from '../views/pages/explore';
import Detail from '../views/pages/detail';

const routes = {
  '/': ExploreRestaurants, // default page
  '/home': ExploreRestaurants,
  '/detail/:id': Detail,
};

export default routes;

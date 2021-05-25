import ExploreRestaurants from '../views/pages/explore';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': ExploreRestaurants,
  '/explore': ExploreRestaurants,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;

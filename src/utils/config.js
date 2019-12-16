import Vue from 'vue'
import { Button } from 'vant';
import '@/assets/css/reset.css';
import "amfe-flexible/index.js"
import { Swipe, SwipeItem } from 'vant';
import { IndexBar, IndexAnchor,Cell} from 'vant';
import Item from '../components/Item.vue'
import axios from 'axios'
Vue.use(Button);
Vue.use(Swipe).use(SwipeItem);
Vue.use(IndexBar).use(IndexAnchor).use(Cell);
Vue.component("Item",Item)
Vue.prototype.axios = axios
export default Vue
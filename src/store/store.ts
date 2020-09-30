import { createStore} from 'vuex';

import wallet from './modules/wallet';
import market from './modules/market';
import stock from './modules/stock';
import manufacture from './modules/manufacture';

export default createStore({
  modules:{
    stock,
    manufacture,
    market,
    wallet,
  }
})
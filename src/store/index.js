import Vue from 'vue'
import Vuex from 'vuex'
import Data from "@/store/modules/Data";


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Data
  }
})

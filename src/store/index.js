import Vue from 'vue';
import Vuex from 'vuex';
import * as d3 from 'd3-fetch';

const URL_PREFIX = 'https://raw.githubusercontent.com/gh640/japan-noncompliant-companies/master/data/';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 企業一覧
    companies: [],
    // 現在選択されている tsv ファイル
    tsv: '',
  },
  mutations: {
    updateTsv(state, tsv) {
      state.tsv = tsv;
    },
    updateCompanies(state, companies) {
      state.companies = companies;
    },
  },
  actions: {
    updateTsv({ commit }, tsv) {
      commit('updateTsv', tsv);

      // GitHub の tsv をフェッチする
      const url = `${URL_PREFIX}${tsv}`;
      d3.tsv(url)
        .then((companies) => {
          commit('updateCompanies', companies);
        })
        .catch(() => {
          // TODO エラーメッセージの処理を追加
        });
    },
  },
});

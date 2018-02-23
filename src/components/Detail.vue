<template>
  <div>
    <div class="nav-index">
      <div>
        <router-link class="nav-next-prev"
          v-if="companyPrevName"
          v-bind:title="companyPrevName"
          :to="{ name: 'Detail', params: { id: idPrev } }">
          前
        </router-link>
      </div>

      <div>
        <router-link :to="{ name: 'Index' }">一覧へ</router-link>
      </div>

      <div>
        <router-link class="nav-next-next"
          v-if="companyNextName"
          v-bind:title="companyNextName"
          :to="{ name: 'Detail', params: { id: idNext } }">
          次
        </router-link>
      </div>
    </div>

    <h1>{{ msg }}</h1>

    <table>
      <tr v-if="company"
        v-for="(column, index) in columns"
        v-bind:key="index"
        v-bind:class="{ odd: (index % 2 == 1) }">
        <th>{{ column }}</th>
        <td>{{ company[column] }}</td>
      </tr>
      <caption>公表日: {{ company['公表日'] }}</caption>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: ['id'],
  watch: {
    '$route' (to, from) {
      this.companies = this.$root.companies;
      this.company = this.companies[this.id];
    },
  },
  mounted() {
    this.companies = this.$root.companies;
    this.company = this.companies[this.id];
  },
  data() {
    return {
      companies: [],
      company: {},
      columns: [
        '管轄',
        '所在地',
        '違反法条',
        '事案概要',
        'その他参考事項',
      ],
    };
  },
  computed: {
    msg() {
      return this.company['企業・事業場名称'];
    },
    idNext() {
      const id = parseInt(this.id, 10);
      return (id < this.companies.length - 1) ? parseInt(id, 10) + 1 : undefined;
    },
    idPrev() {
      const id = parseInt(this.id, 10);
      return (id > 0) ? parseInt(id, 10) - 1 : undefined;
    },
    companyNextName() {
      if (this.idNext === undefined) {
        return '';
      }

      if (!this.companies[this.idNext]) {
        return '';
      }

      return this.companies[this.idNext]['企業・事業場名称'];
    },
    companyPrevName() {
      if (this.idPrev === undefined) {
        return '';
      }

      if (!this.companies[this.idPrev]) {
        return '';
      }

      return this.companies[this.idPrev]['企業・事業場名称'];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
table {
  width: 100%;
}
th {
  width: 20%;
  text-align: right;
  padding: 0.5em;
}
td {
  text-align: left;
  padding: 0.5em;
}
.nav-index {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}
.nav-index-prev {
}
.nav-index-next {
}
</style>

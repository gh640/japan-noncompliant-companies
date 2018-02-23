<template>
  <div>
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
    <div class="nav-index">
      <router-link :to="{ name: 'Index' }">戻る</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  filters: {
  },
  data() {
    return {
      msg: '',
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
  mounted() {
    this.company = this.$root.companies[this.$route.params.id];
    this.msg = this.company['企業・事業場名称'];
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
  margin: 20px 0;
}
</style>

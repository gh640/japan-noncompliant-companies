<template>
  <div>
    <div class="nav-index">
      <div>
        <router-link class="nav-next-prev"
          v-if="companyPrevName"
          :title="companyPrevName"
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
          :title="companyNextName"
          :to="{ name: 'Detail', params: { id: idNext } }">
          次
        </router-link>
      </div>
    </div>

    <div v-if="matched">
      <h1 class="main-title">{{ msg }}</h1>

      <table>
        <tr v-if="company"
          v-for="(column, index) in columns"
          :key="index"
          :class="{ odd: (index % 2 == 1) }">
          <th>{{ column }}</th>
          <td>{{ company[column] }}</td>
        </tr>
        <caption>公表日: {{ company['公表日'] }}</caption>
      </table>
    </div>
    <div v-else>
      <p>該当する企業が見つかりません</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: ['id'],
  watch: {
    $route() {},
  },
  created() {
    document.addEventListener('keyup', this.goNext);
  },
  destroyed() {
    document.removeEventListener('keyup', this.goNext);
  },
  mounted() {},
  data() {
    return {
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
    companies() {
      return this.$store.state.companies;
    },
    company() {
      return this.companies[this.id];
    },
    matched() {
      return !!this.company;
    },
  },
  methods: {
    goNext(e) {
      const keys = {
        ArrowLeft: this.idPrev,
        ArrowRight: this.idNext,
      };

      if (keys[e.code] !== undefined) {
        this.$router.push({ name: 'Detail', params: { id: keys[e.code] } });
        e.preventDefault();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-title {
  margin: 40px 0;
}
a {
  color: #42b983;
}
table {
  width: 100%;
  caption-side: bottom;
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

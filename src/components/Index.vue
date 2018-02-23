<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <table>
      <thead>
        <tr>
          <th>管轄</th>
          <th>企業・事業場名称</th>
          <th>所在地</th>
          <th>公表日</th>
          <th>事案概要</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="company, index in this.$root.companies"
            v-bind:key="index" v-bind:class="{ odd: (index % 2 == 1) }">
          <td> {{ company['管轄'] }} </td>
          <td> {{ company['企業・事業場名称'] }} </td>
          <td> {{ company['所在地'] }} </td>
          <td> {{ company['公表日'] }} </td>
          <td> {{ company['事案概要']|truncate(20) }} </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Index',
  filters: {
    truncate(text, length) {
      if (text.length > length) {
        return text.substring(0, length - 3 ) + '...';
      } else {
        return text;
      }
    }
  },
  data() {
    return {
      msg: '全企業',
    };
  },
  mounted() {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
table {
}
tbody {
  display: block;
  max-height: 600px;
  overflow-y: scroll;
}
thead,
tr {
  display: table;
  table-layout: fixed;
  width: 100%;
}
tr.odd {
  background-color: #f8f8f8;
}

td {

}
</style>

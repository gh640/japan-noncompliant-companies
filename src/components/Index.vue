<template>
  <div>
    <h1>{{ msg }}</h1>
    <vue-good-table
      :columns="columns"
      :rows="companies"
      :paginate="true"
      :onClick="onClickFn"
      styleClass="table table-bordered table-striped"
      nextText="次"
      prevText="前"
      rowsPerPageText="表示数"
      ofText="/"
      allText="全件"
    >
      <template slot="table-row" slot-scope="props">
        <td> {{ props.row.originalIndex }} </td>
        <td> {{ props.row['管轄'] }} </td>
        <td>
          {{ props.row['企業・事業場名称'] }}
        </td>
        <td> {{ props.row['所在地'] }} </td>
        <td> {{ props.row['事案概要']|truncate(30) }} </td>
      </template>
    </vue-good-table>
  </div>
</template>

<script>
import { VueGoodTable } from 'vue-good-table';

export default {
  name: 'Index',
  components: {
    VueGoodTable,
  },
  filters: {
    truncate(text, length) {
      if (text.length > length) {
        return `${text.substring(0, length - 3)}...`;
      }

      return text;
    },
  },
  data() {
    const companies = this.$root.companies;
    const onlyUnique = function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    };

    const filterOptions = companies.map(c => c['管轄'])
      .filter(onlyUnique)
      .map(value => ({
        value,
        text: value,
      }));

    const filterFunc = function filterFunc(data, filterString) {
      return data.indexOf(filterString) > -1;
    };

    return {
      msg: '',
      companies,
      columns: [
        {
          label: 'ID',
        },
        {
          label: '管轄',
          field: '管轄',
          filterable: true,
          filterDropdown: true,
          filterOptions,
          placeholder: '管轄',
          width: '12%',
        },
        {
          label: '名称',
          field: '企業・事業場名称',
          filterable: true,
          placeholder: '名称',
          filter: filterFunc,
          width: '20%',
        },
        {
          label: '所在地',
          field: '所在地',
          filterable: true,
          placeholder: '所在地',
          filter: filterFunc,
        },
        {
          label: '事案概要',
          field: '事案概要',
          filterable: true,
          placeholder: '事案概要',
          filter: filterFunc,
          width: '40%',
        },
      ],
      onClickFn(company) {
        this.$router.push({ name: 'Detail', params: { id: company.originalIndex } });
      },
    };
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
table.table {
}
table.table th {
  padding: 0.5em;
}
table.table td {
  padding: 0.5em;
}
</style>

<template>
  <v-select
      @change="selectFilter"
      v-model="filterValue"
      :items="filter.items"
      clearable
      :label="`Filter by ${filter.type}`"
      :return-object="true"
  ></v-select>
</template>

<script>
import { mapMutations } from "vuex"

export default {
  name: "FilterInput",
  props: {
    filter: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      filterValue: 'default'
    }
  },
  methods: {
    ...mapMutations({
      applyFilter: "Data/applyFilter",
      setFilters: "Data/setFilters"
    }),
    selectFilter(value){
      this.setFilters({value, type:this.filter.type})
      this.applyFilter(this.filter.type)
    }
  },
}
</script>

<style scoped>

</style>
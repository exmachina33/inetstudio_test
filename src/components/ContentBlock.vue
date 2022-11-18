<template>
  <v-container>
    <v-img
        :src="require('../assets/logo.svg')"
        class="my-3"
        contain
        height="200"
    />

    <div class="content">
      <div class="content__filters">
        <FilterInput
            v-for="filter in filters"
            :key="filter.type"
            :filter="filter"
        />
      </div>

      <div class="content__users">
        <v-card
            max-width="450"
            height="100%"
            class="mx-auto"
        >
          <v-list three-line>
            <UserCard
                v-for="user in users"
                :key="user.id"
                :user="user"
            />
          </v-list>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
  import UserCard from "@/components/UserCard";
  import { mapGetters, mapActions } from "vuex"
  import FilterInput from "@/components/FilterInput";
  export default {
    name: 'ContentBlock',
    components: {FilterInput, UserCard},
    data: () => ({
    }),
    computed: {
      ...mapGetters({
        getUsers: "Data/getUsers",
        getFilters: "Data/getFilters"
      }),
      users() {
        return this.getUsers
      },
      filters() {
        return this.getFilters
      }
    },
    methods: {
      ...mapActions({
        getUsersData: "Data/getUsersData"
      })
    },
    created() {
      this.getUsersData()
    }
  }
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  height: 600px;
  width: 100%;

  &__filters {
    padding: 0 100px;
    width: 100%;
  }

  &__users {
    height: 100%;
    width: 100%;
  }
}
</style>
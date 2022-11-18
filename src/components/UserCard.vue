<template>
  <div class="user">
    <v-subheader
        v-if="user.header"
        v-text="user.header"
    ></v-subheader>

    <v-list-item
        :key="user.title"
    >
      <v-list-item-avatar
          @click="addressIsShow=true"
      >
        <v-img :src="user.avatar"></v-img>
      </v-list-item-avatar>

      <v-list-item-content
          v-if="addressIsShow"
          class="user__address"
      >
        <v-card
            class="user__address-card"
            max-width="250"
            color="#BBDEFB"
        >
          <v-btn
              @click="addressIsShow=false"
              class="user__address-card__close"
              x-small
              right
              icon
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-list-item-subtitle>
            <span class="text--primary">Address: </span>
            <span v-text="`${user.address.country}, `"></span>
            <span v-text="`${user.address.city}, `"></span>
            <span v-text="`${user.address.street}, `"></span>
            <span v-text="`${user.address.building}`"></span>
          </v-list-item-subtitle>
        </v-card>
      </v-list-item-content>

      <v-list-item-content>
        <v-list-item-title v-html="user.title"></v-list-item-title>
        <v-list-item-subtitle v-html="user.subtitle"></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    user: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      addressIsShow: false
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  position: relative;

  &__address {
    position: absolute;
    bottom: 60px;
    left: 50px;
  }

  &__address-card {
    padding: 5px;
    display: flex;
    flex-direction: column;

    &__close {
      margin-left: auto;
    }
  }
}
</style>
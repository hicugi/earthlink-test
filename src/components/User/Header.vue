<template>
  <div class="c-userHeader">
    <a class="c-userHeader__logo">Dashboard</a>
    <div class="c-userHeader__main">
      <BreadCrumbs :items="breadCrumbs" />
    </div>
    <div class="c-userHeader__meh" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BreadCrumbs from '../BreadCrumbs.vue'

export default defineComponent({
  components: { BreadCrumbs },

  data: () => ({
    breadCrumbs: [{ text: 'Home', link: '/' }, { text: 'Projects' }]
  })
})
</script>

<style lang="scss">
@import '../../scss/colors.scss';

.c-userHeader {
  padding: 14px 24px;
  border-bottom: 1px solid $color-border;
  display: flex;
  align-items: center;

  &__logo {
    margin-right: 20px;
    width: 40px;
    height: 40px;
    display: block;
    background: url(/assets/dashboard.svg) no-repeat center;
    text-indent: -999999px;
    overflow: hidden;
  }

  &__main {
    flex-grow: 1;
  }

  &__meh {
    width: 121px;
    height: 32px;
    background: url(/assets/user-header-meh.svg) no-repeat center;
  }
}
</style>

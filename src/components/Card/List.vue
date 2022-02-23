<template>
  <ul class="c-cardList">
    <template v-for="(item, index) in items" :key="index">
      <li class="c-cardList__item">
        <CardItem v-bind="item" short />
      </li>
    </template>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardItem from './Item.vue'

export default defineComponent({
  components: { CardItem },

  props: {
    items: Array
  }
})
</script>

<style lang="scss">
.c-cardList {
  margin: 0;
  padding: 0;
  list-style: none;

  &__item:nth-child(2n) {
    background-color: #f9fafb;
  }
}
</style>

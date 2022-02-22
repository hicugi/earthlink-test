<template>
  <ul class="c-breadcrumbs">
    <template v-for="(item, index) in items" :key="index">
      <li class="c-breadcrumbs__item">
        <component
          class="c-breadcrumbs__link"
          :is="item.link ? 'a' : 'span'"
          :to="item.link"
          v-text="item.text"
        />
      </li>
    </template>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    items: {
      type: Array,
      required: true
    }
  }
})
</script>

<style lang="scss">
.c-breadcrumbs {
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;

  &::before {
    margin-right: 8px;
    width: 20px;
    height: 20px;
    display: block;
    background: url(/assets/folder.svg) no-repeat center;
    content: '';
  }

  &__item:first-child {
    display: none;
  }
  &__item {
    transform: translateY(-2px);
  }
  &__link {
    color: #48525f;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  }
}
</style>

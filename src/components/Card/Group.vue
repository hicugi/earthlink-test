<template>
  <div class="c-cardGroup">
    <header v-if="title" class="c-cardGroup__header" v-text="title" />
    <div class="c-cardGroup__body">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: String
  }
})
</script>

<style lang="scss">
@import '../../scss/colors.scss';

.c-cardGroup {
  $border-radius: 8px;

  --side-gap: 20px;

  border: 1px solid $color-border;
  border-radius: $border-radius;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);

  &__header {
    padding: 12px var(--side-gap);
    border-radius: #{$border-radius} #{$border-radius} 0 0;
    background-color: #f9fafb;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
  }

  &__body {
    border-radius: 0 0 #{$border-radius} #{$border-radius};
    background-color: #ffffff;
    overflow: hidden;
  }
}
</style>

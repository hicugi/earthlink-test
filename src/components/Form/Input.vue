<template>
  <input class="c-formInput" v-model="modelValue" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    value: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss">
@import '../../scss/colors.scss';

.c-formInput {
  padding: 10px 10px 9px;
  border: 1px solid $color-border;
  border-radius: 6px;
  display: block;
  width: 100%;
  background: #ffffff;
  color: inherit;
  line-height: 18px;
  will-change: border-color;
  transition: linear 0.2s border-color;

  &:focus {
    border-color: $color-primary;
  }
}
</style>

<template>
  <fieldset class="c-formField">
    <slot />
    <label v-if="label" class="c-formField__label" v-text="label" />
  </fieldset>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss">
@import '../../scss/colors.scss';

.c-formField {
  margin: 0;
  padding: 0;
  border: none;
  display: flex;
  flex-direction: column;

  > * {
    order: 1;
  }

  &__label {
    margin-bottom: 9px;
    display: block;
    order: 0;
    color: #48525f;
    font-family: inherit;
    font-size: 16px;
    font-weight: bold;
    line-height: 18px;
    will-change: color;
    transition: linear 0.2s color;
  }

  & > :focus ~ &__label {
    color: $color-primary;
  }
}
</style>

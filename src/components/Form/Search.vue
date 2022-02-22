<template>
  <div :class="['c-formSearch', modelValue && 'c-formSearch--has-value']">
    <input
      class="c-formSearch__input"
      v-bind="$attrs"
      type="search"
      v-model="modelValue"
    />
    <span class="c-formSearch__icon"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
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

.c-formSearch {
  position: relative;

  &__input {
    padding: 8px 12px 8px;
    border: 1px solid $color-border;
    border-radius: 6px;
    display: block;
    width: 100%;
    background: #ffffff;
    color: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    will-change: border-color;
    transition: linear 0.2s border-color;
    &:focus {
      border-color: $color-primary;
    }
  }

  &__icon {
    position: absolute;
    right: 12px;
    top: 0;
    width: 20px;
    height: 100%;
    color: #9fa6b1;

    &::before {
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -1px;
      margin-top: -1px;
      transform: translate(-50%, -50%);
      border: 2px solid currentColor;
      border-radius: 100%;
      width: 16px;
      height: 16px;
      display: block;
      content: '';
    }
    &::after {
      position: absolute;
      left: calc(50% + 6px);
      top: calc(50% + 6px);
      transform: translate(-50%, -50%) rotate(-45deg);
      border-radius: 3px;
      width: 2px;
      height: 8px;
      display: block;
      background: currentColor;
      content: '';
    }
  }

  &--has-value &__icon {
    display: none;
  }
}
</style>

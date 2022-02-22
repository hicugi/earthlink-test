<template>
  <label class="c-formCheckbox">
    <input
      class="c-formCheckbox__input"
      v-bind="$attrs"
      v-model="modelValue"
      type="checkbox"
    />
    <span class="c-formCheckbox__icon" />
    <span class="c-formCheckbox__label">{{ text }}<slot /></span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FormCheckbox',

  inheritAttrs: false,
  props: {
    text: {
      type: String,
      default: ''
    },
    value: Boolean
  }
})
</script>

<style lang="scss">
@import '../../scss/colors.scss';

.c-formCheckbox {
  $self: &;
  
  position: relative;
  display: flex;

  &__input {
    position: absolute;
    opacity: 0;
    outline: none;
  }

  &__icon {
    position: relative;
    margin-right: 5px;
    border: 1px solid $color-text;
    border-radius: 4px;
    width: 16px;
    height: 16px;
    display: block;
    will-change: border-color;

    &::before {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      border-radius: 2px;
      width: 63%;
      height: 63%;
      background-color: $color-primary;
      will-change: transform;
      transition: ease-out 0.1s transform;
      content: '';
    }
  }
  &__label {
    display: block;
    font-size: 14px;
    line-height: 16px;

    &::before {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: none;
      outline: 2px solid $color-text;
      content: '';
    }
  }

  &__input:focus {
    ~ #{$self}__icon {
      border-color: $color-primary;
    }
    ~ #{$self}__label::before {
      display: block;
    }
  }
  &__input:checked ~ &__icon {
    border-color: $color-primary;
    &::before {
      transform: translate(-50%, -50%) scale(1);
    }
  }
}
</style>

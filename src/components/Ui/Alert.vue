<template>
  <div :class="className">{{ text }}<slot /></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    variant: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    className (): Array<string> {
      const v = 'c-uiAlert'
      return [v, `${v}_variant-${this.variant}`]
    }
  }
})
</script>

<style lang="scss">
@import '../../scss/colors.scss';

.c-uiAlert {
  padding: 16px;
  border-radius: 6px;

  &_variant {
    &-success {
      background-color: $color-success;
      color: #ffffff;
    }
    &-error {
      background-color: $color-danger;
      color: #ffffff;
    }
  }
}
</style>

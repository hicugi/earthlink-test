<template>
  <button :class="className">{{ text }}<slot /></button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface ClassName {
  [k: string]: boolean
}

export default defineComponent({
  props: {
    text: {
      type: String,
      default: ''
    },

    size: {
      type: String,
      default: 'medium'
    },
    variant: {
      type: String,
      default: 'default'
    },
    block: Boolean
  },
  computed: {
    className(): ClassName {
      const v = 'c-uiBtn'
      return {
        [v]: true,
        [`${v}_block`]: this.block,
        [`${v}_variant-${this.variant}`]: true,
        [`${v}_size-${this.size}`]: true
      }
    }
  }
})
</script>

<style lang="scss">
@import '../../scss/colors.scss';

.c-uiBtn {
  border: none;
  display: inline-block;
  font-family: inherit;

  &_block {
    display: block;
    width: 100%;
  }

  &_variant {
    &-default {
      background: #e9eef5;
      color: $color-primary;
    }
    &-primary {
      background-color: $color-primary;
      color: #ffffff;
    }
  }

  &_size {
    &-medium {
      padding: 10px 13px 9px;
      border-radius: 6px;
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
    }
    &-large {
      padding: 14px 15px 12px;
      border-radius: 6px;
      font-size: 16px;
      font-weight: 700;
      line-height: 18px;
    }
  }
}
</style>

<template>
  <div class="c-tabs">
    <ul class="c-tabs-nav">
      <template v-for="(item, index) in items" :key="index">
        <li
          :class="[
            'c-tabs-nav__item',
            item.name === activeTab && 'c-tabs-nav__item--active'
          ]"
        >
          <button
            class="c-tabs-nav__btn"
            type="button"
            @click="handleTabClick(item)"
          >
            <span v-text="item.label" />
            <span v-text="item.label" />
          </button>
        </li>
      </template>
    </ul>

    <div class="c-tabs__body">
      <template v-for="(_, name) in $slots" :slot="name" slot-scope="slotData"
        ><slot v-if="name === activeTab" :name="name" v-bind="slotData"
      /></template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface TabItemInterface {
  label: string
  name: string
}

export default defineComponent({
  name: 'Tabs',

  props: {
    active: String,
    items: {
      type: Array as PropType<Array<TabItemInterface>>,
      default: () => []
    }
  },
  data() {
    const { active } = this
    let activeTab = ''

    const scopeItem = this.items.find(item => !active || item.name === active)
    if (scopeItem) {
      activeTab = scopeItem.name
    }

    return {
      activeTab
    }
  },

  emits: ['change'],
  methods: {
    handleTabClick({ name }: TabItemInterface) {
      this.activeTab = name
      this.$emit('change', name)
    }
  }
})
</script>

<style lang="scss">
@import '../scss/colors.scss';

.c-tabs {
  &-nav {
    $nav: &;

    margin: 0;
    padding: 0;
    border-bottom: 2px solid #e9eef5;
    display: flex;
    list-style: none;

    &__item {
      position: relative;
      padding-bottom: 10px;

      &::before {
        position: absolute;
        left: 0;
        top: 100%;
        border-radius: 2px;
        background-color: $color-primary;
        width: 100%;
        height: 2px;
        opacity: 0;
        will-change: opacity;
        transition: ease-out 0.2s;
        transition-property: opacity;
        content: '';
      }

      & + & {
        margin-left: 40px;
      }
    }

    &__btn {
      padding: 0;
      border: none;
      background: none;
      color: #6c7280;
      font-size: 18px;
      font-weight: 700;
      line-height: 20px;

      span {
        &:first-child {
          position: absolute;
          font-weight: 400;
          will-change: color, font-weight;
          transition: ease-out 0.2s;
          transition-property: color font-weight;
        }
        &:last-child {
          font-weight: 700;
          opacity: 0;
        }
      }
    }

    &__item--active {
      &::before {
        opacity: 1;
      }

      #{$nav}__btn span:first-child {
        font-weight: 700;
        color: $color-primary;
      }
    }
  }

  &__body {
    padding-top: 20px;
  }
}
</style>

<template>
  <article class="c-cardItem" v-bind="$attrs">
    <header class="c-cardItem__header">
      <div :class="['c-cardItem__icon', `c-cardItem__icon_${variant}`]" />
      <div
        :class="[
          'c-cardItem__info',
          isInfoDoubleLined && 'c-cardItem__info_without-subtitle'
        ]"
      >
        <div
          :class="[
            'c-cardItem__title',
            favorite && 'c-cardItem__title_favorite'
          ]"
        >
          <span v-if="group">{{ group + ' ' }}</span>
          <strong>{{ title }}</strong>
        </div>

        <div class="c-cardItem__subtitle">
          <div v-if="id || type || status">
            <span v-if="id || type" class="c-cardItem__type">
              <strong v-if="id">#{{ id + ' ' }}</strong>
              <span v-if="type">{{ type }}</span>
            </span>
            <span
              v-if="status"
              :class="`c-cardItem__text_${variant}`"
              v-text="status"
            />
          </div>

          <p
            v-if="description"
            class="c-cardItem__description"
            v-text="description"
          />
        </div>
      </div>
    </header>

    <div v-if="!short" class="c-cardItem__body">
      <p v-if="content" class="c-cardItem__content" v-text="content" />
      <ul v-if="stats" class="c-cardItem-stats">
        <template v-for="(item, index) in formattedStats" :key="index">
          <li class="c-cardItem-stats__item">
            <span
              :class="[
                'c-cardItem-stats__icon',
                `c-cardItem-stats__icon_${item.key}`
              ]"
            />
            <span class="c-cardItem-stats__value" v-text="item.value" />
          </li>
        </template>
      </ul>

      <slot />
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface StatsInterface {
  key: string
  value: number
}

export default defineComponent({
  inheritAttrs: false,
  props: {
    id: Number,
    type: String,
    title: String,
    group: String,
    status: String,
    variant: String,

    description: String,
    content: String,
    favorite: Boolean,
    stats: Object,

    short: Boolean
  },
  computed: {
    isInfoDoubleLined(): boolean {
      return (
        Boolean(this.id || this.type || this.status || this.description) ===
        false
      )
    },

    formattedStats(): Array<StatsInterface> {
      const stats = this.stats || {}

      return ['likes', 'views', 'followers'].map(key => ({
        key,
        value: stats[key] || 0
      }))
    }
  }
})
</script>

<style lang="scss" src="./Item.scss" />

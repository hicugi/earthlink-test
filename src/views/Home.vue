<template>
  <div class="p-home">
    <header class="p-home-header">
      <button class="p-home-language">يبرع</button>
    </header>

    <LoginBlock />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginBlock from '../components/LoginBlock.vue'

export default defineComponent({
  name: 'Home',
  components: { LoginBlock }
})
</script>

<style lang="scss">
@import '../scss/colors.scss';

.p-home {
  &-header {
    margin-bottom: 84px;
    padding: 19px 35px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  &-language {
    border: none;
    display: flex;
    background: none;
    color: $color-primary;
    font-family: inherit;
    font-size: 14px;
    line-height: 16px;

    &::before,
    &::after {
      display: block;
      content: '';
    }
    &::before {
      margin-right: 10px;
      transform: translateY(2px) rotate(135deg);
      border: 2px solid;
      border-color: $color-primary $color-primary transparent transparent;
      width: 10px;
      height: 10px;
    }
    &::after {
      margin-left: 8px;
      width: 20px;
      height: 20px;
      background: url(/assets/globe.svg) no-repeat center;
    }
  }
}
</style>

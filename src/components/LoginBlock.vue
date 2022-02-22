<template>
  <div class="c-loginBlock">
    <img class="c-loginBlock__image" src="/assets/earth-link.png" alt="Logo" />

    <h1 class="c-loginBlock__title">Sign in to Task Manager</h1>

    <form :class="formClass" @submit.prevent="handleSubmit">
      <FormField class="c-loginBlock-form__field" label="Email">
        <FormInput
          v-model="email"
          :disabled="isLoading"
          type="email"
          placeholder="you@example.com"
          required
        />
      </FormField>

      <FormField class="c-loginBlock-form__field" label="Password">
        <FormInput
          v-model="password"
          :disabled="isLoading"
          type="password"
          placeholder="Password"
          required
        />
      </FormField>

      <div class="c-loginBlock-form__extra">
        <FormCheckbox v-model="isKeepingLogged">Keep me logged in</FormCheckbox>
        <button
          class="c-loginBlock__link"
          type="button"
          v-text="'Forgot password?'"
        />
      </div>

      <UiAlert
        v-if="errorMessage"
        class="c-loginBlock-form__error"
        variant="error"
        v-text="errorMessage"
      />

      <div class="c-loginBlock-form__footer">
        <UiButton
          :disabled="isLoading"
          type="submit"
          size="large"
          variant="primary"
          block
          >Sign in</UiButton
        >
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import store from '../store/index'
import FormField from './Form/Field.vue'
import FormInput from './Form/Input.vue'
import FormCheckbox from './Form/Checkbox.vue'
import UiAlert from './Ui/Alert.vue'
import UiButton from './Ui/Button.vue'

export default defineComponent({
  components: { FormField, FormInput, FormCheckbox, UiAlert, UiButton },

  data: () => ({
    email: '',
    password: '',
    isKeepingLogged: false,

    isLoading: false,
    errorMessage: null
  }),
  computed: {
    formClass(): Array<string | boolean> {
      const v = 'c-loginBlock-form'
      return ['c-loginBlock__form', v, this.isLoading && `${v}--loading`]
    }
  },

  methods: {
    handleSubmit() {
      const { email, password } = this

      this.isLoading = true
      this.errorMessage = null

      store
        .dispatch('login', { email, password })
        .catch(error => {
          this.errorMessage = error.message
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
})
</script>

<style lang="scss">
@import '../scss/colors.scss';

.c-loginBlock {
  margin: 0 auto;
  max-width: 420px;

  &__image {
    margin: 0 auto 56px;
    display: block;
  }
  &__title {
    margin: 0 0 38px;
    font-size: 30px;
    line-height: 1.2;
    text-align: center;
  }

  &__link {
    padding: 0;
    border: none;
    background: none;
    color: $color-primary;
    font-size: 14px;
    font-weight: bold;
    line-height: 16px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &__form {
    padding: 27px 35px 40px;
    border: 1px solid $color-border;
    border-radius: 8px;
  }
  &-form {
    position: relative;

    &::before,
    &::after {
      z-index: 1;
      position: absolute;
      display: none;
      content: '';
    }
    &::before {
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #ffffff;
      opacity: 0.4;
    }
    &::after {
      left: 50%;
      top: 50%;
      border: 2px solid;
      border-color: $color-primary transparent transparent transparent;
      border-radius: 100%;
      width: 64px;
      height: 64px;
      animation: loginBlockLoading linear 1s infinite;

      @keyframes loginBlockLoading {
        0% {
          transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
          transform: translate(-50%, -50%) rotate(360deg);
        }
      }
    }

    &--loading {
      &::before,
      &::after {
        display: block;
      }
    }

    &__field {
      & + & {
        margin-top: 9px;
      }
    }

    &__extra {
      margin: 15px 0 25px;
      display: flex;
      justify-content: space-between;
    }
    &__footer {
      padding-top: 15px;
    }

    &__errors li:first-child {
      margin-top: 10px;
    }
  }
}
</style>

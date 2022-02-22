<template>
  <div class="p-dashboard">
    <UserHeader class="p-dashboard__header" />

    <div class="container">
      <h1 class="ui-h1 p-dashboard__title">Projects Dashboard</h1>

      <div class="p-dashboard__search">
        <FormSearch v-model="searchValue" placeholder="subject or reference" />
      </div>

      <Tabs :items="tabNav">
        <template #employees>
          <div>working on</div>
        </template>

        <template #departments>
          <div>I'm departments</div>
        </template>
      </Tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserHeader from '../components/User/Header.vue'
import FormSearch from '../components/Form/Search.vue'
import Tabs from '../components/Tabs.vue'

export default defineComponent({
  components: { UserHeader, FormSearch, Tabs },

  data: () => ({
    searchValue: '',

    tabNav: [
      { label: 'Employees', name: 'employees' },
      { label: 'Departments', name: 'departments' }
    ]
  })
})
</script>

<style lang="scss">
.p-dashboard {
  &__header {
    margin-bottom: 16px;
  }
  &__search {
    margin-left: auto;
    margin-bottom: 20px;
    max-width: 304px;
  }

  &__title {
    margin: 0 0 16px;
  }
}
</style>

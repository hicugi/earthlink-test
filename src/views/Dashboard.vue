<template>
  <div class="p-dashboard">
    <UserHeader />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserHeader from '../components/User/Header.vue'

export default defineComponent({
  components: { UserHeader }
})
</script>

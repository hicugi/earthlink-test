<template>
  <div class="home">
    <br /><br /><br /><br /><br /><br />

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

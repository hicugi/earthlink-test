<template>
  <RouterView />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Almarai:wght@400;700&display=swap');
@import './scss/colors.scss';

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  color: $color-text;
  font-family: 'Almarai', sans-serif;
}
</style>

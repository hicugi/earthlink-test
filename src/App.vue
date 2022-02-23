<template>
  <RouterView />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Almarai:wght@400;700&display=swap');
@import './scss/colors.scss';
@import './scss/variables.scss';

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
  min-width: 320px;
  color: $color-text;
  font-family: 'Almarai', sans-serif;
}

.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  max-width: $width-container;
}

.ui-h1 {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.25em;
}
</style>

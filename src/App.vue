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

.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 1160px;
}

.ui-h1 {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.25em;
}
</style>

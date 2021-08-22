<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  
  data() {
    return {
    }
  }
}
</script>

<style>
@import "variables.css";

*, *::before, *::after {
  box-sizing: border-box;
}

body {
  background-color: var(--secondary-color);
  margin: 3%;

  @media (--min-tablet) {
    margin: 15px;
  }
}

#app {
  font-family: var(--primary-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-gray-dark);
  padding: 15px;
  background-color: var(--color-white);
}

h1 {
    display: block;
    font-size: 3em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

h2 {
    font-size: 2em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

h3 {
    font-size: 1.5em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

p {
    margin-block-start: 0;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

a {
  color: var(--color-back);
  transition: var(--main-transition);

  &:hover {
    color: var(--color-gray-medium);
  }
}

.layout {
  @media (--min-desktop) {
    display: flex;
    flex-wrap: wrap;
    align-items: top;
    justify-content: space-between;
  }
}

.layout__content {
  @media (--min-desktop) {
    flex: 1 1 50%;
  }
}

.layout__aside {
  display: none;
  padding-left: 40px;

  @media (--min-desktop) {
    display: block;
    flex: 0 0 350px;
  }
}
</style>

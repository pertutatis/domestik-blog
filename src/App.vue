<template>
  <div id="app">
    <header>
      <nav></nav>
    </header>
    <main>
      <pre>
        {{ post }}
      </pre>
      <article></article>
      <aside></aside>
    </main>
    <footer>
      <nav></nav>
    </footer>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
    }
  },

  computed: {
    ...mapState('blog', ['post']),
  },

  methods: {
    
    ...mapActions('blog', ['fetchBlogPost']),
  },

  mounted() {
    this.fetchBlogPost(1)
  },
}
</script>

<style>
@import "variables.css";

*, *::before, *::after {
  box-sizing: border-box;
}

html, body {
  height: 100vh;
  overflow-y: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: var(--red);
}
</style>

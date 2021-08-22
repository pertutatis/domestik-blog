<template>
  <aside class="layout__aside">
    <h3>Featured Posts</h3>
    <router-link to="/post/1" class="aside__anchor">featured post 1</router-link>
    <router-link to="/post/2" class="aside__anchor">featured post 2</router-link>
    <router-link to="/post/3" class="aside__anchor">featured post 3</router-link>
    <router-link to="/post/4" class="aside__anchor">featured post 4</router-link>
    <router-link to="/post/5" class="aside__anchor">featured post 5</router-link>
  </aside>
</template>

<script>

export default {
  name: 'BlogAside',
  data() {
    return {
    }
  }
}
</script>

<style scoped lang="postcss">
@import "../variables.css";

.aside__anchor {
  display: block;
  margin-bottom: 5px;
}
</style>

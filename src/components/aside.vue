<template>
  <aside class="layout__aside">
    <h3>Featured Posts</h3>
    <a href="#" class="aside__anchor">featured post 1</a>
    <a href="#" class="aside__anchor">featured post 2</a>
    <a href="#" class="aside__anchor">featured post 3</a>
    <a href="#" class="aside__anchor">featured post 4</a>
    <a href="#" class="aside__anchor">featured post 5</a>
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

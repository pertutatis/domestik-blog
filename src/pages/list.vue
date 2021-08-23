<template>
  <div id="app">
    <BlogHeader />
    <main class="layout">
      <BlogPostList :posts="posts"/>
      <BlogAside />
    </main>
    <BlogFooter />
  </div>
</template>

<script>
import BlogHeader from '../components/header.vue'
import BlogAside from '../components/aside.vue'
import BlogPostList from '../components/postList.vue'
import BlogFooter from '../components/footer.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    BlogHeader,
    BlogAside,
    BlogPostList,
    BlogFooter
  },
  data() {
    return {
    }
  },

  computed: {
    ...mapState('blog', ['posts']),
  },

  methods: {
    ...mapActions('blog', ['fetchBlogList']),
  },

  mounted() {
    this.fetchBlogList(1)
  },
}
</script>

<style scoped lang="postcss">
@import "../variables.css";
</style>

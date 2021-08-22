<template>
  <div id="app">
    <BlogHeader />
    <main class="layout">
      <img :src="post.featuredImage" alt="" class="post__hero">
      <BlogPost class="layout__content" :post="post"/>
      <BlogAside />
    </main>
    <BlogFooter />
  </div>
</template>

<script>
import BlogHeader from '../components/header.vue'
import BlogAside from '../components/aside.vue'
import BlogFooter from '../components/footer.vue'
import BlogPost from '../components/post.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    BlogHeader,
    BlogAside,
    BlogFooter,
    BlogPost
  },
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

<style scoped lang="postcss">
@import "../variables.css";

.post__hero {
  flex: 0 0 100%;
  max-width: 100%;
}
</style>

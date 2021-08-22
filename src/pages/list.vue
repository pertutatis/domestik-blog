<template>
  <div id="app">
    <BlogHeader />
    <main class="layout">
      <section class="layout__content">
        <article class="post__item" v-for="index in 9" :key="index" @click="navigate(index)">
          <img class="post__image" :src="'https://picsum.photos/400/250?image=107' + index" alt="">
          <div class="post__content">
            <h3 class="post__title">Lorem ipsum aqismet</h3>
            <p class="post__excerpt">Cras consequat dignissim luctus. Sed a ultrices odio, a facilisis sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut dolor quis enim maximus sagittis. Maecenas placerat auctor lectus, in tempus est. Nulla facilisi. Cras in quam pulvinar, sagittis ligula vel, malesuada enim. Cras convallis lacus ut pulvinar sodales. Donec iaculis sodales erat, vitae mollis enim sodales a. Nam leo dui, sagittis sed metus at, pellentesque lacinia felis. Donec id malesuada lectus. Nullam id porta elit. Ut a justo sagittis, ornare ligula at, porttitor lacus. Sed tempus velit ac cursus elementum. Nam rhoncus risus libero, sit amet varius leo euismod sed. Duis porta sit amet eros et posuere. Vivamus libero neque, ullamcorper ac ullamcorper nec, sagittis maximus arcu. Maecenas.</p>
            <p class="post__date">02-03-2021</p>
          </div>
        </article>
      </section>
      <BlogAside />
    </main>
    <BlogFooter />
  </div>
</template>

<script>
import BlogHeader from '../components/header.vue'
import BlogAside from '../components/aside.vue'
import BlogFooter from '../components/footer.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    BlogHeader,
    BlogAside,
    BlogFooter
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

    navigate(index) {
      this.$router.push({ name: 'post', params: { id: index } })
    }
  },

  mounted() {
    this.fetchBlogPost(1)
  },
}
</script>

<style scoped lang="postcss">
@import "../variables.css";

.post__item {
  margin-bottom: 30px;
  border-bottom: 2px solid var(--secondary-color);
  cursor: pointer;

  @media (--min-tablet) {
    display: flex;
    align-items: flex-start;
    padding-bottom: 30px;
  }
}

.post__image {
  max-width: 100%;

  @media (--min-tablet) {
    max-width: 25%;
  }

  @media (--min-desktop) {
    max-width: 400px;
  }
}

.post__title {
  margin-top: 0;
}

.post__content {
  @media (--min-tablet) {
    padding-left: 30px;
  }
}

.post__date {
  font-style: italic;
  font-size: 14px;
}
</style>

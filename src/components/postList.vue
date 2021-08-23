<template>
  <section class="layout__content">
    <article class="post__item" v-for="post in posts" :key="post.postId" @click="navigate(post.postId)">
      <img class="post__image" :src="post.featuredImage" :alt="post.title">
      <div class="post__content">
        <h3 class="post__title">{{ post.title }}</h3>
        <p class="post__excerpt">{{ post.lead }}</p>
        <p class="post__date">{{ post.date }}</p>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'BlogPostList',
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  methods: {
    navigate(index) {
      this.$router.push({ name: 'post', params: { id: index } })
    }
  }
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

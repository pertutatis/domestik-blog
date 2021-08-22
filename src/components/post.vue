<template>
  <article class="post">
    <header class="post__header">
      <h2 class="post__title">{{ post.title }}</h2>
    </header>

    <section class="post__intro">
      <p class="post__lead-in">{{ post.lead }}</p>
      <DomestikCarousel v-if="post.images" class="post__carousel" :carousels="post.images" :fade="true"/>
    </section>

    <section class="post__content" v-html="post.body" />
    
    <footer>
      <p class="post__date">{{ post.date }}</p>
    </footer>
  </article>
</template>

<script>
import DomestikCarousel from '@pertutatis/domestik-carousel/src/components/DomestikCarousel.vue'

export default {
  name: 'BlogPost',
  components: {
    DomestikCarousel
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="postcss">
@import "../variables.css";

.post__title {
  text-align: center;
}

.post__intro {
  @media (--min-tablet) {
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;
  }
}

.post__lead-in {
  font-weight: bold;

  @media (--min-tablet) {
    flex: 0 0 50%;
    padding-right: 10px;
  }
}

.post__carousel {
  margin-bottom: 1em;
  @media (--min-tablet) {
    flex: 0 0 50%
  }
}

.post__content {
  @media (--min-tablet) {
    column-count: 2;
  }

  @media (--min-desktop) {
    column-count: 3;
  }
}

.post__date {
  font-style: italic;
  font-size: 14px;
}
</style>

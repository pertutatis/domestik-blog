<template>
    <footer class="footer">
      <h1 class="footer__brand">LOGO</h1>
      <nav class="footer__menu">
        <a class="footer__anchor" href="#">Facebook</a>
        <a class="footer__anchor" href="#">Twitter</a>
        <a class="footer__anchor" href="#">Linkedin</a>
      </nav>
    </footer>
</template>

<script>

export default {
  name: 'BlogFooter',
  data() {
    return {
    }
  }
}
</script>

<style scoped lang="postcss">
@import "../variables.css";

.footer {
  padding-top: 30px;
  text-align: center;
}

.footer__brand {
  margin: 0;
  font-size: 32px;
  font-weight: bold;
}

.footer__anchor {
  padding: 0 5px;
}

</style>

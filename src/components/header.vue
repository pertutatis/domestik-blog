<template>
  <header class="header">
    <h1 class="header__brand">LOGO</h1>
    
    <div class="burger">
      <span clas="burger__line" />
      <span clas="burger__line" />
      <span clas="burger__line" />
    </div>

    <nav class="main-navigation">
      <a class="main-navigation__anchor" href="#">Link 1</a>
      <a class="main-navigation__anchor" href="#">Link 2</a>
      <a class="main-navigation__anchor" href="#">Link 3</a>
    </nav>
  </header>
</template>

<script>

export default {
  name: 'BlogHeader',
  data() {
    return {
    }
  }
}
</script>

<style scoped lang="postcss">
@import "../variables.css";


/* Header */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.header__brand {
  margin: 0;
  font-size: 40px;
  font-weight: bold;
}

/* Navigation */
.main-navigation {
  display: none;

  @media (--min-tablet) {
    display: block;
  }
}

.main-navigation__anchor {
  padding-left: 10px;
  font-weight: bold;
}

/* Burger icon */
.burger {
	position: relative;
	display: inline-block;
	width: 30px;
	height: 20px;

  @media (--min-tablet) {
    display: none;
  }
}
 
.burger__line {
	width: 100%;
	height: 2px;
	display: block;
	position: absolute;
	background: var(--color-gray-dark);
	transition: var(--main-transition);
	transform-origin: 0px 100%;
}
 
.burger__line:nth-child(2) {
	top: calc(50% - 1px);
}
 
.burger__line:nth-child(3) {
  bottom: 0;
}
</style>

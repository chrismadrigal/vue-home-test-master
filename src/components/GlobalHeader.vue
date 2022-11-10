<template>
  <header>
    <div class="container">
      <router-link to="/" class="logo">
        <img alt="Vue logo" src="@/assets/logo.svg" />
      </router-link>
      <h2>Refurbished</h2>
    </div>
  </header>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  padding: 10px 0;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  align-items: center;
}

.logo {
  margin-right: 20px;
}

.logo img {
  width: auto;
  height: 28px;
}

h2 {
  font-size: 0.8rem;
}

@media (min-width: 768px) {
  header {
    padding: 19px 0;
  }

  .logo img {
    height: 34px;
  }

  h2 {
    font-size: 0.813rem;
  }
}
</style>

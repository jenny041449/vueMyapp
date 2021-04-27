<template>
  <main class="main">

    <article class="container">
      <section class="carsoul">
        <div class="carsoulOver">
          <a @click="routerPush('About')"
            ><img
              class="banner"
              src="@/assets/image/banner_cake01.jpg"
              alt=""
              srcset=""
          /></a>
         
        </div>
      </section>
      <section class="main-guide">
        <a @click="routerPush('About')">
          <h2>進入</h2>
          <i class="fas fa-arrow-square-right"></i>
        </a>
      </section>
    </article>
  </main>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    routerPush(data) {
      this.$router.push({ name: data });
    },
  },
};
</script>


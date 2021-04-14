<template>
  <div>
    <div :class="[{ 'bg-cover':sm, 'bg-cover':md, 'bg-contain':lg }, 'banner' ]"></div>

    <div class="section">
      <div class="display-2 font-weight-bold">About</div>

      <p class="paragraph mt-10">I'm a <span class="paragraph-3">front-end developer</span> who loves building <span class="paragraph-2">websites</span> and <span class="paragraph-2">web apps</span>, enjoys <span class="paragraph-1">writing</span> blogs and likes <span class="paragraph-1">designing</span> logos. I'm also into sharing tech trivias through creative digital content. Most of these days, I've been building mini web apps with <span class="paragraph-3">Vue</span> and exporing different <span class="paragraph-3">design frameworks</span> like <span class="font-weight-bold">Tailwind</span> and <span class="font-weight-bold">Vuetify</span>.</p>

      <p class="paragraph mt-10"><span class="paragraph font-weight-bold">I'm currently interested in learning more about API integration and delving deeper into mobile responsiveness.</span> Aside from programming, I'm also doing makeup and learning from famous beauty gurus' creations. I stay fit through my childhood exercise tools: jumping rope and hulahoop. I’m also a low-rank League of Legends player but plays anyway.</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About'
  }
</script>

<style lang="scss" scoped>
  .banner {
    height: 100vh;
    background-image: url('~@/assets/about.png');
    background-position: center;
  }
</style>
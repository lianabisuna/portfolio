<template>
  <div>
    <div :class="[{ 'bg-cover':sm, 'bg-contain':lg }, 'banner' ]"></div>

    <div :class="[ 'section', { 'mx-5':sm } ]">
      <div class="display-2 font-weight-bold">About</div>

      <div>
        <p class="paragraph mt-10">I'm a <span class="paragraph-3">front-end developer</span> who loves building <span class="paragraph-2">websites</span> and <span class="paragraph-2">web apps</span>, enjoys <span class="paragraph-1">writing</span> blogs and likes <span class="paragraph-1">designing</span> logos. Most of these days, I've been building mini web apps with <span class="paragraph-3">Vue</span> and exploring different <span class="paragraph-3">design frameworks</span> like <span class="font-weight-bold">Tailwind</span> and <span class="font-weight-bold">Vuetify</span>. I also like to put grammar, symmetry and minimalism as essential part in most of my creations. I also share dev experiences and insert some of my <span class="font-weight-bold">graphic designs</span> through creating digital content.</p>

        <p class="paragraph mt-10"><span class="paragraph font-weight-bold">I'm currently interested in learning more about API integration and delving deeper into mobile responsiveness.</span> Aside from programming, I'm also doing makeup and learning from famous beauty gurus' creations. I stay fit through my childhood exercise tools: jumping rope and hulahoop. I’m also a low-rank League of Legends player—but plays anyway.</p>
      </div>

      <div class="d-flex justify-center mt-10">
        <v-btn
          rounded
          outlined
          dark
          x-large
        >
          Resume
          <v-icon right>mdi-download</v-icon>
        </v-btn>
      </div>
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
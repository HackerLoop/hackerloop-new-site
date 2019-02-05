<template>
  <div>
    <section class="container">
      <navbar></navbar>
      <div class='header'>
        <hero-mask></hero-mask>
        <h1>Highly engaging live experiences and products  that connect brands to customers</h1>
      </div>
    </section>
    <hr/>
    <section class='container'>
      <about></about>
    </section>
    <footer></footer>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import HeroMask from '~/components/HeroMask'
import About from '~/components/About'
import Footer from '~/components/Footer'

export default {
  components: {
    Navbar, HeroMask, About, Footer
  }
}
</script>

<style lang='scss'>
.container
{
  max-width: 724px;
  margin: auto;
  padding: 0 12px;
}

hr {
  height: 1px;
  background: $border-color;
  border: none;
}

.header {
  padding: ($spacing * 8) 0;
  padding-top: $spacing * 11;

  @media(max-width: 650px) {
    padding-top: $spacing * 13 !important;

  }


  h1 {
    font-size: 31px;
    letter-spacing: -1px;
    font-weight: 200;
    text-align: center;
    margin-top: $spacing * 3;
    line-height: 1.2;

    @media(max-width: 650px) {
      font-size: 22px;
      font-weight: 500;
      padding: 0 20px;
    }

  }
}

</style>

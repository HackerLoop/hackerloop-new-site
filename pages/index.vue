<template>
  <div class='site'>
    <container>
      <navbar></navbar>
      <div class='header'>
        <hero-mask></hero-mask>
        <h1>Highly engaging live experiences and products  that connect brands to customers</h1>
      </div>
    </container>
    <about></about>
    <case-studies></case-studies>
    <Footer></Footer>
  </div>
</template>

<script>
import Container from '~/components/Container'
import Navbar from '~/components/Navbar'
import HeroMask from '~/components/HeroMask'
import About from '~/components/About'
import CaseStudies from '~/components/CaseStudies'
import Footer from '~/components/Footer'

export default {
  components: {
    Navbar, HeroMask, About, Footer, Container, CaseStudies
  }
}
</script>

<style lang='scss' scoped>

hr {
  height: 1px;
  background: $border-color;
  border: none;
}

.header {
  padding: 100px 0;
  padding-top: 125px;
  text-align: center;

  @media(max-width: 650px) {
    // padding-top: $spacing * 13 !important;
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

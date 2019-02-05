<template>
  <div class='navbar'>
    <section class='container'>
      <logo-navbar ></logo-navbar>
      <div class='links'>
        <a
          v-for='(link, i) in links'
          :href='link.url'
          target='_blank'
          :key='i'
        >
          <div :is='link.icon'></div>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import LogoNavbar from '~/components/svg/logo_navbar'
import FacebookIcon from 'mdi-vue/FacebookIcon'
import TwitterIcon from 'mdi-vue/TwitterIcon'
import YoutubeIcon from 'mdi-vue/YoutubeIcon'

export default {
  components: { LogoNavbar, FacebookIcon, TwitterIcon, YoutubeIcon },
  data() {
    return {
      links: [
        {
          url: 'https://www.facebook.com/Hackerloop/',
          icon: FacebookIcon
        },
        {
          url: 'https://twitter.com/hackerloop',
          icon: TwitterIcon
        },
        {
          url: 'https://www.youtube.com/channel/UCp7r9542inp7BSTC3wvxA1g',
          icon: YoutubeIcon
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.navbar {
  padding: ($spacing * 1.5) 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;

  .container {
    display: flex;

  }

}

.links {
  margin-left: auto;

  a {
    width: 32px;
    height: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid $border-color;
    border-radius: 50%;
    margin-left: $spacing;

    &:hover {
      box-shadow: $box-shadow-1;
      svg {
        fill: rgba($black, .6);
      }
    }

    svg {
      width: 18px;
      fill: rgba($black, .5);
    }
  }
}
</style>

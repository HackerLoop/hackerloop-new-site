<template>
  <div>
    <div v-for='(item, i) in items' :key='i'>
      <case-study
        :i='i'
        :setActiveCase='setActiveCase'
        :activeCase='activeCase'
        v-bind='item'
      ></case-study>
    </div>
  </div>

</template>

<script>
  import CaseStudy from './CaseStudy'

  export default {
    components: { CaseStudy },
    methods: {
      setActiveCase(slug) {
        this.activeCase = slug
      }
    },
    data() {
      return {
        activeCase: null,
        items: [
          {
            title: 'Nosulus Rift',
            slug: 'nosulus',
            tagline: 'Hardware productizing',
            clients: ['ubisoft', 'buzzman'],
            color: '#68D80B',
            pattern: false,
            youtube_id: '22KZBhrksbk'

          },
          {
            title: 'Redbull Kumite',
            slug: 'redbull_kumite',
            tagline: 'Twitch extension and event management',
            clients: ['redbull'],
            color: '#E21B4D',
            youtube_id: 'qlJlXFYFlhc'

          },
          {
            title: 'Watch Dogs 2',
            slug: 'watch_dogs_2',
            tagline: 'Twitch extension and event management',
            clients: ['ubisoft'],
            color: '#B900FF',
            youtube_id: '6Y1dq1RvzHk'
          },
          {
            title: 'TwitchCon17',
            slug: 'twitchcon17',
            tagline: 'Twitch extension and event management',
            clients: ['ubisoft', 'divimode'],
            color: '#6441A5',
            youtube_id: 'N47eYIFGBBo'
          }
        ]
      }
    }
  }
</script>

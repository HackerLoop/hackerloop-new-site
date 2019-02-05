<template>
  <div>
    <div v-for='(item, i) in items' :key='i'>
      <case-study :i='i' v-bind='item'></case-study>
    </div>
  </div>

</template>

<script>
  import CaseStudy from './CaseStudy'

  export default {
    components: { CaseStudy },
    data() {
      return {
        items: [
          {
            title: 'Nosulus Rift',
            slug: 'nosulus',
            tagline: 'Hardware productizing',
            clients: ['ubisoft', 'buzzman'],
            color: '#68D80B'
          }
        ]
      }
    }
  }
</script>

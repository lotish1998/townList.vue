<template>
  <div id="app" class="bcg">

    <v-block
      :towns_data='TOWNS'
    />


  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import vBlock from './components/block/v-block'

export default {
  name: 'App',
  components: {
    vBlock,
  },
  data: () => {
    return {

    }
  },

  computed: {
    ...mapGetters([
      'TOWNS'
    ])

  },

  methods: {
    ...mapActions([
      'GET_TOWNS_FROM_API'
    ])
  },
  mounted() {
    this.GET_TOWNS_FROM_API()
  }
}
</script>

<style>

#app {
  font-family:  Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: url('./assets/map.svg') no-repeat;
}
</style>

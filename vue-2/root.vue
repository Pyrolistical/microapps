<template>
  <div id="vue-entry">
    <MicroappSelector />
    <p>This is a <a href="https://vuejs.org/">Vue</a> 2 Microapp.</p>
    <p>Tell me your name and I'll remember it between Microapps: <input v-model="name" v-on:input="changeName" /></p>
  </div>
</template>

<script>
import MicroappSelector from './microapp-selector.vue'

export default {
  props: [
    'nameService'
  ],

  components: {
    MicroappSelector
  },

  data() {
    return {
      name: this.nameService.get() || ''
    }
  },

  methods: {
    changeName() {
      this.nameService.save(this.$data.name)
    }
  }
}
</script>

<template>
  <dl>
    <dt>Choose Microapp:</dt>
    <dd><a href="..">Root</a></dd>
    <dd v-for="(name, slug) in microapps">
      <strong v-if="slug === 'vue-2'">{{name}}</strong>
      <a v-else v-bind:href="`../${slug}`">{{name}}</a>
    </dd>
  </dl>
</template>

<script>
import microapps from '../microapps.json'

export default {
  data() {
    return {
      microapps
    }
  }
}
</script>
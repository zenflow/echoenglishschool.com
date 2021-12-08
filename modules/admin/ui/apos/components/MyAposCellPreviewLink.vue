<template>
  <p
    class="apos-table__cell-field"
    :class="`apos-table__cell-field--${header.name}`"
  >
    <a v-on:click.stop :href="item._url" :target="header.target || '_blank'">
      {{ header.text || 'Preview' }}
    </a>
  </p>
</template>

<script>
export default {
  name: 'MyAposCellLink',
  props: {
    item: {
      type: Object,
      required: true
    },
    header: {
      type: Object,
      required: true
    }
  },
};
</script>

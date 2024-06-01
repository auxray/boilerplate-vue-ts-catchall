<template>
  <h1>Catch-All</h1>
  <ul>
    <li>Rendered to HTML.  ({{ data.randNum }})</li>
    <li>Interactive. <Counter /></li>
  </ul>
</template>

<script lang="ts" setup>
import Counter from './Counter.vue'
import type { Data } from './+data'
import { useData } from '../../renderer/useData'
const data = useData<Data>()
import { usePageContext } from '../../renderer/usePageContext'

const pageContext = usePageContext()
const { urlPathname } = pageContext;
console.log(`+Page newRand=${data.value.randNum}, urlPath=${urlPathname}`);
</script>

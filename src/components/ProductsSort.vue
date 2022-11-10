<!--
  We can use a custom select component here but for now
  I'm using a native <select> element.
-->
<template>
  <div class="select">
    <select v-model="sort" @change="onChange">
      <option value="">Sort By</option>
      <option value="priceAsc">Price: Low - High</option>
      <option value="priceDesc">Price: High - Low</option>
    </select>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
const sort = ref("");

// Emit an event after change.
const emit = defineEmits(["changeSort"]);

const onChange = () => {
  emit("changeSort", sort.value);
};
</script>

<style scoped>
.select {
  align-items: center;
  position: relative;
  min-width: 15ch;
  max-width: 30ch;
  border: 1px solid var(--color-border);
  font-size: 1rem;
  cursor: pointer;
  background: #fff;
}

.select::after {
  position: absolute;
  top: 15px;
  right: 12px;
  color: var(--color-text-dark);
  border-style: solid;
  border-width: 0.17rem 0.17rem 0 0;
  content: '';
  display: inline-block;
  height: 8px;
  width: 8px;
  vertical-align: top;
  transform: rotate(135deg);
}
</style>

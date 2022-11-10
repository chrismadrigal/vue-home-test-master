<template>
  <suspense>
    <Products />
  </suspense>

</template>

<!--
  This is simply a wrapper component to use suspense and  provide fallback content.
  We are not displaying a #fallback template at the moment.
 -->
<script setup>
import { onErrorCaptured } from "vue";
import Products from "@/components/Products";

onErrorCaptured(() => {
  console.log("Sorry, something when wrong :(")
});
</script>

<template>
  <div class="reviews-form">
    <h3 class="leave-review-title">Leave a Review</h3>
    <form @submit.prevent="onSubmit">
      <h1>Form here</h1>
      {{ }}
    </form>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// Component Props
defineProps({
  productId: {
    type: Number,
    required: true,
  },
});


// Handles Submitting the form
const onSubmit = () => {
  console.log("onSubmit")
};
</script>

<style scoped>
.reviews-form {
  background: var(--color-background-light);
  padding: 20px;
  margin: 0 -20px;
}

.leave-review-title {
  padding-bottom: 10px;
  margin-bottom: var(--sections-spacing-mobile);
  border-bottom: 1px solid var(--color-border-darker);
}

@media (min-width: 768px) {
  .reviews-form {
    padding: 20px 30px;
    margin: 0;
  }
}
</style>

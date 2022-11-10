<template>
  <div class="product-reviews">
    <div v-for="review of reviews" :key="review.id" class="product-review">
      <div class="product-review-inner">
        <div class="review-info">
          <RatingStars :grade="review.star_rating" class="review-info-stars" />
          <h3 class="review-author">{{ review.author }}</h3>
          <p class="review-location">{{ review.location }}</p>
        </div>
        <div class="review-body">
          <p>{{ review.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import RatingStars from "@/components/RatingStars";

// Products Prop
defineProps({
  reviews: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.product-reviews {
  margin-bottom: var(--sections-spacing-mobile);
}

.product-review {
  padding: 20px 16px;
  box-shadow: 0.5px 0.5px 6px 1px rgba(0, 0, 0, 0.06), 2px 4px 4px rgba(0, 0, 0, 0.07);
  margin-bottom: 32px;
}

.review-info {
  margin-bottom: 32px;
}

.review-info-stars {
  margin-bottom: 16px;
}

.review-author {
  font-size: 1rem;
}

.review-location {
  text-transform: capitalize;
}

@media (min-width: 768px) {
  .product-reviews {
    margin-bottom: var(--sections-spacing-mobile);
  }

  .product-review {
    padding: 16px 0;
    box-shadow: none;
    border-top: 1px solid var(--color-border-darker);
    margin-bottom: 0;
  }

  .product-review:last-child {
    border-bottom: 1px solid var(--color-border-darker);
  }

  .product-review-inner {
    display: flex;
    align-items: center;
  }

  .review-info-stars {
    margin-bottom: 8px;
  }

  .review-info,
  .review-body {
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .review-body p {
    display: flex;
    align-items: center;
    min-height: 108px;
  }

  .review-info {
    flex-grow: 0;
    flex: 0 0 224px;
    flex-direction: column;
    padding-right: 40px;
    margin-bottom: 0;
  }

  .review-body {
    padding-left: 60px;
    border-left: 1px solid var(--color-border-darker);
  }
}
</style>

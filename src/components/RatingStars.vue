<template>
  <div class="rating">
    <ul class="list" :class="{ interactive: interactive }">
      <li v-for="star in maxStars" :key="star" class="star" :class="{ active: star <= grade }"
        @click="onClickStar(star)">
        <StarIcon />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import StarIcon from "@/components/StarIcon.vue";

// Emit an event after change.
const emit = defineEmits(["change"]);

const props = defineProps({
  grade: {
    type: Number,
    required: true,
  },
  maxStars: {
    type: Number,
    default: 5,
  },
  interactive: {
    type: Boolean,
    default: false,
  },
});

const onClickStar = (star) => {
  // Bail if the interactive props is not set to true.
  if (!props.interactive) return;

  // Emit an event and let the parent component update the grade prop.
  if (typeof star === "number" && star <= props.maxStars && star >= 0) {
    emit("change", star);
  }
};
</script>

<style scoped>
.rating {
  font-size: 22px;
  color: #eeeeee;
}

.list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  white-space: nowrap;
  font-size: 0;
}

.star {
  display: inline-block;
}

.interactive:hover .star,
.active {
  color: var(--color-accent);
}

/* Subsequent-sibling selector to prevent all the stars from changin color on hover */
.star:hover~.star:not(.active) {
  color: inherit;
}

.interactive .star {
  cursor: pointer;
}
</style>

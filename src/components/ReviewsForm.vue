<template>
  <div class="reviews-form">
    <h3 class="leave-review-title">Leave a Review</h3>
    <form @submit.prevent="onSubmit">
      <div class="form-sections">
        <div class="form-section">
          <p class="section-label">Your Info (required)</p>
          <input type="text" placeholder="Name" v-model.trim="formData.author" required />
          <input type="text" placeholder="Location" v-model.trim="formData.location" required />
        </div>
        <div class="form-section">
          <p class="section-label">Write your Review (required)</p>
          <textarea placeholder="Tell us what you think" v-model.trim="formData.body" required></textarea>
        </div>
        <div class="form-section">
          <p class="section-label">Overall Rating (required)</p>
          <RatingStars :grade="formData.star_rating" :interactive="true" @change="onChangeRating" />
        </div>
      </div>
      <div class="submit-section">
        <button class="button" :disabled="submittingForm">Submit</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import RatingStars from "@/components/RatingStars";
import { ref, reactive, defineProps, defineEmits, toRaw } from "vue";
import axios from "axios";

// Component Props
const props = defineProps({
  productId: {
    type: Number,
    required: true,
  },
});

// Ref for disabling the submit button while a post request is happening
const submittingForm = ref(false);

// Emit an event after change.
const emit = defineEmits(["reviewAdded"]);

// Gets the default form data.
const getDefaultData = () => ({
  author: "",
  location: "",
  body: "",
  star_rating: 0, // Ideally this would have been spell starRating
});

// React formData for v-model's
const formData = reactive(getDefaultData());

// Reset form data
const resetFormData = () => Object.assign(formData, getDefaultData());

// Update formData field when a start rating is selected
const onChangeRating = (newRating) => {
  formData.star_rating = newRating;
};

// Handles Submitting the form
const onSubmit = () => {
  // Super quick fields validation before submitting the form.
  // This will of course be implemented in a different manner. Either by
  // having a custom validator or using a validator library.
  if (
    formData.author === ""
    || formData.location === ""
    || formData.body === ""
    || formData.star_rating === 0
  ) {
    alert("Please complete all required fields.\nI know this alert is ugly :(")
  } else {
    postNewReview();
  }
};

// @Note: I would have like to extract this logic into a composable.
const postNewReview = async () => {
  submittingForm.value = true;

  // Data to send on the post request.
  const data = {
    ...toRaw(formData),
    id: Date.now(),  // Using date as id. Ideally this will use some helper to create id.
    productId: props.productId,
  };

  try {
    // Post new Review
    const res = await axios.post("http://localhost:3004/reviews", data);
    // Notify parent component that a new review was added.
    emit("reviewAdded", res.data);
  } catch (error) {
    // Not handling the errors in the UI at the moment.
    // But we could handle them with this error state.
    console.log("Error Posting review", error);
  } finally {
    // Update submittingForm state.
    submittingForm.value = false;
    // Reset form state to default.
    resetFormData();
  }
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

.form-sections {
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 0;
  grid-row-gap: 30px;
}

.section-label {
  font-weight: 600;
  margin-bottom: 16px;
}

.submit-section {
  margin-top: var(--sections-spacing-mobile);
}

.submit-section button {
  width: 100%;
}

@media (min-width: 768px) {
  .reviews-form {
    padding: 20px 30px;
    margin: 0;
  }

  .form-sections {
    grid-template-columns: repeat(3, 30%);
    grid-column-gap: 5%;
  }

  .submit-section {
    display: flex;
    justify-content: flex-end;
  }

  .submit-section button {
    width: auto;
  }
}
</style>

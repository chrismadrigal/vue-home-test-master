<template>
    <div class="container products-header">
        <h2>Refurbished</h2>
        <ProductsSort @changeSort="onChangeSort" />
    </div>
    <div class="container" v-if="products">
        <ProductsGrid :products="products" />
    </div>
</template>

<script setup>
import { ref } from "vue";
import useApi from "@/composables/useApi.js";
import ProductsSort from "@/components/ProductsSort";
import ProductsGrid from "@/components/ProductsGrid";

// Fetch the initial products
const { response: products, reload } = await useApi("/products");

// Sort products ref
const productsSort = ref("");

// Event fire by ProductsSort component when changing sort
const onChangeSort = (newSort) => {
    productsSort.value = newSort;
    sortProductsByPrice();
};

// Fetch new products sort by price or revert to default product sort.
const sortProductsByPrice = () => {
    let sortOrder = "";

    if (productsSort.value === "priceAsc") {
        sortOrder = "asc";
    }

    if (productsSort.value === "priceDesc") {
        sortOrder = "desc";
    }

    const apiPath = sortOrder
        ? `/products?_sort=priceCents&_order=${sortOrder}`
        : "/products";

    reload(apiPath);
};
</script>

<style scoped>
.products-header {
    margin-bottom: var(--sections-spacing-mobile);
}

@media (min-width: 768px) {
    .products-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>

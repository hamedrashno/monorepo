<script setup lang="ts">
defineProps<{ message: string }>();
defineEmits<{ retry: [] }>();
</script>

<template>
  <section class="state-message state-message--error" role="alert">
    <p>{{ message }}</p>
    <button class="button" type="button" @click="$emit('retry')">Try again</button>
  </section>
</template>

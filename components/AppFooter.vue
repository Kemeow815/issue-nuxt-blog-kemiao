<script setup lang="ts">
const { VITE_OWNER } = import.meta.env
</script>

<template>
  <footer class="pt-5em">
    <div class="flex items-center flex-col md:flex-row gap-1em">
      <span class="op-50 text-sm">
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" class="underline mr-2" target="_blank" rel="noopener noreferrer">
          CC BY-NC-SA 4.0
        </a>
        2025-PRESENT © {{ VITE_OWNER }}
      </span>
    </div>
  </footer>
</template>

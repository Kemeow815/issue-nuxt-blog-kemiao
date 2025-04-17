<script setup lang="ts">
const { VITE_OWNER, VITE_BLOGS_REPO } = import.meta.env
const repoIssuesPath = `https://github.com/${VITE_OWNER}/${VITE_BLOGS_REPO}/issues`
</script>

<template>
  <header class="max-w-73ch m-auto flex items-center justify-end gap-5% text-lg p-2em p-x-12">
    <NuxtLink to="/blog" title="博客" class="transition-opacity op-70 hover:op-100">
      Blog
    </NuxtLink>

    <NuxtLink to="/" title="关于我" class="transition-opacity op-70 hover:op-100">
      About
    </NuxtLink>

    <span class="ml-auto" />

    <NuxtLink to="/search" title="Search" class="transition-opacity op-70 hover:op-100">
      <div class="i-icon-park-outline-search" />
    </NuxtLink>

    <a
      :href="`https://rsshub.app/github/issue/${VITE_OWNER}/${VITE_BLOGS_REPO}`" target="_blank" title="RSS"
      class="transition-opacity op-70 hover:op-100 i-icon-park-outline-rss"
    />
    <a
      :href="repoIssuesPath" target="_blank" title="GitHub Issues"
      class="transition-opacity op-70 hover:op-100 i-icon-park-outline-github-one"
    />
    <dark-mode class="transition-opacity op-70 hover:op-100" />
  </header>
</template>

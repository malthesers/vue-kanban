<template>
  <VAppBar :elevation="3" class="py-2 px-4">
    <VAppBarTitle class="font-weight-bold">Kanban Board</VAppBarTitle>
    <VSheet class="d-flex ga-4">
      <AddStatusContainerButton />
      <SignOutButton />
    </VSheet>
  </VAppBar>
</template>

<script setup lang="ts"></script>

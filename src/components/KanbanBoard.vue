<template>
  <VMain class="d-flex h-screen">
    <VContainer class="mt-4 grow">
      <VRow class="h-100 ga-4">
        <StatusContainer title="To do" bgColor="bg-pastelGreen" />
        <StatusContainer title="In progress" bgColor="bg-pastelYellow" />
        <StatusContainer title="Blocked" bgColor="bg-pastelRed" />
        <StatusContainer title="Done" bgColor="bg-pastelBlue" /> </VRow
    ></VContainer>
  </VMain>
</template>

<script setup lang="ts"></script>

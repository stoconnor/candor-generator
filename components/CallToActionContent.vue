<template>
  <section class="container mx-auto text-center py-6 mb-12">
    <h1
      class="w-full my-2 text-5xl font-bold leading-tight text-center text-white"
    >
      Inspired By
    </h1>
    <div class="w-full mb-4">
      <div
        class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"
      ></div>
    </div>
    <div class="flex flex-col sm:flex-row justify-center gap-10">
      <div><img class="object-contain h-64" src='~/assets/img/no-rules-rules.jpg'></div>
      <div><img class="object-contain h-64" src='~/assets/img/radical-candor.jpg'></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CallToActionContent'
}
</script>

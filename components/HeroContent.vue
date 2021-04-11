<template>
  <div class="pt-24">
    <div
      class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-start"
    >
      <!--Left Col-->
      <div
        class="flex flex-col flex-grow w-7/12 md:text-left"
      >
        <h1 class="my-4 text-5xl font-bold leading-tight">
          Feedback in the workplace is important!
        </h1>
        <p class="leading-normal text-2xl mb-8">
          How you deliver it is even more important <i class="em-svg em-loudspeaker" aria-role="presentation"></i>
        </p>
      </div>
      <!--Right Col-->
      <div class="flex flex-col w-5/12 py-6 items-end">
        <img class="w-3/5 z-30" src="~/assets/img/remote-meeting.svg?inline" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroContent'
}
</script>

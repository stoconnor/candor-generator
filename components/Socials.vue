<template>
  <div
    class="bg-white flex flex-col sm:flex-row justify-center gap-10 items-center"
  >
    <a href="https://www.buymeacoffee.com/soconnor" target="_blank"
      ><img
        src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
        alt="Buy Me A Coffee"
        style="height: 60px !important; width: 217px !important"
        class="justify-center w-full text-center"
    /></a>
    <div class="ml-3 inline-flex rounded-md shadow items-center">
      <a
        href=""
        v-on:click.prevent="doCopy"
        class="text-xl inline-flex items-center justify-center px-2 py-1 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-indigo-50"
        ><svg
          class="h-12 w-12 pr-2 text-black"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          />
        </svg>
        View this on GitHub
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Socials',
}
</script>
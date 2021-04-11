<template>
  <section class="bg-white px-10 text-gray-600">
    <div>
      <div>
        <h1
          class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
        >
          Examples
        </h1>
        <div class="w-full mb-4">
          <div
            class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
          ></div>
        </div>
        <button
          class="leading-tight lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full py-4 my-6 px-8 shadow-lg"
          v-on:click="toggleDiv()"
        >
          {{ display_text }}
        </button>
        <div v-if="display_div">
          <ul class="list-disc list-inside ml-5">
            <li>
              Bad Feedback: "The way you pick your teeth in meetings with
              external partners is irritating"
            </li>
            <li>
              Good Feedback: "If you stop picking your teeth in external partner
              meetings, the partners are more likely to see you as a
              professional, and we're more likely to build a strong
              relationship"
            </li>
            <li>
              Breakdown of the Good Feedback.
              <ul class="list-disc list-inside ml-20">
                <li>"If you"</li>
                <li>"stop" is the <b>Verb</b></li>
                <li>"picking your teeth" is the <b>Action</b></li>
                <li>
                  "in external partner meetings" is the area of
                  <b>Improvement</b>
                </li>
                <li>
                  "the partners are more likely to see you as a professional,
                  and we're more likely to build a strong relationship" is the
                  <b>Positive Outcome</b>
                </li>
              </ul>
            </li>
            <br />
            <li>
              Bad Feedback: "Your presentation is undermining it's own messages"
            </li>
            <li>
              Good Feedback: "If you can find a way to solicit contributions
              from other nationalities in the room your presentation will be
              more powerful"
            </li>
            <li>
              Breakdown of the Good Feedback.
              <ul class="list-disc list-inside ml-20">
                <li>"If you can"</li>
                <li>"find a way" is the <b>Verb</b></li>
                <li>"to solicit" is the <b>Action</b></li>
                <li>
                  "contributions from other nationalities in the room" is the
                  area of
                  <b>Improvement</b>
                </li>
                <li>
                  "your presentation will be more powerful" is the
                  <b>Positive Outcome</b>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Generator',
  data() {
    return {
      display_div: true,
      display_text: 'Hide',
    }
  },
  methods: {
    toggleDiv: function () {
      this.display_div = !this.display_div
      if (this.display_div) this.display_text = 'Hide'
      else this.display_text = 'Show'
    },
  },
}
</script>
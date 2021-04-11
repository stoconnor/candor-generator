<template>
  <section class="bg-gray-100 py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Generator
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
    </div>
    <div id="app" class="bg-white grid grid-flow-row gap-1 px-10 text-xl">
      <div class="flex-none"><p>If you could ...</p></div>

      <div class="flex-none">
        <v-select taggable push-tags v-model="verb_text" :options="verb" />
      </div>
      <div class="flex-none">
        <v-select taggable push-tags v-model="action_text" :options="action" />
      </div>
      <div>
        <v-select
          taggable
          push-tags
          v-model="improvement_text"
          :options="improvement"
        />
      </div>
      <div class="flex-none">
        <v-select
          class="flex-auto"
          taggable
          push-tags
          v-model="positive_outcome_text"
          :options="positiveOutcome"
        />
      </div>
    </div>
    <div class="bg-gray-50">
      <div
        class="max-w-7xl mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
      >
        <h2
          class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          <span class="block">{{ result }}</span>
        </h2>
      </div>
      <div class="flex mb-8 lg:flex-shrink-0 justify-center">
        <div class="ml-3 inline-flex rounded-md shadow">
          <a
            href=""
            v-on:click.prevent="doCopy"
            class="text-3xl inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-indigo-50"
          >
            Copy Text
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import 'vue-select/dist/vue-select.css'
export default {
  name: 'Generator',
  data() {
    return {
      verb_text: 'Enter the Verb',
      action_text: 'Enter the Action',
      improvement_text: 'Enter the Area of Improvement',
      positive_outcome_text: 'Enter the Positive Outcome',
      verb: ['find a way', 'start', 'stop', ''],
      action: [
        'to solicit',
        'to deliver',
        'to focus',
        'to stop',
        'to start',
        'picking your teeth',
        '',
      ],
      improvement: [
        'contributions from other nationalities in the room',
        'in external partner meetings',
        '',
      ],
      positiveOutcome: [
        'your presentation will be more powerful',
        'the partners are more likely to see you as a professional, and we are more likely to build a strong relationship',
        '',
      ],
    }
  },
  computed: {
    result: function () {
      return (
        'If you could ' +
        this.verb_text +
        ' ' +
        this.action_text +
        ' ' +
        this.improvement_text +
        ' ' +
        this.positive_outcome_text
      )
    },
  },

  methods: {
    doCopy: function () {
      var self = this
      this.$copyText(this.result).then(
        function (e) {
          self.sendToast('Copied!')
        },
        function (e) {
          self.sendToast('Error with copying')
        }
      )
    },
    sendToast: function (message) {
      this.$toasted.show(message, { duration: 1500 })
    },
  },
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
.black-active {
  background-color: #00e5ee;
  color: white;
  height: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 0;
}
</style>
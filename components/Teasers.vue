<template>
  <section class="bg-white border-b py-8">
    <div class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            The 5 A's
          </h1>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to give feedback
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-700 lg:mx-auto">
            Feedback in the workplace is really important. How you deliver it can be just as important. It needs to be actionable and delivered with positive intent.
          </p>
        </div>
        <div class="mt-10">
          <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10">
            <div class="relative pb-5">
              <dt>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900"><i class="em-svg em-handshake" aria-role="presentation" aria-label="HANDSHAKE"></i>&nbsp;Aim to Assist</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-700">
                Feedback must be given with positive intent. Giving feedback to get frustration off your chest, intentionally hurting others or furthering your political agenda is not tolerated. Clearly explain how a specific behaviour change will help the individual or company, now how it will help you. "The way you pick your teeth in meetings with external partners is irritating" is wrong feedback. Right feedback would be, "If you stop picking your teeth in external partner meetings, the partners are more likely to see you as a professional, and we're more likely to build a strong relationship" 
              </dd>
            </div>
            <div class="relative pb-5">
              <dt>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900"><i class="em-svg em-pencil2" aria-role="presentation" aria-label="PENCIL"></i>&nbsp;Actionable</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-700">
                Your feedback must focus on what the recipient can do differently. As an example, take a presenter, presenting on The Culture Map that asks an international audience for comments and calls on the first person to raise their hand. The problem was that only the American audience was raising their hand. Wrong feedback to the presenter in this scenario would be something like "Your presentation is undermining it's own messages". Right feedback would be more along the lines of "If you can find a way to solicit contributions from other nationalities in the room your presentation will be more powerful". That feedback worked and the presenter asked specifically for a comment from each country represented in the audience. 
              </dd>
            </div>
            <div class="relative pb-5">
              <dt>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900"><i class="em-svg em-sunflower" aria-role="presentation" aria-label="SUNFLOWER"></i>&nbsp;Appreciate</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-700">
                Natural human inclination is to provide a defense or excuse when receiving criticism; we all reflexively seek to protect our egos and reputation. When you receive feedback, you need to fight this natural reaction and instead ask yourself, "How can I show appreciation for this feedback by listening carefully, considering the message with an open mind and becoming neither defensive nor angry?" 
              </dd>
            </div>
            <div class="relative pb-5">
              <dt>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900"><i class="em-svg em-first_quarter_moon" aria-role="presentation" aria-label="FIRST QUARTER MOON SYMBOL"></i>&nbsp;Accept or Discard</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-700">
                You will hopefully receive feedback from lots of people. You are required to listen and consider all feedback provided. You are not required to follow it. Say "Thank You" with sincerity. Both you and the provider must understand that the decision to react to the feedback is entirely up to the recipient. 
              </dd>
            </div>
            <div class="relative pb-5">
              <dt>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900"><i class="em-svg em-earth_asia" aria-role="presentation" aria-label="EARTH GLOBE ASIA-AUSTRALIA"></i>&nbsp;Adapt</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-700">
                A workplace can be a multi-national, diverse culture. Adapt your delivery and your reaction to the culture you're working with to get the results that you need. There is a lot more reading on this in the book The Culture Map, as just one example some cultures require direct feedback, "Your presentation would be more powerful if you can solicit contributions from other nationalities", some require more indirect feedback "You did a great job on the presentation but it would be more powerful if you can solicit contributions from other nationalities". It's very important to adapt how you give and receive your feedback. 
              </dd>
            </div>            
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TeaserColumn from '@/components/TeaserColumn'

export default {
  name: 'Teasers',
  components: {
    'teaser-column': TeaserColumn
  }
}
</script>

<template>
  <div>
    <hero />
    <teasers />
    <generator />
    <social />
    <example />
    <call-to-action />
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Teasers from '@/components/Teasers'
import CallToAction from '@/components/CallToAction'
import Generator from '@/components/Generator'
import Examples from '@/components/Examples'
import Socials from '@/components/Socials'

export default {
  name: 'LandingPage',
  components: {
    hero: Hero,
    teasers: Teasers,
    generator: Generator,
    example: Examples,
    social: Socials,
    'call-to-action': CallToAction,
  },
}
</script>
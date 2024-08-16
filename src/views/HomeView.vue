<template>
  <TheFront />
  <SkillsCarousel />
  <UtilitiesComponent />
  <ContactForm />

</template>

<script>
import TheFront from '@/components/TheFront.vue';
import SkillsCarousel from '@/components/SkillsCarousel.vue';
import UtilitiesComponent from '@/components/UtilitiesComponent.vue';
import ContactForm from '@/components/ContactForm.vue';



export default {
  name: 'HomeView',
  components: {
    TheFront,
    SkillsCarousel,
    UtilitiesComponent,
    ContactForm
  },
  mounted() {
    const elementosCarousel = document.querySelectorAll(".carousel")
    /* eslint-disable */
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        shift: 5,
        padding: 1,
        numVisible: 10,

    })
},
}

</script>

<template>
  <div>
    <GoBack />
    <section class="entity">
      <h1>{{ destination.name }}</h1>
      <div class="entity-details">
        <img :src="require('@/assets/' + destination.image)" />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section class="experiences">
      <h2>TOP experiences in {{ destination.name }}</h2>
      <div class="cards" id="experience">
        <div
          v-for="experience in destination.experiences"
          :key="experience.slug"
          class="card"
        >
          <router-link
            :to="{
              name: 'ExperienceDetails',
              params: { experienceSlug: experience.slug },
              hash: '#experience'
            }"
          >
            <img
              :src="require('@/assets/' + experience.image)"
              alt="experience.name"
            />
            <span class="card_text">
              {{ experience.name }}
            </span>
          </router-link>
        </div>
      </div>
      <router-view :key="$route.path" />
    </section>
  </div>
</template>

<script>
import GoBack from "@/components/GoBack";

export default {
  components: {
    GoBack
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    destination() {
      // eslint-disable-next-line no-undef
      return MEApp.mystore.destinations.find(
        destination => destination.slug === this.slug
      );
    }
  }
};
</script>

<style scoped>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.entity-details {
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
.cards {
  display: flex;
  justify-content: space-between;
}
.cards img {
  max-height: 200px;
}
.card {
  padding: 0 20px;
  position: relative;
}
.card_text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}
.experiences {
  padding-top: 40px;
}
</style>

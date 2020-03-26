<template>
  <div>
    <section class="entity">
      <h1>{{ destination.name }}</h1>
      <div class="entity-details">
        <img :src="require('@/assets/' + destination.image)" />
        <p>{{ destination.description }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import store from "@/store.js";

export default {
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    destination() {
      return store.destinations.find(
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
</style>

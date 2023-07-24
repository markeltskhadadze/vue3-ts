<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue'

let width: Ref<number> = ref(window.innerWidth)
let firstName: Ref<string> = ref('')
let email: Ref<string> = ref('')
let lastName: Ref<string> = ref('')

function updateWidth (): void {
  width.value = window.innerWidth
}

onMounted (async () => {
  window.addEventListener('resize', updateWidth)
})
</script>

<template>
  <div>
    <h2>Subscribe to updates</h2>
    <div class="flex justify-around top-content">
      <img :class="{ 'image-banner': width > 1200, 'image-banner-modile': width < 1200 }" src="../../public/190827135829_mb073lo-2014-2034.jpeg" alt="">
      <div data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
          class="banner-content">
        <input
          type="text"
          v-model.trim="firstName" placeholder="First Name *"
          required
          >
        <!-- <p class="error-form-message mb-0" v-if="$v.firstName.$dirty && !$v.firstName.required">Required field</p>
        <p class="error-form-message mb-0" v-if="$v.firstName.$dirty && !$v.firstName.minLength">Name must be more than 1 character</p> -->
        <input type="text"
          v-model.trim="lastName" placeholder="Last Name *"
          required
          >
        <!-- <p class="error-form-message mb-0" v-if="$v.lastName.$dirty && !$v.lastName.required">Required field</p>
        <p class="error-form-message mb-0" v-if="$v.lastName.$dirty && !$v.lastName.minLength">Name must be more than 1 character</p> -->
        <input type="text"
          v-model.trim="email" placeholder="Email Subject *"
          required
          >
        <!-- <p class="error-form-message mb-0" v-if="$v.email.$dirty && !$v.email.required">Required field</p>
        <p class="error-form-message mb-0" v-if="$v.email.$dirty && !$v.email.email">Enter email</p> -->
        <textarea name="" placeholder="Write somthing here..." id="" cols="30" rows="10"></textarea>
        <button variant="dark">Submit</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-content {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 500px;
}
.top-content {
  padding: 20px 0px 50px 0px;
}
.image-banner {
  max-height: 530px;
  max-width: 880px;
}
h2 {
  font-size: 45px;
  margin-bottom: 40px;
  text-align: center;
}
input {
  border: 2px solid;
  border-radius: 6px;
  padding: 6px;
}
textarea {
  border: 2px solid;
  border-radius: 6px;
  padding: 6px;
}
.image-banner-modile {
  display: none;
}
.error-form-message {
  color: #ed3c0d;
  font-size: 13px;
  text-align: left;
}
</style>
<script setup lang="ts">
import { profile } from '../../../stores/profile'
import { ref, type Ref, onMounted, toRaw } from 'vue'
import { type TProfile } from '../../../types'

const userProfile = profile()

const edit = ref<boolean>(false)
const name: Ref<string> = ref('')
const password: Ref<string> = ref('')

const profileUser = ref(toRaw(userProfile.profile))

function editUser (): void {
  edit.value ? edit.value = false : edit.value = true
}

// async function editUserData () {
//   await userProfile.updateUser({
//     _id: userProfile.profile._id,
//     name: name.value,
//     password: password.value
//   })
// }

onMounted (async () => {
  await userProfile.getProfile()
  console.log(profileUser)
}) 
</script>

<template>
    <h1>Profile</h1>
    <div class="flex items-center flex-col">
      <div class="user-table">
        <div v-if="!edit">
          <div v-for="(user, index) in profileUser" :key="index">
            <p @click="editUser" class="text-right mb-0 edit">Edit</p>
            <p>id: {{ user._id }}</p>
            <p>Name: {{ user.name }}</p>
            <p>Password: *********</p>
          </div>
        </div>
        <div v-if="edit">
          <p @click="editUser" class="text-right mb-0 edit">Close</p>
          <input type="text">
          <input type="text" v-model="name" :placeholder=profile.name>
          <input type="text" v-model="password" placeholder="*********">
          <button>Edit</button>
          <!-- <button @click="editUserData">Edit</button> -->
        </div>
      </div>
    </div>
</template>

<style scoped>
.user-table {
  border: 1px solid;
  border-radius: 5px;
  text-align: left;
  padding: 15px;
  color: #000000;
}
</style>
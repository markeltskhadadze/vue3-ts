import { reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { type TPosts, type TReviews } from '../types'

export const homePageData = defineStore('homePageData', () => {
  const posts = reactive<TPosts[]>([])
  const reviews = reactive<TReviews[]>([])
  const services = reactive<TReviews[]>([])

  async function getPosts () {
    const result = await axios.get<TPosts[]>('https://node-and-mongo-project.herokuapp.com/api/posts')

    posts.push(...result.data)
    return posts
  }

  async function getReviews () {
    const result = await axios.get<TReviews[]>('https://node-and-mongo-project.herokuapp.com/api/reviews')

    reviews.push(...result.data)
    return reviews
  }

  async function getServices () {
    const result = await axios.get<TReviews[]>('https://node-and-mongo-project.herokuapp.com/api/reviews')

    services.push(...result.data)
    return services
  }

  return {
    posts,
    reviews,
    services,
    getReviews,
    getPosts,
    getServices
  }
})
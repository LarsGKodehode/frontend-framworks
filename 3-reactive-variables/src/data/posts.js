import { faker } from '@faker-js/faker'
import exampleImage from '../assets/post-example.webp'

/**
 * @typedef {{
 * id: string,
 * author: string,
 * image: string,
 * title: string,
 * paragraphs: string[]
 * createdAt: string,
 * }} Post
 */

/** instance seed */
const SEED = randomInt(1, 2**32)

/**
 * Returns an array of the latest posts
 */
export function getPosts(amount = 10) {
  return Array(amount).fill("").map((_, index) => createPost(SEED + index))
}

/**
 * @param {string} postId
 * @returns {Post}
 */
export function getPost(postId) {
  return createPost(postId)
}

/**
 * @returns {Post}
 */
function createPost(postId) {
  return {
    id: postId,
    author: faker.internet.userName(),
    image: exampleImage,
    title: faker.lorem.words(faker.number.int({min: 2, max: 5})),
    paragraphs: Array(faker.number.int({min: 2, max: 5}))
      .fill("")
      .map(() => faker.lorem.paragraph(faker.number.int({min: 3, max: 5}))),
    createdAt: faker.date.anytime()
  }
}

/**
 * Creates a random integer between min and max
 * 
 * @param {number} min 
 * @param {number} max
 */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

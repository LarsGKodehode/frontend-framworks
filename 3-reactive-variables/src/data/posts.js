import { faker } from '@faker-js/faker'
import exampleImage from '../assets/post-example.webp'

/**
 * Ensures the generator is stable for a given
 * program
 */
faker.seed(randomInt(1, 100000))

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

/**
 * Returns an array of the latest posts
 */
export function getPosts(amount = 10) {
  return Array(amount).fill("").map(() => createPost())
}

/**
 * @param {string} postId
 * @returns {Post}
 */
export function getPost(postId) {
  const post = createPost()
  post.id = postId
  return post
}

/**
 * @returns {Post}
 */
function createPost() {
  return {
    id: faker.string.uuid(),
    author: faker.internet.userName(),
    image: exampleImage,
    title: faker.lorem.words(randomInt(3, 4)),
    paragraphs: Array(randomInt(1, 4)).fill("").map(() => faker.lorem.paragraph(randomInt(3, 6))),
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

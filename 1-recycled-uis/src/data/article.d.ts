import article from '../data/articles'

/**
 * Article response
 * 
 * @link [Realworld API Swagger](https://realworld-docs.netlify.app/docs/specs/frontend-specs/swagger/)
 */
export type ArticleRespons = typeof article

/**
 * The shape of one Article
 * 
 * @link [Realworld API Swagger](https://realworld-docs.netlify.app/docs/specs/frontend-specs/swagger/)
 */
export type Article = typeof article["articles"][number]

/**
 * The shape on one Author
 * 
 * @link [Realworld API Swagger](https://realworld-docs.netlify.app/docs/specs/frontend-specs/swagger/)
 */
export type Author = typeof article["articles"][number]["author"]

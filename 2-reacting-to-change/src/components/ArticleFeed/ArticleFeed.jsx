import articleResponse from "../../data/articles"

/**
 * Displays a list of articles
 */
export function ArticleFeed() {
  const articles = articleResponse.articles

  return (
    <ul className="flex flex-col gap-4">
      {articles.map(article => {
        return (
          <li key={article.slug}>
            <ArticleCard data={article} />
          </li>
        )
      })}
    </ul>
  )
}

/**
 * Card for displaying a single Article
 * 
 * @param {{
* data: import("../../data/article").Article
* }} properties
*/
function ArticleCard(properties) {
  const { data } = properties

  return (
    <article className="bg-primary fg-secondary">
      <h3>{data.title}</h3>
      <p className="max-w-lg">
        {data.body.split("\\n").join(" ")}
      </p>
    </article>
  )
}


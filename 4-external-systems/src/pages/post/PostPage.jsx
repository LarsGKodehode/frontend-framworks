import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

import placeholderImage from '../../assets/post-example.webp'
const articlesEndpoint = "https://api.realworld.io/api/articles"

export function PostPage() {
  const { postId } = useParams()
  const { data, error, isLoading } = useFetch(`${articlesEndpoint}/${postId}`)

  let article;
  if (data) {
    article = data.article
  }

  return (
    <main className="px-16">
      {
        isLoading ? <h1>Loading...</h1>
          : error ? <p>Error</p>
            : (
              <>
                <header>
                  <h1 className="text-center">{article.title}</h1>
                </header>

                <section className="flex flex-col items-center">
                  <div style={{ maxHeight: "50vh", overflowY: "hidden" }}>
                    <img src={placeholderImage} alt="" className="rounded-sm" />
                  </div>
                  <div className="flex justify-between w-full">
                    <p>{article.author.userName}</p>
                    <p>{new Date(article.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div className="max-w-lg">
                    <p>
                      {article.body.replace(/\\n/g, " ")}
                    </p>
                  </div>
                </section>
              </>
            )
      }
    </main >
  )
}
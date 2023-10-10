import { useParams } from "react-router-dom"
import { getPost } from "../../data/posts"

export function PostPage() {
  const { postId } = useParams()
  const post = getPost(postId)

  return (
    <main className="px-16">
      <header>
        <h1 className="text-center">{post.title}</h1>
      </header>

      <section className="flex flex-col items-center">
        <div style={{ maxHeight: "50vh", overflowY: "hidden" }}>
          <img src={post.image} alt="" className="rounded-sm" />
        </div>
        <div className="flex justify-between w-full">
          <p>{post.author}</p>
          <p>{new Date(post.createdAt).toDateString()}</p>
        </div>
        <div className="max-w-lg">
          {post.paragraphs.map((paragraph, line) => <p key={line}>{paragraph}</p>)}
          {post.paragraphs.map((paragraph, line) => <p key={line}>{paragraph}</p>)}
          {post.paragraphs.map((paragraph, line) => <p key={line}>{paragraph}</p>)}
          {post.paragraphs.map((paragraph, line) => <p key={line}>{paragraph}</p>)}
        </div>
      </section>
    </main>
  )
}
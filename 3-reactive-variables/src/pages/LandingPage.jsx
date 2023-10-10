import { Link } from "react-router-dom";
import { getPosts } from "../data/posts";

const posts = getPosts(20);

export function LandingPage() {
  return (
    <main className="flex flex-col grow mx-auto gap-16 py-8">
      {
        posts.map(post => {
          return (
            <article key={post.id} >
              <Link to={`/post/${post.id}`} className="bg-gray fg-black px-16 py-8 rounded-md shadow-sm flex gap-8">
                <img className="max-w-sm rounded-md" src={post.image} alt="" />
                <div>
                  <h2 className="text-center">{post.title}</h2>
                  <div className="max-w-lg">
                    {post.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                  </div>
                </div>
              </Link>
            </article>
          )
        })
      }
    </main>
  )
}
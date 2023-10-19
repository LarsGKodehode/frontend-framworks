import { Link } from 'react-router-dom'

import placholderImage from '../../assets/post-example.webp'

export function PostCard(properties) {
  const { post } = properties
  return (
    <article key={post.slug} >
      <Link to={`/post/${post.slug}`} className="bg-gray fg-black px-16 py-8 rounded-md shadow-sm flex gap-8">
        <img className="max-w-sm rounded-md" src={placholderImage} alt="" />
        <div>
          <h2 className="text-center">{post.title}</h2>
          <div className="max-w-lg">
            <p>{post.description}</p>
          </div>
        </div>
      </Link>
    </article>
  )
}
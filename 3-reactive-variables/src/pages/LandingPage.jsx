import { Link } from "react-router-dom";
import { getPosts } from "../data/posts";
import { useState } from "react";

const posts = getPosts(20);

export function LandingPage() {
  // Variables that causes changes in the rendered DOM
  // needs to be stored as a reactive variable
  // with useState, and updated by
  // calling the setState function
  const [filter, setFilter] = useState("")

  // If you have some variables that can be derived by
  // using a reactive variable, do so rather than
  // create a seperate reactive variable for that
  const filteredPosts = posts.filter(post => {
    const includes = post.title.includes(filter) || post.paragraphs.find(text => text.includes(filter))
    return includes
  })

  function handleChange(event) {
    const newFilter = event.target.value;
    setFilter(newFilter);
  }

  return (
    <main className="flex flex-col grow mx-auto gap-16 py-8">
      <div className="flex justify-center">
        <label htmlFor="searchBar" style={{ display: "none" }}>Filter Search</label>
        <input
          className='px-4 py-2'
          type="text"
          id="searchBar"
          placeholder="Filter Search"
          value={filter}
          onChange={handleChange}
        />
      </div>
      {
        filteredPosts.length === 0 ? <h2>No Matches</h2>
          : filteredPosts.map(post => <PostCard key={post.id} post={post} />)
      }
    </main>
  )
}

function PostCard(properties) {
  const { post } = properties
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
}
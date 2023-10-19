import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { PostCard } from '../components/PostCard/PostCard'

const articlesUrl = "https://api.realworld.io/api/articles?limit=20"

export function LandingPage() {
  const [filter, setFilter] = useState("")

  // Using our custom hook
  const { data, error, isLoading } = useFetch(articlesUrl)

  let filteredPosts = [];
  if (data) {
    console.log(data.articles)
    filteredPosts = data.articles.filter(post => {
      const isMatch = post.title.includes(filter)
      return isMatch
    })
  }

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
        isLoading ? <p>Loading...</p>
          : error ? <p>Some error happened</p>
            : filteredPosts.length === 0 ? <h2>No Matches</h2>
              : filteredPosts.map(post => <PostCard key={post.slug} post={post} />)
      }
    </main>
  )
}
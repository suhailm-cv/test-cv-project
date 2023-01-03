import React, { useCallback } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { getPostByUserId, getPosts } from '../APIs'

import './List.css'

const List = () => {
  const navigate = useNavigate()
  // react query to fetch data 
  const { data, isLoading, error } = useQuery('posts', async () => await getPostByUserId(1))

  const handleCreate = useCallback(() => {
    navigate('/create')
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  return (
    <>
      <button type='button' onClick={handleCreate}>Create</button>
      {/** Create button */}
      <div className='list-divider' />
      <div className='list-container'>
        {data?.map((post: any) => (
          <div key={post.id} className='list-card'>
            <h3>{post.title}</h3>
            {/** Divider */}
            <div className='list-divider' />
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default List
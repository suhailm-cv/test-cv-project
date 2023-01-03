import React, { useState, useCallback } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { addPost } from '../APIs'
import queryClient from '../client'

import './Create.css'

const Create = () => {
  const navigate = useNavigate()

  const defaultData = {
    title: '',
    body: '',
    userId: 1
  }

  const [data, setData] = useState(defaultData)

  const mutate = useMutation(addPost, {
    onSuccess: () => {
      // invalidate the query to update the list
      queryClient.invalidateQueries('posts')
      // go back to previous page
      navigate(-1)
    },
    onError: (e) => {
      console.log('error', e)
    }
  })

  // go back to previous page
  const handleBack = useCallback(() => {
    navigate(-1)
  }, [])

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate.mutateAsync(data)
  }, [data])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setData(prev => ({ ...prev, [name]: value }))
  }, [])

  const handleCancel = useCallback(() => {
    setData(defaultData)
  }, [])


  return (
    <div className='container'>
      {mutate.isLoading && <div>Loading...</div>}
      {mutate.isError && <div>Error</div>}
      <h1 className='form-title'>Create Post</h1>
      {/** Back button */}
      <button type='button' onClick={handleBack}>Back</button>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="body">Body</label>
          <textarea name="body" id="body" cols={30} rows={10} onChange={handleChange} />
        </div>
        {/* <div className='form-group'>
          <label htmlFor="userId">User ID</label>
          <input type="number" name="userId" id="userId" />
        </div> */}
        <div className='form-group'>
          <button type="submit">Create</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default Create
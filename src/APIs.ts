import axios from "./axios";

// List of all posts
export const getPosts = async () => {
	return await axios
		.get("/posts")
		.then((res) => res.data)
		.catch((err) => {
			throw err;
		});
};

// Get a single post
export const getPost = async (id: string) => {
	return await axios
		.get(`/posts/${id}`)
		.then((res) => res.data)
		.catch((err) => {
			throw err;
		});
};

// Get all posts by a user
export const getPostByUserId = async (userId: number) => {
  return await axios
    .get(`/posts?userId=${userId}`)
    .then((res) => res.data)
    .catch((err) => { 
      throw err;
    });
};

// Get all posts by a user
export const updatePost = async (id: string, Post: { title: string; body: string; userId: number }) => {
  return await axios
    .put(`/posts/${id}`, Post)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

// Delete a post
export const deletePost = async (id: string) => {
  return await axios
    .delete(`/posts/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

// Add a post
export const addPost = async (Post: { title: string; body: string; userId: number }) => {
	return await axios
		.post("/posts", Post)
		.then((res) => res.data)
		.catch((err) => {
			throw err;
		});
};

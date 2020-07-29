import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { blog } = router.query

  return <p>Post: {blog}</p>
}

export default Post

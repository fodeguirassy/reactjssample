import { createContext } from 'react'
import { mockedPost } from '../../Model/User'

const PostsContext = createContext(mockedPost)
export default PostsContext
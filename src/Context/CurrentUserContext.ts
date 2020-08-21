import { createContext } from 'react'
import { currentUser } from '../Model/User'

const UserContext = createContext(currentUser)
export default UserContext




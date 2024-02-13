import { useContext } from 'react'

import { UserContext } from '@/containers/UserProvider/UserProvider'

export const useAuth = () => useContext(UserContext)

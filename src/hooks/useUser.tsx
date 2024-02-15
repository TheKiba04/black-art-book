import { useContext } from 'react'

import { UserContext } from '@/containers/UserProvider/UserProvider'

const useUser = () => useContext(UserContext)

export default useUser
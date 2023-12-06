import { useContext } from 'react'

import { AuthContext } from '@/components/AuthProvider/AuthProvider'

export const useAuth = () => useContext(AuthContext)

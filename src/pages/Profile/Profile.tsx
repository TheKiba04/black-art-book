import { useEffect, useState } from 'react'

import BlockDivider from '@/components/BlockDivider/BlockDivider'
import ListOfArts from '@/components/ListOfArts/ListOfArts'
import Passport from '@/components/Passport/Passport'
import { getUserArts } from '@/helpers/database'
import { useAuth } from '@/hooks/useAuth'
import { Art } from '@/types/Art'

const Profile = () => {
	const { user } = useAuth()
	const [arts, setArts] = useState<Art[] | []>([])

	useEffect(() => {
		if (user) {
			getUserArts(user.uid).then((art: Art[]) => setArts(art))
		}
	}, [user])

	return (
		<>
			<Passport />
			<BlockDivider />
			<ListOfArts
				title='My Arts'
				personal
				list={arts}
			/>
		</>
	)
}

export default Profile

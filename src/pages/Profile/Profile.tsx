import { useEffect, useState } from 'react'

import { getUserArts } from '@/helpers/database'
import useUser  from '@/hooks/useUser'
import Art from '@/types/Art'

import BlockDivider from '@components/BlockDivider/BlockDivider'
import ListOfArts from '@components/ListOfArts/ListOfArts'
import Passport from '@components/Passport/Passport'

const Profile = () => {
	const { user } = useUser()

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
			<ListOfArts title='My Arts' isPrivate list={arts} />
		</>
	)
}

export default Profile

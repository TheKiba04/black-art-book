import { useEffect, useState } from 'react'

import BlockDivider from '@/components/BlockDivider/BlockDivider'
import ListOfArts from '@/components/ListOfArts/ListOfArts'
import Passport from '@/components/Passport/Passport'
import { getUserArts } from '@/helpers/database'
import { useAuth } from '@/hooks/useAuth'
import { Art } from '@/types/Art'

const Profile = () => {
	const user = useAuth()
	const [arts, setArts] = useState<Art[] | []>([])

	const addArts = (art: Art) => {
		setArts((prev) => [...prev, art])
	}

	useEffect(() => {
		if (user) {
			getUserArts(user.uid).then((art: Art[]) => setArts(art))
		}
	}, [user])

	return (
		<>
			<Passport user={user} />
			<BlockDivider />
			<ListOfArts title='My Arts' personal list={arts} onAddArts={addArts} />
		</>
	)
}

export default Profile

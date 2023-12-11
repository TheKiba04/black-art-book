import { useEffect, useState } from 'react'

import BlockDivider from '@/components/BlockDivider/BlockDivider'
import Heading from '@/components/Heading/Heading'
import ListOfArts from '@/components/ListOfArts/ListOfArts'
import { getAllArts } from '@/helpers/database'
import { Art } from '@/types/Art'

const Home = () => {
	const [recentArts, setRecentArts] = useState<Art[] | []>([])

	const addArts = (art: Art) => {
		setRecentArts((prev) => [...prev, art])
	}

	useEffect(() => {
		getAllArts().then((art: unknown | Art[]) => setRecentArts(art as Art[]))
	}, [])

	return (
		<>
			<Heading />
			<BlockDivider />
			<ListOfArts title='Recent Arts' list={recentArts} onAddArts={addArts} />
		</>
	)
}

export default Home

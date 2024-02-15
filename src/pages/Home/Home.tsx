import { useEffect, useState } from 'react'

import { getAllArts } from '@/helpers/database'
import Art from '@/types/Art'

import BlockDivider from '@components/BlockDivider/BlockDivider'
import Heading from '@components/Heading/Heading'
import ListOfArts from '@components/ListOfArts/ListOfArts'

const Home = () => {
	const [recentArts, setRecentArts] = useState<Art[] | []>([])

	useEffect(() => {
		getAllArts().then((arts: unknown | Art[]) => setRecentArts(arts as Art[]))
	}, [])

	return (
		<>
			<Heading />
			<BlockDivider />
			<ListOfArts title='Recent Arts' list={recentArts} />
		</>
	)
}

export default Home

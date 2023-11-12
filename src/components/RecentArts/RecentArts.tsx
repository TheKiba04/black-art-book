import Card from '@/components/Card/Card.js'

import './RecentArts.css'

const RecentArts = () => (
	<div className='main'>
		<div className='main__header'>
			<h2>Header 2</h2>
		</div>
		<div className='main__content'>
			<Card id='special' src='/assets/test.jpg' />
		</div>
	</div>
)

export default RecentArts

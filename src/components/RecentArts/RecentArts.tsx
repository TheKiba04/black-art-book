import './RecentArts.css'

import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpg'
import img7 from '../../assets/7.jpg'
import Card from '../Card/Card.js'
import special from './test.jpg'

export default function Main() {
	return (
		<div className='main'>
			<div className='main__header'>
				<h2>Header 2</h2>
			</div>
			<div className='main__content'>
				<Card id='special' src={special} />
				<Card src={img1} />
				<Card src={img2} />
				<Card src={img3} />
				<Card src={img4} />
				<Card src={img6} />
				<Card src={img5} />
				<Card src={img7} />
			</div>
		</div>
	)
}

import './Card.css'

export default function Card({ id, src }: { id?: string; src: string }) {
	return (
		<div className="card">
			<img className="card_img" id={id} src={src} alt="img" />
		</div>
	)
}

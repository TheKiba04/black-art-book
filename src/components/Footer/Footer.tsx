import './Footer.css'

const Footer = () => (
	<div className='footer'>
		<div className='footer_logo logo'>
			<img src='/assets/logo.jpg' alt='logo' />
		</div>
		<div>copyright</div>
		<div>
			<div className='footer__contact'>
				<img src='/assets/logo.jpg' alt='footer__logo_mini' />
				<p>texttextext</p>
			</div>
			<div className='footer__contact'>
				<img src='/assets/logo.jpg' alt='footer__logo_mini-logo' />
				<p>texttextext</p>
			</div>
		</div>
	</div>
)

export default Footer

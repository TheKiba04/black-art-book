import './Footer.css'

import logo from '../../assets/logo.png'

export default function Footer() {
	return (
		<div className="footer">
			<div className="footer_logo logo">
				<img src={logo} alt="logo" />
			</div>
			<div>copyright</div>
			<div>
				<div className="footer__contact">
					<img src={logo} alt="footer__logo_mini" />
					<p>texttextext</p>
				</div>
				<div className="footer__contact">
					<img src={logo} alt="footer__logo_mini-logo" />
					<p>texttextext</p>
				</div>
			</div>
		</div>
	)
}

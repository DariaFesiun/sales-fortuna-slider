import './TestimonialCard.scss';

interface Props {
	logo: string;
	text: string;
	name: string;
	role: string;
	avatar: string;
	company: string;
}

export const TestimonialCard: React.FC<Props> = ({ logo, text, name, role, avatar }) => {
	return (
		<div className="testimonial-card">
			<div className="testimonial-card__logo">
				<img src={logo} alt="Company logo" className="testimonial-card__logo--img" />
			</div>
			<div className="testimonial-card__text-wrapper">
				<p className="testimonial-card__text">{text}</p>
				<img
					src="/assets/icons/quote.svg"
					alt="Quote icon"
					className="testimonial-card__quote-icon"
				/>
			</div>
			<div className="testimonial-card__author">
				<img src={avatar} alt={name} className="testimonial-card__avatar" />
				<div>
					<p className="testimonial-card__name">{name}</p>
					<p className="testimonial-card__role">{role}</p>
				</div>
			</div>
		</div >
	);
};

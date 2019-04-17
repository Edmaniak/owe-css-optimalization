//import _button from '../scss/_button.scss';

const button = (price, text, link) => {
	return `<a href="${link}" class="btn btn--orange btn--big">
					<span class="btn__price">${price}</span>
					<span class="btn__text">${text}</span>
				</a>`
};

export default button;
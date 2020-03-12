import React from 'react';
import config from "../../config";
import { ReactBnbGallery } from 'react-bnb-gallery';

const imagesRepo = config.tacrAgritasImagesRepositoryUrl;

class Potencial extends React.PureComponent {
	static propTypes = {

	};

	constructor(props) {
		super(props);
		this.state = {
			galleryOpen: false
		};
		this.toggleGallery = this.toggleGallery.bind(this);

	}

	toggleGallery(index) {
		this.setState(prevState => ({
			galleryOpen: !prevState.galleryOpen,
			activePhotoIndex: index
		}));
	}

	render() {
		let images = null;
		if (this.props.images) {
			images = this.props.images.map(image => {
				return {
					photo: imagesRepo + image.source,
					thumbnail: imagesRepo + image.thumbnailSource,
					caption: image.title,
					subcaption: image.description
				}
			});
		}

		return (
			<div className="tacrAgritas-section">
				<div>
					<h1>Mapa růstového potenciálu zemědělských plodin</h1>

					<div className="tacrAgritas-photo-gallery">
						{images.map((image, index) =>
							<div className="tacrAgritas-photo-gallery-item">
								<div>{image.caption}</div>
								<img onClick={this.toggleGallery.bind(this, index)} src={image.thumbnail}/>
							</div>
						)}
					</div>
					<ReactBnbGallery
						show={this.state.galleryOpen}
						photos={images}
						onClose={this.toggleGallery}
						activePhotoIndex={this.state.activePhotoIndex}
					/>

					<p>Mapa vychází z prostorové a časové analýzy zapojenosti zemědělských porostů pomocí družicových dat.
						Předmětem zpracování je minimálně desetiletá časová řada družicových snímků vybraných tak, aby co nejlépe
						postihly hlavní fáze růstu zemědělských plodin v každém roce. Mapa je zpracována samostatně pro vybrané
						plodiny, které se na sledovaném pozemku pěstují opakovaně (minimálně ve 3 vegetačních obdobích). V rámci
						vyhodnocení prostorové variability zapojenosti porostů je provedena zonace s cílem identifikovat dlouhodobě
						problematické plochy daného pozemku pro každou sledovanou plodinu. Roky, ve kterých jsou zjištěny případné
						nahodilé či výjimečné stavy vegetace, jsou z vyhodnocení vyřazeny.</p>
					<p>Na základě multitemporální analýzy časové řady harmonizovaných map zapojenosti porostů z celého
						sledovaného období je nejprve vyhodnocena variabilita jednotlivých plodin na daném pozemku. Cílem tohoto
						kroku je vybrat pozemky dlouhodobě vykazující významnou variabilitu. Pro tyto pozemky je následně provedena
						časoprostorová segmentace celé časové řady, na jejímž základě je provedena kategorizace zapojenosti a
						delineace zón. Na závěr je určena referenční zóna s dlouhodobě nejvyšší průměrnou zapojeností a pro každou
						další zónu je vypočten její nevyužitý průměrný potenciál vzhledem k zóně referenční. Výsledným produktem
						celého zpracování je vektorová vrstva management zón s přiřazeným relativním potenciálem každé zóny.</p>
				</div>
			</div>
		);
	}
}

export default Potencial;
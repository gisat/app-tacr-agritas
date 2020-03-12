import React from 'react';
import PropTypes from "prop-types";
import _ from 'lodash';

import biofizika_1 from "../../assets/img/biofyzika_figure1.png";
import biofizika_2 from "../../assets/img/biofyzika_figure2.png";
import biofizika_3 from "../../assets/img/biofyzika_figure3.png";

const images = [{src: biofizika_1}, {src: biofizika_2}, {src: biofizika_3}];

class Potencial extends React.PureComponent {
	static propTypes = {

	};

	constructor(props) {
		super(props);
		this.state = {
			current: 1,
			isOpen: false
		}

	}

	gotoPrevious() {
		this.setState({
			current: 0
		})
	}

	gotoNext() {
		this.setState({
			current: 2
		})
	}

	closeViewer() {
		this.setState({
			isOpen: false
		})
	}

	render() {
		return (
			<div className="tacrAgritas-section">
				<div>
					<h1>Mapa růstového potenciálu zemědělských plodin</h1>
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
import React from 'react';
import Header from "./Header";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import _ from "lodash";

import Biofyzika from "./Biofyzika";
import Historie from "./Historie";
import Produktivita from "./Produktivita";

import logoGisat from "../../assets/img/gisat_logo.png";
import logoPropole from "../../assets/img/propole_logo.png";
import logoCzechGlobe from "../../assets/img/czechglobe_logo.png";

class App extends React.PureComponent {
	static propTypes = {
		data: PropTypes.array,
		rasters: PropTypes.object,
		activePeriodKey: PropTypes.string,
		activePlace: PropTypes.object,
		activePlaceView: PropTypes.object,
		activeScope: PropTypes.object
	};

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.onMount();
	}

	render() {
		const props = this.props;

		return (
			<>
				{this.renderHelmet()}
				<Header/>
				<div className="tacrAgritas-content" id="tacrAgritas-content">
					{props.activeScope ? this.renderMonitoring(props.activeScope) : null}
				</div>
				{this.renderFooter()}
			</>
		);
	}

	renderHelmet() {
		const props = this.props;

		const activePlaceTagKeys = props.activePlace && props.activePlace.data && props.activePlace.data.tagKeys;
		const content = props.activePlace && props.activePlace.data.nameDisplay ? <title>{props.activePlace.data.nameDisplay}</title> : null;

		return (
			_.includes(activePlaceTagKeys, "propole") ? (
				<Helmet
					titleTemplate="%s | PROPOLE"
					defaultTitle="Gisat"
				>
					{content}
				</Helmet>
			) : (
				<Helmet
					titleTemplate="%s | AGRITAS portál"
					defaultTitle="Gisat"
				>
					{content}
				</Helmet>
			)
		);
	}

	renderMonitoring(scope) {
		switch (scope.key) {
			case 'biofyzika':
				return (
					<Biofyzika
						data={this.props.data}
						rasters={this.props.rasters}
						placeView={this.props.activePlaceView}
						activePeriodKey={this.props.activePeriodKey}
						scope={scope}
					/>
				);
			case 'produktivita':
				return (
					<Produktivita
						data={this.props.data}
						rasters={this.props.rasters}
						placeView={this.props.activePlaceView}
						activePeriodKey={this.props.activePeriodKey}
						scope={scope}
					/>
				);
			case 'historie':
				return (
					<Historie
						data={this.props.data}
						placeView={this.props.activePlaceView}
						activePeriodKey={this.props.activePeriodKey}
						scope={scope}
					/>
				);
			case 'potencial':
				return (
					<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut nibh ut velit pharetra luctus eget eget urna. Donec vel fringilla eros. Aenean a molestie nisl, ut imperdiet ex. Mauris a volutpat nulla. Sed scelerisque cursus lacus, sit amet lobortis erat posuere non. Duis commodo non quam vitae commodo. Pellentesque ut augue erat. Proin elementum enim nec nisl pulvinar, et tempor erat tincidunt. Ut quis arcu ut augue lobortis finibus. Fusce placerat tortor et suscipit varius. Integer lobortis mauris leo, sed sagittis enim sollicitudin ut.

						Ut nisl lorem, facilisis nec blandit ut, eleifend sit amet ipsum. Morbi facilisis ipsum non eros dapibus placerat. Maecenas molestie sodales neque, iaculis commodo ligula. Integer facilisis efficitur bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras eget posuere sem. Donec sed mattis arcu. Ut in aliquet lacus.

						Quisque augue nibh, ultricies in accumsan vel, tempus tempor magna. Maecenas non tortor id ex pellentesque porta. Phasellus pharetra, mi ut scelerisque sodales, tortor mauris sollicitudin turpis, in scelerisque nisl velit vel est. Donec a neque sit amet turpis pharetra suscipit. Nulla vel libero maximus, iaculis neque sit amet, pellentesque turpis. Donec a lectus faucibus, imperdiet tellus vel, interdum tortor. Integer vel posuere velit, vel bibendum libero. Cras eu faucibus libero. Ut accumsan aliquam enim, sed imperdiet felis ultricies vitae. Praesent et sagittis leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis faucibus turpis tempor, faucibus ex eget, maximus mi. Cras quam leo, eleifend eget lorem et, faucibus pretium turpis. Etiam interdum, felis sit amet tempus iaculis, nisi metus eleifend dolor, vel facilisis nulla sem id ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut nibh ut velit pharetra luctus eget eget urna. Donec vel fringilla eros. Aenean a molestie nisl, ut imperdiet ex. Mauris a volutpat nulla. Sed scelerisque cursus lacus, sit amet lobortis erat posuere non. Duis commodo non quam vitae commodo. Pellentesque ut augue erat. Proin elementum enim nec nisl pulvinar, et tempor erat tincidunt. Ut quis arcu ut augue lobortis finibus. Fusce placerat tortor et suscipit varius. Integer lobortis mauris leo, sed sagittis enim sollicitudin ut.

						Ut nisl lorem, facilisis nec blandit ut, eleifend sit amet ipsum. Morbi facilisis ipsum non eros dapibus placerat. Maecenas molestie sodales neque, iaculis commodo ligula. Integer facilisis efficitur bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras eget posuere sem. Donec sed mattis arcu. Ut in aliquet lacus.

						Quisque augue nibh, ultricies in accumsan vel, tempus tempor magna. Maecenas non tortor id ex pellentesque porta. Phasellus pharetra, mi ut scelerisque sodales, tortor mauris sollicitudin turpis, in scelerisque nisl velit vel est. Donec a neque sit amet turpis pharetra suscipit. Nulla vel libero maximus, iaculis neque sit amet, pellentesque turpis. Donec a lectus faucibus, imperdiet tellus vel, interdum tortor. Integer vel posuere velit, vel bibendum libero. Cras eu faucibus libero. Ut accumsan aliquam enim, sed imperdiet felis ultricies vitae. Praesent et sagittis leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis faucibus turpis tempor, faucibus ex eget, maximus mi. Cras quam leo, eleifend eget lorem et, faucibus pretium turpis. Etiam interdum, felis sit amet tempus iaculis, nisi metus eleifend dolor, vel facilisis nulla sem id ex</div>
				);
			default:
				return null;
		}
	}

	renderFooter() {
		const props = this.props;
		const activePlaceTagKeys = props.activePlace && props.activePlace.data && props.activePlace.data.tagKeys;

		return _.includes(activePlaceTagKeys, "propole") ? (
				<div className="tacrAgritas-footer">
					<div className="tacrAgritas-footer-consortium">
						<div className="tacrAgritas-footer-member">
							<a href="http://gisat.cz" target="_blank"><img src={logoGisat}/></a>
							<div>Gisat s.r.o.<br/>Milady Horákové 547/57 <br/>Praha 7, Holešovice, 170 00</div>
						</div>
						<div className="tacrAgritas-footer-member wide">
							<img src={logoPropole}/>
						</div>
					</div>
					<div>{`© Gisat ${new Date().getFullYear()}`}</div>
				</div>
			) : (
				<div className="tacrAgritas-footer">
					<p>Vývoj tohoto mapového portálu a metodiky pro kvantitativní odhad hodnot biofyzikálních charakteristik porostů zemědělských plodin byl podpořen Technologickou Agenturou České Republiky (TA ČR) v rámci projektu TH02030248 "Využití družicových dat Copernicus pro efektivní monitoring stavu a managementu vybraných rostlinných agrosystémů".</p>
					<div className="tacrAgritas-footer-consortium">
						<div className="tacrAgritas-footer-member">
							<a href="http://gisat.cz" target="_blank"><img src={logoGisat}/></a>
							<div>Gisat s.r.o.<br/>Milady Horákové 547/57 <br/>Praha 7, Holešovice, 170 00</div>
						</div>
						<div className="tacrAgritas-footer-member">
							<a href="http://www.czechglobe.cz/cs/" target="_blank"><img src={logoCzechGlobe}/></a>
							<div>Ústav výzkumu globální změny AV ČR v.v.i.<br/>Bělidla 986/4a<br/>Brno, 603 00</div>
						</div>
					</div>
					<div>{`© Gisat ${new Date().getFullYear()}`}</div>
				</div>
			);
	}
}

export default App;
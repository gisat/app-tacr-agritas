import React from "react";
import {selectedStyleDefinition} from "../constants/MapStyles";

export const MapInfo = props => {
	const selectedAreaStyle = {
		borderColor: selectedStyleDefinition.rules[0].styles[0].outlineColor,
	};

	return (
		<div className="tacrAgritas-map-info">
			<div className="tacrAgritas-map-info-content">
				<div className="tacrAgritas-map-info-selected">
					<div className="tacrAgritas-map-info-selected-icon" style={selectedAreaStyle}></div>
					<div className="tacrAgritas-map-info-selected-text">
						Vybraný půdní blok: <b>{props.selectedAreaName}</b></div>
				</div>
				<div>Aktuálně pěstovaná plodina: <b>{props.cropName}</b></div>
				<div>Klimatický region: <b> {props.selectedAreaClimRegion}</b></div>
			</div>
			<div className="tacrAgritas-map-attribution">
				<a href="https://leafletjs.com/" target="_blank">Leaflet</a> | © <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors, © <a href="https://carto.com/attribution/" target="_blank">CARTO</a>
			</div>
		</div>
	);
};
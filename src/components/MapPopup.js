import React from "react";
import _ from "lodash";

import {cropColumnName, fidColumnName, nameColumnName, climRegionColumnName} from "../constants/MapResources";

export const MapPopup = props => {
	let data = props.data;
	if (props.data && _.isArray(props.data)) {
		data = props.data[0] && props.data[0].data;
	}

	const dpb = data && data[nameColumnName];
	const value = data && data[props.valueColumnName];

	return (
		<>
			<div className="ptr-popup-header">
				{"DPB: " + dpb}
			</div>
			{value ? (
				<div className="ptr-popup-record-group">
					<div className="ptr-popup-record">
						<div className="ptr-popup-record-value-group">
							{<span className="value">{value}</span>}
							{<span className="unit">{props.unit}</span>}
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};
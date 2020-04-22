import * as React from "react";
import {ReactLeafletMap, MapControls as MapControlsPresentation, MapSetPresentationMap as PresentationMap, MapSet as MapSetPresentation} from "@gisatcz/ptr-maps";
import MapResources, {cropColumnName, fidColumnName, nameColumnName, climRegionColumnName, mapPeriodOptions} from "../constants/MapResources";
import {MapInfo} from "./MapInfo";
import {Select} from "@gisatcz/ptr-atoms";

export default class HistorieDynamicLeafletMap extends React.Component {
  render() {
      const {activeMapKey, placeView, layers, mapPeriodOptionsHistorie, onMapClick, selectedArea, selectedMapPeriod, onMapPeriodChange} = this.props;
    return (
        <MapSetPresentation
            activeMapKey={activeMapKey}
            mapComponent={ReactLeafletMap}
            view={placeView}
            sync={{
                boxRange: true,
                center: true,
                tilt: true,
                heading: true,
                roll: true
            }}
            backgroundLayer={MapResources.cartoDbLight}
        >
            <PresentationMap
                mapKey={activeMapKey+'-map-1'}
                layers={layers}
                onLayerClick={onMapClick}
            />
            <MapControlsPresentation zoomOnly levelsBased/>
            <MapInfo
                cropName={selectedArea && selectedArea.properties[cropColumnName]}
                selectedAreaName={selectedArea && selectedArea.properties[nameColumnName]}
                selectedAreaClimRegion={selectedArea && selectedArea.properties[climRegionColumnName]}
            />
            <Select
                className="tacrAgritas-map-label"
                value={selectedMapPeriod}
                optionLabel="label"
                optionValue="key"
                options={mapPeriodOptionsHistorie}
                onChange={onMapPeriodChange}
            />
        </MapSetPresentation>
    )
  }
}
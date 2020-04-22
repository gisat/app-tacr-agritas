import * as React from "react";
import {ReactLeafletMap, MapControls as MapControlsPresentation, MapSetPresentationMap as PresentationMap, MapSet as MapSetPresentation} from "@gisatcz/ptr-maps";
import MapResources, {cropColumnName, fidColumnName, nameColumnName, climRegionColumnName, mapPeriodOptions} from "../constants/MapResources";
import {MapInfo} from "./MapInfo";
import {Select} from "@gisatcz/ptr-atoms";

export default class ProduktivitaDynamicLeafletMap extends React.Component {
  render() {
      const {activeMapKey, placeView, layers, fenologyOptions, onMapClick, selectedArea, selectedAttribute, onAttributeChange} = this.props;
    return (
        <MapSetPresentation
            activeMapKey={activeMapKey}
            mapComponent={ReactLeafletMap}
            view={placeView}
            backgroundLayer={MapResources.cartoDbLight}
        >
            <PresentationMap
                mapKey={'map-1'}
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
                className="tacrAgritas-map-label wide"
                value={selectedAttribute}
                optionLabel="longName"
                optionValue="key"
                options={fenologyOptions}
                onChange={onAttributeChange}
            />
        </MapSetPresentation>
    )
  }
}
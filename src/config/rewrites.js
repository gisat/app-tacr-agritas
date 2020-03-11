/**
 * CONFIG
 *
 * Per-instance values, development values & features.
 * See documentation in ./defaults.js
 * Versions/variants managed in github.com/gisat/docker/
 */

let tacrAgritasDataRepositoryUrl = 'http://project.gisat.cz/agritas/static/data/';
let tacrAgritasGeoserverWmsUrl = 'http://45.56.96.184:8965/geoserver/agritas/wms';
let path = '/agritas';

if (window.location.hostname === 'gisat.github.io') {
	tacrAgritasDataRepositoryUrl = 'https://cors-anywhere.herokuapp.com/http://project.gisat.cz/agritas/static/data/';
	tacrAgritasGeoserverWmsUrl = 'https://cors-anywhere.herokuapp.com/http://45.56.96.184:8965/geoserver/agritas/wms';
	path = "/app-tacr-agritas";
} else if (window.location.hostname === 'localhost') {
	tacrAgritasDataRepositoryUrl = 'http://localhost:3031/agritas/static/data/';
	tacrAgritasGeoserverWmsUrl = 'http://localhost:3032/geoserver/agritas/wms';
	path = '/app-tacr-agritas';
}

export default {
	requestPageSize: 100,
	path,
	tacrAgritasDataRepositoryUrl,
	tacrAgritasGeoserverWmsUrl
};

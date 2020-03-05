/**
 * CONFIG
 *
 * Per-instance values, development values & features.
 * See documentation in ./defaults.js
 * Versions/variants managed in github.com/gisat/docker/
 */

let panther = {
	geoServerUrl: 'http://panther.gisat.cz/geoserver/',
	serverUrl: 'http://panther.gisat.cz/backend/',
	apiGeoserverWFSHost: 'panther.gisat.cz',
	apiBackendHost: 'panther.gisat.cz'
};

let ptr3 = {
	geoServerUrl: 'http://panther.gisat.cz/ptr3-beta/geoserver/',
	serverUrl: 'http://panther.gisat.cz/ptr3-beta/backend/',
	apiGeoserverWFSHost: 'panther.gisat.cz/ptr3-beta/',
	apiGeoserverWMSProtocol: 'http',
	apiGeoserverWMSHost: 'panther.gisat.cz/ptr3-beta/',
	apiBackendHost: 'panther.gisat.cz/ptr3-beta/'
};

let gst205 = {
	geoServerUrl: 'http://192.168.2.205/geoserver/',
	serverUrl: 'http://192.168.2.205/backend/',
	apiGeoserverWFSHost: '192.168.2.205',
	apiBackendHost: '192.168.2.205'
};

let gst206 = {
	geoServerUrl: 'http://192.168.2.206/geoserver/',
	serverUrl: 'http://192.168.2.206/backend/',
	apiGeoserverWFSHost: '192.168.2.206',
	apiGeoserverWMSHost: '192.168.2.206',
	apiBackendHost: '192.168.2.206',

	devHostnames: ['127.0.0.1'],
	requestPageSize: 100
};

let gst206_8965 = {
	geoServerUrl: 'http://192.168.2.206:8965/geoserver/',
	serverUrl: 'http://192.168.2.206:8965/backend/',
	apiGeoserverWFSHost: '192.168.2.206:8965',
	apiGeoserverWMSHost: '192.168.2.206:8965',
	apiBackendHost: '192.168.2.206:8965',

	devHostnames: ['127.0.0.1'],
	requestPageSize: 100
};

let gst206_8962 = {
	geoServerUrl: 'http://192.168.2.206:8962/geoserver/',
	serverUrl: 'http://192.168.2.206:8962/backend/',
	apiGeoserverWFSHost: '192.168.2.206:8962',
	apiGeoserverWMSHost: '192.168.2.206:8962',
	apiBackendHost: '192.168.2.206:8962',

	devHostnames: ['127.0.0.1'],
	requestPageSize: 100,
	tacrAgritasDataRepositoryUrl: 'http://project.gisat.cz/agritas/static/data/',
	tacrAgritasGeoserverWmsUrl: 'http://45.56.96.184:8965/geoserver/agritas/wms'
};

let gst206_8963 = {
	geoServerUrl: 'http://192.168.2.206:8963/geoserver/',
	serverUrl: 'http://192.168.2.206:8963/backend/',
	apiGeoserverWFSHost: '192.168.2.206:8963',
	apiGeoserverWMSHost: '192.168.2.206:8963',
	apiBackendHost: '192.168.2.206:8963',

	devHostnames: ['127.0.0.1'],
	requestPageSize: 100
};

let fuore = {
	geoServerUrl: 'http://fuore.eu/geoserver/',
	serverUrl: 'http://fuore.eu/backend/',
	apiGeoserverWFSHost: 'fuore.eu',
	apiBackendHost: 'fuore.eu',

	devHostnames: ['127.0.0.1'],
	requestPageSize: 100
};

let insar = {
	geoServerUrl: 'http://insar.gisat.cz/geoserver/',
	serverUrl: 'http://insar.gisat.cz/backend/',
	apiGeoserverWFSHost: 'insar.gisat.cz',
	apiGeoserverWMSHost: 'insar.gisat.cz',
	apiBackendHost: 'insar.gisat.cz',

	devHostnames: ['127.0.0.1'],
	requestPageSize: 100
};

let agritasProxy = {
	geoServerUrl: 'http://192.168.2.206:8962/geoserver/',
	serverUrl: 'http://192.168.2.206:8962/backend/',
	apiGeoserverWFSHost: '192.168.2.206:8962',
	apiGeoserverWMSHost: '192.168.2.206:8962',
	apiBackendHost: '192.168.2.206:8962',

	requestPageSize: 100,
	tacrAgritasDataRepositoryUrl: 'http://localhost:3031/agritas/static/data/',
	tacrAgritasGeoserverWmsUrl: 'http://localhost:3032/geoserver/agritas/wms'
	// tacrAgritasDataRepositoryUrl: 'http://project.gisat.cz/agritas/static/data/',
	// tacrAgritasGeoserverWmsUrl: 'http://45.56.96.184:8965/geoserver/agritas/wms'
};

export default agritasProxy;

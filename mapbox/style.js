
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "GoogleSatellite_0": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "CDMXcopy_1": {
            "type": "geojson",
            "data": json_CDMXcopy_1
        }
                    ,
        "2022_2": {
            "type": "geojson",
            "data": json_2022_2
        }
                    ,
        "2018_3": {
            "type": "geojson",
            "data": json_2018_3
        }
                    ,
        "Reto_verde_4": {
            "type": "geojson",
            "data": json_Reto_verde_4
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_GoogleSatellite_0_0",
            "type": "raster",
            "source": "GoogleSatellite_0"
        },
        {
            "id": "lyr_CDMXcopy_1_0",
            "type": "fill",
            "source": "CDMXcopy_1",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#ffffff'}
        }
,
        {
            "id": "lyr_2022_2_0",
            "type": "fill",
            "source": "2022_2",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'VALUE'], 1], 1.0, ['==', ['get', 'VALUE'], 2], 1.0, ['==', ['get', 'VALUE'], 3], 1.0, ['==', ['get', 'VALUE'], 4], 1.0, ['==', ['get', 'VALUE'], 5], 1.0, ['==', ['get', 'VALUE'], 6], 1.0, 1.0], 'fill-color': ['case', ['==', ['get', 'VALUE'], 1], '#6431dd', ['==', ['get', 'VALUE'], 2], '#eed12f', ['==', ['get', 'VALUE'], 3], '#98e979', ['==', ['get', 'VALUE'], 4], '#2f691d', ['==', ['get', 'VALUE'], 5], '#5dad51', ['==', ['get', 'VALUE'], 6], '#3c96e0', '#cee123']}
        }
,
        {
            "id": "lyr_2018_3_0",
            "type": "fill",
            "source": "2018_3",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'VALUE'], 1], 1.0, ['==', ['get', 'VALUE'], 2], 1.0, ['==', ['get', 'VALUE'], 3], 1.0, ['==', ['get', 'VALUE'], 4], 1.0, ['==', ['get', 'VALUE'], 5], 1.0, ['==', ['get', 'VALUE'], 6], 1.0, 0], 'fill-color': ['case', ['==', ['get', 'VALUE'], 1], '#6431dd', ['==', ['get', 'VALUE'], 2], '#eed12f', ['==', ['get', 'VALUE'], 3], '#98e979', ['==', ['get', 'VALUE'], 4], '#2f691d', ['==', ['get', 'VALUE'], 5], '#5dad51', ['==', ['get', 'VALUE'], 6], '#3c96e0', '#ffffff']}
        }
,
        {
            "id": "lyr_Reto_verde_4_0",
            "type": "fill",
            "source": "Reto_verde_4",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#18ec11'}
        }
],
}
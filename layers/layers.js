var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Kawasan_1 = new ol.format.GeoJSON();
var features_Kawasan_1 = format_Kawasan_1.readFeatures(json_Kawasan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kawasan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kawasan_1.addFeatures(features_Kawasan_1);
var lyr_Kawasan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kawasan_1, 
                style: style_Kawasan_1,
                popuplayertitle: 'Kawasan',
                interactive: true,
                title: '<img src="styles/legend/Kawasan_1.png" /> Kawasan'
            });
var format_BlockRumah_2 = new ol.format.GeoJSON();
var features_BlockRumah_2 = format_BlockRumah_2.readFeatures(json_BlockRumah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlockRumah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlockRumah_2.addFeatures(features_BlockRumah_2);
var lyr_BlockRumah_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlockRumah_2, 
                style: style_BlockRumah_2,
                popuplayertitle: 'Block Rumah',
                interactive: true,
                title: '<img src="styles/legend/BlockRumah_2.png" /> Block Rumah'
            });
var format_Mushola_3 = new ol.format.GeoJSON();
var features_Mushola_3 = format_Mushola_3.readFeatures(json_Mushola_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mushola_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mushola_3.addFeatures(features_Mushola_3);
var lyr_Mushola_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mushola_3, 
                style: style_Mushola_3,
                popuplayertitle: 'Mushola',
                interactive: true,
                title: '<img src="styles/legend/Mushola_3.png" /> Mushola'
            });
var format_Lapangan_4 = new ol.format.GeoJSON();
var features_Lapangan_4 = format_Lapangan_4.readFeatures(json_Lapangan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_4.addFeatures(features_Lapangan_4);
var lyr_Lapangan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_4, 
                style: style_Lapangan_4,
                popuplayertitle: 'Lapangan',
                interactive: true,
                title: '<img src="styles/legend/Lapangan_4.png" /> Lapangan'
            });
var format_jalan_5 = new ol.format.GeoJSON();
var features_jalan_5 = format_jalan_5.readFeatures(json_jalan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_5.addFeatures(features_jalan_5);
var lyr_jalan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_5, 
                style: style_jalan_5,
                popuplayertitle: 'jalan',
                interactive: true,
                title: '<img src="styles/legend/jalan_5.png" /> jalan'
            });
var format_Ruko_6 = new ol.format.GeoJSON();
var features_Ruko_6 = format_Ruko_6.readFeatures(json_Ruko_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruko_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruko_6.addFeatures(features_Ruko_6);
var lyr_Ruko_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruko_6, 
                style: style_Ruko_6,
                popuplayertitle: 'Ruko',
                interactive: true,
                title: '<img src="styles/legend/Ruko_6.png" /> Ruko'
            });
var format_Taman_7 = new ol.format.GeoJSON();
var features_Taman_7 = format_Taman_7.readFeatures(json_Taman_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taman_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taman_7.addFeatures(features_Taman_7);
var lyr_Taman_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taman_7, 
                style: style_Taman_7,
                popuplayertitle: 'Taman',
                interactive: true,
                title: '<img src="styles/legend/Taman_7.png" /> Taman'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Kawasan_1.setVisible(true);lyr_BlockRumah_2.setVisible(true);lyr_Mushola_3.setVisible(true);lyr_Lapangan_4.setVisible(true);lyr_jalan_5.setVisible(true);lyr_Ruko_6.setVisible(true);lyr_Taman_7.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Kawasan_1,lyr_BlockRumah_2,lyr_Mushola_3,lyr_Lapangan_4,lyr_jalan_5,lyr_Ruko_6,lyr_Taman_7];
lyr_Kawasan_1.set('fieldAliases', {'id': 'id', });
lyr_BlockRumah_2.set('fieldAliases', {'id': 'id', 'Luas': 'Luas', 'Nama': 'Nama', 'Status': 'Status', 'Tipe': 'Tipe', });
lyr_Mushola_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Lapangan_4.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_jalan_5.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'Panjang': 'Panjang', });
lyr_Ruko_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', 'Status': 'Status', });
lyr_Taman_7.set('fieldAliases', {'id': 'id', 'Luas': 'Luas', 'nama': 'nama', });
lyr_Kawasan_1.set('fieldImages', {'id': '', });
lyr_BlockRumah_2.set('fieldImages', {'id': 'TextEdit', 'Luas': 'TextEdit', 'Nama': 'TextEdit', 'Status': 'TextEdit', 'Tipe': 'TextEdit', });
lyr_Mushola_3.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Lapangan_4.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_jalan_5.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'Panjang': 'TextEdit', });
lyr_Ruko_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', 'Status': 'TextEdit', });
lyr_Taman_7.set('fieldImages', {'id': 'TextEdit', 'Luas': 'TextEdit', 'nama': 'TextEdit', });
lyr_Kawasan_1.set('fieldLabels', {'id': 'no label', });
lyr_BlockRumah_2.set('fieldLabels', {'id': 'no label', 'Luas': 'no label', 'Nama': 'no label', 'Status': 'no label', 'Tipe': 'no label', });
lyr_Mushola_3.set('fieldLabels', {'id': 'no label', 'Nama': 'header label - visible with data', });
lyr_Lapangan_4.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_jalan_5.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'Panjang': 'no label', });
lyr_Ruko_6.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', 'Status': 'no label', });
lyr_Taman_7.set('fieldLabels', {'id': 'no label', 'Luas': 'no label', 'nama': 'no label', });
lyr_Taman_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var wms_layers = [];

var format_Thnhng_0 = new ol.format.GeoJSON();
var features_Thnhng_0 = format_Thnhng_0.readFeatures(json_Thnhng_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thnhng_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thnhng_0.addFeatures(features_Thnhng_0);
var lyr_Thnhng_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thnhng_0, 
                style: style_Thnhng_0,
                popuplayertitle: 'Thổ nhưỡng',
                interactive: true,
    title: 'Thổ nhưỡng<br />\
    <img src="styles/legend/Thnhng_0_0.png" /> NHÓM BÃI CÁT CỒN CÁT,  VÀ ĐẤT CÁT BIỂN - C<br />\
    <img src="styles/legend/Thnhng_0_1.png" /> NHÓM BÃI CÁT CỒN CÁT,  VÀ ĐẤT CÁT BIỂN - Cb<br />\
    <img src="styles/legend/Thnhng_0_2.png" /> NHÓM BÃI CÁT CỒN CÁT,  VÀ ĐẤT CÁT BIỂN - Cc<br />\
    <img src="styles/legend/Thnhng_0_3.png" /> NHÓM BÃI CÁT CỒN CÁT,  VÀ ĐẤT CÁT BIỂN - Cg<br />\
    <img src="styles/legend/Thnhng_0_4.png" /> NHÓM BÃI CÁT CỒN CÁT,  VÀ ĐẤT CÁT BIỂN - Cm<br />\
    <img src="styles/legend/Thnhng_0_5.png" /> NHÓM BÃI CÁT CỒN CÁT,  VÀ ĐẤT CÁT BIỂN - Cv<br />\
    <img src="styles/legend/Thnhng_0_6.png" /> NHÓM ĐẤT ĐEN - Rk<br />\
    <img src="styles/legend/Thnhng_0_7.png" /> NHÓM ĐẤT ĐEN - Ru<br />\
    <img src="styles/legend/Thnhng_0_8.png" /> NHÓM ĐẤT ĐỎ VÀNG - Fa<br />\
    <img src="styles/legend/Thnhng_0_9.png" /> NHÓM ĐẤT ĐỎ VÀNG - Fd<br />\
    <img src="styles/legend/Thnhng_0_10.png" /> NHÓM ĐẤT ĐỎ VÀNG - Fk<br />\
    <img src="styles/legend/Thnhng_0_11.png" /> NHÓM ĐẤT ĐỎ VÀNG - Fp<br />\
    <img src="styles/legend/Thnhng_0_12.png" /> NHÓM ĐẤT ĐỎ VÀNG - Fs<br />\
    <img src="styles/legend/Thnhng_0_13.png" /> NHÓM ĐẤT ĐỎ VÀNG - Fu<br />\
    <img src="styles/legend/Thnhng_0_14.png" /> NHÓM ĐẤT MẶN - M<br />\
    <img src="styles/legend/Thnhng_0_15.png" /> NHÓM ĐẤT PHÈN - Mpm1<br />\
    <img src="styles/legend/Thnhng_0_16.png" /> NHÓM ĐẤT PHÈN - Mpm2<br />\
    <img src="styles/legend/Thnhng_0_17.png" /> NHÓM ĐẤT PHÈN - SiP<br />\
    <img src="styles/legend/Thnhng_0_18.png" /> NHÓM ĐẤT PHÈN - Sj<br />\
    <img src="styles/legend/Thnhng_0_19.png" /> NHÓM ĐẤT PHÈN - Sj2M<br />\
    <img src="styles/legend/Thnhng_0_20.png" /> NHÓM ĐẤT PHÈN - Snj<br />\
    <img src="styles/legend/Thnhng_0_21.png" /> NHÓM ĐẤT PHÈN - SnP<br />\
    <img src="styles/legend/Thnhng_0_22.png" /> NHÓM ĐẤT PHÈN - Sp<br />\
    <img src="styles/legend/Thnhng_0_23.png" /> NHÓM ĐẤT PHÈN - Sp1M<br />\
    <img src="styles/legend/Thnhng_0_24.png" /> NHÓM ĐẤT PHÈN - Sp1Mm<br />\
    <img src="styles/legend/Thnhng_0_25.png" /> NHÓM ĐẤT PHÈN - Sp1Mn<br />\
    <img src="styles/legend/Thnhng_0_26.png" /> NHÓM ĐẤT PHÈN - Spm<br />\
    <img src="styles/legend/Thnhng_0_27.png" /> NHÓM ĐẤT PHÙ SA - P<br />\
    <img src="styles/legend/Thnhng_0_28.png" /> NHÓM ĐẤT PHÙ SA - Pc<br />\
    <img src="styles/legend/Thnhng_0_29.png" /> NHÓM ĐẤT PHÙ SA - Pf<br />\
    <img src="styles/legend/Thnhng_0_30.png" /> NHÓM ĐẤT PHÙ SA - Pg<br />\
    <img src="styles/legend/Thnhng_0_31.png" /> NHÓM ĐẤT PHÙ SA - Pp<br />\
    <img src="styles/legend/Thnhng_0_32.png" /> NHÓM ĐẤT PHÙ SA - Pr<br />\
    <img src="styles/legend/Thnhng_0_33.png" /> NHÓM ĐẤT PHÙ SA - Py<br />\
    <img src="styles/legend/Thnhng_0_34.png" /> NHÓM ĐẤT THUNG LŨNG - D<br />\
    <img src="styles/legend/Thnhng_0_35.png" /> NHÓM ĐẤT XÁM BẠC MÀU - F<br />\
    <img src="styles/legend/Thnhng_0_36.png" /> NHÓM ĐẤT XÁM BẠC MÀU - Ru<br />\
    <img src="styles/legend/Thnhng_0_37.png" /> NHÓM ĐẤT XÁM BẠC MÀU - X<br />\
    <img src="styles/legend/Thnhng_0_38.png" /> NHÓM ĐẤT XÁM BẠC MÀU - Xa<br />\
    <img src="styles/legend/Thnhng_0_39.png" /> NHÓM ĐẤT XÁM BẠC MÀU - Xf<br />\
    <img src="styles/legend/Thnhng_0_40.png" /> NHÓM ĐẤT XÁM BẠC MÀU - Xg<br />\
    <img src="styles/legend/Thnhng_0_41.png" /> NHÓM ĐẤT XÁM BẠC MÀU - Xhg<br />\
    <img src="styles/legend/Thnhng_0_42.png" /> NHÓM ĐẤT XÓI MÒN TRƠ SỎI ĐÁ - E<br />' });
var format_Thyvn_1 = new ol.format.GeoJSON();
var features_Thyvn_1 = format_Thyvn_1.readFeatures(json_Thyvn_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thyvn_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thyvn_1.addFeatures(features_Thyvn_1);
var lyr_Thyvn_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thyvn_1, 
                style: style_Thyvn_1,
                popuplayertitle: 'Thủy văn',
                interactive: true,
    title: 'Thủy văn<br />\
    <img src="styles/legend/Thyvn_1_0.png" /> Ao<br />\
    <img src="styles/legend/Thyvn_1_1.png" /> Ao, hồ, đầm<br />\
    <img src="styles/legend/Thyvn_1_2.png" /> Biển<br />\
    <img src="styles/legend/Thyvn_1_3.png" /> Đầm<br />\
    <img src="styles/legend/Thyvn_1_4.png" /> Hồ<br />\
    <img src="styles/legend/Thyvn_1_5.png" /> Kênh<br />\
    <img src="styles/legend/Thyvn_1_6.png" /> Mương<br />\
    <img src="styles/legend/Thyvn_1_7.png" /> Rạch<br />\
    <img src="styles/legend/Thyvn_1_8.png" /> Sông<br />\
    <img src="styles/legend/Thyvn_1_9.png" /> Suối<br />\
    <img src="styles/legend/Thyvn_1_10.png" /> Khác<br />' });
var lyr_Hngdc_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Hướng dốc<br />\
    <img src="styles/legend/Hngdc_2_0.png" /> Bắc<br />\
    <img src="styles/legend/Hngdc_2_1.png" /> Đông Bắc<br />\
    <img src="styles/legend/Hngdc_2_2.png" /> Đông<br />\
    <img src="styles/legend/Hngdc_2_3.png" /> Đông Nam<br />\
    <img src="styles/legend/Hngdc_2_4.png" /> Nam<br />\
    <img src="styles/legend/Hngdc_2_5.png" /> Tây Nam<br />\
    <img src="styles/legend/Hngdc_2_6.png" /> Tây<br />\
    <img src="styles/legend/Hngdc_2_7.png" /> Tây Bắc<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Hngdc_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11804141.675596, 957549.553205, 11984927.727744, 1302567.331743]
        })
    });
var lyr_dc_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Độ dốc (độ)<br />\
    <img src="styles/legend/dc_3_0.png" /> 0 - 0.08<br />\
    <img src="styles/legend/dc_3_1.png" /> 0.08 - 0.21<br />\
    <img src="styles/legend/dc_3_2.png" /> 0.21 - 0.43<br />\
    <img src="styles/legend/dc_3_3.png" /> 0.43 - 0.81<br />\
    <img src="styles/legend/dc_3_4.png" /> 0.81 - 1.58<br />\
    <img src="styles/legend/dc_3_5.png" /> 1.58 - 3.49<br />\
    <img src="styles/legend/dc_3_6.png" /> 3.49 - 15.00<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/dc_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11804141.675549, 957549.553165, 11984927.727727, 1302567.331705]
        })
    });
var lyr_caom_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Độ cao (m)<br />\
    <img src="styles/legend/caom_4_0.png" /> 0 - 2.50<br />\
    <img src="styles/legend/caom_4_1.png" /> 2.50 - 5.30 <br />\
    <img src="styles/legend/caom_4_2.png" /> 5.30 - 14.14<br />\
    <img src="styles/legend/caom_4_3.png" /> 14.14 - 30.86<br />\
    <img src="styles/legend/caom_4_4.png" /> 30.86 - 45.95<br />\
    <img src="styles/legend/caom_4_5.png" /> 45.95 - 63.45<br />\
    <img src="styles/legend/caom_4_6.png" /> 63.45 - 150.00<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/caom_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11804141.675549, 957549.553165, 11984927.727727, 1302567.331705]
        })
    });
var format_Trshnhchnh_5 = new ol.format.GeoJSON();
var features_Trshnhchnh_5 = format_Trshnhchnh_5.readFeatures(json_Trshnhchnh_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trshnhchnh_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trshnhchnh_5.addFeatures(features_Trshnhchnh_5);
var lyr_Trshnhchnh_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trshnhchnh_5, 
                style: style_Trshnhchnh_5,
                popuplayertitle: 'Trụ sở hành chính',
                interactive: true,
    title: 'Trụ sở hành chính<br />\
    <img src="styles/legend/Trshnhchnh_5_0.png" /> Trụ sở UBND cấp xã<br />\
    <img src="styles/legend/Trshnhchnh_5_1.png" /> Trụ sở UBND cấp tỉnh<br />' });
var format_agiicpx_6 = new ol.format.GeoJSON();
var features_agiicpx_6 = format_agiicpx_6.readFeatures(json_agiicpx_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agiicpx_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agiicpx_6.addFeatures(features_agiicpx_6);
var lyr_agiicpx_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_agiicpx_6, 
                style: style_agiicpx_6,
                popuplayertitle: 'Địa giới cấp xã',
                interactive: true,
                title: '<img src="styles/legend/agiicpx_6.png" /> Địa giới cấp xã'
            });

lyr_Thnhng_0.setVisible(true);lyr_Thyvn_1.setVisible(true);lyr_Hngdc_2.setVisible(true);lyr_dc_3.setVisible(true);lyr_caom_4.setVisible(true);lyr_Trshnhchnh_5.setVisible(true);lyr_agiicpx_6.setVisible(true);
var layersList = [lyr_Thnhng_0,lyr_Thyvn_1,lyr_Hngdc_2,lyr_dc_3,lyr_caom_4,lyr_Trshnhchnh_5,lyr_agiicpx_6];
lyr_Thnhng_0.set('fieldAliases', {'TenDat': 'Tên đất', 'KiHieu': 'Kí hiệu', 'NhomDat': 'Nhóm đất', 'LoaiDat': 'Loại đất', });
lyr_Thyvn_1.set('fieldAliases', {'TEN': 'TEN', 'DT_ha': 'DT_ha', 'PhanLoai': 'PhanLoai', 'DTich_ha': 'DTich_ha', 'Pl': 'Phân loại', 'Dtha': 'Diện tích (ha)', });
lyr_Trshnhchnh_5.set('fieldAliases', {'id': 'id', 'Ten_TruSo': 'Tên trụ sở', 'Loai': 'Loại', });
lyr_agiicpx_6.set('fieldAliases', {'fid': 'fid', 'Loai': 'Loại', 'Ten_Tinh': 'Tên tỉnh', 'Ten_Xa': 'Tên xã', 'STT': 'STT', 'Dan_So_202': 'Dan_So_202', 'Sap_Xep': 'Sap_Xep', 'Tiep_Giap': 'Tiếp giáp', 'Dien_Tich': 'Diện tích (km²)', 'DS2025': 'Dân số 2025 (người)', 'ĐC_mean': 'Độ cao trung bình (độ)', 'ĐC_min': 'Độ cao nhỏ nhất (độ)', 'ĐC_max': 'Độ cao lớn nhất (độ)', 'DD_mean': 'Độ dốc trung bình (độ)', 'DD_min': 'Độ dốc nhỏ nhất (độ)', 'DD_max': 'Độ dốc lớn nhất (độ)', 'HDCD': 'Hướng dốc chủ đạo', 'DTha': 'Diện tích mặt nước (ha)', 'TLN%': 'Tỷ lệ Nước (%)', 'TenDat_clean': 'Tên, diện tích đất (ha)', });
lyr_Thnhng_0.set('fieldImages', {'TenDat': 'TextEdit', 'KiHieu': 'TextEdit', 'NhomDat': 'TextEdit', 'LoaiDat': 'TextEdit', });
lyr_Thyvn_1.set('fieldImages', {'TEN': 'TextEdit', 'DT_ha': 'TextEdit', 'PhanLoai': 'TextEdit', 'DTich_ha': 'TextEdit', 'Pl': 'TextEdit', 'Dtha': 'TextEdit', });
lyr_Trshnhchnh_5.set('fieldImages', {'id': 'TextEdit', 'Ten_TruSo': 'TextEdit', 'Loai': 'TextEdit', });
lyr_agiicpx_6.set('fieldImages', {'fid': 'TextEdit', 'Loai': 'TextEdit', 'Ten_Tinh': 'TextEdit', 'Ten_Xa': 'TextEdit', 'STT': 'Range', 'Dan_So_202': 'TextEdit', 'Sap_Xep': 'TextEdit', 'Tiep_Giap': 'TextEdit', 'Dien_Tich': 'TextEdit', 'DS2025': 'TextEdit', 'ĐC_mean': 'TextEdit', 'ĐC_min': 'TextEdit', 'ĐC_max': 'TextEdit', 'DD_mean': 'TextEdit', 'DD_min': 'TextEdit', 'DD_max': 'TextEdit', 'HDCD': 'TextEdit', 'DTha': 'TextEdit', 'TLN%': 'TextEdit', 'TenDat_clean': 'TextEdit', });
lyr_Thnhng_0.set('fieldLabels', {'TenDat': 'hidden field', 'KiHieu': 'hidden field', 'NhomDat': 'hidden field', 'LoaiDat': 'no label', });
lyr_Thyvn_1.set('fieldLabels', {'TEN': 'hidden field', 'DT_ha': 'hidden field', 'PhanLoai': 'hidden field', 'DTich_ha': 'hidden field', 'Pl': 'inline label - always visible', 'Dtha': 'inline label - always visible', });
lyr_Trshnhchnh_5.set('fieldLabels', {'id': 'hidden field', 'Ten_TruSo': 'inline label - always visible', 'Loai': 'inline label - always visible', });
lyr_agiicpx_6.set('fieldLabels', {'fid': 'hidden field', 'Loai': 'inline label - always visible', 'Ten_Tinh': 'inline label - always visible', 'Ten_Xa': 'inline label - always visible', 'STT': 'hidden field', 'Dan_So_202': 'hidden field', 'Sap_Xep': 'hidden field', 'Tiep_Giap': 'inline label - always visible', 'Dien_Tich': 'inline label - always visible', 'DS2025': 'inline label - always visible', 'ĐC_mean': 'inline label - always visible', 'ĐC_min': 'inline label - always visible', 'ĐC_max': 'inline label - always visible', 'DD_mean': 'inline label - always visible', 'DD_min': 'inline label - always visible', 'DD_max': 'inline label - always visible', 'HDCD': 'inline label - always visible', 'DTha': 'inline label - always visible', 'TLN%': 'inline label - always visible', 'TenDat_clean': 'inline label - always visible', });
lyr_agiicpx_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
$(document).ready(function(){
    $('footer').sticky();
    $('.lightbox').lightbox();
    smoothScrolling();

    $('#fullpage').fullpage({
        navigation: true,
        slidesNavigation: true,
        controlArrows: false
    });
});

AmCharts.makeChart(
    "chartdiv", {
		"type": "serial",
		"categoryField": "Website Version",
		"columnWidth": 0.5,
		"startDuration": 1,
		"backgroundColor": "#EEE",
		"color": "#2F2F2F",
		"fontFamily": "Source Sans Pro",
		"fontSize": 20,
		"theme": "default",
		"categoryAxis": {
			"autoRotateAngle": 0,
			"gridPosition": "start",
			"tickPosition": "start",
			"axisColor": "#2F2F2F",
			"title": "Website Version"
		},
		"trendLines": [],
		"graphs": [
			{
				"balloonText": "[[title]] of [[category]]:[[value]]",
				"fillAlphas": 1,
				"fillColors": "#52AE76",
				"id": "AmGraph-1",
				"lineColor": "#52AE76",
				"negativeFillAlphas": 0,
				"negativeLineAlpha": 0,
				"title": "graph 1",
				"topRadius": 0,
				"type": "column",
				"valueField": "Time Taken"
			}
		],
		"guides": [],
		"valueAxes": [
			{
				"id": "ValueAxis-1",
				"stackType": "regular",
				"title": "Time Taken (hr)"
			}
		],
		"allLabels": [],
		"balloon": {},
		"titles": [
			{
				"id": "Title-1",
				"size": 25,
				"text": "Speed Comparision Before and After Eden"
			}
		],
		"dataProvider": [
			{
				"Website Version": "v1.0.0",
				"Time Taken": "18.3"
			},
			{
				"Website Version": "v3.0.0",
				"Time Taken": "9.6"
			}
		]
	}
);

AmCharts.makeChart(
    "chartdiv-size",
	{
		"type": "serial",
		"categoryField": "Framework",
		"rotate": true,
		"startDuration": 1,
        "backgroundColor": "#52ae76",
		"fontFamily": "Source Sans Pro",
		"fontSize": 20,
		"categoryAxis": {
			"gridPosition": "start",
			"axisColor": "#EEE",
			"color": "#EEE",
			"title": "Framework",
			"titleColor": "#EEE"
		},
		"trendLines": [],
		"graphs": [
			{
				"balloonText": "[[title]] of [[category]]:[[value]]",
				"fillAlphas": 1,
				"fillColors": "#EEE",
				"id": "AmGraph-1",
				"lineColor": "#EEE",
				"title": "graph 1",
				"type": "column",
				"valueField": "File Size (kb)"
			}
		],
		"guides": [],
		"valueAxes": [
			{
				"id": "ValueAxis-1",
				"axisAlpha": 0,
				"axisColor": "#EEE",
				"color": "#EEE",
				"gridColor": "#2F2F2F",
				"title": "File Size (kb)",
				"titleColor": "#EEE"
			}
		],
		"allLabels": [],
		"balloon": {},
		"titles": [
			{
				"color": "#EEE",
				"id": "Title-1",
				"size": 25,
				"text": "CSS File Size Comparison between Front-end Frameworks "
			}
		],
		"dataProvider": [
			{
				"Framework": "Bootstrap",
				"File Size (kb)": "185"
			},
			{
				"Framework": "Skeleton",
				"File Size (kb)": "11.2"
			},
			{
				"Framework": "Eden",
				"File Size (kb)": "45.8"
			}
		]
	}
);

AmCharts.makeChart(
    "chartdiv-ratio",
    {
		"type": "pie",
		"balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
		"baseColor": "#783C98",
		"labelColorField": "#EEE",
		"titleField": "category",
		"valueField": "column-1",
		"backgroundColor": "#52AE76",
		"color": "#EEE",
		"fontFamily": "Source Sans Pro",
		"fontSize": 25,
		"allLabels": [],
		"balloon": {},
		"legend": {
			"enabled": true,
			"align": "center",
			"color": "#EEE",
			"markerType": "circle"
		},
		"titles": [
			{
				"id": "Title-2",
				"text": "Ratio between CSS to JS"
			}
		],
		"dataProvider": [
			{
				"category": "CSS",
				"column-1": "76.63"
			},
			{
				"category": "JS",
				"column-1": "23.37"
			}
		]
    }
);

$('.lightbox img').click(function(){
    //disabling all keyboard scrolling
    $.fn.fullpage.setKeyboardScrolling(false);
});

$(document).keydown(function(e){
    if($('.lightbox .modal').hasClass('is-open')){
        if(e.keyCode == 27){ // esc
            $.fn.fullpage.setKeyboardScrolling(true);
        }
    }
});

//Initialize states list for selection*********************************

function getState() {

  var queryUrl = "/state";
  Plotly.d3.json(queryUrl, function(error, response) {
  
    var stateList = document.querySelector("#selDataset");
	  //alert(nameList);
	  
	for (i=0; i < response.length; i++) {
			console.log(response[i])
			var listItem = document.createElement("option");
			listItem.text = response[i];
			stateList.add(listItem);
	}
	  
	});

	initavggases();

}
//call state funcction to initialize state list dropdown  
getState();

function optionChanged(state) {
	//alert(state);
	// var queryUrl = "/country/"+sample_data;
//	redrawavgno2_v2(state); 
//	redrawavgco(state); 
//	redrawavgo3(state); 
//	redrawavgs2(state); 
}  
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Part I - Initialize charts for AR*********************************

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Part I - Initialize charts for AR*********************************
// Initialize Section for NO2
function initavggases() {

	var queryUrls2 = "/avgs2/CA";
	var BAR = document.getElementById("Linechart");

	Plotly.d3.json(queryUrls2, function(error, response) {
		console.log(response.avgs2)
		var trace4={
			x: response.year,
			y: response.avgs2,
			xaxis:'x4',
			yaxis:'y4',
			type: 'scatter'
		};

		var queryUrlo3 = "/avgo3/CA";
		var BAR = document.getElementById("Linechart");

		Plotly.d3.json(queryUrlo3, function(error, response) {
			console.log(response.avgo3)

			var trace3={
				x: response.year,
				y: response.avgo3,
				xaxis:'x3',
				yaxis:'y3',
				type: 'scatter'
			};

			var queryUrlno2 = "/avgno2/CA";
			var BAR = document.getElementById("Linechart");
	
				Plotly.d3.json(queryUrlno2, function(error, response) {
					console.log(response.avgno2)

					var trace1={
						x: response.year,
						y: response.avgno2,
						type: 'scatter'
					};

					var queryUrlco = "/avgco/CA";
					var BAR = document.getElementById("Linechart");

					Plotly.d3.json(queryUrlco, function(error, response) {
						console.log(response.avgco)	
						var trace2={
							x: response.year,
							y: response.avgco,
							xaxis:'x2',
							yaxis:'y2',
							type: 'scatter'
						
						};
						  
					//	var layout = {
					//		title: "Average Pollution - 2000 thru 2010",
					//		height: 400,
					//		width: 600,
					//		color: 'red',
					//		xaxis : {
					//			title :"Year",
					//			tickangle : -45,
					//			tickfont : {
				  	//				size : 10,
				  	//				color : 'purple'
					//			}
					//		},
					//		yaxis : {
					//			title :"Average Pollution"
					//		}
					//	};

		//	console.log(response.year)
		//	console.log(response.avgco)
		//	console.log(response.avgno2)

						var data = [trace1, trace2, trace3, trace4];

						var layout = {
							title: "Average Pollution - 2000 thru 2010",
							xaxis: {
								title:"Year",
								domain: [0, 0.45]},
							yaxis: {
								title:"Average NO2",
								domain: [0, 0.45]},
							xaxis4: {
								title:"Year",
							  domain: [0.55, 1],
							  anchor: 'y4'
							},
							xaxis3: {
								title:"Year",
							  domain: [0, 0.45],
							  anchor: 'y3'
							},
							xaxis2: {
								title:"Year",
								domain: [0.55, 1]},
							yaxis2: {
								title:"Average CO",
							  domain: [0, 0.45],
							  anchor: 'x2'
							},
							yaxis3: {
								title:"Average O3",
								domain: [0.55, 1]},
							yaxis4: {
								title:"Average S2",
							  domain: [0.55, 1],
							  anchor: 'x4'
							}
						  };
						  						  
						Plotly.newPlot("Linechart", data, layout);
					
					});	
				});
		});
	});
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function redrawavgno2_v2(state) {
	
	var queryUrl = "/avgno2/"+state;
	var BAR = document.getElementById("NO2-bar-chart");
	
	Plotly.d3.json(queryUrl, function(error, response) {
	console.log(response);
	if (error) return console.warn(error);

		var layout = {
			title: "Average Pollution - NO2 from 2000 thru 2010",
			height: 400,
			width: 600,
			color: 'red',
			xaxis : {
				title :"Year",
				tickangle : -45,
				tickfont : {
				  size : 10,
				  color : 'purple'
				}
			},
			yaxis : {
				title :"Average Pollution"
			}
		};
		console.log(response.year)
		console.log(response.avgno2)		

		var trace1={
			x: response.year,
			y: response.avgno2,
			type: 'scatter'
		};

		var trace2={
			x: response.year,
			y: response.avgco,
			type: 'scatter'
		};

		var data = [trace1, trace2];

		Plotly.newPlot("NO2-bar-chart", data, layout);
		
	});
}





//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Part II - Option Changing Code*********************************
//Redraw - NO2 for selected state
function redrawavgno2(state) {
	
	var queryUrl = "/avgno2/"+state;
	var BAR = document.getElementById("NO2-bar-chart");
	
	Plotly.d3.json(queryUrl, function(error, response) {
	console.log(response);
	if (error) return console.warn(error);

		var layout = {
			title: "Average Pollution - NO2 from 2000 thru 2010",
			height: 400,
			width: 600,
			color: 'red',
			xaxis : {
				title :"Year",
				tickangle : -45,
				tickfont : {
				  size : 10,
				  color : 'purple'
				}
			},
			yaxis : {
				title :"Average Pollution"
			}
		};
		console.log(response.year)
		console.log(response.avgno2)		

		var trace1={
			x: response.year,
			y: response.avgno2,
			type: 'scatter'
		};

		var data = [trace1];

		Plotly.newPlot("NO2-bar-chart", data, layout);
		
	});
}

//Part II - Option Changing Code*********************************
//Redraw - CO for selected state
function redrawavgco(state) {
	
	var queryUrl = "/avgco/"+state;
	var BAR = document.getElementById("CO-bar-chart");
	
	Plotly.d3.json(queryUrl, function(error, response) {
	console.log(response);
	if (error) return console.warn(error);

		var layout = {
			title: "Average Pollution - CO from 2000 thru 2010",
			height: 400,
			width: 600,
			color: 'red',
			xaxis : {
				title :"Year",
				tickangle : -45,
				tickfont : {
				  size : 10,
				  color : 'purple'
				}
			},
			yaxis : {
				title :"Average Pollution"
			}
		};
		console.log(response.year)
		console.log(response.avgco)		
		var trace1={
			x: response.year,
			y: response.avgco,
			type: 'scatter'
		};

		var data = [trace1];

		Plotly.newPlot("CO-bar-chart", data, layout);
		
	});
}

//Part II - Option Changing Code*********************************
//Redraw - O3 for selected state
function redrawavgo3(state) {
	
	var queryUrl = "/avgo3/"+state;
	var BAR = document.getElementById("O3-bar-chart");
	
	Plotly.d3.json(queryUrl, function(error, response) {
	console.log(response);
	if (error) return console.warn(error);

		var layout = {
			title: "Average Pollution - O3 from 2000 thru 2010",
			height: 400,
			width: 600,
			color: 'red',
			xaxis : {
				title :"Year",
				tickangle : -45,
				tickfont : {
				  size : 10,
				  color : 'purple'
				}
			},
			yaxis : {
				title :"Average Pollution"
			}
		};
		console.log(response.year)
		//response.debt_per_year=[910884000.0, 1893471000.0, 1985367000.0, 2096969000.0, 1966409000.0, 2023326000.0, 2070650000.0, 2097091000.0, 1999058000.0, 1958130000.0, 1921469000.0]
		console.log(response.avgo3)		

		var trace1={
			// x: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
			//y: [910884000, 1893471000, 1985367000, 2096969000, 1966409000, 2023326000, 2070650000, 2097091000, 1999058000, 1958130000, 1921469000],
			x: response.year,
			y: response.avgo3,
			type: 'scatter'
		};

		var data = [trace1];

		Plotly.newPlot("O3-bar-chart", data, layout);
		
	});
}

//Part II - Option Changing Code*********************************
//Redraw - S2 for selected state
function redrawavgs2(state) {
	
	var queryUrl = "/avgs2/"+state;
	var BAR = document.getElementById("S2-bar-chart");
	
	Plotly.d3.json(queryUrl, function(error, response) {
	console.log(response);
	if (error) return console.warn(error);

		var layout = {
			title: "Average Pollution - S2 from 2000 thru 2010",
			height: 400,
			width: 600,
			color: 'red',
			xaxis : {
				title :"Year",
				tickangle : -45,
				tickfont : {
				  size : 10,
				  color : 'purple'
				}
			},
			yaxis : {
				title :"Average Pollution"
			}
		};
		console.log(response.year)
		//response.debt_per_year=[910884000.0, 1893471000.0, 1985367000.0, 2096969000.0, 1966409000.0, 2023326000.0, 2070650000.0, 2097091000.0, 1999058000.0, 1958130000.0, 1921469000.0]
		console.log(response.avgs2)		

		var trace1={
			// x: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
			//y: [910884000, 1893471000, 1985367000, 2096969000, 1966409000, 2023326000, 2070650000, 2097091000, 1999058000, 1958130000, 1921469000],
			x: response.year,
			y: response.avgs2,
			type: 'scatter'
		};

		var data = [trace1];

		Plotly.newPlot("S2-bar-chart", data, layout);
		
	});
}
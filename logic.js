// Function to determine marker size based on population
//yellow
function markerSizeNO2(NO2mean) {
  return NO2mean * 3000;
}
//purple
function markerSizeCO(COmean) {
  return COmean * 40000;
}
//blue
function markerSizeO3(O3mean) {
  return O3mean * 700000;
}
//red
function markerSizeS2(S2mean) {
  return S2mean * 5000;
}


locations = [
  {
    "coordinates": [
      34.694468, 
      -92.425087
    ], 
    "state": {
      "Area": 53178.62, 
      "COmean": 0.47203083333333334, 
      "NO2mean": 9.828894416666666, 
      "O3mean": 0.026288656250000004, 
      "Population": 2915918.0, 
      "S2mean": 2.0370453229166667, 
      "StateAbbr": "AR"
    }
  }, 
  {
    "coordinates": [
      31.970131, 
      -111.89071299999999
    ], 
    "state": {
      "Area": 113998.3, 
      "COmean": 0.5159661702127657, 
      "NO2mean": 20.419472849129576, 
      "O3mean": 0.02502576789168279, 
      "Population": 6392017.0, 
      "S2mean": 1.479786170212765, 
      "StateAbbr": "AZ"
    }
  }, 
  {
    "coordinates": [
      34.032383, 
      -119.1343
    ], 
    "state": {
      "Area": 163695.57, 
      "COmean": 0.5045378777809885, 
      "NO2mean": 14.605619305692022, 
      "O3mean": 0.026317405085235543, 
      "Population": 37253956.0, 
      "S2mean": 1.209803202253687, 
      "StateAbbr": "CA"
    }
  }, 
  {
    "coordinates": [
      39.726303, 
      -104.856808
    ], 
    "state": {
      "Area": 104093.57, 
      "COmean": 0.5333558506944447, 
      "NO2mean": 21.41045447569444, 
      "O3mean": 0.020850694444444443, 
      "Population": 5029196.0, 
      "S2mean": 1.8711551006944451, 
      "StateAbbr": "CO"
    }
  }, 
  {
    "coordinates": [
      41.342514, 
      -73.070301
    ], 
    "state": {
      "Area": 5543.33, 
      "COmean": 0.3158693465909091, 
      "NO2mean": 11.267145670454541, 
      "O3mean": 0.027225732954545476, 
      "Population": 3574097.0, 
      "S2mean": 1.5814389772727262, 
      "StateAbbr": "CT"
    }
  }, 
  {
    "coordinates": [
      38.911936, 
      -77.016719
    ], 
    "state": {
      "Area": null, 
      "COmean": 1.0141416311787075, 
      "NO2mean": 20.04757825095058, 
      "O3mean": 0.02330116349809887, 
      "Population": null, 
      "S2mean": 5.544540011406846, 
      "StateAbbr": "DC"
    }
  }, 
  {
    "coordinates": [
      28.635425, 
      -81.488843
    ], 
    "state": {
      "Area": 65754.59, 
      "COmean": 0.42204445484949865, 
      "NO2mean": 8.283118454849498, 
      "O3mean": 0.02661043812709031, 
      "Population": 18801310.0, 
      "S2mean": 0.6298267959866217, 
      "StateAbbr": "FL"
    }
  }, 
  {
    "coordinates": [
      33.771704, 
      -84.23937
    ], 
    "state": {
      "Area": 59424.77, 
      "COmean": 0.31223599999999996, 
      "NO2mean": 17.208333333333332, 
      "O3mean": 0.017472166666666664, 
      "Population": 9687653.0, 
      "S2mean": 0.8576389999999999, 
      "StateAbbr": "GA"
    }
  }, 
  {
    "coordinates": [
      41.570479999999996, 
      -90.529138
    ], 
    "state": {
      "Area": 56271.55, 
      "COmean": 0.26114896226415085, 
      "NO2mean": 7.753295056603771, 
      "O3mean": 0.028256773584905664, 
      "Population": 3046355.0, 
      "S2mean": 0.5003898113207549, 
      "StateAbbr": "IA"
    }
  }, 
  {
    "coordinates": [
      43.735178999999995, 
      -116.41033
    ], 
    "state": {
      "Area": 83570.08, 
      "COmean": 0.1841024642857143, 
      "NO2mean": 10.101953, 
      "O3mean": 0.02647367857142857, 
      "Population": 1567582.0, 
      "S2mean": 0.3118059642857144, 
      "StateAbbr": "ID"
    }
  }, 
  {
    "coordinates": [
      38.439983000000005, 
      -89.983521
    ], 
    "state": {
      "Area": 57914.38, 
      "COmean": 0.45512838902743163, 
      "NO2mean": 18.64619138902743, 
      "O3mean": 0.021432862842892773, 
      "Population": 12830632.0, 
      "S2mean": 3.617444132169573, 
      "StateAbbr": "IL"
    }
  }, 
  {
    "coordinates": [
      39.713893, 
      -86.093293
    ], 
    "state": {
      "Area": 36417.73, 
      "COmean": 0.4762079495798321, 
      "NO2mean": 13.26135730252101, 
      "O3mean": 0.030031411764705876, 
      "Population": 6483802.0, 
      "S2mean": 4.449764453781512, 
      "StateAbbr": "IN"
    }
  }, 
  {
    "coordinates": [
      39.068153, 
      -94.763938
    ], 
    "state": {
      "Area": 82276.84, 
      "COmean": 0.4177727230392159, 
      "NO2mean": 11.247004686274508, 
      "O3mean": 0.026639953431372567, 
      "Population": 2853118.0, 
      "S2mean": 2.401933397058824, 
      "StateAbbr": "KS"
    }
  }, 
  {
    "coordinates": [
      37.031586, 
      -88.71329200000001
    ], 
    "state": {
      "Area": 40409.02, 
      "COmean": 0.15377916666666672, 
      "NO2mean": 11.993090365740747, 
      "O3mean": 0.03213383796296296, 
      "Population": 4339367.0, 
      "S2mean": 3.9940387175925918, 
      "StateAbbr": "KY"
    }
  }, 
  {
    "coordinates": [
      29.984643, 
      -90.161821
    ], 
    "state": {
      "Area": 51839.7, 
      "COmean": 0.49056741111111113, 
      "NO2mean": 14.850076874074077, 
      "O3mean": 0.023335992592592596, 
      "Population": 4533372.0, 
      "S2mean": 2.835411359259261, 
      "StateAbbr": "LA"
    }
  }, 
  {
    "coordinates": [
      42.370567, 
      -71.026964
    ], 
    "state": {
      "Area": 10554.57, 
      "COmean": 0.31628460267857134, 
      "NO2mean": 19.147344830357135, 
      "O3mean": 0.02055515625000001, 
      "Population": 6547629.0, 
      "S2mean": 3.274443441964288, 
      "StateAbbr": "MA"
    }
  }, 
  {
    "coordinates": [
      39.496406, 
      -76.486624
    ], 
    "state": {
      "Area": 12406.68, 
      "COmean": 0.4465921836734693, 
      "NO2mean": 13.447707693877545, 
      "O3mean": 0.026329795918367347, 
      "Population": 5773552.0, 
      "S2mean": 2.7704361734693874, 
      "StateAbbr": "MD"
    }
  }, 
  {
    "coordinates": [
      43.735867, 
      -69.995456
    ], 
    "state": {
      "Area": 35384.65, 
      "COmean": 0.1981078023952095, 
      "NO2mean": 5.1924525748502965, 
      "O3mean": 0.02450507185628742, 
      "Population": 1328361.0, 
      "S2mean": 1.1540191976047904, 
      "StateAbbr": "ME"
    }
  }, 
  {
    "coordinates": [
      42.27633, 
      -83.194425
    ], 
    "state": {
      "Area": 96716.11, 
      "COmean": 0.3516930746268658, 
      "NO2mean": 16.81925563432836, 
      "O3mean": 0.028514485074626856, 
      "Population": 9883640.0, 
      "S2mean": 2.881930037313433, 
      "StateAbbr": "MI"
    }
  }, 
  {
    "coordinates": [
      38.638318, 
      -90.42711800000001
    ], 
    "state": {
      "Area": 69704.31, 
      "COmean": 0.5690981904761906, 
      "NO2mean": 13.752501702380957, 
      "O3mean": 0.03084922619047619, 
      "Population": 5988927.0, 
      "S2mean": 3.3429324404761886, 
      "StateAbbr": "MO"
    }
  }, 
  {
    "coordinates": [
      35.473286, 
      -80.872585
    ], 
    "state": {
      "Area": 53818.51, 
      "COmean": 0.4616950669642856, 
      "NO2mean": 12.014525392857143, 
      "O3mean": 0.029731383928571435, 
      "Population": 9535483.0, 
      "S2mean": 2.1758287321428567, 
      "StateAbbr": "NC"
    }
  }, 
  {
    "coordinates": [
      46.859694, 
      -97.214587
    ], 
    "state": {
      "Area": 70699.79, 
      "COmean": 0.16528604285714274, 
      "NO2mean": 4.749888514285715, 
      "O3mean": 0.026629842857142854, 
      "Population": 672591.0, 
      "S2mean": 0.3013013285714285, 
      "StateAbbr": "ND"
    }
  }, 
  {
    "coordinates": [
      42.87474, 
      -71.629365
    ], 
    "state": {
      "Area": 9349.94, 
      "COmean": 0.38351994117647065, 
      "NO2mean": 8.386983100840332, 
      "O3mean": 0.02773984873949581, 
      "Population": 1316470.0, 
      "S2mean": 1.7917294117647051, 
      "StateAbbr": "NH"
    }
  }, 
  {
    "coordinates": [
      40.808549, 
      -74.187005
    ], 
    "state": {
      "Area": 8721.3, 
      "COmean": 0.49289947619047625, 
      "NO2mean": 20.578621502164495, 
      "O3mean": 0.023112259740259728, 
      "Population": 8791894.0, 
      "S2mean": 4.751917008658006, 
      "StateAbbr": "NJ"
    }
  }, 
  {
    "coordinates": [
      36.322484, 
      -114.819717
    ], 
    "state": {
      "Area": 110560.71, 
      "COmean": 0.029667725000000006, 
      "NO2mean": 3.0004364500000005, 
      "O3mean": 0.04013440000000001, 
      "Population": 2700551.0, 
      "S2mean": 0.11363225000000002, 
      "StateAbbr": "NV"
    }
  }, 
  {
    "coordinates": [
      40.922326, 
      -72.637078
    ], 
    "state": {
      "Area": 54556.0, 
      "COmean": 0.3897614453125006, 
      "NO2mean": 19.414173718749996, 
      "O3mean": 0.02281517447916667, 
      "Population": 19378102.0, 
      "S2mean": 5.3718282005208335, 
      "StateAbbr": "NY"
    }
  }, 
  {
    "coordinates": [
      41.206132000000004, 
      -81.82281
    ], 
    "state": {
      "Area": 44824.9, 
      "COmean": 0.31736930303030314, 
      "NO2mean": 5.354943696969698, 
      "O3mean": 0.03062748484848484, 
      "Population": 11536504.0, 
      "S2mean": 2.0032099696969694, 
      "StateAbbr": "OH"
    }
  }, 
  {
    "coordinates": [
      35.93345, 
      -95.877617
    ], 
    "state": {
      "Area": 69898.19, 
      "COmean": 0.10225624324324326, 
      "NO2mean": 6.857660210210211, 
      "O3mean": 0.032117069069069075, 
      "Population": 3751351.0, 
      "S2mean": 0.728394957957958, 
      "StateAbbr": "OK"
    }
  }, 
  {
    "coordinates": [
      45.582981, 
      -122.10110300000001
    ], 
    "state": {
      "Area": 98380.64, 
      "COmean": 0.3476590289855073, 
      "NO2mean": 11.109929637681157, 
      "O3mean": 0.01968188405797101, 
      "Population": 3831074.0, 
      "S2mean": 1.284041463768116, 
      "StateAbbr": "OR"
    }
  }, 
  {
    "coordinates": [
      40.091217, 
      -76.977835
    ], 
    "state": {
      "Area": 46055.24, 
      "COmean": 0.2517708124125057, 
      "NO2mean": 13.250333020998589, 
      "O3mean": 0.02739282781147929, 
      "Population": 12702379.0, 
      "S2mean": 4.7560631651889915, 
      "StateAbbr": "PA"
    }
  }, 
  {
    "coordinates": [
      32.780326, 
      -79.940844
    ], 
    "state": {
      "Area": 32020.2, 
      "COmean": 0.12518337777777777, 
      "NO2mean": 1.7827529333333332, 
      "O3mean": 0.03268660000000001, 
      "Population": 4625364.0, 
      "S2mean": 0.9518974777777774, 
      "StateAbbr": "SC"
    }
  }, 
  {
    "coordinates": [
      35.484053, 
      -84.84546
    ], 
    "state": {
      "Area": 42143.27, 
      "COmean": 0.6138073333333334, 
      "NO2mean": 2.4582587543859646, 
      "O3mean": 0.03452708771929826, 
      "Population": 6346105.0, 
      "S2mean": 1.0056302982456136, 
      "StateAbbr": "TN"
    }
  }, 
  {
    "coordinates": [
      31.308813, 
      -97.277397
    ], 
    "state": {
      "Area": 268580.82, 
      "COmean": 0.3151292911051213, 
      "NO2mean": 13.850133128032349, 
      "O3mean": 0.0254378935309973, 
      "Population": 25145561.0, 
      "S2mean": 1.614712730458221, 
      "StateAbbr": "TX"
    }
  }, 
  {
    "coordinates": [
      38.84479, 
      -77.46701
    ], 
    "state": {
      "Area": 42774.2, 
      "COmean": 0.386842103896104, 
      "NO2mean": 11.33613931818182, 
      "O3mean": 0.026133214285714287, 
      "Population": 8001024.0, 
      "S2mean": 3.36857957792208, 
      "StateAbbr": "VA"
    }
  }, 
  {
    "coordinates": [
      42.948015000000005, 
      -87.866831
    ], 
    "state": {
      "Area": 65497.82, 
      "COmean": 0.3331731153846154, 
      "NO2mean": 12.064743653846154, 
      "O3mean": 0.02705926923076923, 
      "Population": 5686986.0, 
      "S2mean": 2.3619505384615382, 
      "StateAbbr": "WI"
    }
  }, 
  {
    "coordinates": [
      41.233758, 
      -110.664401
    ], 
    "state": {
      "Area": 97813.56, 
      "COmean": 0.1333575111111111, 
      "NO2mean": 2.2950388, 
      "O3mean": 0.0399978, 
      "Population": 563626.0, 
      "S2mean": 0.864908177777778, 
      "StateAbbr": "WY"
    }
  }
];

//var req = new XMLHttpRequest();
//req.open("GET", "http://127.0.0.1:5000/avgpollutionbystate", false);
//req.send(null); 
//console.log(req.responseText)
//var locations = JSON.parse(req.responseText)

// Define arrays to hold created city and state markers
var stateMarkersNO2 = [];
var stateMarkersCO = [];
var stateMarkersO3 = [];
var stateMarkersS2 = [];

// Loop through locations and create city and state markers
for (var i = 0; i < locations.length; i++) {
  // Setting the marker radius for the state by passing population into the markerSize function
  stateMarkersNO2.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "yellow",
      fillColor: "yellow",
      radius: markerSizeNO2(locations[i].state.NO2mean)
    }).bindPopup("<h1>" + locations[i].state.StateAbbr + "</h1> <hr> <h3>NO2 Mean: " + locations[i].state.NO2mean + "</h3> <hr> <h3>Population: " + locations[i].state.Population + "</h3> <hr> <h3>Area: " + locations[i].state.Area + "</h3>")
  );

  // Setting the marker radius for the city by passing population into the markerSize function
  stateMarkersCO.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "purple",
      fillColor: "purple",
      radius: markerSizeCO(locations[i].state.COmean)
    }).bindPopup("<h1>" + locations[i].state.StateAbbr + "</h1> <hr> <h3>CO Mean: " + locations[i].state.COmean + "</h3> <hr> <h3>Population: " + locations[i].state.Population + "</h3> <hr> <h3>Area: " + locations[i].state.Area + "</h3>")
  );

    // Setting the marker radius for the city by passing population into the markerSize function
  stateMarkersO3.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "blue",
      fillColor: "blue",
      radius: markerSizeO3(locations[i].state.O3mean)
    }).bindPopup("<h1>" + locations[i].state.StateAbbr + "</h1> <hr> <h3>O3 Mean: " + locations[i].state.O3mean + "</h3> <hr> <h3>Population: " + locations[i].state.Population + "</h3> <hr> <h3>Area: " + locations[i].state.Area + "</h3>")
  );

      // Setting the marker radius for the city by passing population into the markerSize function
  stateMarkersS2.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "red",
      fillColor: "red",
      radius: markerSizeS2(locations[i].state.S2mean)
    }).bindPopup("<h1>" + locations[i].state.StateAbbr + "</h1> <hr> <h3>S2 Mean: " + locations[i].state.S2mean + "</h3> <hr> <h3>Population: " + locations[i].state.Population + "</h3> <hr> <h3>Area: " + locations[i].state.Area + "</h3>")
  );
}

// Define variables for our base layers
var streetmap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
    "access_token=pk.eyJ1IjoicmVlbmFkYW5pZWwiLCJhIjoiY2podjQ5bG94MHZmaTN2dGN1azg3bmp2MCJ9.Nc78ljOzyFXfssFfc5VPQg"
);
var darkmap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?" +
    "access_token=pk.eyJ1IjoicmVlbmFkYW5pZWwiLCJhIjoiY2podjQ5bG94MHZmaTN2dGN1azg3bmp2MCJ9.Nc78ljOzyFXfssFfc5VPQg"
);

// Create two separate layer groups: one for cities and one for states
var statesNO2 = L.layerGroup(stateMarkersNO2);
var statesCO = L.layerGroup(stateMarkersCO);
var statesO3 = L.layerGroup(stateMarkersO3);
var statesS2 = L.layerGroup(stateMarkersS2);

// Create a baseMaps object
var baseMaps = {
  "Street Map": streetmap,
  "Dark Map": darkmap
};

// Create an overlay object
var overlayMaps = {
  "State NO2": statesNO2,
  "State CO": statesCO,
  "State O3": statesO3,
  "State S2": statesS2
};

// Define a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5,
  layers: [streetmap, statesNO2, statesCO, statesO3, statesS2]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);

  //Create color range for the circle diameter 


  function getColor(d) {
    return d === 'CO'  ? "#purple" :
           d === 'NO2'  ? "#yellow" :
           d === 'S2' ? "#red" :
           d === 'O3' ? "#blue" :
                        "#white";
}

  //Create a legend on the bottom left
  var legend = L.control({position: 'bottomright'});

    legend.onAdd = function(myMap){
      var div = L.DomUtil.create('div', 'info legend'),
        gases = ["CO", "NO2", "S2", "O3"],
        labels = ['<strong>Gases</strong>'];


 // loop through our density intervals and generate a label with a colored square for each interval
 for (var i = 0; i < gases.length; i++) {
  div.innerHTML +=
      '<i class="circle" style="background:' + getColor(gases[i]) + '"></i> ' + gases[i] + (gases[i + 1] ? '&ndash;' + '<br>' : '+');
}
return div;
};
  legend.addTo(myMap);


   



 
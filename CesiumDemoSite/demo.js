Cesium.Viewer('cesiumContainer');
var button = document.getElementById("startDemo");
if (button){
document.getElementById("startDemo").addEventListener("click", startViewer);
}


function startViewer(){
  var czml = [
    {
      "id" : "document",
      "name" : "CZML Point",
      "version" : "1.0"
    },
    {
      "id" : "point 1",
      "name": "point",
      "position" : {
        "cartographicDegrees" : [-79.6509,	30.3729, 0]
      },
      "point": {
        "color": {
          "rgba": [255,0, 0, 255]
        },
        "outlineColor": {
          "rgba": [255,0, 200, 255]
        },
        "pixelSize": {
          "number": 10
        }
      }
    }
  ];

 var viewer = document.getElementById("cesiumContainer")
  if (viewer){
  var dataSource = Cesium.CzmlDataSource.load(czml);
  viewer.dataSources.add(dataSource);
  viewer.zoomTo(dataSource);
  document.getElementById("cesiumContainer")=viewer;
  }
/*
  var dataSource = Cesium.CzmlDataSource.load(czml);
  viewer.dataSources.add(dataSource);
  viewer.zoomTo(dataSource);
  document.getElementById("cesiumContainer")= viewer;*/
}
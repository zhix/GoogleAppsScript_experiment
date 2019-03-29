function insertCoord(restaurant, address) {
  
  
  var response = Maps.newGeocoder().geocode(restaurant + " " + address);
  for (var i = 0; i < response.results.length; i++) {
    var result = response.results[i];
//    Logger.log('%s: %s, %s', result.formatted_address, result.geometry.location.lat,result.geometry.location.lng);
    var coordinate = [result.geometry.location.lat, result.geometry.location.lng]; 
    
}
  return coordinate; 

}

function generateCoord(){
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  var restaurant = ss.getSheets()[0].getRange('B2').getValue();
    var address = ss.getSheets()[0].getRange('C2').getValue();
  
    var coord = insertCoord(restaurant, address);
  
    ss.getSheets()[0].getRange('G2').setValue(coord[0]);
    ss.getSheets()[0].getRange('H2').setValue(coord[1]); 
  }
  
}
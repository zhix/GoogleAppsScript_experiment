* Get Distance between 2 different addresses.
* @param start_address Address as string Ex. "300 N LaSalles St, Chicago, IL"
* @param end_address Address as string Ex. "900 N LaSalles St, Chicago, IL"
* @param return_type Return type as string Ex. "miles" or "kilometers" or "minutes" or "hours"
* @customfunction
*/

function GOOGLEMAPS(start_address,end_address,return_type, opt_add1, opt_add2, opt_add3) {
  
  var availOpt = 1;
  var meters = 0; 
  var mapObj = Maps.newDirectionFinder();
  mapObj.setOrigin(start_address);
  mapObj.setDestination(end_address);
  if (opt_add1 != ""){mapObj.addWaypoint(opt_add1); availOpt +=1}  // add the in-between destination 
  if (opt_add2 != ""){mapObj.addWaypoint(opt_add2); availOpt +=1}
  if (opt_add3 != ""){mapObj.addWaypoint(opt_add3); availOpt +=1}
   
  var directions = mapObj.getDirections();
  
  for (var i = 0; i < availOpt; i++) {
  meters += directions["routes"][0]["legs"][i]["distance"]["value"];
  }
  
  
  switch(return_type){
    case "miles":
      return meters * 0.000621371;
      break;
    case "kilometers":
      return meters / 1000;
      break;
    default:
      return "Error: Wrong Unit Type";
   }
  
}

function click() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var addstart = ss.getSheets()[0].getRange('D3').getValue();
  var addend = ss.getSheets()[0].getRange('D7').getValue();
  var opt_add1 = ss.getSheets()[0].getRange('D4').getValue();
  var opt_add2 = ss.getSheets()[0].getRange('D5').getValue();
  var opt_add3 = ss.getSheets()[0].getRange('D6').getValue();
  
  var dist = GOOGLEMAPS(addstart,addend,"kilometers", opt_add1, opt_add2, opt_add3);  
  
  Browser.msgBox(dist);
}
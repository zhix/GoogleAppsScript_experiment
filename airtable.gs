function testAirtable(){

 // get the specific URL from your Airtable API 
 // USING QUERY PARAMETER
 var url = 'https://api.airtable.com/v0/<BASEID>/Table%201/<TABLEID>?api_key=<APIKEY>' 

 var option = {
    'muteHttpExceptions': true
 };
  
 var response = UrlFetchApp.fetch(url, option);
 Logger.log(response); // check log to see if successful

}


function getData(){

 // get the specific URL from your Airtable API
 // USING BEARER TOKEN (RECOMMENDED) 
 var url = 'https://api.airtable.com/v0/<BASEID>/Table%201/<TABLEID>' 

 var headers = {
   'Authorization': 'Bearer <APIKEY>', 
   'Content-Type': 'application/json',
  };
  
 var options = {
   'headers': headers,
   'muteHttpExceptions': true,
 };
  
 var response = UrlFetchApp.fetch(url, options);
 Logger.log(response);

}


function postData(){

 var url = 'https://api.airtable.com/v0/<BASEID>/Table%201/<TABLEID>' 

 var headers = {
   'Authorization': 'Bearer <APIKEY>',
   'Content-Type': 'application/json',
   
  };
  
 // insert data that you would like to update 
 var data = {
    'fields':{
      'Name': 'Pauline',
      'Date' : '10 Jan 1991',
      'Validate':true
    }
  };
  
 var options = {
   'headers': headers,
   'muteHttpExceptions': true,
   'method' : 'patch',
   'payload' : JSON.stringify(data) 
 };
  
 var response = UrlFetchApp.fetch(url, options);
 Logger.log(response);
}

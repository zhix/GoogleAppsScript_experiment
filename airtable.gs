function testing(){

 // get the URL from 
 // USING QUERY PARAMETER
 var url = 'https://api.airtable.com/v0/<USERID>/Table%201/<TABLEID>?api_key=<APIKEY>' 

 var option = {
    'muteHttpExceptions': true
 };
  
 var response = UrlFetchApp.fetch(url, option);
 Logger.log(response);

}


function getData(){

 // USING BEARER TOKEN (RECOMMENDED)
 var url = 'https://api.airtable.com/v0/<USERID>/Table%201/<TABLEID>' 

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

 var url = 'https://api.airtable.com/v0/<USERID>/Table%201/<TABLEID>' 

 var headers = {
   'Authorization': 'Bearer <APIKEY>',
   'Content-Type': 'application/json',
   
  };
  
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

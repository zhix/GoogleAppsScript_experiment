function testing(){

 var url = 'https://api.airtable.com/v0/appogRf5dVEe7Ngxc/Table%201/rechXRonJ2llycY87?api_key=keytVPvyhJyIQOh8u'

 var option = {
    'muteHttpExceptions': true
 };
  
 var response = UrlFetchApp.fetch(url, option);
 Logger.log(response);

}


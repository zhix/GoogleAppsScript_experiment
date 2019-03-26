function iftttRun(){

 // refer to your IFTTT Webhook documentation to find out more
 var url = 'https://maker.ifttt.com/trigger/button_pressed/with/key/<YOURKEY>'

 var option = {
    'muteHttpExceptions': true
 };
  
 var response = UrlFetchApp.fetch(url, option); 
 Logger.log(response);

}

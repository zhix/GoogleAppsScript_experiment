function printOne() {
  
  // Get the currently active spreadsheet URL (link)
  // Or use SpreadsheetApp.openByUrl("<<SPREADSHEET URL>>"); 
  var ss = SpreadsheetApp.getActiveSpreadsheet(); 
  var ssID = ss.getId(); 

  // Get the current folder where the spreadsheet sits 
  var folderId = DriveApp.getFileById(ssID).getParents().next().getId(); 
  
  // Base URL for PDF export 
  var url = "https://docs.google.com/spreadsheets/d/SS_ID/export?".replace("SS_ID", ssID);
  
  /* Specify PDF export parameters
  From: https://stackoverflow.com/questions/46088042/margins-parameters-for-spreadsheet-export
  */

  url_ext = 'exportFormat=pdf&format=pdf'        // export as pdf / csv / xls / xlsx
  + '&size=A4'                                   // paper size legal / letter / A4
  + '&portrait=true'                             // orientation, false for landscape
  + '&fitw=true&source=labnol'                   // fit to page width, false for actual size
  + '&sheetnames=false&printtitle=false'         // hide optional headers and footers
  + '&pagenumbers=false&gridlines=false'         // hide page numbers and gridlines
  + '&fzr=false'                                 // do not repeat row headers (frozen rows) on each page
  + '&gid=';                                     // the sheet's Id
  
  var token = ScriptApp.getOAuthToken();
  var sheets = ss.getSheets(); 

  // Get the "name" value at the Sheet 1 Cell B1 (second sheet) 
  var name = ss.getSheets()[1].getRange('B1').getValue();
  
  // Convert worksheet to PDF
  var response = UrlFetchApp.fetch(url + url_ext + sheets[1].getSheetId(), {   //change 1 to 0 if you want to print Sheet 0 (first sheet)
        headers: {
          'Authorization': 'Bearer ' +  token
        }
      });
      
    // Export PDF into the folder, and create the file with filename "<name>.pdf"
    DriveApp.getFolderById(folderId).createFile(response.getBlob().setName(name + '.pdf'));     
    
    }
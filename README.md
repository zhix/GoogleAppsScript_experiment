# GoogleAppsScript_experiment

This is a repo to document all the cool functions we built on Google Apps Script, including: 

## [Connecting to Airtable API](https://github.com/zhix/GoogleAppsScript_experiment/blob/master/airtable.gs)
1) Objective: to access, view, and update the data on [Airtable](http://airtable.com/). 
2) When you run the "view" function, you should be able to see the following:
![][screenshot4]


## [Export Sheet as PDF](https://github.com/zhix/GoogleAppsScript_experiment/blob/master/printPDF.gs)
1) Objective: when a button on GSheet is clicked, a PDF version of the Sheet is exported into the GDrive Folder. 
2) 



## [Trigger IFTTT Webhooks](https://github.com/zhix/GoogleAppsScript_experiment/blob/master/iftttRun.gs)
1) Objective: when a button on GDoc/Sheet is clicked, a Maker Event will be triggered. 
2) Before using it, make sure you have connected to [IFTTT Webhooks](https://ifttt.com/maker_webhooks) as the trigger.  
3) On GDoc/Sheet, make a button (refer to Tip#1 below) and assign the iftttRun() function to it
4) On Script Editor, edit the script according to [iftttRun.gs](https://github.com/zhix/GoogleAppsScript_experiment/blob/master/iftttRun.gs)
5) You need to change the URL according to IFTTT Webhooks documentation. 

In this example we test it with Phone Notification as the response:
![][screenshot]


Make sure you have activated IFTTT Webhooks. 
![][screenshot2]


Check out the documentation to obtain the triggering URL you need. 
![][screenshot3]


## Tips
1) Try adding a button on GDoc/Sheet to assign and run one of the functions when clicked. 
Refer > http://googleappscripting.com/google-spreadsheet-button/

2) 

## Reference 
https://www.youtube.com/watch?v=2y7Y5hwmPc4 

[screenshot]:  https://github.com/zhix/GoogleAppsScript_experiment/blob/master/Media/Screenshot_20190326-233050.jpg "try1"
[screenshot2]: https://github.com/zhix/GoogleAppsScript_experiment/blob/master/Media/Capture.PNG "try2"
[screenshot3]: https://github.com/zhix/GoogleAppsScript_experiment/blob/master/Media/Capture2.PNG "try3"
[screenshot4]: https://github.com/zhix/GoogleAppsScript_experiment/blob/master/Media/Capture3.PNG "try3"
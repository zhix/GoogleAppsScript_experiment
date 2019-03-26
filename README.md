# GoogleAppsScript_experiment

This is a repo to document all the cool functions we built on Google Apps Script, including: 

## [Connecting to Airtable API](https://github.com/zhix/GoogleAppsScript_experiment/blob/master/airtable.gs)
1) Objective: to access, view, and update the data on [Airtable](http://airtable.com/). 

## [Trigger IFTTT Webhooks](https://github.com/zhix/GoogleAppsScript_experiment/blob/master/iftttRun.gs)
1) Objective: when a button on GDoc/Sheet is pressed, a Maker Event will be triggered. 
2) Before using it, make sure you have set up [IFTTT Webhooks](https://ifttt.com/maker_webhooks) 
3) On GDoc/Sheet, make a button (refer to Tip#1 below) and assign the iftttRun() function to it
4) On Script Editor, edit the script according to [iftttRun.gs](https://github.com/zhix/GoogleAppsScript_experiment/blob/master/iftttRun.gs)
5) You need to change the URL according to IFTTT Webhooks documentation. 

In this example we test it with Phone Notification as response:
![][screenshot]{:height="50%" width="50%"}


Make sure you have activated IFTTT Webhooks. 
![][screenshot2]{:height="50%" width="50%"}


Check out the documentation to obtain the triggering URL you need. 
![][screenshot3]{:height="50%" width="50%"}

[screenshot]:  https://github.com/zhix/GoogleAppsScript_experiment/blob/master/Media/Screenshot_20190326-233050.jpg "try1"
[screenshot2]: https://github.com/zhix/GoogleAppsScript_experiment/blob/master/Media/Capture.PNG "try2"
[screenshot3]: https://github.com/zhix/GoogleAppsScript_experiment/blob/master/Media/Capture2.PNG "try3"

## Tips
1) Try adding a button on GDoc/Sheet to assign and run one of the functions when clicked. 
Refer > http://googleappscripting.com/google-spreadsheet-button/

2) 

## Reference 
https://www.youtube.com/watch?v=2y7Y5hwmPc4 

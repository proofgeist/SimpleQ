---
sidebar_position: 2
sidebar_label: Prepare Subscriber File
title: Prepare Subscriber File
---

## Intro

Subscribers are FileMaker Scripts that can live in any other file. But in order for SimpleQ to be able to call a Script in another file, it needs to have an external data source to that file, and it has to be authorized to use it.

### External Data Source

In SimpleQ.fmp12, open Manage External Data Sources

![](images/CleanShot%202022-05-26%20at%2010.16.19.png)

Add a new FileMaker Data source to the SimpleQ_Subscriber_Demo.fmp12. This is what it should look like.

![](images/CleanShot%202022-05-26%20at%2010.15.23.png)

## File Access Settings

In the SimpleQ_Subsciber_Demo.fmp12 file, go to Manage Security in the File menu.

![](images/CleanShot%202022-05-26%20at%2010.21.03.png)

In the manage security dialog, do the

1.  Click the "Advanced Setting...:" button in the lower left.
2.  Then select the third tab "File Access" in the dialog that opens
3.  Click "Authorize..."

![](images/CleanShot%202022-05-26%20at%2010.21.39.png)

Navigate to the SimpleQ File running on your server, and select it.![](images/CleanShot%202022-05-26%20at%2010.25.36.png)

Finally when you are done the File Access dialog should look like this.

![](images/CleanShot%202022-05-26%20at%2010.26.04.png)

## Summary

The SimpleQ_Subscriber_Demo.fmp12 file is now ready to receive messages from SimpleQ

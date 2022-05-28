---
sidebar_position: 3
sidebar_label: Create Subscriber in SimpleQ
title: Create Subscriber in SimpleQ
---

## Intro

A Subscriber is a FileMaker Script that does three things:

1.  Receives JSON as a script parameter
2.  Does something with that JSON. This is the custom part that you are going to create.
3.  Optionally returns a JSON object with an error code if any. If nothing is returned then SimpleQ assumes that there was no error.

It can live in any file that SimpleQ has an external file reference to. In this part of the guide, we are going to step through setting up a script to be a Subscriber and then connecting it to SimpleQ.

We are going to use the SimpleQ_Subscriber_Demo.fmp12 as an example. But you can use any file that you have already connected to SimpleQ.

## Review the FileMaker Script

We have already written an example script in the SimpleQ_Subscriber_Demo.fmp12 file. Let's open it and review the comments. The script is called "Receive Greeting". If you are using your own example file, we suggest that you review this example script so you can see what your script needs to do.

Notice that the script:

- takes the Script Parameter
- parses the "greeting" out of the JSON payload
- sets the value of $greeting to a field so we can see it
- and returns a JSON object with a particular format
  - See the Reference page for more on this format.

## Teach SimpleQ about the subscriber script.

Open up SimpleQ. Navigate to the "Subscribers" Screen using the Navbar on the left. In the middle column, click the Add button![](images/CleanShot%202022-05-26%20at%2008.45.30.png)

### New Subscriber card

Fill out the data in the Subscriber Card dialog. The subscriber will connect to the File and the script via their names. This is where you configure those values.![](images/CleanShot%202022-05-26%20at%2010.05.32.png)

1.  Subscriber Key is a unique id that you create. We often just use a descriptive name, like "new-order-processor" or "handle-new-greeting".
2.  Data Source. This is the EXACT name of the External Data Source of the file where the script lives. The exact name, in this case, should be SimpleQ_Subscriber_Demo.
3.  If you need to copy the exact name or if you haven't created an external reference you can click Open Manage Data Sources and do what you need to do.
4.  Enter the exact script name. In the case of this Guide, the name is "Receive Greeting"
5.  Click Close.

![](images/CleanShot%202022-05-26%20at%2010.06.47.png)

### Done

You are now ready to go on to the next step

---
sidebar_position: 5
sidebar_label: Publish Message
title: Publish Message to SimpleQ
---

## Introduction

At its most basic, publishing a message is as simple as passing JSON encoded string to the publish message script in SimpleQ. In this part of the guide, we are going to use the SimpleQ_Publisher_demo.fmp12 file to create a message and publish it to SimpleQ. If everything is set up correctly, then the message will get handled by SimpleQ and passed to the SimpleQ_Subscriber Demo.fmp12 for processing.

## Review and edit publisher script

Open the script called Publish Message in the SimpleQ_Publisher_demo.fmp12 file.

Notice that the script is collecting the value of a Greeting field and packaging it into a JSON object that looks like this.

```json
{
  "channel": "demo.greeting.changed",
  "payload": {
    "greeting": "Hello World"
  }
}
```

Also notice that the Perform Script step on line 24 is commented out, and there isn't a script selected.![](images/CleanShot%202022-05-24%20at%2014.02.11.png)

Uncomment that script step, and connect it to the script "publish message (channel, payload, runAfterTS )" in your SimpleQ file. After you are done, it should lookl like this.

![](images/CleanShot%202022-05-24%20at%2014.37.53.png)

## Publish the message

Now it is time for the magic to happen. On the main layout in SimpleQ_Publisher_demo.fmp12 file,

1.  Enter a greeting in the greeting field
2.  Click the "Publish Message" button
3.  ![](images/CleanShot%202022-05-26%20at%2013.36.37.png)

## Review results

After you click the Publish button, the results field should look like this.

![](images/CleanShot%202022-05-24%20at%2014.16.30.png)

Note the format. This is the same format is the FileMaker Data API uses to return its results. a "0" in the "code" value says that the message was received. You do not get the results of the subscriber script, because that script won't run for up to a minute.

## Wait for the queue to flush.

If you set up your Server side script as we discussed in the "Installation section", then the message that you just published will get processed in a minute. Navigate to the Queue view in SimpleQ you should see your message waiting to be delivered. It looks like this.

## Confirm that the message was processed.

If the message was delivered successfully, Open op the SimpleQ_Subscriber_Demo.fmp12 file and look at the Greeting field. It should contain whatever you put in the greeting field in the SimpleQ_Publisher_Demo.fmp12 file.

Congrats you have successfully set up and used SimpleQ

## What if it didn't work

Check the troubleshooting page for common errors and how to fix them.

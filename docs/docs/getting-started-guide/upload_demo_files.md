---
sidebar_position: 2
sidebar_label: Upload Demo Files
title: Upload Demo Files to Server
---

## Intro

In this guided walk-through, you will learn how to use SimpleQ to publish messages from one file and subscribe to messages from another. We have included two files in the download for you to use in this demo.

- SimpleQ_Publisher_Demo.fmp12
- SimpleQ_Subscriber_Demo.fmp12

SimpleQ_Publisher_Demo.fmp12 will "publish" a message to a channel in SimpleQ. SimpleQ_Subscriber_Demo.fmp12 will subscribe to that same channel so it can receive that message.

### ![](images/pub_sub.png)

The "Message" we will be sending is just a simple "greeting".

1.  The greeting will be entered into a field in the SimpleQ_Publishing_Demo.fmp12 file.
2.  Clicking a "Send Message" button will "Publish that message to a channel in SimpleQ.fmp12.
3.  SimpleQ will then send the message to our Simple_QSubscriber_Demo.fmp12
4.  where a script will write that value into a field

![](images/CleanShot%202022-05-26%20at%2009.21.33.png)

## Prerequisites

You should have already followed the instructions in the Installation docs in order to get SimpleQ uploaded to your server. If you didn't do that, we recommend you do that now.

## Preparing demo files.

### Credentials

As part of your setup of SimpleQ, you should have changed the passwords for two accounts. "admin" and "server". Make sure that those two accounts have the same passwords in both of these files.

### Upload to FileMaker server

Upload both demo files to your FileMaker Server. Make sure you can open them. These are the files.

- SimpleQ_Publisher_Demo.fmp12
- SimpleQ_Subscriber_Demo.fmp12

## Summary

At this point, you should have these three files on your server, and the should be open in FileMaker Pro on your computer.

- SimpleQ.fmp12
- SimpleQ_Publisher_Demo.fmp12
- SimpleQ_Subscriber_Demo.fmp12

They should all have matching account names and passwords for two accounts

- admin
- server

The privileges set that these accounts are assigned to should have the `fmapp` extended privilege.

## Next

You are now ready to move on to the next step.

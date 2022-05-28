---
sidebar_position: 4
sidebar_label: Create Channel In SimpleQ
title: Create Channel in SimpleQ
---

## Intro

A channel is like a post office box, except that they are attached to FileMaker scripts that can handle whatever gets sent to the channel. Each channel can have multiple FileMaker scripts subscribed to them. You can have as many different channels as you like.

In this part of the guide we are going to set up a channel to work with the demo files we included with the SimpleQ download.

## Create the channel record.

Open the SimpleQ file on your server if it's not already open. Navigate to the Channels view using the Navbar on the left side of the screen. In the center column, click the Add button.

![](images/CleanShot%202022-05-26%20at%2008.51.42.png)

### New Channel Card dialog

1.  Give your channel a name. We recommend using dot notation for the name for future compatibility. We choose descriptive names like this: "customer.updated" or "shipping.address.changed". For this guide, we will use "demo.greeting.changed"
2.  Click Save

![](images/CleanShot%202022-05-26%20at%2008.53.06.png)

After you are done it should look like this.

![](images/CleanShot%202022-05-26%20at%2008.53.58.png)

## Next

Now that you have created a Channel and a Subscriber you are ready to connect the two together.

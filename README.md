# SimpleQ 

SimpleQ is an implementation of a Message Queue for FileMaker, which enables the Publish and Subscribe pattern in FileMaker Pro. In this pattern, different applications or different parts of the same application, communicate using asynchronous message passing. One application will "Publish" a message onto a central Message Queue, and other applications can listen for messages that they are interested in, by subscribing to the "channels" they are interested in.  

## Benefits

The PubSub pattern is optimized for loosely coupled communications. The publisher doesn't need to know anything about who is subscribing or listening, and vice versa. In the Claris FileMaker space, there are a couple of problems that can really benefit from this type of communication.

## Integration

Every company today has data spread out across many applications. We need standard, robust methods for keeping data in sync across these different applications. When your QuickBooks Customer Data changes you might need one or more FileMaker applications to respond to that change. PubSub doesn't care how many different applications are listening for and responding to those changes. Each application can take the data and do something different with it.

## De-coupling

FileMaker applications are often tightly coupled. The best place to see this is on a relationship graph. In a large application, the graph becomes very hard to manage, and it begins to impact performance in a big way. What we need are ways to carve up our apps into smaller chunks that don't share any TOs, but can still share data. We can imagine, using a script to pass data around, and that is exactly what this implementation builds on.

## Completely Free

SimpleQ is free, and unlocked. You can use it any way you want. You will see references to our product, Otto, but Otto is not required to use SimpleQ. We think you should check out Otto because the combination of Otto and PubSub is very powerful.

## Release Info

Version: 1.2.2
Date: 6/22/2022

## Admin Credentials 

You should change this password immediately!

user: `admin`  
password: `admin`

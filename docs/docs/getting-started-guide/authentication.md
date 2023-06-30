---
sidebar_position: 3
sidebar_label: Setup Authentication
title: Setup Authentication
---

## The problem

How do you provide access to the SimpleQ file, so that any user in any other file is able to publish messages

# The solution

There are a few ways to do this, depending on how your users authenticate to the system that is calling the scripts in SimpleQ. By far the most straightforward method is if you are using External Authentication, whether that's through an external identity provider such as Microsoft Azure AD or another oAuth provider, or External Server Accounts. In this scenario you would add the authentication groups to the SimpleQ file and the users will be able to seamlessly access the file like any other in the system.

If you are using internal accounts, you can certainly add those accounts and passwords to the SimpleQ file, but it is likely a better strategy to create an account that will be entered into the File Options to open the file automatically.

The privilege set you want to use for this account is "publisher" which should give the account sufficient access to publish messages.

There are other ways of accomplishing this if you don't want to mess about with accounts and privilege sets in the SimpleQ file, but none are as straightforward as the above. Good luck.

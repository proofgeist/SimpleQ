---
sidebar_position: 4
sidebar_label: Trouble shooting
title: Trouble shooting
---

Failed Permenently

Code 100

```json
{
  "messages": [
    {
      "code": 100,
      "message": " Error perfomring script \"\" in script \"deliver staticDSN message ( message ; listener )\" at #deliver message via script call"
    }
  ]
}
```

Possible causes and solutions:
### File name misspelled in Data Source
From the **File** menu choose **Manage** and then **External Data Sources...**
* Verify the spelling of the data source name matches the value in SimpleQ
* Verify the path for the file is correct

### The other file has not authorized SimpleQ to make connections
1. Open **Manage Security** from the **File** menu
2. Click on the **Advanced Settings...** button
3. Switch to the **File Access** tab
4. Click the **Authorize...** button to add SimpleQ as an authorized connection

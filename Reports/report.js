$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/feature/Sauce.feature");
formatter.feature({
  "line": 1,
  "name": "Checking the order functionality",
  "description": "",
  "id": "checking-the-order-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login functionlity",
  "description": "",
  "id": "checking-the-order-functionality;login-functionlity",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Must Launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"\u003cuser\u003e\" In The Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"\u003cpass\u003e\" In The Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On Login Button and It Navigates To The Products Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "checking-the-order-functionality;login-functionlity;",
  "rows": [
    {
      "cells": [
        "user",
        "pass"
      ],
      "line": 11,
      "id": "checking-the-order-functionality;login-functionlity;;1"
    },
    {
      "cells": [
        "abc",
        "123"
      ],
      "line": 12,
      "id": "checking-the-order-functionality;login-functionlity;;2"
    },
    {
      "cells": [
        "xyz",
        "789"
      ],
      "line": 13,
      "id": "checking-the-order-functionality;login-functionlity;;3"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 14,
      "id": "checking-the-order-functionality;login-functionlity;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Login functionlity",
  "description": "",
  "id": "checking-the-order-functionality;login-functionlity;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Must Launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"abc\" In The Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"123\" In The Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On Login Button and It Navigates To The Products Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_Must_Launch_The_Url()"
});
formatter.result({
  "duration": 3246645700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_Enter_The_In_The_Username_Field(String)"
});
formatter.result({
  "duration": 206195900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_Enter_The_In_The_Password_Field(String)"
});
formatter.result({
  "duration": 135452300,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Click_On_Login_Button_and_It_Navigates_To_The_Products_Page()"
});
formatter.result({
  "duration": 113909600,
  "status": "passed"
});
formatter.after({
  "duration": 239600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login functionlity",
  "description": "",
  "id": "checking-the-order-functionality;login-functionlity;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Must Launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"xyz\" In The Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"789\" In The Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On Login Button and It Navigates To The Products Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_Must_Launch_The_Url()"
});
formatter.result({
  "duration": 2268723700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_Enter_The_In_The_Username_Field(String)"
});
formatter.result({
  "duration": 224614500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "789",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_Enter_The_In_The_Password_Field(String)"
});
formatter.result({
  "duration": 125491600,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Click_On_Login_Button_and_It_Navigates_To_The_Products_Page()"
});
formatter.result({
  "duration": 194041300,
  "status": "passed"
});
formatter.after({
  "duration": 106600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login functionlity",
  "description": "",
  "id": "checking-the-order-functionality;login-functionlity;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Must Launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"standard_user\" In The Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"secret_sauce\" In The Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On Login Button and It Navigates To The Products Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_Must_Launch_The_Url()"
});
formatter.result({
  "duration": 2369292500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_Enter_The_In_The_Username_Field(String)"
});
formatter.result({
  "duration": 238316100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_Enter_The_In_The_Password_Field(String)"
});
formatter.result({
  "duration": 130765500,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Click_On_Login_Button_and_It_Navigates_To_The_Products_Page()"
});
formatter.result({
  "duration": 891556500,
  "status": "passed"
});
formatter.after({
  "duration": 109000,
  "status": "passed"
});
});
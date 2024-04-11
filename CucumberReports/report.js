$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/feature/Saucedemo.feature");
formatter.feature({
  "line": 1,
  "name": "Checking the purchase functionality",
  "description": "",
  "id": "checking-the-purchase-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login functionality",
  "description": "",
  "id": "checking-the-purchase-functionality;login-functionality",
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
  "id": "checking-the-purchase-functionality;login-functionality;",
  "rows": [
    {
      "cells": [
        "user",
        "pass"
      ],
      "line": 11,
      "id": "checking-the-purchase-functionality;login-functionality;;1"
    },
    {
      "cells": [
        "abc",
        "123"
      ],
      "line": 12,
      "id": "checking-the-purchase-functionality;login-functionality;;2"
    },
    {
      "cells": [
        "xyz",
        "456"
      ],
      "line": 13,
      "id": "checking-the-purchase-functionality;login-functionality;;3"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 14,
      "id": "checking-the-purchase-functionality;login-functionality;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Login functionality",
  "description": "",
  "id": "checking-the-purchase-functionality;login-functionality;;2",
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
  "duration": 3428235400,
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
  "duration": 759380400,
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
  "duration": 134024600,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Click_On_Login_Button_and_It_Navigates_To_The_Products_Page()"
});
formatter.result({
  "duration": 105944900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login functionality",
  "description": "",
  "id": "checking-the-purchase-functionality;login-functionality;;3",
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
  "name": "user Enter The \"456\" In The Password Field",
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
  "duration": 2221373400,
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
  "duration": 193931000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "456",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_Enter_The_In_The_Password_Field(String)"
});
formatter.result({
  "duration": 139741100,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Click_On_Login_Button_and_It_Navigates_To_The_Products_Page()"
});
formatter.result({
  "duration": 101104200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login functionality",
  "description": "",
  "id": "checking-the-purchase-functionality;login-functionality;;4",
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
  "duration": 2217378400,
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
  "duration": 193192200,
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
  "duration": 153054500,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Click_On_Login_Button_and_It_Navigates_To_The_Products_Page()"
});
formatter.result({
  "duration": 1069845400,
  "status": "passed"
});
});
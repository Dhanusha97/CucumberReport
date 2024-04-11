Feature: Checking the purchase functionality

@Login
Scenario Outline: Login functionality
Given user Must Launch The Url
When user Enter The "<user>" In The Username Field
And user Enter The "<pass>" In The Password Field
Then user Click On Login Button and It Navigates To The Products Page

Examples:
|user|pass|
|abc|123|
|xyz|456|
|standard_user|secret_sauce|




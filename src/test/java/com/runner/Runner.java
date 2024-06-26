package com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\java\\com\\feature\\Saucedemo.feature" , glue = "com.stepdefinition",
                 monochrome = true,tags = ("@Login"),
                 plugin = {"html:CucumberReports","json:CucumberReports/sauce.json","pretty",
                		 "com.cucumber.listener.ExtentCucumberFormatter:CucumberReports/Saucedemo.html"})
public class Runner {

	
}

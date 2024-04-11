package com.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdefinition {

	public static WebDriver driver;

	@Given("^user Must Launch The Url$")
	public void user_Must_Launch_The_Url() throws Throwable {

		System.setProperty("webdriver.chrome.driver",
	
				System.getProperty("user.dir")+"\\Driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.saucedemo.com/v1/");
	}

	@When("^user Enter The \"([^\"]*)\" In The Username Field$")
	public void user_Enter_The_In_The_Username_Field(String user) throws Throwable {

		WebElement username = driver.findElement(By.id("user-name"));
		username.sendKeys(user);
	}

	@When("^user Enter The \"([^\"]*)\" In The Password Field$")
	public void user_Enter_The_In_The_Password_Field(String pass) throws Throwable {

		WebElement password = driver.findElement(By.id("password"));
		password.sendKeys(pass);
	}

	@Then("^user Click On Login Button and It Navigates To The Products Page$")
	public void user_Click_On_Login_Button_and_It_Navigates_To_The_Products_Page() throws Throwable {

		WebElement login = driver.findElement(By.id("login-button"));
		login.click();
	}


}

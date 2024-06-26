package com.pomclass;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Login_Page {

	public WebDriver driver;//null
	
	@FindBy(id = "user-name")
	private WebElement username;
	
	@FindBy(id = "password")
	private WebElement pass;
	
	@FindBy(id = "login-button")
	private WebElement loginBtn;
	
	public Login_Page(WebDriver driver2) {

		this.driver = driver2;
		PageFactory.initElements(driver, this);
	}

	public WebElement getUsername() {
		return username;
	}

	public WebElement getPass() {
		return pass;
	}

	public WebElement getLoginBtn() {
		return loginBtn;
	}

	
}

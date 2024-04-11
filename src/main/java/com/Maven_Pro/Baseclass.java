package com.Maven_Pro;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Baseclass {

	public static WebDriver driver;

	// browser launch
	public static void launchBrowser() {

		System.setProperty("webdriver.chrome.driver",
				System.getProperty("user.dir")+"\\Driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	// url launch
	public static void launchUrl(String url) {

		driver.get(url);
	}

	// getTitle
	public static void getTitleMethod() {

		String title = driver.getTitle();
		System.out.println(title);
	}

	// close
	public static void closeWindow() {

		driver.close();
	}

	// quit
	public static void quitBrowser() {

		driver.quit();
	}

	// sendkeys
	public static void passInput(WebElement element, String input) {

		element.sendKeys(input);
	}

	// click
	public static void clickOnElement(WebElement element) {

		element.click();

	}

	// getText
	public static void getTextMethod(WebElement element) {

		String text = element.getText();
		System.out.println(text);
	}

}

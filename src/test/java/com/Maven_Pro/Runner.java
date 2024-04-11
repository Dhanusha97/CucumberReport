package com.Maven_Pro;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import com.pomclass.Login_Page;
import com.properties.Data_Reader;

public class Runner extends Baseclass{

	public static void main(String[] args) throws IOException {
		
		Data_Reader dr = new Data_Reader();
		
		launchBrowser();
		
		launchUrl(dr.getUrl());
		
		Login_Page lp = new Login_Page(driver);
		
		passInput(lp.getUsername(), dr.getUsername());
		
		passInput(lp.getPass(), dr.getPassword());
		
		clickOnElement(lp.getLoginBtn());
		
		
		
	}
}

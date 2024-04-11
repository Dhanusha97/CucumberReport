package com.properties;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class Data_Reader {
	
	public static Properties p;
	
	public Data_Reader() throws IOException {

		File f = new File(
				"C:\\Users\\ASUS\\eclipse-workspace\\Maven_Pro\\src\\main\\java\\com\\properties\\Demo.properties");

		FileInputStream fis = new FileInputStream(f);

	    p = new Properties();

		p.load(fis);
	}

	public String getUrl() throws IOException {

		String url = p.getProperty("url");

		return url;
	}

	public String getUsername() throws IOException {

		String username = p.getProperty("username");

		return username;

	}

	public String getPassword() throws IOException {

		String password = p.getProperty("password");

		return password;
	}

}

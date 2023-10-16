package com.example.eserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class EServer1Application {

	public static void main(String[] args) {
		SpringApplication.run(EServer1Application.class, args);
	}

}
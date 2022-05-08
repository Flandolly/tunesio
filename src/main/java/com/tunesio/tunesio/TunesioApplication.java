package com.tunesio.tunesio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

@SpringBootApplication
public class TunesioApplication {

	@Configuration
	public static class CorsSetup extends WebMvcConfigurationSupport {

		@Override
		protected void addCorsMappings(CorsRegistry registry) {
			registry.addMapping("/**")
					.allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS")
					.allowedOrigins("*")
					.allowedHeaders("*")
					.maxAge(-1)
					.allowCredentials(false);
		}
	}

	public static void main(String[] args) {
		SpringApplication.run(TunesioApplication.class, args);
	}

}

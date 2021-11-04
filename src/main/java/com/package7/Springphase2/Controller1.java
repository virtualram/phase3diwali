package com.package7.Springphase2;

import java.net.URI;
import java.util.List;

import org.apache.logging.log4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import  com.package7.Springphase2.*;
@RestController
@CrossOrigin()
public class Controller1 {
@Autowired
private userrepository  userrep; 
@Autowired
private userrepository2  userrep2; 
	
@GetMapping(path="/"  , produces="text/plain")
@ResponseBody
public String method1() {
	return "Hello Spring Boot";
}
@RequestMapping(value = "/allusers",method=RequestMethod.GET )
public List<User> allusers() {
	   org.slf4j.Logger logger = LoggerFactory.getLogger(Controller1.class);
	   logger.info("An INFO Message" +userrep.findAll());
	return userrep.findAll();
}


@RequestMapping(value = "/insertuser",method=RequestMethod.POST,  headers = "Accept=application/json" )
public  ResponseEntity<Object> insertuser( @RequestBody User u ) {
	        userrep.save(u);
	        
	        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(u.getId())
	    			.toUri();
	    	
	    	return ResponseEntity.created(location).build();
}
}

package com.package7.Springphase2;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name="user")
public class User{
 //we can disable this as this no tid
 @Id
 @GeneratedValue
 
 @Column(name="id")
 protected int id;
 @Column(name="admin")
 
 protected Boolean admin;
 
 
 public Boolean isAdmin() {
	return admin;
}

public void setAdmin(Boolean admin) {
	this.admin = admin;
}

public Boolean isConfirmed() {
	return confirmed;
}

public void setConfirmed(Boolean confirmed) {
	this.confirmed = confirmed;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}
@Column(name="confirmed")
 protected Boolean confirmed;
 @Column(name="name")
 protected String name;
 
 @Column(name="email")
 protected String email;
 
 @Column(name="password")
 protected String password;
 

 


 public User() {
	super();
	
	
}
 public int getId() {
  return id;
 }
 public void setId(int id) {
  this.id = id;
 }
 public String getName() {
  return name;
 }
 public void setName(String name) {
  this.name = name;
 }
 public String getEmail() {
  return email;
 }
 public void setEmail(String email) {
  this.email = email;
 }
/* public String getpassword() {
  return password;
 }
 public void setpassword(String password) {
  this.password = password;
 }*/
}
package com.package7.Springphase2;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.package7.Springphase2.User;
@Repository
@Transactional
public class Companyrepository3 {
	

	@PersistenceContext
	EntityManager entityManager;
	
public User getuser(User u ){
	
	return  entityManager.find(User.class, u);
}

}

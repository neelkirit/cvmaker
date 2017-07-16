package com.yelolabs.cvmaker.Repositories;

import com.yelolabs.cvmaker.Entity.Candidate;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;



/**
 * Created by neelkirit on 30/10/16.
 */
public interface CandidateRepository extends CrudRepository<Candidate, String> {

//    @Transactional
//    @Query(value = "UPDATE Candidate c SET c.firstName = :firstName, c.lastName = :lastName, c.mobileNumber = :mobileNumber, c.email = :email WHERE u.id = :id")
//    @Modifying
//    public void populate(@Param("firstName")String firstName, @Param("lastName")String lastName, @Param("email")String email, @Param("mobileNumber")String mobileNumber, @Param("address")String address);
//

    @Transactional
    public Candidate findById(@Param("id") Integer id);

    @Transactional
    public Candidate findByEmail(@Param("email") String email);

}

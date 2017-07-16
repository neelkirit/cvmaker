package com.yelolabs.cvmaker.Repositories;

import com.yelolabs.cvmaker.Entity.SecondarySchool;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by neelkirit on 30/10/16.
 */
public interface SecondarySchoolRepository extends CrudRepository <SecondarySchool,String>{

    @Transactional
    @Query(value = "SELECT s FROM SecondarySchool s WHERE s.candidate.id = :candidate")
    public SecondarySchool findByCandidate(@Param("candidate") Integer candidate);
}



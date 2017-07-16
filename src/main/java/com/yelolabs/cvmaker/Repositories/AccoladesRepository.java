package com.yelolabs.cvmaker.Repositories;

import com.yelolabs.cvmaker.Entity.Accolades;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by neelkirit on 25/11/16.
 */
public interface AccoladesRepository extends CrudRepository <Accolades,String>{

    @Transactional
    @Query(value = "SELECT a FROM Accolades a WHERE a.candidate.id = :candidate")
    public List<Accolades> findByCandidate(@Param("candidate") Integer candidate);

}

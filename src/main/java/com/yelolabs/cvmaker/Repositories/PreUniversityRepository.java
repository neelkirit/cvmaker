package com.yelolabs.cvmaker.Repositories;

import com.yelolabs.cvmaker.Entity.PreUniversity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by neelkirit on 30/10/16.
 */
public interface PreUniversityRepository extends CrudRepository <PreUniversity,String > {

    @Transactional
    @Query(value = "SELECT p FROM PreUniversity p WHERE p.candidate.id = :candidate")
    public PreUniversity findByCandidate(@Param("candidate") Integer candidate);
}

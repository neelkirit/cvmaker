package com.yelolabs.cvmaker.Repositories;

import com.yelolabs.cvmaker.Entity.University;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by neelkirit on 30/10/16.
 */
public interface UniversityRepository extends CrudRepository <University, String > {

    @Transactional
    @Query(value = "SELECT u FROM University u WHERE u.candidate.id = :candidate")
    public List<University> findByCandidate(@Param("candidate") Integer candidate);


}

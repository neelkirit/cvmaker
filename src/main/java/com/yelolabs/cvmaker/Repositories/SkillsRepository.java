package com.yelolabs.cvmaker.Repositories;

import com.yelolabs.cvmaker.Entity.Candidate;
import com.yelolabs.cvmaker.Entity.Skills;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by neelkirit on 30/10/16.
 */
public interface SkillsRepository extends CrudRepository <Skills,String> {

    @Transactional
    @Query(value = "SELECT s FROM Skills s WHERE s.candidate.id = :candidate")
    public List<Skills> findByCandidate(@Param("candidate") Integer candidate);

}

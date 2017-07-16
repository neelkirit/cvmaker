package com.yelolabs.cvmaker.Entity;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by neelkirit on 25/11/16.
 */

@Entity
@Table(name = "accolades")
public class Accolades {

    @Id
    @GenericGenerator(name="ex" , strategy="increment")
    @GeneratedValue(generator="ex")
    @Column(name="id", insertable=true, unique=true, nullable=false)
    private Integer id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "candidate")
    private Candidate candidate;

    @Column(name = "accolade")
    private String accolade;

    @Column(name = "month")
    private String month;

    @Column(name = "year")
    private String year;

    @Column(name = "position")
    private String position;

    @CreationTimestamp
    @Column(name = "created_at", insertable = true, nullable = true, updatable = false )
    private Date createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at", insertable = true, nullable = true, updatable = true)
    private Date updatedAt;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Candidate getCandidate() {
        return candidate;
    }

    public void setCandidate(Candidate candidate) {
        this.candidate = candidate;
    }

    public String getAccolade() {
        return accolade;
    }

    public void setAccolade(String accolade) {
        this.accolade = accolade;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
}

package com.yelolabs.cvmaker.Entity;

/**
 * Created by neelkirit on 23/10/16.
 */

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "university")
public class University {

    @Id
    @GenericGenerator(name="un" , strategy="increment")
    @GeneratedValue(generator="un")
    @Column(name="id", insertable=true, unique=true, nullable=false)
    private Integer id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "candidate")
    private Candidate candidate;

    @Column(name = "college_name")
    private String collegeName;

    @Column(name = "year")
    private String year;

    @Column(name = "university")
    private String university;

    @Column(name = "course")
    private String course;

    @Column(name = "sub_course")
    private String subCourse;

    @Column(name = "cgpa")
    private String cgpa;

    @CreationTimestamp
    @Column(name = "created_at", insertable = true, nullable = true, updatable = false)
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

    public String getCollegeName() {
        return collegeName;
    }

    public void setCollegeName(String collegeName) {
        this.collegeName = collegeName;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getUniversity() {
        return university;
    }

    public void setUniversity(String university) {
        this.university = university;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public String getSubCourse() {
        return subCourse;
    }

    public void setSubCourse(String subCourse) {
        this.subCourse = subCourse;
    }

    public String getCgpa() {
        return cgpa;
    }

    public void setCgpa(String cgpa) {
        this.cgpa = cgpa;
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

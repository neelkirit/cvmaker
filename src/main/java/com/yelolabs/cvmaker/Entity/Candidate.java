package com.yelolabs.cvmaker.Entity;

/**
 * Created by neelkirit on 22/10/16.
 */

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "candidate")
public class Candidate {

    @Id
    @GenericGenerator(name="ca" , strategy="increment")
    @GeneratedValue(generator="ca")
    @Column(name="id", insertable=true, unique=true, nullable=false )
    private Integer id;

    @Transient
    private String transientId;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "mobile_number")
    private String mobileNumber;

    @Column(name = "email", unique = true, columnDefinition = "VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_bin")
    private String email;

    @Column(name = "address", columnDefinition = "VARCHAR(500) CHARACTER SET utf8 COLLATE utf8_bin" )
    private String address;

    @Column(name = "streetAddress", columnDefinition = "VARCHAR(500) CHARACTER SET utf8 COLLATE utf8_bin" )
    private String streetAddress;

    @Column(name = "city")
    private String city;

    @Column(name = "summary", columnDefinition = "VARCHAR(500) CHARACTER SET utf8 COLLATE utf8_bin" )
    private String summary;

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

    public String getTransientId() {
        return transientId;
    }

    public void setTransientId(String transientId) {
        this.transientId = transientId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
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









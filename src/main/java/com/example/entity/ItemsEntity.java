package com.example.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="items")
public class ItemsEntity {
	
	@Id            
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)   
	private Long id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="p_id")
	private Long pId;
	
}

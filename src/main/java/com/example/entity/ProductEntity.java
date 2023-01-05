package com.example.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Table;

import lombok.Data;

@Data
@Table(name="product")
@MappedSuperclass
public class ProductEntity {
	
	@Id            
	@Column(name="number")
	@GeneratedValue(strategy = GenerationType.IDENTITY)   
	private Long number;
	
	@Column(name="category")
	private String category;
	
	@Column(name="content")
	private String content;
	
	@Column(name="price")
	private String price;

	@Column(name="stock")
	private String stock;
	
}

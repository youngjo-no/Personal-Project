package com.example.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity                  
@Table(name="product")
public class ProductEntity {
	
	@Id            
	@Column(name="number")
	@GeneratedValue(strategy = GenerationType.IDENTITY)   
	private Long number;
	
	@Column(name="name")
	private String name;
	
	@Column(name="content")
	private String content;
	
	@Column(name="price")
	private String price;

	@Column(name="stock")
	private String stock;
	
	@OneToMany
	@JoinColumn(name="p_id")
	private List<MakerEntity> makerEntities;
	
}

package com.example.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="product")
public class ProductCategoryEntity extends ProductEntity{
	
	@OneToMany
	@JoinColumn(name="p_id")
	private List<ItemsEntity> itemEntities;
	
	@OneToMany
	@JoinColumn(name="p_id")
	private List<WorkersEntity> workersEntities;
	
}

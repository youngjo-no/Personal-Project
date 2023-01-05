package com.example.domain;

import java.util.List;

import com.example.entity.ItemsEntity;
import com.example.entity.WorkersEntity;

import lombok.Data;

@Data
public class ProductCategoryVO {
	
	private Long number;
	private String category;
	private String content;
	private String price;
	private String stock;
	
	private List<ItemsEntity> itemEntities;
	
	private List<WorkersEntity> workersEntities;
	

}

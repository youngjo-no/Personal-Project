package com.example.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entity.ProductCategoryEntity;

@Repository
public interface ProductCategoryRepository extends JpaRepository<ProductCategoryEntity, Long>{
	
	// 상품 목록 불러오기
	Page<ProductCategoryEntity> findAllByOrderByNumberDesc(Pageable pageable);
		
	// 상품 상세보기
	ProductCategoryEntity findByCategory(String category);
	
}

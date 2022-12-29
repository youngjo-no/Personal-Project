package com.example.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.ProductEntity;

public interface ProductRepository extends JpaRepository<ProductEntity, Long>{

	// 상품 목록 불러오기
	Page<ProductEntity> findAllByOrderByNumberDesc(Pageable pageable);

	// 상품 상세보기
	ProductEntity findByName(String name);

}

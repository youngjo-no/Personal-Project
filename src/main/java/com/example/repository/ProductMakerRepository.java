//product와 maker를 조인한 entity의 repository

//package com.example.repository;
//
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//import com.example.entity.ProductMakerEntity;
//
//@Repository
//public interface ProductMakerRepository extends JpaRepository<ProductMakerEntity, Long>{
//	
//	// 상품 목록 불러오기
//	Page<ProductMakerEntity> findAllByOrderByNumberDesc(Pageable pageable);
//	
//	// 상품 상세보기
//	ProductMakerEntity findByName(String name);
//
//}

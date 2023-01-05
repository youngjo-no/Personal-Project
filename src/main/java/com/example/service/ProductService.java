package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.entity.ProductCategoryEntity;
import com.example.repository.ProductCategoryRepository;

@Service
public class ProductService {

	@Autowired
	private ProductCategoryRepository productCategoryRepository;
	
	// 상품목록 불러오기
	public Page<ProductCategoryEntity> getProductList(Pageable pageable) {
		return productCategoryRepository.findAll(pageable);
	}

	// 상품 등록
	public void productRegist(ProductCategoryEntity productCategoryEntity) {
		productCategoryRepository.save(productCategoryEntity);
	}

	// 상품 수정
	public ProductCategoryEntity productModify(ProductCategoryEntity productCategoryEntity) {
		return productCategoryRepository.save(productCategoryEntity);
	}

	// 상품 삭제
	public void productDelete(ProductCategoryEntity productCategoryEntity) {
		productCategoryRepository.delete(productCategoryEntity);
	}

	// 상품 상세보기
	public ProductCategoryEntity getDetail(String category) {
		return productCategoryRepository.findByCategory(category);
	}

}

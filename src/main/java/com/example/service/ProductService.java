package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.entity.ProductEntity;
import com.example.repository.ProductRepository;

@Service
public class ProductService {

	@Autowired
	private ProductRepository productRepository;
	
	// 상품목록 불러오기
	public Page<ProductEntity> getProductList(Pageable pageable) {
		return productRepository.findAllByOrderByNumberDesc(pageable);
	}

	// 상품 등록
	public void productRegist(ProductEntity productEntity) {
		productRepository.save(productEntity);
	}

	// 상품 수정
	public void productModify(ProductEntity productEntity) {
		productRepository.save(productEntity);
	}

	// 상품 삭제
	public void productDelete(ProductEntity productEntity) {
		productRepository.delete(productEntity);
	}

	// 상품 상세보기
	public ProductEntity getDetail(String name) {
		return productRepository.findByName(name);
	}

}

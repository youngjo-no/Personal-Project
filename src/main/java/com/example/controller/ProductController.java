package com.example.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.example.domain.DataTableVO;
import com.example.entity.ProductEntity;
import com.example.service.ProductService;

@Controller
public class ProductController {

	@Autowired
	private ProductService productService;

	/**
	 * 상품 목록 view
	 * @return
	 */
	@RequestMapping("/computer/product/view")
	public ModelAndView productView() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("product/list");
		return mav;
	}

	/**
	 * 상품 목록 list
	 * @param draw
	 * @param pageable
	 * @return
	 */
	@RequestMapping("/computer/product/list")
	public ResponseEntity<Object> productList(
			@RequestParam(value = "draw", required = false, defaultValue = "1") int draw, Pageable pageable) {
		Page<ProductEntity> pages = productService.getProductList(pageable);
		DataTableVO<ProductEntity> dataPage = new DataTableVO<>();
		List<ProductEntity> content = pages.getContent();
		dataPage.setData(content);
		dataPage.setDraw(draw);
		dataPage.setRecordsTotal(pages.getTotalElements());
		dataPage.setRecordsFiltered(pages.getTotalElements());
		return new ResponseEntity<>(dataPage, HttpStatus.OK);
	}
	
	/**
	 * 상품 상세보기
	 * @param name
	 * @return
	 */
	@RequestMapping("/computer/product/detail")
	public ResponseEntity<Map<String, Object>> productDetail(String name) {
		Map<String, Object> result = new HashMap<>();
		result.put("detail", productService.getDetail(name));
		return ResponseEntity.ok(result);
	}

	/**
	 * 상품 등록
	 * @param productEntity
	 * @return
	 */
	@RequestMapping("/computer/product/regist")
	public ResponseEntity<String> productRegist(ProductEntity productEntity) {
		productService.productRegist(productEntity);
		return ResponseEntity.ok("등록완료");
	}

	/**
	 * 상품 수정
	 * @param productEntity
	 * @return
	 */
	@RequestMapping("/computer/product/modify")
	public ResponseEntity<String> productModify(ProductEntity productEntity) {
		productService.productModify(productEntity);
		return ResponseEntity.ok("수정완료");
	}

	/**
	 * 상품 삭제
	 * @param productEntity
	 * @return
	 */
	@RequestMapping("/computer/product/delete")
	public ResponseEntity<String> productDelete(ProductEntity productEntity) {
		productService.productDelete(productEntity);
		return ResponseEntity.ok("삭제완료");
	}

}

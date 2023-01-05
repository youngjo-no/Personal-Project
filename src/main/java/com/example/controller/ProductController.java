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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.example.domain.DataTableVO;
import com.example.entity.ProductCategoryEntity;
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
		Page<ProductCategoryEntity> pages = productService.getProductList(pageable);
		DataTableVO<ProductCategoryEntity> dataPage = new DataTableVO<>();
		List<ProductCategoryEntity> content = pages.getContent();
		dataPage.setData(content);
		dataPage.setDraw(draw);
		dataPage.setRecordsTotal(pages.getTotalElements());
		dataPage.setRecordsFiltered(pages.getTotalElements());
		return new ResponseEntity<>(dataPage, HttpStatus.OK);
	}
	
	/**
	 * 상품 상세보기
	 * @param category
	 * @return
	 */
	@RequestMapping("/computer/product/detail")
	public ResponseEntity<Map<String, Object>> productDetail(String category) {
		Map<String, Object> result = new HashMap<>();
		result.put("detail", productService.getDetail(category));
		System.out.println(result);
		return ResponseEntity.ok(result);
	}

	/**
	 * 상품 등록
	 * @param productCategoryEntity
	 * @return
	 */
	@RequestMapping("/computer/product/regist")
	public ResponseEntity<String> productRegist(ProductCategoryEntity productCategoryEntity) {
		productService.productRegist(productCategoryEntity);
		return ResponseEntity.ok("등록완료");
	}
	
	/**
	 * 상품 수정
	 * @param productCategoryEntity
	 * @return
	 */
	@RequestMapping("/computer/product/modify")
	public ResponseEntity<Map<String, Object>> productModify( @RequestBody ProductCategoryEntity productCategoryEntity) {
		Map<String, Object> result = new HashMap<>();
		result.put("modify", productService.productModify(productCategoryEntity));
		return ResponseEntity.ok(result);
	}

	/**
	 * 상품 삭제
	 * @param productCategoryEntity
	 * @return
	 */
	@RequestMapping("/computer/product/delete")
	public ResponseEntity<String> productDelete(ProductCategoryEntity productCategoryEntity) {
		productService.productDelete(productCategoryEntity);
		return ResponseEntity.ok("삭제완료");
	}

}

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>상품 관리</title>

<!-- App favicon -->
        <link rel="shortcut icon" href="/resource/assets/images/favicon.ico">
        <!-- DataTables -->
        <link href="/resource/assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css" />
        <link href="/resource/assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css" rel="stylesheet" type="text/css" />
        <!-- Responsive datatable examples -->
        <link href="/resource/assets/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css" rel="stylesheet" type="text/css" /> 
        <!-- preloader css -->
        <link rel="stylesheet" href="/resource/assets/css/preloader.min.css" type="text/css" />
        <!-- Bootstrap Css -->
        <link href="/resource/assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
        <!-- Icons Css -->
        <link href="/resource/assets/css/icons.min.css" rel="stylesheet" type="text/css" />
        <!-- App Css-->
        <link href="/resource/assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
        
</head>
<body>

<!-- ========Begin page start======= -->
	<div id="layout-wrapper">
		<header id="page-topbar">
			<div class="navbar-header">
				<div class="d-flex">
				<!-- LOGO -->
					<div class="navbar-brand-box">
						<a href="/computer/product/view" class="logo logo-dark">
							<span class="logo-sm">
								<img src="/resource/assets/images/logo-sm.svg" alt="" height="24">
							</span>
							<span class="logo-lg">
								<img src="/resource/assets/images/logo-sm.svg" alt="" height="24"> <span class="logo-txt">상품 관리</span>
							</span>
						</a>
						<a href="index.html" class="logo logo-light">
							<span class="logo-sm">
								<img src="/resource/assets/images/logo-sm.svg" alt="" height="24">
							</span>
							<span class="logo-lg">
								<img src="/resource/assets/images/logo-sm.svg" alt="" height="24"> <span class="logo-txt">Minia</span>
							</span>
						</a>
					</div>
							<button type="button" class="btn btn-sm px-3 font-size-16 header-item" id="vertical-menu-btn">
								<i class="fa fa-fw fa-bars"></i>
							</button>
				</div>
			</div>
		</header>
	</div>
 	<!-- ========== begin page end ========== -->

 	<!-- ========== Left Sidebar Start ========== -->
	<div class="vertical-menu">
		<div data-simplebar class="h-100">
			<!--- Sidemenu -->
			<div id="sidebar-menu">
				<!-- Left Menu Start -->
				<ul class="metismenu list-unstyled" id="side-menu">
					<li class="menu-title" data-key="t-menu">Menu</li>
					<li>
						<a href="/computer/product/view">
						<span data-key="t-dashboard">상품 목록</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<!-- ========Left Sidebar End========== -->            

 
	<!-- ========= list, regist Content start =========== -->
	<div class="main-content">
		<div class="page-content">
			<div class="container-fluid">
				<!-- start page title -->
				<div class="row" id="listTitle">
					<div class="col-12">
						<div class="page-title-box d-sm-flex align-items-center justify-content-between">
								<h4 class="mb-sm-0 font-size-18" id="listTitle">상품 목록</h4>
							<div class="page-title-right">
								<ol class="breadcrumb m-0">
								<li class="breadcrumb-item"><a href="javascript: void(0);"></a></li>
								</ol>
							</div>
						</div>
					</div>
				</div>

				<!-- 상품 리스트 start -->
				<div class="row" id="list-div">
					<div class="col-12">
						<div class="card">
							<div class="card-body">
								<button type="button" class="btn btn-primary" id="registViewBtn">상품 등록</button>
									<table id="productList" class="table table-bordered dt-responsive nowrap w-100">
										<thead>
											<tr>
												<th>no</th>
												<th>name</th>
												<th>content</th>
												<th>price</th>
												<th>stock</th>
												<th>makerEntities[].name</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>no</td>
												<td>name</td>
												<td>content</td>
												<td>price</td>
												<td>stock</td>
												<td>makerEntities[].name</td>
											</tr>
										</tbody>
									</table>
							</div>
						</div>
					</div>
				</div>
				<!-- 상품 리스트 end -->
				
				<!-- 상품 등록 start -->
				<form method="post" id="registView" enctype="multipart/form-data">
					<div class="row">
						<div class="col-12">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title">상품 등록</h4>
								</div>
									<div class="card-body p-4">
										<div class="row">
											<div class="col-lg-6">
												<div>
												<div class="mb-3">
													<input class="form-control" type="hidden" id="example-text-input" name="number" />
												</div>
												<div class="mb-3">
													<label for="example-search-input" class="form-label">상품 이름</label>
													<input class="form-control" type="text" id="name" name="name" />
												</div>
												<div class="mb-3">
													<label for="example-email-input" class="form-label">상품 내용</label>
													<div id="regist-content"></div>
												</div>
												<div class="mb-3">
													<label for="example-email-input" class="form-label">상품 가격</label>
													<input class="form-control" type="text" id="price" name="price" />
												</div>
												<div class="mb-3">
													<label for="example-email-input" class="form-label">재고</label>
													<input class="form-control" type="text" id="stock" name="stock" />
												</div>
												</div>
												<button type="button" class="btn btn-primary" id="registBtn">등록</button>
												<button type="button" class="btn btn-primary" id="listReturnBtn" onclick="location.href='/computer/product/view'">목록</button>
											</div>
										</div>
									</div>
							</div>
						</div>
					</div>
				</form>
				<!-- 상품 등록 end -->
				
				<!-- 상품 상세보기 start -->
				<form method="post" id="detail">
					<div class="row">
						<div class="col-12">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title">상품 상세보기</h4>
								</div>
									<div class="card-body p-4">
										<div class="row">
											<div class="col-lg-6">
												<div>
												<div class="mb-3">
													<input class="form-control" type="hidden" id="detail-number" name="detail-number" />
												</div>
												<div class="mb-3">
													<label for="example-search-input" class="form-label">상품 이름</label>
													<input class="form-control" type="text" id="detail-name" value=" " readonly />
												</div>
												<div class="mb-3">
													<label for="example-email-input" class="form-label">상품 내용</label>
													<div id="detail-content"></div>
												</div>
												<div class="mb-3">
													<label for="example-email-input" class="form-label">상품 가격</label>
													<input class="form-control" type="text" id="detail-price" value=" " readonly />
												</div>
												<div class="mb-3">
													<label for="example-email-input" class="form-label">재고</label>
													<input class="form-control" type="text" id="detail-stock" value=" " readonly />
												</div>
												</div>
												<button type="button" class="btn btn-primary" id="modifyPageBtn">수정</button>
												<button type="button" class="btn btn-primary" id="delBtn">삭제</button>
												<button type="button" class="btn btn-primary" id="listReturnBtn" onclick="location.href='/computer/product/view'">목록</button>
											</div>
										</div>
									</div>
							</div>
						</div>
					</div>
				</div>
			</form>
				<!-- 상품 상세보기 end -->
				
				<!-- 상품 정보수정 start -->
				<form method="post" id="modifypage">
					<div class="row">
						<div class="col-12">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title">상품 정보수정</h4>
								</div>
									<div class="card-body p-4">
										<div class="row">
											<div class="col-lg-6">
												<div>
												<div class="mb-3">
													<input class="form-control" type="hidden" id="modify-number" name="modify-number" />
												</div>
												<div class="mb-3">
													<label for="example-search-input" class="form-label">상품 이름</label>
													<input class="form-control" type="text" id="modify-name" value=" " />
												</div>
												<div class="mb-3">
													<label for="example-email-input" class="form-label">상품 내용</label>
													<div id="modify-content"></div>
												</div>
												<div class="mb-3">
													<label for="example-email-input" class="form-label">상품 가격</label>
													<input class="form-control" type="text" id="modify-price" value=" " />
												</div>
												<div class="mb-3">
													<label for="example-email-input" class="form-label">재고</label>
													<input class="form-control" type="text" id="modify-stock" value=" " />
												</div>
												</div>
												<button type="button" class="btn btn-primary" id="modifyBtn">수정</button>
												<button type="button" class="btn btn-primary" id="listReturnBtn" onclick="location.href='/computer/product/view'">목록</button>
											</div>
										</div>
									</div>
							</div>
						</div>
					</div>
				</form>
				<!-- 상품 정보수정 end -->
	
				<!-- footer start -->          						  
				<footer class="footer">
					<div class="container-fluid">
						<div class="row">
							<div class="col-sm-6">
								<script>document.write(new Date().getFullYear())</script> ©상품 관리.
							</div>
						</div>
					</div>
				</footer>
				<!-- footer end -->
				
				<!-- Right Sidebar -->
				<div class="right-bar">
					<div data-simplebar class="h-100">
						<div class="rightbar-title d-flex align-items-center p-3">
							<h5 class="m-0 me-2">Theme Customizer</h5>
								<a href="javascript:void(0);" class="right-bar-toggle ms-auto">
									<i class="mdi mdi-close noti-icon"></i>
								</a>
						</div>

						<!-- Settings -->
						<hr class="m-0" />
							<div class="p-4">
								<h6 class="mb-3">Layout</h6>
									<div class="form-check form-check-inline">
										<input class="form-check-input" type="radio" name="layout"
												id="layout-vertical" value="vertical">
											<label class="form-check-label" for="layout-vertical">Vertical</label>
									</div>
									<div class="form-check form-check-inline">
									<input class="form-check-input" type="radio" name="layout"
											id="layout-horizontal" value="horizontal">
										<label class="form-check-label" for="layout-horizontal">Horizontal</label>
									</div>
									<h6 class="mt-4 mb-3 pt-2">Layout Mode</h6>
										<div class="form-check form-check-inline">
											<input class="form-check-input" type="radio" name="layout-mode"
													id="layout-mode-light" value="light">
												<label class="form-check-label" for="layout-mode-light">Light</label>
										</div>
										<div class="form-check form-check-inline">
											<input class="form-check-input" type="radio" name="layout-mode"
													id="layout-mode-dark" value="dark">
												<label class="form-check-label" for="layout-mode-dark">Dark</label>
										</div>
											<h6 class="mt-4 mb-3 pt-2">Layout Width</h6>

										<div class="form-check form-check-inline">
											<input class="form-check-input" type="radio" name="layout-width"
													id="layout-width-fuild" value="fuild" onchange="document.body.setAttribute('data-layout-size', 'fluid')">
												<label class="form-check-label" for="layout-width-fuild">Fluid</label>
										</div>
										<div class="form-check form-check-inline">
											<input class="form-check-input" type="radio" name="layout-width"
													id="layout-width-boxed" value="boxed" onchange="document.body.setAttribute('data-layout-size', 'boxed')">
												<label class="form-check-label" for="layout-width-boxed">Boxed</label>
										</div>

										<h6 class="mt-4 mb-3 pt-2">Layout Position</h6>

											<div class="form-check form-check-inline">
												<input class="form-check-input" type="radio" name="layout-position"
														id="layout-position-fixed" value="fixed" onchange="document.body.setAttribute('data-layout-scrollable', 'false')">
													<label class="form-check-label" for="layout-position-fixed">Fixed</label>
											</div>
											<div class="form-check form-check-inline">
												<input class="form-check-input" type="radio" name="layout-position"
														id="layout-position-scrollable" value="scrollable" onchange="document.body.setAttribute('data-layout-scrollable', 'true')">
													<label class="form-check-label" for="layout-position-scrollable">Scrollable</label>
											</div>

											<h6 class="mt-4 mb-3 pt-2">Topbar Color</h6>
												<div class="form-check form-check-inline">
													<input class="form-check-input" type="radio" name="topbar-color"
															id="topbar-color-light" value="light" onchange="document.body.setAttribute('data-topbar', 'light')">
														<label class="form-check-label" for="topbar-color-light">Light</label>
												</div>
												<div class="form-check form-check-inline">
													<input class="form-check-input" type="radio" name="topbar-color"
															id="topbar-color-dark" value="dark" onchange="document.body.setAttribute('data-topbar', 'dark')">
														<label class="form-check-label" for="topbar-color-dark">Dark</label>
												</div>

												<h6 class="mt-4 mb-3 pt-2 sidebar-setting">Sidebar Size</h6>
													<div class="form-check sidebar-setting">	
														<input class="form-check-input" type="radio" name="sidebar-size"
																id="sidebar-size-default" value="default" onchange="document.body.setAttribute('data-sidebar-size', 'lg')">
															<label class="form-check-label" for="sidebar-size-default">Default</label>
													</div>
													<div class="form-check sidebar-setting">
														<input class="form-check-input" type="radio" name="sidebar-size"
																id="sidebar-size-compact" value="compact" onchange="document.body.setAttribute('data-sidebar-size', 'md')">
															<label class="form-check-label" for="sidebar-size-compact">Compact</label>
													</div>
													<div class="form-check sidebar-setting">
														<input class="form-check-input" type="radio" name="sidebar-size"
																id="sidebar-size-small" value="small" onchange="document.body.setAttribute('data-sidebar-size', 'sm')">
															<label class="form-check-label" for="sidebar-size-small">Small (Icon View)</label>
													</div>

											<h6 class="mt-4 mb-3 pt-2 sidebar-setting">Sidebar Color</h6>
												<div class="form-check sidebar-setting">
													<input class="form-check-input" type="radio" name="sidebar-color"
															id="sidebar-color-light" value="light" onchange="document.body.setAttribute('data-sidebar', 'light')">
														<label class="form-check-label" for="sidebar-color-light">Light</label>
												</div>
												<div class="form-check sidebar-setting">
													<input class="form-check-input" type="radio" name="sidebar-color"
															id="sidebar-color-dark" value="dark" onchange="document.body.setAttribute('data-sidebar', 'dark')">
														<label class="form-check-label" for="sidebar-color-dark">Dark</label>
												</div>
												<div class="form-check sidebar-setting">
													<input class="form-check-input" type="radio" name="sidebar-color"
															id="sidebar-color-brand" value="brand" onchange="document.body.setAttribute('data-sidebar', 'brand')">
														<label class="form-check-label" for="sidebar-color-brand">Brand</label>
												</div>

												<h6 class="mt-4 mb-3 pt-2">Direction</h6>
												
													<div class="form-check form-check-inline">
														<input class="form-check-input" type="radio" name="layout-direction"
																id="layout-direction-ltr" value="ltr">
															<label class="form-check-label" for="layout-direction-ltr">LTR</label>
													</div>
													<div class="form-check form-check-inline">
														<input class="form-check-input" type="radio" name="layout-direction"
																id="layout-direction-rtl" value="rtl">
															<label class="form-check-label" for="layout-direction-rtl">RTL</label>
													</div>

							</div>

</div> <!-- end slimscroll-menu-->
</div>
<!-- /Right-bar -->

<!-- Right bar overlay-->
<div class="rightbar-overlay"></div>
				
				
				
			</div> <!-- container-fluid end -->
		</div> <!-- page content end -->
	</div> <!-- main content end -->

<!-- ========= list, regist Content end =========== -->


<!-- JAVASCRIPT -->
        <script src="/resource/assets/libs/jquery/jquery.min.js"></script>
        <script src="/resource/assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/resource/assets/libs/metismenu/metisMenu.min.js"></script>
        <script src="/resource/assets/libs/simplebar/simplebar.min.js"></script>
        <script src="/resource/assets/libs/node-waves/waves.min.js"></script>
        <script src="/resource/assets/libs/feather-icons/feather.min.js"></script>
        <!-- pace js -->
        <script src="/resource/assets/libs/pace-js/pace.min.js"></script>
        <!-- Required datatable js -->
        <script src="/resource/assets/libs/datatables.net/js/jquery.dataTables.min.js"></script>
        <script src="/resource/assets/libs/datatables.net-bs4/js/dataTables.bootstrap4.min.js"></script>
        <!-- Buttons examples -->
        <script src="/resource/assets/libs/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
        <script src="/resource/assets/libs/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js"></script>
        <script src="/resource/assets/libs/jszip/jszip.min.js"></script>
        <script src="/resource/assets/libs/pdfmake/build/pdfmake.min.js"></script>
        <script src="/resource/assets/libs/pdfmake/build/vfs_fonts.js"></script>
        <script src="/resource/assets/libs/datatables.net-buttons/js/buttons.html5.min.js"></script>
        <script src="/resource/assets/libs/datatables.net-buttons/js/buttons.print.min.js"></script>
        <script src="/resource/assets/libs/datatables.net-buttons/js/buttons.colVis.min.js"></script>
        <!-- Responsive examples -->
        <script src="/resource/assets/libs/datatables.net-responsive/js/dataTables.responsive.min.js"></script>
        <script src="/resource/assets/libs/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js"></script>
        <!-- Datatable init js -->
        <script src="/resource/assets/js/pages/datatables.init.js"></script>
        <script src="/resource/assets/js/app.js"></script>
        <!-- cheditor -->
        <script src="https://cdn.ckeditor.com/ckeditor5/12.3.1/classic/ckeditor.js"></script>
        
        <!-- Datatable init js -->
		<script type="text/javascript" src="/resource/js/product/list.js"></script>

</body>
</html>
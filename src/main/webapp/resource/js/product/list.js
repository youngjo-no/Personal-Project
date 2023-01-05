let table;

$(function(){
	
	//최초 화면 초기화
	viewInit();
   
   //등록 폼 이동 버튼 이벤트
   $('#registViewBtn').click(function(e) {
		e.preventDefault();
		regViewInit();
	});
	
	//수정 폼 이동 버튼 이벤트
   $('#modifyPageBtn').click(function(e) { 
		e.preventDefault();
		modViewInit();
	});
	
	//상품 목록 데이터테이블
	list();
	
	// 데이터 테이블 tr 클릭 이벤트 상세보기
	$("#productList").on('click', 'tbody tr', function () {
		detailViewInit();
		let data = $("#productList").DataTable().row($(this)).data();
		$.ajax({
	           type: "post",
	           url: "/computer/product/detail",
	           data : data,
	           success : function(data){
					console.log("data >> " , data.detail);
					let detail = data.detail;
					// itemEntities 배열 데이터 꺼내기(name, pId)
					var itemsId=0;
					for(let i=0; i<detail.itemEntities.length; i++){
						itemsId = detail.itemEntities[i].pid;
					}
					var items = "";
					for(let i=0; i<detail.itemEntities.length; i++){
						items += detail.itemEntities[i].name;
					}
					// woerkersEntities 배열 데이터 꺼내기(name, pId)
					var workersId=0;
					for(let i=0; i<detail.workersEntities.length; i++){
						workersId = detail.workersEntities[i].pid;
					}
					var workers = "";
					for(let i=0; i<detail.workersEntities.length; i++){
						workers += detail.workersEntities[i].name;
					}
					$('#detail-number').val(detail.number); 
					$('#detail-category').val(detail.category);
					$('#detail-itemsId').val(itemsId); 
					$('#detail-name').val(items); 
					detailEditor.setData(detail.content);
					$('#detail-price').val(detail.price);
					$('#detail-stock').val(detail.stock);
					$('#detail-workers').val(workersId);
					$('#detail-workers').val(workers);
					$('#modify-number').val(detail.number);  
					$('#modify-category').val(detail.category);  
					$('#modify-itemsId').val(itemsId);  
					$('#modify-name').val(items);  
					modEditor.setData(detail.content);
					$('#modify-price').val(detail.price);
					$('#modify-stock').val(detail.stock);
					$('#modify-workersId').val(workersId);
					$('#modify-workers').val(workers);
				},
				error : function(error){
					console.log("error >> " , error);
				}
	       });
	 });
	 
	 //상품 내용 등록 editor
	 ClassicEditor
        .create( document.querySelector( '#regist-content' ), {
            toolbar: {
                items: [
                    'heading', '|',
                    'bold', 'italic', 'link', '|',
                    'outdent', 'indent', '|',
                    'bulletedList', 'numberedList', '|',
                    'insertTable', '|',
                    'undo', 'redo'
                ],
                shouldNotGroupWhenFull: true
            },
        } )
        .then( editor => {
            regEditor = editor;
        } )
        .catch( error => {
            console.error( error );
        } );
        
     //상품 상세보기 editor
	 ClassicEditor
        .create( document.querySelector( '#detail-content' ))
        .then( editor => {
            detailEditor = editor;
            editor.isReadOnly = true;
            const toolbarElement = editor.ui.view.toolbar.element;
            toolbarElement.style.display = 'none';
        } )
        .catch( error => {
            console.error( error );
        } );
        
	//상품 수정 editor
	ClassicEditor
        .create( document.querySelector( '#modify-content' ), {
            toolbar: {
                items: [
                    'heading', '|',
                    'bold', 'italic', 'link', '|',
                    'outdent', 'indent', '|',
                    'bulletedList', 'numberedList', '|',
                    'insertTable', '|',
                    'undo', 'redo'
                ],
                shouldNotGroupWhenFull: true
            },
        } )
        .then( editor => {
            modEditor = editor;
        } )
        .catch( error => {
            console.error( error );
        } );
        
	// 상품 등록
	$('#registBtn').on("click",function () {
		save(); 
    });
   
   // 상품 수정
	$('#modifyBtn').on("click",function () {
		modify();
    });
   
   // 상품 삭제
	$('#delBtn').on("click",function () { 
		del();
    });
   
   
})

//최초 화면 초기화
function viewInit (){
	$("#list-div").show();
	$("#registView").hide();
	$("#detail").hide();
	$("#modifypage").hide();
}

//등록 폼 초기화
function regViewInit (){
	$("#listTitle").hide();
	$("#registViewBtn").hide();
	$("#list-div").hide();
	$("#registView").show();
}

//상세보기 폼 초기화
function detailViewInit (){
	$("#list-div").hide();
	$("#listTitle").hide();
	$("#detail").show();
}

//수정 폼 초기화
function modViewInit (){
	$("#detail").hide();
	$("#modifypage").show();
}

//상품 등록
function save(){
	
	if(!regValidation()){
		return false;
	}
	
let params = {
				'category' : $('#category').val(),
				'itemsId' : $('#itemsId').val(),
				'name' : $('#name').val(),
				'content' : regEditor.getData(),
				'price' : $('#price').val(),
				'stock' : $('#stock').val(),
				'workersId' : $('#workersId').val(),
				'workers' : $('#workers').val(),
			}
       $.ajax({
           type: "post",
           url: "/computer/product/regist",  
           data: params,
           dataType: 'text',     
           success: function (data) {
               alert("등록 완료");
               console.log(data);
               location.href = "/computer/product/view" 
           },
           error: function (request, status, error) {
               console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
           }
       });
}

//상품 수정
function modify(){
	
	if(!modValidation()){
		return false;
	}
	
//	let itemsId = $('#modify-itemsId').val();
//	let name = $('#modify-name').val();
	var itemEntities = [];
	/*itemEntities.push({
		itemsId: itemsId,
		name : name
	});*/
//	let workersId = $('#modify-workersId').val();
//	let workers = $('#modify-workers').val();
	var workersEntities = [];
//	workersEntities.push({
//		workersId: workersId,
//		workers : workers
//	});
	
//	 var params = {
//				'number' : $('#modify-number').val(),
//				'category' : $('#modify-category').val(),
//				//'itemEntities' : itemEntities,
//				'content' : modEditor.getData(),
//				'price' : $('#modify-price').val(),
//				'stock' : $('#modify-stock').val(),
//				//'workersEntities' : workersEntities,
//			}
			
			//기존에 데이터와 배열데이터를 넘기기위해 formData 사용
			let formData = new FormData();
			formData.append('number', $('#modify-number').val());
			formData.append('category', $('#modify-category').val());
			formData.append('price', $('#modify-price').val());
			formData.append('stock', $('#modify-stock').val());
			
			itemEntities.push({
				id: 1,
				name : '2',
				pId : 3,
			})
			
			$.each(itemEntities, function(index, item) {
				console.log("itemEntities111=================>", item);
				formData.append('itemEntities[' + index + ']', item);
			});
			
			for(let [name, value] of formData) {
			console.log("보내는데이터111=================>", `${name} = ${value}`);
			}
       $.ajax({
           type: "post",
           url: "/computer/product/modify",  
           data: JSON.stringify(formData),
           processData: false,
           dataType: "json",
           contentType: 'application/json',
           traditional: "true",
           success: function (data) {
               alert("수정 완료");
               console.log("보내는데이터=================>", data);
//               location.href = "/computer/product/view" 
           },
           error: function (request, status, error) {
               console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
           }
       });
}
	
//상품 삭제
function del(){
	let params = {
				'number' : $('#modify-number').val()
			}
       $.ajax({
           type: "post",
           url: "/computer/product/delete",   
           data: params,
           success: function (data) {
               alert("삭제 완료");
               console.log(data);
               location.href = '/computer/product/view' 
           },
           error: function (request, status, error) {
               console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
           }
        });
}

//상품 등록 유효성 검사
function regValidation(){
	 if ( !$.trim($('#category').val()) ) {
        $('#category').focus();
        alert('상품 종류를 입력해 주세요.');
        return false;
    }
    if ( !regEditor.getData() ) {
        alert('상품 내용을 입력해 주세요.');
        return false;
    }
    if ( !$.trim($('#price').val()) ) {
        $('#price').focus();
        alert('가격을 입력해 주세요.');
        return false;
    }
    if ( !$.trim($('#stock').val()) ) {
        $('#stock').focus();
        alert('재고를 입력해 주세요.');
        return false;
    }
    return true;
}

//상품 수정 유효성 검사
function modValidation(){
	if ( !$.trim($('#modify-category').val()) ) {
        $('#modify-category').focus();
        alert('상품종류를 입력해 주세요.');
        return false;
    }
    if ( !modEditor.getData() ) {
        alert('상품 내용을 입력해 주세요.');
        return false;
    }
    if ( !$.trim($('#modify-price').val()) ) {
        $('#modify-price').focus();
        alert('가격을 입력해 주세요.');
        return false;
    }
    if ( !$.trim($('#modify-stock').val()) ) {
        $('#modify-stock').focus();
        alert('재고를 입력해 주세요.');
        return false;
    }
    return true;
}

//상품 목록 조회
function list(){
	table = $('#productList').removeAttr('width').DataTable({
      paging : true,                
      searching : false,    
      info : true,      
      autoWidth : false,          
      responsive : false,           
      lengthChange : false,    
      pageLength : 5,        		
      ordering : false,          
	  destroy : true,          
	  columns: [
				{ title: 'No', sortable: false, width: '5%' },
    	        { title: '상품 종류', data: 'category', sortable: false, width: '10%' }, 		
	            { title: '상품 이름', data: 'itemEntities[].name', sortable: false, width: '10%' },         
            	{ title: '상품 내용', data: 'content', sortable: false, width: '40%' }, 				
            	{ title: '상품 가격', data: 'price', sortable: false, width: '10%' },	
	            { title: '재고', data: 'stock', sortable: false, width: '10%' },         
	            { title: '작업자', data: 'workersEntities[].name', sortable: false, width: '10%' },         
    	    ],
    	    columnDefs: [
            	{
                	"defaultContent": "-",
                	"targets": "_all"
            	},
            	{
	                targets: 0, className: 'text-center', render: function (data, type, row, meta) {
                    	return table.page.info().recordsTotal - (table.page.info().page * table.page.info().length) - meta.row;
                	}
            	},
            	{
	                targets: [1, 2, 3, 4, 5, 6], className: 'text-center'
            	},
        	],
	  processing : true,        
	  serverSide : true,         
	  ajax: {
	   url: "/computer/product/list",
	   type : "post",
	   data: function(data){
		
		console.log(data);
		
		console.log('start-->' + data.start);
		console.log('length-->' + data.length);
		console.log('page-->' + parseInt(data.start / data.length));
		
		return{
			"page" : parseInt(data.start / data.length),
			"size" : data.length,
			"draw" : data.draw,
		};
		},
		},
	});
}



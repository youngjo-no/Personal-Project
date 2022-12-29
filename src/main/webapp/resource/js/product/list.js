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
					$('#detail-number').val(detail.number); 
					$('#detail-name').val(detail.name); 
					detailEditor.setData(detail.content);
					$('#detail-price').val(detail.price);
					$('#detail-stock').val(detail.stock);
					$('#modify-number').val(detail.number);  
					$('#modify-name').val(detail.name);  
					modEditor.setData(detail.content);
					$('#modify-price').val(detail.price);
					$('#modify-stock').val(detail.stock);
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
				'name' : $('#name').val(),
				'content' : regEditor.getData(),
				'price' : $('#price').val(),
				'stock' : $('#stock').val(),
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
	
	 let params = {
				'number' : $('#modify-number').val(),
				'name' : $('#modify-name').val(),
				'content' : modEditor.getData(),
				'price' : $('#modify-price').val(),
				'stock' : $('#modify-stock').val(),
			}
       $.ajax({
           type: "post",
           url: "/computer/product/modify",  
           data: params,
           dataType: 'text',     
           success: function (data) {
               alert("수정 완료");
               console.log(data);
               location.href = "/computer/product/view" 
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
	if ( !$.trim($('#name').val()) ) {
        $('#name').focus();
        alert('이름을 입력해 주세요.');
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
	if ( !$.trim($('#modify-name').val()) ) {
        $('#modify-name').focus();
        alert('이름을 입력해 주세요.');
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
				{ title: 'No', sortable: false, width: '10%' },
    	        { title: '상품 이름', data: 'name', sortable: false, width: '10%' }, 		
            	{ title: '상품 내용', data: 'content', sortable: false, width: '50%' }, 				
            	{ title: '상품 가격', data: 'price', sortable: false, width: '10%' }, 			
	            { title: '재고', data: 'stock', sortable: false, width: '10%' },         
	            { title: '제작자', data: 'makerEntities[].name', sortable: false, width: '10%' },         
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
	                targets: [1, 2, 3, 4, 5], className: 'text-center'
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



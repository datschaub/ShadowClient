<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
	<jsp:include page="partials/standardHeadContent.jsp" />
	<script type="text/javascript" src="../js/accountApp.js"></script>
</head>

<body>
	<jsp:include page="partials/navbar.jsp" />
	
<div class="container">

	<h3>Account page</h3>
	<label for="txtAccName">Account Name:</label>
	<input id="txtAccName" type="text">
	<button id="btnFindAcc">Search</button>

	<br>
	<div id="charContainer">
		
	</div>
	
	
</div>

	
<jsp:include page="partials/footer.jsp" />	

</body>
</html>


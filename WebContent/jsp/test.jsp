<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
	<jsp:include page="partials/standardHeadContent.jsp" />
	<script type="text/javascript" src="../js/testApp.js"></script>
<title>Test</title>
</head>
<body>

<jsp:include page="partials/navbar.jsp" />

<div class="container">
		<p>Här kan du skriva in ditt TestCase eller TestSuite:<br></p>
	<form action="TestServlet" method="get" name="youTypeItForm">
		<input type="text" name="suite" size=60 value=/>
		<input type="submit" value="Run"/>
	</form>
	
	<hr>
	
	<p>Här kan du välja en eller flera av följande test:<br></p>
	<form action="TestServlet" method="get" name="youPickItForm">
		<select name="suite" size="2" multiple>
			<option value="shadowForest.junit.test.AccountBeanTest">Account methods</option>
		</select>
		<input type="submit" value="Run">
	</form>
</div>

<jsp:include page="partials/footer.jsp" />

</body>
</html>
package src.com.shadowForest.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.ejb.EJB;
import javax.json.Json;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import shadowforest.ejb.ics.Account;
import shadowforest.ejb.ics.Character;
import shadowforest.facade.ics.FacadeLocal;

/**
 * Servlet implementation class AccountServlet
 */
@WebServlet("/AccountServlet")
public class AccountServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	@EJB
	FacadeLocal facade;
	
    public AccountServlet() {
        super();
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

			JsonObjectBuilder jsonObj = Json.createObjectBuilder();
			
			String accName = request.getParameter("accName");
			
			Account acc = facade.findByAccountName(accName);
			
			if(acc == null){
				jsonObj.add("request", accName);
				jsonObj.add("error", "Account not found");
				
				response.setStatus(404);
				response.getWriter().write(jsonObj.build().toString());
				return;
			}
			
			jsonObj.add("accId", acc.getAccId());
			jsonObj.add("accName", acc.getAccName());
			
			response.setContentType("application/json; charset=utf-8");
			JsonArrayBuilder characterArray = Json.createArrayBuilder();
			
			for(Character c : acc.getCharacters()){
				JsonObjectBuilder cJson = Json.createObjectBuilder();
				cJson.add("charName", c.getCharName());
				cJson.add("charExp", c.getExp());
				cJson.add("charCurrentHp", c.getCurrentHp());
				cJson.add("charMaxHp", c.getMaxHp());
				cJson.add("charBaseDmgMax", c.getBaseDmgMax());
				cJson.add("charBaseDmgMin", c.getBaseDmgMin());
				cJson.add("charGold", c.getGold());
				cJson.add("charLevel", c.getLevel());
				characterArray.add(cJson);
			}
			
			jsonObj.add("characters", characterArray);
			
			response.getWriter().write(jsonObj.build().toString());
			
			
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

}

package shadowForest.junit.test;

import java.util.UUID;

import javax.naming.Context;
import javax.naming.InitialContext;

import shadowforest.eao.ics.AccountEAOImplLocal;
import shadowforest.ejb.ics.Account;
import junit.framework.TestCase;

public class AccountBeanTest extends TestCase {
	
	AccountEAOImplLocal account;
	
	Account testAccount;
	String accId = "ce0deb00-d46e-11e4-b9d6-1681e6b88ec1";
	String accName = "TestAccount";
	String accPass = "TestPass";
	
	public AccountBeanTest(String name) {
		super(name);
	}

	protected void setUp() throws Exception {
		super.setUp();
		Context context = new InitialContext();
		account = (AccountEAOImplLocal)context.lookup("java:app/ShadowForestEJBProject/AccountEAOImpl!shadowforest.eao.ics.AccountEAOImplLocal");
		
		testAccount = new Account();
		testAccount.setAccId(accId);
		testAccount.setAccName(accName);
		testAccount.setPassword(accPass);
	}

	protected void tearDown() throws Exception {
		super.tearDown();
		try{
			account.deleteAccount(accId);
		}
		catch(Exception e){
			System.out.println("Error in tear down when deleting test account");
			System.out.println(e.getMessage());
		}finally{
			testAccount = null;
		}
		account = null;
	}
	
	public void testAccountMethods() throws Exception{
		
		Account returnAcc = account.createAccount(testAccount);
		assertEquals(returnAcc, testAccount);
		
		returnAcc = account.findByAccountName(testAccount.getAccName());
		
		assertEquals(returnAcc, testAccount);
		
		testAccount.setAccName("NewAccName");
		testAccount.setPassword("NewPassword");
		returnAcc = account.updateAccount(testAccount);
		assertEquals(returnAcc, testAccount);
		
		account.deleteAccount(accId);
		returnAcc = account.findByAccountId(accId);
		assertNull(returnAcc);
	}

}

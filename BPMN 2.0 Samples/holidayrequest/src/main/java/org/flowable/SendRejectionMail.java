package org.flowable;

import org.flowable.engine.delegate.DelegateExecution;
import org.flowable.engine.delegate.JavaDelegate;

public class SendRejectionMail implements JavaDelegate {

	public void execute(DelegateExecution execution) {
		
		System.out.println("Sending the Rejection mail to "
	            + execution.getVariable("employee"));
	}

}

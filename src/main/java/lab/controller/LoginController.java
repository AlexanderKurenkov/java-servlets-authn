// LoginController.java
package lab.controller;

import java.io.Writer;
import org.thymeleaf.ITemplateEngine;
import org.thymeleaf.context.WebContext;
import jakarta.servlet.http.HttpServlet;

// контроллер для страницы с формой для входа
public class LoginController extends HttpServlet implements IViewController
{
	@Override
	public void process(WebContext webContext, ITemplateEngine templateEngine, Writer writer) throws Exception
	{
		templateEngine.process("login", webContext, writer);
	}
}

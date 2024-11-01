// AdminDashboardController.java
package lab.controller;

import java.io.Writer;
import org.thymeleaf.ITemplateEngine;
import org.thymeleaf.context.WebContext;
import jakarta.servlet.http.HttpServlet;

// контроллер для страницы администратора
public class AdminDashboardController extends HttpServlet implements IViewController
{
	@Override
	public void process(WebContext webContext, ITemplateEngine templateEngine, Writer writer) throws Exception
	{
		templateEngine.process("admin", webContext, writer);
	}
}

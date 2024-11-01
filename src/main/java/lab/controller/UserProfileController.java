// UserProfileController.java
package lab.controller;

import java.io.Writer;
import org.thymeleaf.ITemplateEngine;
import org.thymeleaf.context.WebContext;
import jakarta.servlet.http.HttpServlet;

// контроллер для страницы пользователя
public class UserProfileController extends HttpServlet implements IViewController
{
	@Override
	public void process(WebContext webContext, ITemplateEngine templateEngine, Writer writer) throws Exception
	{
		templateEngine.process("user", webContext, writer);
	}
}

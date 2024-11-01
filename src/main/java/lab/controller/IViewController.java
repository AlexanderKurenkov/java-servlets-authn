// IViewController.java
package lab.controller;

import java.io.Writer;
import org.thymeleaf.ITemplateEngine;
import org.thymeleaf.context.WebContext;

// базовый интерфейс для всех контроллеров
public interface IViewController
{
	public void process(final WebContext webContext, final ITemplateEngine templateEngine, final Writer writer) throws Exception;
}

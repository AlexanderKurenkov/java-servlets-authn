// ViewFilter.java
package lab;

import java.io.IOException;
import java.io.Writer;

import org.thymeleaf.ITemplateEngine;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.WebContext;
import org.thymeleaf.templatemode.TemplateMode;
import org.thymeleaf.templateresolver.WebApplicationTemplateResolver;
import org.thymeleaf.web.IWebApplication;
import org.thymeleaf.web.IWebExchange;
import org.thymeleaf.web.servlet.JakartaServletWebApplication;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lab.controller.IViewController;

// фильр представлений
public class ViewFilter implements Filter
{
	// поля для поддержки шаблонизатора Thymeleaf
	private ITemplateEngine templateEngine;
	private JakartaServletWebApplication application;

	// вызывается однократно при первой инициализации фильтра
	@Override
	public void init(final FilterConfig filterConfig) throws ServletException
	{
		this.application = JakartaServletWebApplication.buildApplication(filterConfig.getServletContext());
		this.templateEngine = ViewFilter.buildTemplateEngine(this.application);
	}

	// вызывается для пути, на который данный фильтр отображен, до обработки запроса и перед отправкой ответа
	@Override
	public void doFilter(final ServletRequest request, final ServletResponse response, final FilterChain chain) throws IOException, ServletException
	{
		// если не удается обработать запрос...
		if (!this.process((HttpServletRequest) request, (HttpServletResponse) response))
		{
			// запрос передается дальше по цепочке фильтров
			chain.doFilter(request, response);
		}
	}

	// пустое переопределение
	@Override
	public void destroy()
	{
	}

	// обработка запроса
	private boolean process(final HttpServletRequest request, final HttpServletResponse response) throws ServletException
	{
		String requestURI = request.getRequestURI();

		// не обрабатываем запросы для:
		// 	- API
		// 	- статических ресурсов: статические ресурсы обслуживаются сервлетом по умолчанию (DefaultServlet в Jetty)
		if (requestURI.startsWith("/api") || requestURI.startsWith("/favicon") || requestURI.startsWith("/js/") || requestURI.startsWith("/css/") || requestURI.startsWith("/assets/"))
		{
			return false;
		}

		try
		{
			// получает контроллер, соответствующий заданному пути
			final IViewController controller = Router.resolveController(request);
			if (controller == null)
			{
				// перенаправление на страницу с сообщением об ошибке для кода состояния HTTP 404
				((HttpServletResponse) response).sendRedirect("/404");
				return false;
			}

			// заголовки ответа
			response.setContentType("text/html");
			response.setCharacterEncoding("UTF-8");
			response.setHeader("Pragma", "no-cache");
			response.setHeader("Cache-Control", "no-cache");
			response.setDateHeader("Expires", 0);

			// настройка шаблонизатора для передачи его контроллеру
			final IWebExchange webExchange = this.application.buildExchange(request, response);
			WebContext webContext = new WebContext(webExchange, webExchange.getLocale());
			final Writer writer = response.getWriter();

			// обработка шаблона
			controller.process(webContext, this.templateEngine, writer);

			return true;
		} catch (final Exception e)
		{
			throw new ServletException(e);
		}
	}

	// инициализация шаблонизатора
	private static ITemplateEngine buildTemplateEngine(final IWebApplication application)
	{
		final WebApplicationTemplateResolver templateResolver = new WebApplicationTemplateResolver(application);

		templateResolver.setTemplateMode(TemplateMode.HTML);
		templateResolver.setCharacterEncoding("UTF-8");
		templateResolver.setPrefix("/WEB-INF/templates/");
		templateResolver.setSuffix(".html");
		templateResolver.setCacheable(false);

		final TemplateEngine templateEngine = new TemplateEngine();
		templateEngine.setTemplateResolver(templateResolver);
		templateEngine.setCacheManager(null);

		return templateEngine;
	}
}

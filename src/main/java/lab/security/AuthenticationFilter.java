// AuthenticationFilter.java
package lab.security;

import java.io.IOException;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

// фильтр, предотвращающий доступ к защищенным ресурсам, требующим авторизации
public class AuthenticationFilter implements Filter
{
	// пустое переопределение
	@Override
	public void init(final FilterConfig filterConfig) throws ServletException
	{
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException
	{
		HttpServletRequest httpRequest = (HttpServletRequest) request;
		// получение сессии (аргумент false предотвращает создание не существующей сессии)
		HttpSession session = httpRequest.getSession(false);
		// проверка авторизации на основе наличия сессии и атрибута "username"
		boolean authorized = session != null && session.getAttribute("username") != null;

		// проверка авторизации пользователя на основании данных сессии
		if (authorized)
		{
			// получение роли пользователя
			String role = (String) session.getAttribute("role");
			String requestURI = httpRequest.getRequestURI();

			// проверка соответствия роли и запрашиваемой страницы:
			// 	- страница начинается с "/admin" и роль пользователя "admin";
			// 	- страница начинается с "/user" и роль пользователя "user".
			if ((requestURI.startsWith("/admin") && "admin".equals(role)) || (requestURI.startsWith("/user") && "user".equals(role)))
			{
				// передача запроса по цепочке фильтров
				chain.doFilter(request, response);
			}
		} else
		{
			// перенаправление на страницу для входа, если пользователь не авторизован
			((HttpServletResponse) response).sendRedirect("/login");
		}
	}

	// пустое переопределение
	@Override
	public void destroy()
	{
	}
}

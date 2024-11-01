// Authenticate.java
package lab.security;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import lab.model.UserService;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

// реализация аутентификация пользователей на основе учетных данных
public class Authenticate extends HttpServlet
{
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		// получение данных логина/пароля из формы
		String login = request.getParameter("inputLogin");
		String password = request.getParameter("inputPassword");

		// проверка, существует ли пользователь с данным логином
		if (UserService.userExists(login))
		{
			// проверка правильности пароля для данного пользователя
			if (UserService.userHasPassword(login, password))
			{
				// создание и настройка сессии в случае успешной аутентификации пользователя
				HttpSession session = request.getSession(true);
				session.setAttribute("username", login);
				String role = "admin".equals(login) ? "admin" : "user";
				session.setAttribute("role", role);

				// задание целевой страницы для перенаправления пользователя
				String targetPath = "admin".equals(login) ? "/admin" : "/user";
				// перенаправление на целевую страницу после успешного входа
				response.sendRedirect(targetPath);
			} else
			{
				// перенаправление на страницу для входа с указанием сообщения о неверном пароле
				response.sendRedirect("/login?passwordError=true");
			}
		} else
		{
			// перенаправление на страницу для входа с указанием сообщения о неверном логине
			response.sendRedirect("/login?userError=true");
		}

	}
}

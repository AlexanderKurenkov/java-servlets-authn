// UserService.java
package lab.model;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

// пользовательский сервис для работы с учетными данными пользователей
public class UserService
{
	// пользователи и их пароли
	private static Map<String, String> users = new HashMap<String, String>()
	{
		{
			this.put("admin", "admin");
			this.put("user", "user");
		}
	};

	// проверка, существует ли данный пользователь
	public static boolean userExists(String username)
	{
		return UserService.users.containsKey(username); // Check if username exists in the map
	}

	// проверка пароля пользователя
	public static boolean userHasPassword(String username, String password)
	{
		return UserService.users.get(username).equals(password);
	}
}

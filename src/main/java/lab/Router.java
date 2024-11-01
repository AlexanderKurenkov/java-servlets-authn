// Router.java
package lab;

import java.util.HashMap;
import java.util.Map;

import jakarta.servlet.ServletRequest;
import jakarta.servlet.http.HttpServletRequest;
import lab.controller.AdminDashboardController;
import lab.controller.HomeController;
import lab.controller.IViewController;
import lab.controller.InternalServerErrorController;
import lab.controller.LoginController;
import lab.controller.NotFoundErrorController;
import lab.controller.UserProfileController;

// класс, реализующий роутер
public class Router
{
	// список конечных точек с контроллерами, для которых они вызываются
	private static Map<String, IViewController> viewRoutes;

	static
	{
		Router.viewRoutes = new HashMap<String, IViewController>()
		{
			{
				this.put("/", new HomeController());
				this.put("/login", new LoginController());
				this.put("/admin", new AdminDashboardController());
				this.put("/user", new UserProfileController());

				// errors
				this.put("/404", new NotFoundErrorController());
			}
		};
	}

	// возвращает контроллер для данного пути
	public static IViewController resolveController(final ServletRequest request)
	{
		final String path = Router.getRequestPath(request);
		return Router.viewRoutes.get(path);
	}

	// возвращает URL-путь
	private static String getRequestPath(final ServletRequest request)
	{
		String requestPath = ((HttpServletRequest) request).getRequestURI();

		final int fragmentIndex = requestPath.indexOf(';');
		if (fragmentIndex != -1)
		{
			requestPath = requestPath.substring(0, fragmentIndex);
		}

		return requestPath;
	}
}
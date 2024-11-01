// Main.java
package lab;

import java.net.URI;
import java.net.URISyntaxException;

import org.eclipse.jetty.ee10.webapp.Configurations;
import org.eclipse.jetty.ee10.webapp.WebAppContext;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.util.resource.Resource;
import org.eclipse.jetty.util.resource.ResourceFactory;

// точка входа в программу
public class Main
{
	public static void main(String[] args) throws Exception
	{
		// создаёт экземпляр сервера Jetty (порт 8080)
		Server server = new Server(8080);

		// создаёт контекст веб-приложения
		WebAppContext webAppContext = new WebAppContext();
		// определяет базовый ресурс (путь) для веб-приложения
		Resource baseResource = Main.findBaseResource(webAppContext);

		// настройка контекста веб-приложения
		webAppContext.setContextPath("/");
		webAppContext.setBaseResource(baseResource);
		webAppContext.setParentLoaderPriority(true);

		// запуск веб-сервера
		server.setHandler(webAppContext);
		server.start();
		server.join();
	}

	// возвращает путь к папке с ресурсами (для JAR-файла и при запуске из папки проекта)
	private static Resource findBaseResource(WebAppContext context)
	{
		ResourceFactory resourceFactory = ResourceFactory.of(context);
		try
		{
			URI appUri = Main.class.getProtectionDomain().getCodeSource().getLocation().toURI();

			String path = "";
			if (appUri.toString().endsWith(".jar"))
			{
				path = "jar:" + appUri + "!/META-INF/resources";
			} else
			{
				path = appUri.toString();
				var subpath = path.substring(0, path.lastIndexOf("target/classes"));
				path = subpath + "src/main/webapp";
			}

			// создает Resource в корне JAR-файла
			Resource baseResource = resourceFactory.newResource(path);

			if (baseResource != null && baseResource.exists())
			{
				return baseResource;
			}

		} catch (URISyntaxException e)
		{
			e.printStackTrace();
		}

		return null;
	}
}
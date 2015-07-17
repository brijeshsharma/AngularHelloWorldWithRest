package poc.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import poc.domain.User;
import poc.service.UserService;

@Path("/test")
public class UserRestService {

    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/hello")
    public User sayHello() {
    	
        UserService userService = new UserService();
        return userService.getDefaultUser();    
    
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/hello_new")
    public User sayHelloNew() {
    	
        UserService userService = new UserService();
        return userService.getNewUser();    
    
    }
   
  
}

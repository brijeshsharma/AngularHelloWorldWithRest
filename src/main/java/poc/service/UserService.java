package poc.service;

import java.util.ArrayList;
import java.util.List;

import poc.domain.User;

public class UserService {

	static List<User> usersList = new ArrayList<User>();

	public User getDefaultUser() {
		User user = new User();
		user.setFirstName("Brijesh");

		return user;
	}
	
	public User getNewUser() {
		User user = new User();
		user.setFirstName("Guest...............");

		return user;
	}

}

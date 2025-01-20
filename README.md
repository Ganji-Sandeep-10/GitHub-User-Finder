# **GitHub User Finder**

A React application to search for GitHub users and display their profiles using the GitHub API.

---

## **Features**
- Search for GitHub users by username.
- Display user profile pictures and usernames.
- Provides links to user GitHub profiles.

---

## **Technologies Used**
- React.js
- GitHub REST API
- CSS for styling

---

## **Setup Instructions**

### **Prerequisites**
- Node.js installed on your system.
- Git installed for cloning the repository.

### **Steps to Run the Project**
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/github-user-finder.git
   ```
2. Navigate to the project directory:
   ```bash
   cd github-user-finder
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open the application in your browser:
   - Go to `http://localhost:3000`.

---

## **Project Structure**
```
src/
├── components/
│   └── Heading.js         # Heading component
├── App.js                 # Main application file
├── index.js               # Entry point
├── styles.css             # Application styles
```

---

## **Usage**
1. Enter a GitHub username in the search box.
2. Click the "Search" button to fetch user details.
3. View the list of matching users with their:
   - Profile picture.
   - Username.
   - Link to their GitHub profile.

---

## **API Reference**
- **Endpoint**: `https://api.github.com/search/users`
- **Query Parameter**: `q` (GitHub username to search for).

Example:
```url
https://api.github.com/search/users?q=octocat
```

---

## **Future Improvements**
- Add pagination for large search results.
- Include additional user details (e.g., bio, location, repositories).
- Implement loading spinners and error handling UI.

---

## **Contributions**
Contributions are welcome! Feel free to fork this project and submit a pull request.

---

## **License**
This project is licensed under the [MIT License](LICENSE).

---

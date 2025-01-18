import { useState } from "react";
import Heading from "./components/Heading";
import "./styles.css";

function App() {
  const [name, setName] = useState("");
  const [user, setUser] = useState([]);

  const find = async () => {
    const url = `https://api.github.com/search/users?q=${name}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        setUser(data.items || []); // Update user list
      } else {
        alert("Invalid User Name. Try again....!!!");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="App">
      <Heading />
      <input
        type="text"
        placeholder="Enter User Name"
        value={name}
        onChange={(e) => setName(e.target.value)} // Corrected onChange
      />
      <button onClick={find}>Search</button>

      {/* Display fetched user data */}
      <div className="user-list">
        {user.map((u) => (
          <div key={u.id} className="user-card">
            <img src={u.avatar_url} alt={`${u.login}'s avatar`} />
            <p>{u.login}</p>
            <a href={u.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

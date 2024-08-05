// App.js
import React, { useState } from 'react';
import UserProfile from './UserProfile';

function App() {
  const [user, setUser] = useState({ name: 'John Doe', age: 30 });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>React Debugging App</h1>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      {isLoggedIn && <UserProfile user={user} />}
    </div>
  );
}

export default App;

// UserProfile.js
import React from 'react';

function UserProfile({ user }) {
  if (!user) {
    return <p>No user data available</p>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default UserProfile;
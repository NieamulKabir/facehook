import { useState } from "react";


const ProfilePage = () => {
    const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
    return (
        <div>
            <h1>Profile page</h1>
        </div>
    );
};

export default ProfilePage;
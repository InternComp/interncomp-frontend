import React, { useEffect, useState } from 'react';
const WelcomeNewUserPage = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null); // State to store the user ID

    // Fetch username and user ID from the protected route
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:3000/auth/protected', {
                    method: 'GET',
                    credentials: 'include', // Assuming cookies need to be included with the request
                });
                if (response.ok) {
                    const data = await response.json();
                    setUsername(data.username);
                    setUserId(data.userid); // Assuming the JSON object has a userid field
                } else {
                    throw new Error('Failed to fetch user data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchUserData();
    }, []);

    // Fetch detailed user profile using 'userId'
    useEffect(() => {
        if (!userId) return; // Ensure 'userId' is present
        const fetchUserProfile = async () => {
            try {
                const response = await fetch(`http://localhost:3000/user/${userId}`);
                if (response.ok) {
                    const userInfo = await response.json();
                    setUser(userInfo);
                } else {
                    throw new Error('Failed to fetch user profile');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchUserProfile();
    }, [userId]);

    return (
        <div className="container" style={{ paddingBottom: '700px' }}>
            <div style={{paddingLeft:'0px', paddingRight:"100px", paddingTop:"200px"}}>
            <div className="text">Hello {username} 🚀</div>
            <div className="text">Let's get your Internship journey started! </div>
            </div>

            {/* {user && (
                <div className="text">ID: {user.id}, Email: {user.email}, Program: {user.program}</div>
            )} */}
        </div>
    );
};

export default WelcomeNewUserPage;

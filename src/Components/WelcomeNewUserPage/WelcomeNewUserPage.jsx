import React, {useEffect,useState} from 'react';

const WelcomeNewUserPage = () => {
    const [username,setUsername]=useState('');
    useEffect(()=>{
        const fetchUsername = async()=>{
            const res= await fetch('http://localhost:3000/auth/protected',{
            method: 'GET',
            credentials: 'include'
            });
            const info=await res.json();
            if(res.ok){
                setUsername(info.username);
            }
    }
    fetchUsername();
},[])

return (
    <div className="container" style={{paddingBottom:'200px'}}>
  
    <div className="text">Hello {username} 🚀</div>
    </div>
  
);

};


export default WelcomeNewUserPage;
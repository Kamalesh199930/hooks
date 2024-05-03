import React, { useEffect, useState } from "react";

function UseEffect() {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        fetch("https://random-data-api.com/api/users/random_user")
            .then((response) => response.json())
            .then((data) => setUserData(data));
    }, []);
    return (
        <div>
            {userData && (
                <div>
                    <h2>User Information</h2>
                    <p>
                        Name:
                        {userData.first_name}
                        <br />
                        Last Name:
                        {userData.last_name} <br />
                        Id:
                        {userData.id}
                    </p>
                    <p>Email:{userData.email}</p>
                </div>
            )}
        </div>
    );
}
export default UseEffect;

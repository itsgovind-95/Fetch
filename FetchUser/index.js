document.getElementById("button").addEventListener("click", () => {
    const fetchButton = document.getElementById("button");
    fetchButton.disabled = true;  // Disable the button after click

    fetch("https://reqres.in/api/users")
        .then(response => response.json())
        .then(finalResponse => {
            let users = finalResponse.data;
            console.log(users);
            let userContainer = document.getElementById("users-data");
            userContainer.innerHTML = '';  // Clear any previous content

            users.forEach(user => {
                const userBox = document.createElement("div");
                userBox.className = "user-data";

                const profilePicture = document.createElement("img");
                profilePicture.src = user.avatar;
                const userName = document.createElement("h3");
                userName.textContent = user.first_name + " " + user.last_name;
                const userEmail = document.createElement("p");
                userEmail.textContent = user.email;

                userBox.append(profilePicture, userName, userEmail);
                userContainer.append(userBox);
            });
        })
        .catch(error => {
            console.error('Error fetching users:', error);
            fetchButton.disabled = false; 
        });
});

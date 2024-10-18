document.querySelector("#form").addEventListener("submit", (event) => {
    event.preventDefault();
    const userName = document.getElementById("name").value;
    const userAge = document.getElementById("age").value;
    const userData = {
        username: userName,
        age: userAge
    };
    
    localStorage.setItem("userdata", JSON.stringify(userData));
    event.target.reset();
});

document.getElementById("button").addEventListener("click", () => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));
    const tableData = document.querySelector("table tbody tr").children;
    
    tableData[0].textContent = userdata.username;
    tableData[1].textContent = userdata.age;
});

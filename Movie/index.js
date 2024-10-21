document.getElementById("search-button").addEventListener("click", () => {
    const query = document.getElementById("input-search").value.trim();
    if (query) {
        search(query);
        document.getElementById("input-search").value = "";
    }
});

function search(query) {
    const apiKey = "6377e01"; 
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                console.log(data);
                displayResult(data.Search);
            } else {
                console.log("No result found");
                displayResult(['No result found']);
            }
        })
        .catch(error => {
            console.log("Error:", error);
            displayResult(['Error fetching data']);
        });
}

function displayResult(results) {
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = "";

    results.forEach(result => {
        const resultData = document.createElement("div");
        resultData.className = "result-data";

        const poster = document.createElement("img");
        poster.src = result.Poster !== 'N/A' ? result.Poster : 'default.jpg';
        poster.alt = result.Title;

        const title = document.createElement("h3");
        title.textContent = `${result.Title}`;

        const year = document.createElement("h4");
        year.textContent = `Year : ${result.Year}`;

        resultData.append(poster, title, year); 
        resultContainer.appendChild(resultData);
    });
}

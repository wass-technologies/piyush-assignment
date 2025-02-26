document.getElementById("search-btn").addEventListener("click", function() {
    let query = document.getElementById("search-input").value;
    if (query) {
        alert("Searching for: " + query);
    } else {
        alert("Please enter a search query!");
    }
});

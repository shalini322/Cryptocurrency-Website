// Get references to the HTML elements where prices will be displayed
const btc = document.getElementById("bitcoin");
const eth = document.getElementById("ethereum");
const doge = document.getElementById("dogecoin");

// Fetch the cryptocurrency prices from the API
fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd")
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
        // Update the HTML with the fetched prices
        btc.innerHTML = data.bitcoin.usd;
        eth.innerHTML = data.ethereum.usd;
        doge.innerHTML = data.dogecoin.usd;
    })
    .catch(error => {
        console.error("Error fetching the data:", error); // Handle any errors
    });

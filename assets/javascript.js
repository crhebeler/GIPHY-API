var topicsArray = ["optical illusions", "optical illusion", "eye illusion", "art illusion","optical art illusion"];
GIPHY_API_KEY = "8ehwuTO9D3Z03bRy6u9e6q4t3syMTkC4";

var BASE_URL = 'https://api.giphy.com/v1/gifs/random?api_key=8ehwuTO9D3Z03bRy6u9e6q4t3syMTkC4&tag=opitical+illusion';
var ENDPOINT = 'search';
var LIMIT = '12';
var RATING = 'pg';

    // Event listener for our cat-button
    $("#gif-button").on("click", function() {

      // Storing our giphy API URL for a random cat image
      var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=8ehwuTO9D3Z03bRy6u9e6q4t3syMTkC4&tag=opitical+illusion";

      // Perfoming an AJAX GET request to our queryURL
      console.log("Fetching the optical illusions...");
     { $.ajax({
        url: queryURL,
        method: "GET"
      })

      // After the data from the AJAX request comes back
        .then(function(response) {
          console.log("image recived");
        // Saving the image_original_url property
          var imageUrl = response.data.image_original_url;

          // Creating and storing an image tag
          var gifImage = $("<img>");

          // Setting the catImage src attribute to imageUrl
          gifImage.attr("src", imageUrl);
          gifImage.attr("alt", "gif image");

          // Prepending the catImage to the images div
          $("#images").prepend(gifImage);
        });
    }});
 

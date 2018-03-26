
//array of topics

{var topicsArray = ["optical illusions", "optical illusion", "eye illusion", "art illusion","optical art illusion"];
GIPHY_API_KEY = "8ehwuTO9D3Z03bRy6u9e6q4t3syMTkC4";

var BASE_URL = 'https://api.giphy.com/v1/gifs/random?api_key=8ehwuTO9D3Z03bRy6u9e6q4t3syMTkC4&tag=opitical+illusion';
var ENDPOINT = 'search';
var LIMIT = '12';
var RATING = 'pg';}




//create a loop for array 


// Event listener for our the image-button
$("#gif-button").on("click", function() {

    // Storing our giphy API URL for a random image
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=8ehwuTO9D3Z03bRy6u9e6q4t3syMTkC4&tag=opitical+illusion";
  
    // Perfoming an AJAX GET request to our queryURL
    console.log("Fetching the optical illusion image...");
    $.ajax({
      url: queryURL,
      method: "GET"
    })
  
    // After the data from the AJAX request comes back
      .then(function(response) {
        console.log("GIF image recieved!");
      // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;
  
        // Creating and storing an image tag
        var gifImage = $("<img>");
  
        // Setting the GifImage src attribute to imageUrl
        gifImage.attr("src", imageUrl);
        gifImage.attr("alt", "GIF image");
  
        // Prepending the GIFImage to the images div
        $("#images").prepend(gifImage);
      });
  });

  /// make its so it gets 10 images and just not one


  /// animate /// and pause the gif//
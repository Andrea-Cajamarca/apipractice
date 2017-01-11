$(document).ready(function() {
///get API by this, organize with JSONlint.com
  // $.getJSON(
   //"https://api.giphy.com/v1/gifs/search?q=cats&api_key=dc6zaTOxFJmzC",
     
    $("#run").click(function() {
        var storesearch = $("#Put_In_Something").val();
        console.log(storesearch);
        //build url here
        // "https://api.giphy.com/v1/gifs/search?q=" + storesearch + "&api_key=dc6zaTOxFJmzC"

        var url = "https://api.giphy.com/v1/gifs/search?q=" + storesearch + "&api_key=dc6zaTOxFJmzC"
        $.getJSON(url, function (response) {
          console.log(response);
          console.log("")
        })
  
//         $("li").append("<img src=" + response.data[0].images.fixed_width_downsampled.url + ">");
//              var resetButton = document.getElementbyId('reset');
//         resetButton.onclick= reloadPage;
            
//         function reloadPage(){
//            window.location.reload();
//         }


    });
});
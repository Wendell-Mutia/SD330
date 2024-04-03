// Interactive Javascript 

        // Action to open and close fridge
        function use_fridge() {
            var fridge_button = document.getElementById("fridgebutton");
            var fridge_contents_img = document.getElementById("contents")


            // Checks to see if the fridge is open or closed & do the opposite action
            if (fridge_button.value == "Closed") {

                fridge_button.value = "Open";
                fridge_contents_img.src = "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_scale,w_400/v1/media/gmg/WXNBOBUZDNG25AJKMYPAQ6JFKQ?_a=AJFJtWIA"


                fridge_button.innerHTML = "Close" // Give the user to reclose the fridge
            }
            else if (fridge_button.value = "Open") {

                fridge_button.value = "Closed"
                fridge_contents_img.src = "https://www.beko.com/content/dam/united-states-us-aem/united-states-us-aemProductCatalog/product-images/7293749588-BFFD3626SS/7293749588-LO1-20200203-101559.png/jcr:content/renditions/cq5dam.web.1280.1280.png"



                fridge_button.innerHTML = "Open" // Give the user to reopen the fridge
            }
        }
        function clockStart() {
            setInterval(clockTick, 1000)
        }

        function clockTick() {
            // Function to display time by using a clock
            var currentDate = new Date();
            var currentHours = currentDate.getHours();
            var currentMinutes = currentDate.getMinutes();
            var currentSeconds = currentDate.getSeconds();
            var timeStr = currentHours + ":" + currentMinutes + ":" + currentSeconds;

            var output = document.getElementById("clock")
            output.innerHTML = "Time: " + timeStr;

        }

        function webswitch() {
            // Function that switches between youtube search and google search

            var websearch_img = document.getElementById("webimage");
            var websearch_link = document.getElementById("websearch");
            var web_button = document.getElementById("webswitchbutton")

            if (web_button.value == "google") {
                // Change image src to YT
         
                websearch_img.src = "https://www.adgully.com/img/800/202108/untitled-design-1_3.png.jpg";
                websearch_img.width = 300;
                websearch_img.height = 200;
                web_button.value = "youtube";
                web_button.innerHTML = "Switch to Web Search"

                websearch_link.href = "https://www.youtube.com";
               

                web_button.style.marginLeft = "25%";
            }
            else if (web_button.value == "youtube") {
                // Change image src to google
  
                websearch_img.src = "https://www.google.com/chrome/static/images/dark-mode/chrome-classic.png";
                websearch_img.width = 300;
                websearch_img.height = 200;
                web_button.value = "google";
                web_button.innerHTML = "Switch to TV"
                
                websearch_link.href = "https://www.google.com";
 

                web_button.style.marginLeft = "33%";
            }
        }

        function changePower(){
            var power_button = document.getElementById("onAndOffButton");

            if (power_button.value == "On") {
                power_button.value = "Off";
                power_button.innerHTML = "Power On"
                
                // Power off monitor operations except clock and button
                document.getElementById("temperature").style.display = "none";
                document.getElementById("webimage").style.display = "none";
                document.getElementById("websearch").style.display = "none";
                document.getElementById("webswitchbutton").style.display = "none";
            }
            else if (power_button.value == "Off") {
                power_button.value = "On"
                power_button.innerHTML = "Power Off"

                // Power on monitor operations
                document.getElementById("temperature").style.display = "block";
                document.getElementById("webimage").style.display = "block";
                document.getElementById("websearch").style.display = "block";
                document.getElementById("webswitchbutton").style.display = "block";
            }

        }
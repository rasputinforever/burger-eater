$("#x").on("click", function(event) {
    alert("Hello from click!")
    
});

// this ensures the doc is fully loaded
$(document).ready(function(){
    // actual on-click here
    $("#submitBtn").click(function(event) {
        console.log("Hello from Click!");
        // necessary for wonky reasons
        event.preventDefault();

        const newBurger = {
            name: $("#inputBurger").val(),
            devoured: false
        };

        $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
        }).then(
            function() {
                console.log("created new burger");
            }
        );
    });

});


console.log("Hello from public js")
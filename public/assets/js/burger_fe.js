// couldn't get away from using a public JS. Also, JQUERY's AJAX makes this routing easier.

// this ensures the doc is fully loaded
$(document).ready(function(){
    // actual on-click here for POST
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
                location.reload();
            }
        );
    });

    // update buttons here, by class, but references ID of clicked button/nearby thing
    $(".devBtn").click(function(event) {
        console.log(this.id)
    
        $.ajax(`/api/burgers/${this.id}`, {
            type: "PUT",
            data: this.id
            }).then(
                function() {
                    console.log("devoured burger");
                    location.reload();
                }
            );
    })
});

$(document).ready(function () {
    console.log("JQuery is loaded.");
    $(".devourButton").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        $.ajax("/put/burger/" + id, {
            type: "PUT",
            data: true,
        }).then(
            function() {
                // Reload the page to get the updated list
                console.log('eat!');
                location.reload();
            }
        );
    });
})
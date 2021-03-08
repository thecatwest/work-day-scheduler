$(document).ready(function() {

    // add date and time to hero
    $("#currentDay").text(moment().format("MMM DD YYYY HH:mm:ss a"));

    $(".saveBtn").on("click", function() {
        var task = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        
        console.log(this);

        localStorage.setItem(time, task);
    });

    // load stored data from localStorage
    $("#time-07 .description").val(localStorage.getItem("time-07"));
    $("#time-08 .description").val(localStorage.getItem("time-08"));
    $("#time-09 .description").val(localStorage.getItem("time-09"));
    $("#time-10 .description").val(localStorage.getItem("time-10"));
    $("#time-11 .description").val(localStorage.getItem("time-11"));
    $("#time-12 .description").val(localStorage.getItem("time-12"));
    $("#time-13 .description").val(localStorage.getItem("time-13"));
    $("#time-14 .description").val(localStorage.getItem("time-14"));
    $("#time-15 .description").val(localStorage.getItem("time-15"));
    $("#time-16 .description").val(localStorage.getItem("time-16"));
    $("#time-17 .description").val(localStorage.getItem("time-17"));
    $("#time-18 .description").val(localStorage.getItem("time-18"));
    $("#time-19 .description").val(localStorage.getItem("time-19"));
    $("#time-20 .description").val(localStorage.getItem("time-20"));
    $("#time-21 .description").val(localStorage.getItem("time-21"));

    var timeTrack = function() {
        var currentTime = moment().hour();

        // loop through time blocks
        $(".time-block").each(function() {
            var timeBlockHour = parseInt($(this).attr("id").split("time-")[1]);
            // console.log(timeBlockHour, currentTime);

            // check if time block is a past, present, or future time
            if (timeBlockHour < currentTime) {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");
            }
            else if (timeBlockHour === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            };
        });
    };
    timeTrack();

});

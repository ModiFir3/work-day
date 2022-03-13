//displaying timezone on the top of the page
$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));

//saves the values from the text area to the localstorage
$('.save-btn').on('click', function () {
    var text = $(this).siblings('.textinput').val();
    var time = $(this).siblings('.hour').attr('id');

    localStorage.setItem(time, text);
});
//fucntion to color code your events
function eventScheduler() {

    $('.textinput').each(function () {
        //variables to help determine what color an event should be + hour of current time
        var currentTime = moment().hour();
        var timeBlock = $(this).attr('id');
        //past
        if (timeBlock < currentTime) {
            $(this)
                .removeClass('bg-success')
                .removeClass('bg-danger')
                .addClass("bg-secondary");
        } //present
        else if (timeBlock == currentTime) {
            $(this)
                .removeClass('bg-secondary')
                .removeClass('bg-danger')
                .addClass("bg-danger");
        } //future
        else {
            $(this)
                .removeClass('bg-success')
                .removeClass('bg-danger')
                .addClass("bg-success");
        }
        console.log(timeBlock, currentTime)
    });
}


//retrives values from localstorage and post to html
$('#time-block1 #9').text(localStorage.getItem('hour1'));
$('#time-block2 #10').text(localStorage.getItem('hour2'));
$('#time-block3 #11').text(localStorage.getItem('hour3'));
$('#time-block4 #12').text(localStorage.getItem('hour4'));
$('#time-block5 #13').text(localStorage.getItem('hour5'));
$('#time-block6 #14').text(localStorage.getItem('hour6'));
$('#time-block7 #15').text(localStorage.getItem('hour7'));
$('#time-block8 #16').text(localStorage.getItem('hour8'));
$('#time-block9 #17').text(localStorage.getItem('hour9'));

eventScheduler();
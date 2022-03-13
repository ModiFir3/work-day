//displaying timezone on the top of the page
var centralTime = document.querySelector('#texas-time');
centralTime.textContent = moment().format('dddd, MMMM Do YYYY');

$('.save-btn').on('click', function () {
    var text = $(this).siblings('.textinput').val();
    var time = $(this).siblings('.hour').attr('id');

    localStorage.setItem(time, text);
})
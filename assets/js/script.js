//displaying timezone on the top of the page
var centralTime = document.querySelector('#texas-time');
centralTime.textContent = moment().format('dddd, MMMM Do YYYY');

//saves the values from the text area to the localstorage
$('.save-btn').on('click', function () {
    var text = $(this).siblings('.textinput').val();
    var time = $(this).siblings('.hour').attr('id');

    localStorage.setItem(time, text);
});

//retrives values from localstorage and post to html
$('#time-block1 #text1').text(localStorage.getItem('hour1'));
$('#time-block2 #text2').text(localStorage.getItem('hour2'));
$('#time-block3 #text3').text(localStorage.getItem('hour3'));
$('#time-block4 #text4').text(localStorage.getItem('hour4'));
$('#time-block5 #text5').text(localStorage.getItem('hour5'));
$('#time-block6 #text6').text(localStorage.getItem('hour6'));
$('#time-block7 #text7').text(localStorage.getItem('hour7'));
$('#time-block8 #text8').text(localStorage.getItem('hour8'));
$('#time-block9 #text9').text(localStorage.getItem('hour9'));

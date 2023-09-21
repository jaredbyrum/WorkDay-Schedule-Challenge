// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
  var today = dayjs();
  $('.saveBtn').click(function(){
    var description = $(this).siblings('.description').val();
    var hour = $(this).parent().attr('id');
    console.log(description);
    console.log(hour);
    localStorage.setItem(hour, description);
  })
  //added interval to update everysecond
  function updateTime(){
    var currentTime = dayjs().format('HH');
    $('.time-block').each(function(){
    var timeBlock = $(this).attr('id');
    if (timeBlock == currentTime){
      $(this).addClass('present');
    } else {
      $(this).removeClass('present');
    }
    if (timeBlock < currentTime){
      $(this).addClass('past');
    } else {
      $(this).removeClass('past');
    }
    if (timeBlock > currentTime){
      $(this).addClass('future');
    } else {
      $(this).removeClass('future');
    }
    }) 
    setTimeout(updateTime, 60 * 1000)
    }
  updateTime();
   
  $('.time-block').each(function(){
    var id = $(this).attr('id');
    $(this).children('.description').val(localStorage.getItem(id))
  })

  var date = setInterval(function(){
    $('#currentDay').text(dayjs().format('dddd, MMMM DD, HH:MM:ss'))
  }, 1000)
});

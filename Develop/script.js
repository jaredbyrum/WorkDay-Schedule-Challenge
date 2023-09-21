$(function () {
  //function to save to local storage on button click, updates properly
  $('.saveBtn').click(function(){
    var description = $(this).siblings('.description').val();
    var hour = $(this).parent().attr('id');
    console.log(description);
    console.log(hour);
    localStorage.setItem(hour, description);
  })
  //added interval to update every minute
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
  //prints saved values in localStorage to elements 
  $('.time-block').each(function(){
    var id = $(this).attr('id');
    $(this).children('.description').val(localStorage.getItem(id))
  })
  //displays current date and time
  var date = setInterval(function(){
    $('#currentDay').text(dayjs().format('dddd, MMMM DD'))
  }, 1000)
});

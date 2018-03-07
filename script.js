$('#exampleModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})



$("div[id^='myImg']").each(function(){
  
  var currentModal = $(this);
  
  //click next
  currentModal.find('.carousel-control-next').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='myImg']").nextAll("div[id^='myImg']").first().modal('show'); 
  });
  
  //click prev
  currentModal.find('.carousel-control-prev').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='myImg']").prevAll("div[id^='myImg']").first().modal('show'); 
  });

});
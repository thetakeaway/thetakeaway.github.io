$(document).ready(function(){

  var content;
  $.ajax({
  		type: 'GET',
  		url: "content.txt",
  		dataType: "text",
  		success: function(data){
  		    content = txt.split("\n");
  		    $("blockquote").text(content[0]);
      }
  });
  
  
})

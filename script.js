var container=document.getElementById("container");
var color=document.getElementById("color_cont");
var feet=document.getElementById("feet_cont");
var length=document.getElementById("length_cont")
function show_text(){
  if (container.style.display==="" || container.style.display==="none"){
      container.style.display="block";
      color.style.display="none";
      feet.style.display="none";
      length.style.display="none";
  }
   else if (container.style.display==="block"){
      container.style.display="none"
  }
}
function show_text2(){
   if (color.style.display==="" ||  color.style.display==="none"){
       color.style.display="block";
    feet.style.display="none";
    length.style.display="none";
    container.style.display="none";
   }
   else if (color.style.display==="block"){
    color.style.display="none"
}
 }
 function show_text3(){
  if (feet.style.display==="" ||  feet.style.display==="none"){
      feet.style.display="block";
      length.style.display="none";
      container.style.display="none";
      color.style.display="none";
  }
  else if (feet.style.display==="block"){
   feet.style.display="none"
}
}
function show_text4(){
  if (length.style.display==="" ||  length.style.display==="none"){
      length.style.display="block";
      container.style.display="none";
      color.style.display="none";
      feet.style.display="none";
  }
  else if (length.style.display==="block"){
   length.style.display="none"
}
}
 var layout_data_store = "a";
 var color_data_store = "a";
 var feet_data_store = "a";
 var length_data_store = "a";
 var image_name = "a_a_a_a"
$(".layout__checkbox").click(function() {
    layout_data_store = $(this).attr("data-param");
    get_imageName();
  });
  $(".color__check").click(function() {
    color_data_store = $(this).attr("data-param");
    get_imageName();
  });
  $(".feet__check").click(function() {
    feet_data_store = $(this).attr("data-param");
    get_imageName();
  });
  $(".length__checkbox").click(function() {
    length_data_store = $(this).attr("data-param");
    get_imageName();
  });
function get_imageName(){
    image_name = layout_data_store + "_" + color_data_store + "_" +  feet_data_store + "_" + length_data_store + ".png";
    $('.layout').attr('src',image_name);
}
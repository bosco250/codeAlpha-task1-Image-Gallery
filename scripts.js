var fullImgBox=document.getElementById('full-img-box');
var fullImg = document.getElementById("fullImg");
 function openFullImg(pic){
  fullImgBox.style.display='flex';
  fullImg.src=pic;
 }
 function closeFullImg(pic){
  fullImgBox.style.display="none";
  
 }
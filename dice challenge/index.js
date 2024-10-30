var randomnum1=math.floor(math.rondom()*6)+1;
var dicerandomimage="dice" +randomnum1+ ".png";
var randomimgsource="image/" +dicerandomimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimgsource);


var randomnum2=math.floor(math.rondom()*6)+1;
var dicerandomimage="dice" +randomnum2+ ".png";
var randomimgsource="image/" +dicerandomimage;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimgsource);


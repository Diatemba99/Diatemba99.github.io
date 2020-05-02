var myIndex = 0;
carousel();

function carousel() 
{
  var i;//indice de parcours
  var trans = document.getElementsByClassName('mySlides');
  var x = document.getElementsByClassName("mySlides");//prend les images
  for (i = 0; i < x.length; i++) // cree une boucle infinie
   {
   
    x[i].style.display = "none";  

  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1} 

  x[myIndex-1].style.display = "block"; // 
  
  setTimeout(carousel, 5000); // Change chaque 5 secondes
}
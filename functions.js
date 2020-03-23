function filterStars(array){

  for(let i = array.length - 1; i >= 0; i --){

      let starX = array[i].getPos().x;
      let starY = array[i].getPos().y;
      let starRadius = array[i].getRadius();
      let distToSun = dist(sun.x,sun.y,starX,starY);
      let starOut = array[i].isOutofScreen();
    for(let h = 0; h < planets.length; h ++){

      let distToPlanet = dist(planets[h].getPos().x,planets[h].getPos().y,starX,starY);

      if((distToPlanet  -(starRadius+ planets[h].getRadius())) <= 5){
        array.splice(i,1);

      }

    }
   if(starOut|| distToSun < 45){
      array.splice(i,1);

    }


  }

}

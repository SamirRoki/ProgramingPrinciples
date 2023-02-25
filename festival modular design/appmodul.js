(function(data,ui){
    var createMovieButton = document.getElementById('create-movie');
    var createProgramButton = document.getElementById('create-program');
    var addMovieToProgram = document.getElementById('add-movie');

    function addMovie(){
      
   var formData = ui.collectMovieData();
  
  var isValid = data.isValidMovie(formData.title, formData.length, formData.genre)
  if (!isValid){
    ui.setMovieError("Invalid input!")
    return;
  }
  var movie = data.createMovie(formData.title, formData.length, formData.genre)
  console.log(movie);
  var index = data.addMovieToFestival(movie)
  console.log(index);
  ui.updateDom(movie,index)
  ui.clearInput()
    }

    function addProgram(){
      
      var dateData = ui.colectDateData();
      var isValid = data.isValidProgram(dateData.date)
  if (!isValid){
    ui.setDateError("Invalid input!")
    return;
  }
      var program = data.createProgram(dateData)
      var index = data.addProgramToFestival(program)
      console.log(dateData);
      var isValidP =data.isValidProgram(dateData.date)
      if (!isValidP){
        ui.setMovieError("Invalid input!")
        return;
         }
      ui.updateProgramDom(dateData,index);
      
       
      }
      
    
      //sve isto kao za movie
      // finalAdd da procitam inpute (muvie,program) sa indexima
      //listofallmovi je mo

     
  
  
  function finalAdd(){
   
   var formData = ui.collectMovieAndProjectOption();
   var createdProgram = data.addMovieToProgram(formData.movieIndex, formData.programIndex);
   if(!createdProgram){
    ui.setMovieError = 'MOvie and Program are required!';
    return;
   }
    ui.updateProgramItem(createdProgram, formData.programIndex);
   


   
}


    createMovieButton.addEventListener ('click', addMovie);
    createProgramButton.addEventListener('click', addProgram);
    addMovieToProgram.addEventListener('click', finalAdd);
    
})(dataModule,uiModule);
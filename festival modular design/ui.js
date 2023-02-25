var uiModule = (function(){
 
    
    //Drugo kreiramo promenljive za inpute
    
    var inputTitleElement = document.getElementById('title');
    var inputLengthElement = document.getElementById('length');
    var inputGenreElement = document.getElementById('genre');
    var movieErrorParagraph = document.getElementById('movie-error');
    var movieList = document.getElementById('movie-list');
    
    // iz druge forme html elementi
    var inputDateElement = document.getElementById('date');
    var programErrorParagraph = document.getElementById('program-error');
    var programListElement = document.getElementById('program-list');
    
    var movieToProgramElementError = document.querySelector('.addMovieToProgramError');
    var finalAddtoList = document.querySelector('.finalAdd');
    
    
    
    var selectMovie = document.getElementById('movie-select');
    var selectProgram = document.getElementById('program-select');

    function collectMovieData (){
        var titleValue = inputTitleElement.value;
        var lengthValue = inputLengthElement.value;
        var genreValue = inputGenreElement.value;
        return {
            title: titleValue,
            length: lengthValue,
            genre: genreValue,
        }

    }
 function setMovieError(){
        setMovieError.textContent =  Error;
    
     }
    function updateDom (createMovie,index){
        var movieLiItem = document.createElement('li');
        movieLiItem.textContent = createMovie.getData();
        movieList.appendChild(movieLiItem);

        
         var movieOption = document.createElement('option');
         movieOption.textContent = createMovie.title;
         movieOption.setAttribute('value', index);
         selectMovie.appendChild(movieOption);

    }
    function clearInput(){
        inputTitleElement.value = '';
        inputLengthElement.value = '';
        inputGenreElement.value = '';
    }
    function colectDateData(){
        var dateValue = inputDateElement.value;
        return {
          date: dateValue
          }
      }

      function setDateError(){
        setDateError.textContent = Error;
      }
      function updateProgramDom(program, index){
        var programlist = document.createElement('li');
        programlist.setAttribute('id','program-item' + index)
        programlist.textContent = program;
        programListElement.appendChild(programlist);

        var programOption = document.createElement('option');
        programOption.textContent = program;
        programOption.setAttribute('value',index);
        selectProgram.appendChild(programOption);
        

      }
      function clearProgramInput(){
        datInputElement.value = '';
        programErrorParagraph.textContent = '';
      }

      function collectMovieAndProjectOption (){
        return{
            selectMovie: selectMovie.value,
            selectProgram: selectProgram.vale,
            
            

        }
      }


      function updateProgramItem (program,index){
        var programListElement = document.querySelector('#program-item' + index);
        programListElement.textContent = program.getData();
      };


      

      
      return {
        collectMovieData: collectMovieData,
        setMovieError: setMovieError,
        updateDom: updateDom,
        clearInput: clearInput,
        colectDateData: colectDateData,
        setDateError: setDateError, 
        updateProgramDom: updateProgramDom,
        collectMovieAndProjectOption: collectMovieAndProjectOption,
        updateProgramItem: updateProgramItem,
        clearProgramInput: clearProgramInput,
        



      }
    
     
      


})();
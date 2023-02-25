var dataModule =(function(){
    function createFestival(){
        return new Festival
    }
    var festival = createFestival();

    function Festival (){
        this.listOfAllMovies = [];
        this.listOfPrograms = [];
    }
    function Movie(title, length, genre){
        this.title = title;
        this.length = length;
        this.genre = genre;
    
    }
    
    Movie.prototype.getGenre = function(){
        var firstLetter = this.genre[0].toUpperCase();
        var lastletter = this.genre[this.genre.length-1].toUpperCase();
    
        return firstLetter + lastletter;
    }
    
    Movie.prototype.getData = function(){
        //vraca nam sve podatke o filmu i koristimo kasnije u controller
        return this.title + ', ' + this.length + ' min, ' + this.getGenre();
    }
    function createMovie (title,length,genre){
        var movie = new Movie (title,length,genre);
        return movie;
    }

    function isValidMovie (title,length,genre){
        if(!title || !length || !genre){
            return false;
        } return true;
    }
    
    
    function Program (date){
        this.date = new Date (date);
        this.listOfMovies = [];
    }
    
    Program.prototype.lengthOfAllMovies = function(){
            return this.listOfMovies.length;
            
             
    
        }
        Program.prototype.addMovie = function (movie){
            return festival.listOfAllMovies.push(movie);
        }
     
    Program.prototype.getTotalMovies = function(){
        return this.listOfMovies.length;
    }
    Program.prototype.listOfAllMovies = function(){
        var total = 0;
        this.listOfMovies.forEach(function(movie){
            total += + this.listOfMovies
        })
        return total;
    }
    
    Program.prototype.getData = function(){
        var day = this.date.getDate();
        var month = this.date.getMonth() + 1;
        var year = this.date.getFullYear();
    
        var date = day + '/' + month + '/' + year;
        var resultDateString = date;
        console.log(resultDateString);
    
        // resultDateString =  this.getTotalMovies() + ' movie duration ' + 
        // this.lengthOfAllMovies() + ' min';
        return resultDateString;
    }
     
     
     function createProgram(date){
        return new Program(date);
    }
     function isValidProgram(date){
        if(!date){
            return false
        }return true
    }
     function addMovieToProgram(movieIndex,programIndex){
        var movie = festival.listOfAllMovies [movieIndex];
        var program = festival.listOfPrograms [programIndex];

        if(!movie || !program){
            return false
        }
        program.addMovie(movie);
       

     }
     function addMovieToFestival(movie){
        return festival.listOfAllMovies.push(movie) -1;
         }
         function addMovieAndProgramToFestival(movieIndex, programIndex) {
            var movie = festival.movieList[movieIndex];
            var program = festival.programsList[programIndex];
            festival.movieList.push(movie);
            var programLi = document.querySelector("#program-item-" + programIndex);
            programLi.textContent = program.getData();
        }
     

    
    function addProgramToFestival(program){
        return festival.listOfPrograms.push(program) -1;
    }

    return {
             createFestival: createFestival,
             createMovie : createMovie,
             isValidMovie : isValidMovie,
             createProgram : createProgram,
             isValidProgram : isValidProgram,
             addMovieToProgram : addMovieToProgram,
             addMovieToFestival: addMovieToFestival,
             addProgramToFestival: addProgramToFestival,
             addMovieAndProgramToFestival: addMovieAndProgramToFestival,




    }

})();
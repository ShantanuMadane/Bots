function MessageHandler(context, event) {
    var movieName;
    var senderobj = event.senderobj;
    var channel = senderobj.channeltype;
    var message = event.message.toLowerCase().trim();
    if ((channel === 'telegram' && message === '/start')) {
        context.simpledb.roomleveldata["user_state_" + event.sender] = "0";
        context.sendResponse("Hi, I am the Movie trivia bot\n\nWant to get the latest information on your favourite movies, tv shows or actors? just ask me by typing...\n\n1. \"Movie <movie name>\" to get info about the movie\n\n2. \"Tv <show name>\" to get all the buzz of your favourite shows\n\n3. \"Actor <actor name>\" to know all about your favourite actor\n\n4. \"Like\" will redirect you to a similar movie\n\n\"new releases\" will give you information about the latest movies playing at a theatre near you.");
    } else if ((channel === 'kik' && message === 'startchattingevent')) {
        var hasRead = context.simpledb.roomleveldata["kik_" + event.sender];
        if (!hasRead) {
            context.simpledb.roomleveldata["kik_" + event.sender] = true;
            context.simpledb.roomleveldata["user_state_" + event.sender] = "0";
            context.sendResponse("Hi, I am the Movie trivia bot\n\nWant to get the latest information on your favourite movies, tv shows or actors? just ask me by typing...\n\n1. \"Movie <movie name>\" to get info about the movie\n\n2. \"Tv <show name>\" to get all the buzz of your favourite shows\n\n3. \"Actor <actor name>\" to know all about your favourite actor\n\n4. \"Like\" will redirect you to a similar movie\n\n\"new releases\" will give you information about the latest movies playing at a theatre near you.");
            context.simpledb.saveData();
        }
    } else if (context.simpledb.roomleveldata["user_state_" + event.sender] == "1") {
        context.simpledb.roomleveldata["user_option_" + event.sender] = "like";
        movieName = event.message.toLowerCase();
        context.simpledb.roomleveldata["movie_name" + event.sender] = movieName;
        getMovieDetails(context, event, movieName);
    } else if (context.simpledb.roomleveldata["user_state_" + event.sender] == "2") {
        if (event.message.toLowerCase() == "yes") {
            context.simpledb.roomleveldata["user_state_" + event.sender] = "0";
            context.simpledb.roomleveldata["user_option_" + event.sender] = "similar";
            movieName = context.simpledb.roomleveldata["movie_name" + event.sender];
            getMovieDetails(context, event, movieName);
        } else if (event.message.toLowerCase() == "no") {
            context.simpledb.roomleveldata["user_state_" + event.sender] = "0";
            context.sendResponse("It's ok, just ping me when you need me.");
        } else {
            context.sendResponse("Sorry I didn't get you, please say yes or no.");
        }
    } else if (event.message.toLowerCase().trim() == "hi") {
        context.sendResponse("Want to get the latest information on your favourite movies, tv shows or actors? just ask me by typing...\n\n1. \"Movie <movie name>\" to get info about the movie\n\n2. \"Tv <show name>\" to get all the buzz of your favourite shows\n\n3. \"Actor <actor name>\" to know all about your favourite actor\n\n4. \"Like\" will redirect you to a similar movie\n\n\"new releases\" will give you information about the latest movies playing at a theatre near you.");
    } else if (event.message == "1") {
        context.simpledb.roomleveldata["movie_cast_" + event.sender] = "Ben Affleck, Henry Cavill, Amy Adams, Jesse Eisenberg, Diane Lane, Laurence Fishburne, Jeremy Irons, Holly Hunter, Gal Gadot";
        context.simpledb.roomleveldata["movie_trailer_" + event.sender] = "tt2975590";
        context.sendResponse("Following his titanic struggle against General Zod, Metropolis has been razed to the ground and Superman is the most controversial figure in the world. While for many he is still an emblem of hope, a growing number of people consider him a threat to humanity, seeking justice for the chaos he has brought to Earth. As far as Bruce Wayne is concerned, Superman is clearly a danger to society. He fears for the future of the world with such a reckless power left ungoverned, and so he dons his mask and cape to right Superman's wrongs. The rivalry between them is furious, fueled by bitterness and vengeance, and nothing can dissuade them from waging this war. However, a dark new threat arises in the form of a third man: one who has a power greater than either of them to endanger the world and cause total destruction!" + "\n\nTo explore the cast type \"cast\"\nTo get a sneak peak type \"trailer\"");
    } else if (event.message == "2") {
        context.simpledb.roomleveldata["movie_cast_" + event.sender] = "Tom Holland, Scarlett Johansson, Elizabeth Olsen, Chris Evans, Robert Downey Jr., Sebastian Stan, Paul Rudd, Jeremy Renner, Emily VanCamp, Paul Bettany, Gwyneth Paltrow";
        context.simpledb.roomleveldata["movie_trailer_" + event.sender] = "tt3498820";
        context.sendResponse("After another incident involving the Avengers results in collateral damage, political pressure mounts to install a system of accountability, headed by a governing body to oversee and direct the team. The new status quo fractures the Avengers, resulting in two camps, one led by Steve Rogers and his desire for the Avengers to remain free to defend humanity without government interference, and the other following Tony Stark's surprising decision to support government oversight and accountability." + "\n\nTo explore the cast type \"cast\"\nTo get a sneak peak type \"trailer\"");
    } else if (event.message == "3") {
        context.simpledb.roomleveldata["movie_cast_" + event.sender] = "Ryan Reynolds, Karan Soni, Ed Skrein, Michael Benyaer, Stefan Kapicic, Brianna Hildebrand";
        context.simpledb.roomleveldata["movie_trailer_" + event.sender] = "tt1431045";
        context.sendResponse("This is the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life." + "\n\nTo explore the cast type \"cast\"\nTo get a sneak peak type \"trailer\"");
    } else if (event.message == "4") {
        context.simpledb.roomleveldata["movie_cast_" + event.sender] = "Ben Affleck, Margot Robbie, Cara Delevingne, Joel Kinnaman, Jared Leto, Will Smith";
        context.simpledb.roomleveldata["movie_trailer_" + event.sender] = "tt1386697";
        context.sendResponse("A secret government agency run by Amanda Waller, named A.R.G.U.S creates a task force comprising super villains, the \"Suicide Squad\". They are assigned to execute dangerous tasks in exchange for shorter prison sentences." + "\n\nTo explore the cast type \"cast\"\nTo get a sneak peak type \"trailer\"");
    } else if (event.message == "5") {
        context.simpledb.roomleveldata["movie_cast_" + event.sender] = "John Goodman, Mary Elizabeth Winstead, John Gallagher Jr., Douglas M. Griffin, Suzanne Cryer, Bradley Cooper, Sumalee Montano, Frank Mottek";
        context.simpledb.roomleveldata["movie_trailer_" + event.sender] = "tt1179933";
        context.sendResponse("Soon after leaving her fiancé Michelle is involved in a car accident. She awakens to find herself sharing an underground bunker with Howard and Emmett. Has she been saved from an apocalyptical event as Howard & Emmett tell her or are there other motives for her being held against her will?" + "\n\nTo explore the cast type \"cast\"\nTo get a sneak peak type \"trailer\"");
    } else if (event.message == "6") {
        context.simpledb.roomleveldata["movie_cast_" + event.sender] = "Ginnifer Goodwin, Jason Bateman, Idris Elba, Jenny Slate, Nate Torrence, Bonnie Hunt, Don Lake, Tommy Chong, J.K. Simmons, Octavia Spencer, Alan Tudyk, Shakira";
        context.simpledb.roomleveldata["movie_trailer_" + event.sender] = "tt2948356";
        context.sendResponse("From the largest elephant to the smallest shrew, the city of Zootopia is a mammal metropolis where various animals live and thrive. When Judy Hopps becomes the first rabbit to join the police force, she quickly learns how tough it is to enforce the law. Determined to prove herself, Judy jumps at the opportunity to solve a mysterious case. Unfortunately, that means working with Nick Wilde, a wily fox who makes her job even harder." + "\n\nTo explore the cast type \"cast\"\nTo get a sneak peak type \"trailer\"");
    } else if (event.message == "7") {
        context.simpledb.roomleveldata["movie_cast_" + event.sender] = "Nia Vardalos, John Corbett, Michael Constantine, Lainie Kazan, Andrea Martin, Gia Carides, Joey Fatone, Elena Kampouris";
        context.simpledb.roomleveldata["movie_trailer_" + event.sender] = "tt3760922";
        context.sendResponse("Still working in her parents' Greek restaurant, Toula Portokalos's daughter Paris is growing up. She is getting ready to graduate high school and Toula and Ian are experiencing marital issues. When Toula's parents find out they were never officially married, another wedding is in the works. Can this big, fat, Greek event help to bring the family together?" + "\n\nTo explore the cast type \"cast\"\nTo get a sneak peak type \"trailer\"");
    } else if (event.message == "8") {
        context.simpledb.roomleveldata["movie_cast_" + event.sender] = "Neel Sethi, Bill Murray, Ben Kingsley, Idris Elba, Lupita Nyong'o, Scarlett Johansson, Giancarlo Esposito, Christopher Walken, Garry Shandling";
        context.simpledb.roomleveldata["movie_trailer_" + event.sender] = "tt3040964";
        context.sendResponse("An orphan boy is raised in the jungle with the help of a pack of wolves, a bear, and a black panther." + "\n\nTo explore the cast type \"cast\"\nTo get a sneak peak type \"trailer\"");
    } else if (event.message == "9") {
        context.simpledb.roomleveldata["movie_cast_" + event.sender] = "Jennifer Lawrence, Sophie Turner, Olivia Munn, Oscar Isaac, Michael Fassbender, Rose Byrne, Nicholas Hoult, James McAvoy, Evan Peters";
        context.simpledb.roomleveldata["movie_trailer_" + event.sender] = "tt3385516";
        context.sendResponse("Since the dawn of civilization, he was worshiped as a god. Apocalypse, the first and most powerful mutant from Marvel's X-Men universe, amassed the powers of many other mutants, becoming immortal and invincible. Upon awakening after thousands of years, he is disillusioned with the world as he finds it and recruits a team of powerful mutants, including a disheartened Magneto, to cleanse mankind and create a new world order, over which he will reign. As the fate of the Earth hangs in the balance, Raven with the help of Professor X must lead a team of young X-Men to stop their greatest nemesis and save mankind from complete destruction." + "\n\nTo explore the cast type \"cast\"\nTo get a sneak peak type \"trailer\"");
    } else if (event.message == "10") {
        context.simpledb.roomleveldata["movie_cast_" + event.sender] = "Shailene Woodley, Theo James, Naomi Watts, Octavia Spencer, Jeff Daniels, Zoë Kravitz, Ansel Elgort, Miles Teller, Keiynan Lonsdale";
        context.simpledb.roomleveldata["movie_trailer_" + event.sender] = "tt3410834";
        context.sendResponse("After the earth-shattering revelations of INSURGENT, Tris must escape with Four and go beyond the wall enclosing Chicago. For the first time ever, they will leave the only city and family they have ever known. Once outside, old discoveries are quickly rendered meaningless with the revelation of shocking new truths. Tris and Four must quickly decide who they can trust as a ruthless battle ignites beyond the walls of Chicago which threatens all of humanity. In order to survive, Tris will be forced to make impossible choices about courage, allegiance, sacrifice and love." + "\n\nTo explore the cast type \"cast\"\nTo get a sneak peak type \"trailer\"");
    } else if (event.message.toLowerCase() == "trailer") {
        var trailer = context.simpledb.roomleveldata["movie_trailer_" + event.sender];
        context.sendResponse("You can watch the trailer here :\n" + "http://www.imdb.com/title/" + trailer);
    } else if (event.message.toLowerCase() == "cast") {
        var cast = context.simpledb.roomleveldata["movie_cast_" + event.sender];
        context.sendResponse("Cast :" + cast);
    } else if (event.message.toLowerCase() == "filmography") {
        var filmography = context.simpledb.roomleveldata["movie_filmography_" + event.sender];
        context.sendResponse(filmography);
    } else if (event.message.toLowerCase() == "help") {
        context.sendResponse("Hi, I am the Movie trivia bot.\n\nWant to get the latest information on your favourite movies, tv shows or actors? just ask me by typing...\n\n1. \"Movie <movie name>\" to get info about the movie\n\n2. \"Tv <show name>\" to get all the buzz of your favourite shows\n\n3. \"Actor <actor name>\" to know all about your favourite actor\n\n4. \"Like\" will redirect you to a similar movie\n\n\"new releases\" will give you information about the latest movies playing at a theatre near you.");
    } else if (event.message.toLowerCase() == "new releases") {
        context.sendResponse("1. Batman v Superman: Dawn of Justice (2016)\n2. Captain America: Civil War (2016)\n3. Deadpool (2016)\n4. Suicide Squad (2016)\n5. 10 Cloverfield Lane (2016)\n6. Zootopia (2016)\n7. My Big Fat Greek Wedding 2 (2016)\n8. The Jungle Book (2016)\n9. X-Men: Apocalypse (2016)\n10. Allegiant (2016)\n\nType in the number tagged with your movie to know more");
    } else if (event.message.toLowerCase().indexOf("movie ") != -1) {
        context.simpledb.roomleveldata["user_option_" + event.sender] = "movies";
        movieName = event.message.toLowerCase().split("movie ")[1].trim();
        getMovieDetails(context, event, movieName);
    } else if (event.message.toLowerCase().indexOf("tv ") != -1) {
        context.simpledb.roomleveldata["user_option_" + event.sender] = "movies";
        movieName = event.message.toLowerCase().split("tv ")[1].trim();
        getMovieDetails(context, event, movieName);
    } else if (event.message.toLowerCase().indexOf("actor ") != -1) {
        var actorName = event.message.toLowerCase().split("actor ")[1].trim();
        getActorDetails(context, event, actorName);
    } else if (event.message.toLowerCase() == "like") {
        context.simpledb.roomleveldata["user_state_" + event.sender] = "1";
        context.sendResponse("Which movie do you like?");
    } else {
        context.sendResponse("I am sorry I didn't get you, type\n\n1. \"Movie <movie name>\" to get info about the movie\n\n2. \"Tv <show name>\" to get all the buzz of your favourite shows\n\n3. \"Actor <actor name>\" to know all about your favourite actor\n\n4. \"Like\" will redirect you to a similar movie\n\n\"new releases\" will give you information about the latest movies playing at a theatre near you.");
    }
}

function EventHandler(context, event) {
    var hasRead = context.simpledb.roomleveldata["kik_" + event.sender];
    // if (!hasRead) {
    //     context.simpledb.roomleveldata["kik_" + event.sender] = true;
    //     context.simpledb.roomleveldata["user_state_" + event.sender] = "0";
    //     context.sendResponse("Hi, I am the Movie trivia bot\n\nWant to get the latest information on your favourite movies, tv shows or actors? just ask me by typing...\n\n1. \"Movie <movie name>\" to get info about the movie\n\n2. \"Tv <show name>\" to get all the buzz of your favourite shows\n\n3. \"Actor <actor name>\" to know all about your favourite actor\n\n4. \"Like\" will redirect you to a similar movie\n\n\"new releases\" will give you information about the latest movies playing at a theatre near you.");
    //     context.simpledb.saveData();
    // }
    if(!(event.contextobj.channeltype=="kik")){
        context.sendResponse("Hi, I am the Movie trivia bot\n\nWant to get the latest information on your favourite movies, tv shows or actors? just ask me by typing...\n\n1. \"Movie <movie name>\" to get info about the movie\n\n2. \"Tv <show name>\" to get all the buzz of your favourite shows\n\n3. \"Actor <actor name>\" to know all about your favourite actor\n\n4. \"Like\" will redirect you to a similar movie\n\n\"new releases\" will give you information about the latest movies playing at a theatre near you.");
    }   
     else if (!hasRead) {
        context.simpledb.roomleveldata["kik_" + event.sender] = true;
        context.simpledb.roomleveldata["user_state_" + event.sender] = "0";
        context.sendResponse("Hi, I am the Movie trivia bot\n\nWant to get the latest information on your favourite movies, tv shows or actors? just ask me by typing...\n\n1. \"Movie <movie name>\" to get info about the movie\n\n2. \"Tv <show name>\" to get all the buzz of your favourite shows\n\n3. \"Actor <actor name>\" to know all about your favourite actor\n\n4. \"Like\" will redirect you to a similar movie\n\n\"new releases\" will give you information about the latest movies playing at a theatre near you.");
        context.simpledb.saveData();
    }
}


function getMovieDetails(context, event, name) {
    name = encodeURIComponent(name);
    context.simplehttp.makeGet("http://www.omdbapi.com/?t=" + name + "&y=&plot=full&r=json");
}

function getActorDetails(context, event, name) {
    name = encodeURIComponent(name);
    context.simplehttp.makeGet("http://www.myapifilms.com/imdb/idIMDB?name=" + name + "&token=f6c92e51-18a5-4455-af31-678fd5597c54&format=json&language=en-us&filmography=1&exactFilter=1&limit=1&bornDied=0&starSign=0&uniqueName=0&actorActress=1&actorTrivia=0&actorPhotos=0&actorVideos=0&salary=0&spouses=0&tradeMark=0&personalQuotes=0&starMeter=0&fullSize=0");
}


function HttpResponseHandler(context, event) {
    var resp = JSON.parse(event.getresp);
    var option = context.simpledb.roomleveldata["user_option_" + event.sender];
    if (event.geturl.indexOf("omdbapi") != -1 && option == "like") {
        if (resp.Response == "False") {
            context.sendResponse("Sorry I didn't get you, kindly type the movie name again");
        } else {
            context.simpledb.roomleveldata["user_state_" + event.sender] = "2";
            context.sendResponse("Would you like me to suggest a similar movie?");
        }
    } else if (event.geturl.indexOf("omdbapi") != -1 && option == "similar") {
        if (resp.Response == "False") {
            context.sendResponse("Sorry i was not able to find any similar movie for you.");
        } else {
            context.simpledb.roomleveldata["movie_cast_" + event.sender] = resp.Actors;
            context.simpledb.roomleveldata["movie_trailer_" + event.sender] = resp.imdbID;
            context.simpledb.roomleveldata["movie_genre_" + event.sender] = resp.Genre;
            var genre = resp.Genre.split(",");
            var genre_id = "";
            var i;
            for (i = 0; i < genre.length; i++) {
                var id = getGenreId(context, event, genre[i].trim());
                genre_id += id + ",";
            }
            genre_id = genre_id.replace(/,$/, "") + "";
            genre_id = encodeURIComponent(genre_id);
            context.simplehttp.makeGet("http://api.themoviedb.org/3/discover/movie?api_key=c4ea25c882b456dc9cb481b2584d76b1&with_genres=" + genre_id);
        }
    } else if (event.geturl.indexOf("omdbapi") != -1 && option == "movies") {
        if (resp.Response == "False") {
            context.sendResponse("Sorry I didn't get you, kindly type the movie name again.");
        } else {
            context.simpledb.roomleveldata["movie_cast_" + event.sender] = resp.Actors;
            context.simpledb.roomleveldata["movie_trailer_" + event.sender] = resp.imdbID;
            context.sendResponse(resp.Title + " (" + resp.Year + ")" + "\n" + resp.Plot + "\n\nTo explore the cast type \"cast\"\nTo get a sneak peak type \"trailer\"");
        }
    } else if (event.geturl.indexOf("myapifilms") != -1) {
        if (resp.error) {
            context.sendResponse("Sorry i didn't get you, can you please type the actor name again.");
        } else {
            var movie1 = resp.data.names[0].filmographies[0].filmography[0].title + " (" + resp.data.names[0].filmographies[0].filmography[0].year.trim() + ")";
            var movie2 = resp.data.names[0].filmographies[0].filmography[1].title + " (" + resp.data.names[0].filmographies[0].filmography[1].year.trim() + ")";
            var movie3 = resp.data.names[0].filmographies[0].filmography[2].title + " (" + resp.data.names[0].filmographies[0].filmography[2].year.trim() + ")";
            var movie4 = resp.data.names[0].filmographies[0].filmography[3].title + " (" + resp.data.names[0].filmographies[0].filmography[3].year.trim() + ")";
            var movie5 = resp.data.names[0].filmographies[0].filmography[4].title + " (" + resp.data.names[0].filmographies[0].filmography[4].year.trim() + ")";
            context.simpledb.roomleveldata["movie_filmography_" + event.sender] = movie1 + "\n" + movie2 + "\n" + movie3 + "\n" + movie4 + "\n" + movie5;
            var bio = resp.data.names[0].bio.split(".");
            context.sendResponse(bio[0] + "." + bio[1] + "." + bio[2] + "." + bio[3] + "." + bio[4] + "." + "\n\nYou can type \"filmography\" to learn more.");
        }
    } else if (event.geturl.indexOf("themoviedb") != -1) {
        if (resp.total_results == "0") {
            context.sendResponse("Sorry I didn't found any similar movie.");
        } else {
            movieName = context.simpledb.roomleveldata["movie_name" + event.sender];
            if (movieName == resp.results[0].title.toLowerCase()) {
                context.sendResponse("If you liked " + movieName + " you'll also like " + resp.results[1].title)
            } else {
                context.sendResponse("If you liked " + movieName + " you'll also like " + resp.results[0].title)
            }
        }
    }
}

function getGenreId(context, event, genre) {
    var id = 99;
    if (genre == "Action") {
        id = 28;
    } else if (genre == "Adventure") {
        id = 12;
    } else if (genre == "Animation") {
        id = 16;
    } else if (genre == "Comedy") {
        id = 35;
    } else if (genre == "Crime") {
        id = 80;
    } else if (genre == "Documentary") {
        id = 99;
    } else if (genre == "Drama") {
        id = 18;
    } else if (genre == "Family") {
        id = 10751;
    } else if (genre == "Fantasy") {
        id = 14;
    } else if (genre == "Foreign") {
        id = 10769;
    } else if (genre == "History") {
        id = 36;
    } else if (genre == "Horror") {
        id = 27;
    } else if (genre == "Music") {
        id = 10402;
    } else if (genre == "Mystery") {
        id = 9648;
    } else if (genre == "Romance") {
        id = 10749;
    } else if (genre == "Science Fiction") {
        id = 878;
    } else if (genre == "TV Movie") {
        id = 10770;
    } else if (genre == "Thriller") {
        id = 53;
    } else if (genre == "War") {
        id = 10752;
    } else if (genre == "Western") {
        id = 37;
    } else if (genre == "Action & Adventure") {
        id = 10759;
    } else if (genre == "Education") {
        id = 10761;
    } else if (genre == "Kids") {
        id = 10762;
    } else if (genre == "News") {
        id = 10763;
    } else if (genre == "Reality") {
        id = 10764;
    } else if (genre == "Sci-Fi & Fantasy") {
        id = 10765;
    } else if (genre == "Soap") {
        id = 10766;
    } else if (genre == "Talk") {
        id = 10767;
    } else if (genre == "War & Politics") {
        id = 10768;
    }
    return id;
}

function DbGetHandler(context, event) {}

function DbPutHandler(context, event) {}


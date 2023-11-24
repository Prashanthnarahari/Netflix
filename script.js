let movies=[
    {
        name:"Avengers Infinity War",
        rating: 8.7,
        poster: "https://rukminim2.flixcart.com/image/850/1000/km9ht3k0/poster/r/n/u/medium-avengers-infinity-war-framed-poster-for-room-office-10-original-imagf7e9hcgdggsu.jpeg?q=20",
        description:"The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones"
    
    },
    {
        name:"RRR",
        rating: 7.8,
        poster: "https://www.themoviedb.org/t/p/original/kdO4JtO5DnIMyLymQv8C8Ol1CzA.jpg",
        description:"A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rulers."
    
    },
    {
        name:"Premam",
        rating: 8.1,
        poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/premam-(telugu)-et00040912-17-04-2017-17-55-23.jpg",
        description:"A young man falls in love with different women at various stages of his life and with each experience, he bears the pain and emotions of separation."
    },
    {
        name:"Bro",
        rating: 9.1,
        poster: "https://assetscdn1.paytm.com/images/cinema/BRO-min-0a220100-fd13-11ed-a58c-1b525140019f.jpg",
        description:"After meeting with a fatal accident, a young man bargains with a god for more time on Earth. Soon, he learns the importance of humility and family."
    },
    {
        name:"Athadu",
        rating: 8.1,
        poster: "https://m.media-amazon.com/images/S/pv-target-images/6fa078082edcd353ce784e794889184146921c184cd2774489b1df652bedca3b.jpg",
        description:"A professional killer is hired to fake the assassination of a politician. However, when the politician is killed and he is framed for his murder, he takes on a dead man's identity to escape the law."
    },
    {
        name:"Vikram",
        rating: 8.1,
        poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/6921/1296921-h-d4a8210b752a",
        description:"A special agent investigates a murder committed by a masked group of serial killers. However, a tangled maze of clues soon leads him to the drug kingpin of Chennai."
    },
    {
        name:"Leo",
        poster:"https://m.media-amazon.com/images/I/71c2cxxNQIL._AC_UF894,1000_QL80_.jpg",
        rating:8.7
    },
    {
        name:"Avengers Endgame",
        poster:"https://i.etsystatic.com/13367669/r/il/db21fd/2198543930/il_570xN.2198543930_4qne.jpg",
        rating:8.7
    }
];

function searchMovie(){
   let movieName= document.getElementById('search').value;
    if(movieName !=="")
    {
       let result= movies.filter(function(movie)
        {
            return movie.name.toUpperCase().includes(movieName.toUpperCase());
        })
        displayMovies(result);
    }
    else{
        displayMovies(movies);
    }
}

function displayMovies(data)
{
    //.....
    // same as above is below


    document.getElementById("movies").innerHTML="";

    let htmlString=``;

    for(let i=0;i<data.length;i++)
    {
        
        htmlString=htmlString+`
        <div class="movie">
                <div class="overlay">
                    <div class="video">
    
                    </div>
                    <div class="details">
                        <h1>${data[i].name}</h1>
                        <h2>IMDB : ${data[i].rating}</h2>
                        <p>Pawan Kalyan, Kethika sharma</p>
                    </div>
    
                </div>
                <img class="poster" src="${data[i].poster}" alt="Bro Movie Poster">
            </div>
        
        `
    }


    console.log(htmlString);

    document.getElementById("movies").innerHTML=htmlString;

}
displayMovies(movies);













// <div class="one"></div>
// let movie = document.createElement("div");
// movie.classList.add("one")


 // let movieDIV=document.createElement("div");
    // movieDIV.classList.add("movie");


    // let overlayDIV=document.createElement("div");
    // overlayDIV.classList.add("overlay");

    // movieDIV.appendChild(overlayDIV);

    // console.log(movieDIV);
     

    
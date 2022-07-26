const input = document.getElementById("search");
const searchButton = document.getElementById("search-addon");
function movieInfo(){
    const movieName=input.value;
    const url= `https://www.omdbapi.com/?t=${movieName}&apikey=8d1f96ce&s=`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.Response=='False'){
            document.getElementById("displaybox").style.display='block';
            document.getElementById("displaybox").style.borderStyle='none';
            document.getElementById("errorheader").style.display='block';
            document.getElementById("errorheader").innerHTML="Movie Not Found";
            document.getElementById("movietitle").style.display='none';
            document.getElementById("releasedyear").style.display='none';
            document.getElementById("genre").style.display='none';
            document.getElementById("plot").style.display='none';
            document.getElementById("errorheader").style.display='block';
            document.getElementById("errorheader").innerHTML="Movie Not Found";
        }
        else{
            document.getElementById("displaybox").style.display='block';
            document.getElementById("errorheader").style.display='none';
            document.getElementById("movietitle").innerHTML=data.Title;
            document.getElementById("releasedyear").innerHTML=data.Year;
            document.getElementById("genre").innerHTML=data.Genre;
            document.getElementById("plot").innerHTML=data.Plot;
            document.getElementById("movietitle").style.display='block';
            document.getElementById("releasedyear").style.display='block';
            document.getElementById("genre").style.display='block';
            document.getElementById("plot").style.display='block';
            document.getElementById("displaybox").style.borderStyle='inset';
        }
    })
    .catch(err=>console.log(err))
}
searchButton.addEventListener('click',()=>{
    movieInfo();
})
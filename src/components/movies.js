const { useState } = require("react");

function Movies(){
    const[title, setTitle] = useState("");
    const[data, setData] = useState(null);

    let dataMarkup = null;
    if(data !== null){
        dataMarkup = JSON.stringify(data);
    }
    function updateTitle(event){
        setTitle(event.target.value);
    }
    function search(event){
        event.preventDefault();
        let url = `http://www.omdbapi.com/`;
        let queryString = `?apikey=b91e20db&t=${title}`;
        fetch(url + queryString, { method: "GET" })
        .then(function (res){
            return res.json();
        }).then(function (data){
            setData(data);
        });
    }
    return(
        <div id="cinema" class="theatre">
        <div>
            <form onSubmit={search}>
                <input
                type="text"
                placeholder="Movie Title"
                value={title}
                onChange={updateTitle}
            />
            <input type="submit" value="Search!" />
            </form>
            <p4>{dataMarkup}</p4>
        </div>
        </div>
    );
}

module.exports = Movies;
const {useState, useEffect} = require("react");

function Qoutes(){
    const[quote, setQuote] = useState("");
    const[author, seetAuthor] = useState("");

    useEffect(() => {
        fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(
            (quote) => {
                setQuote(quote.content);
                seetAuthor(quote.author);
        }
    )
    },[]);
    let fetchNewQuote = () => {
        fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(
            (quote) => {
                setQuote(quote.content);
                seetAuthor(quote.author);
        }
    )   
    }
    return(
        <div id="quote" class="slide">
            <div class="quote2">
            <h70>Quote</h70>
            </div>
            <div class="quote3">
            <p71>Generate a random quote</p71>
            </div>
            <div class="randomq">
                <h71>{quote}</h71><br />
                <p72>-{author}-</p72>
            </div>
            <button class="btn" onClick={fetchNewQuote}>New Quote!</button>
        </div>
    );
}

module.exports = Qoutes;
const express = require('express');
var router = express.Router();
const app = express();
const port = 3001;
app.use(express.json());


app.get( '/', (req, res) => {
res.send("welcome to chess")
})

app.post("/coin", (req, res) => {
    console.log("Welcome to validation")

    let details  = req.body;
    console.log(details)
   let  coincolor = details.coincolor;
   let location = details.location;
   let pre_Location = details.pre_location;
  let  user = details.user;
  let  coin = details.coin;

  if (user == '1')
    {
        if(coincolor == 'white' && coin == "bishop")
            {
                console.log("coincolor"+coincolor +coin)

               const validatepostion = validatePositions(location, pre_Location)
               if (validatepostion == true)
                {
                    res.status(400).send("invalid move")
                  
                }
                else{
                   console.log("valid move")
                   res.status(200).send("valid move")
                }
            }
            else{
                res.status(400).send("invalid coin")
            }

    }
    else{
        if(coincolor == 'black')
            {
                console.log("valid move")
            }
    }
})


function validatePositions(location, pre_Location) {
    console.log("inside location validation")
    // Check if positions are non-negative
    if (location < 0 || pre_Location < 0) {
        return false;
    }
    
    // Check if previous position is odd and current position is even
    if (pre_Location % 2 !== 0 && location % 2 !== 0) {
        return false;
    }
    
    return true;
}

app.listen(port , function(error) {
console.log('server listening on port' + port);
});


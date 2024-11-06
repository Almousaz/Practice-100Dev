const express = require("express");
const app = express();
const PORT = 7600;

const rappers = {
    '21 savage' :{
        'age' : 29,
        'birthName' : 'Shéyaa Bin Abraham-Joseph', 
        'birthLocation' : 'London, England'
    },
    'chance the rapper' : {
        'age' : 31,
        'birthName' : 'Chancelor Johnathan Bennett', 
        'birthLocation' : 'Chicago, Illinois, U.S'
    },
    'dylan' : {
        'age' : 21,
        'birthName' : 'Dylan', 
        'birthLocation' : 'U.S'
    }
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:rapperName", (req, res) => {

    const rappersName = req.params.rapperName.toLowerCase()
    if(rappers[rappersName]) {
        res.json(rappers[rappersName])
    }else{
        res.json(rappers['dylan'])
    }

});

app.listen(process.env.PORT || PORT , () => {
  console.log(`the server is running on port ${PORT} ! You better go catch it! `);
});

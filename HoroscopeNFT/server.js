const express = require('express')
const app = express();
const path = require('path')
const bodyParser = require("body-parser");
const interact = require("./scripts/mint.js");
let setIsMinting = false;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

const port = process.env.PORT||4000;
app.set('view engine', 'ejs');

app.use('/static', express.static(path.join(__dirname, 'scripts')));
// var is_install = require('./webs');

app.get("/", function(req, res) {
  res.render("view", {'is_install' : "is_install"});
});


app.post("/mintNFT", function(req, res) {
  async function main() {
	    try {
	     const mint = await interact.contract.mintNFT(req.body.account, req.body.zodiacSign);
	     console.log(mint)
	    } catch (e) {
	    	console.log(e)
	    } finally {
	    }
	}

main()
});

app.listen(port, ()=>{console.log("localhost is running on 4000...!")})

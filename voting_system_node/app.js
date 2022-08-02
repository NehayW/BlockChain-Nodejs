const express = require('express')
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
const path = require('path');

const contract = require("./scripts/interact.js");
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(bodyParser.json())
app.set('view engine', 'ejs');

const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const oneDay = 1000 * 60 * 60 * 24;
//session middleware
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));
app.use(cookieParser());
var session;


app.use('/style', express.static(path.join(__dirname, '/src/css')));
app.use('/image', express.static(path.join(__dirname, '/src/image')));
app.use('/script', express.static(path.join(__dirname, '/scripts')));

app.post("/connect/metamsk", async function(req, res) {
	const votingClosed = await contract.contract.votingClosed()
	console.log(votingClosed)
    session=req.session;
	session.is_closed = votingClosed
    session.accountId=req.body.connected_account;
    res.render('vote', {"session": session});

});

app.post("/disconnect/metamsk", async function(req, res) {
    req.session.destroy();
    session=req.session;
    res.render('connect_wallet', {"session": session});
});

app.get('/', function(req, res){
	res.render('connect_wallet', {"session" : session});
})


app.get('/voting/system', function(req, res){
	res.render('voting_system', {"session" : session});
})

app.get('/vote', function(req, res){
	res.render('vote')
})

app.post("/close/voting", async function(req, res){
		contract.contract.closeVoting()
		session.is_closed = true
})

app.post("/winner", async function(req, res){
	result = await contract.contract.winner()
	res.send({'success' : result})
})

app.get("/thankyou", function(req, res){
	res.render("thankyou")
})

app.post("/vote", async function(req, res) {
	try{
		console.log(req.body.team)
		if(req.body.team=="teamAvote")
		{
			await contract.contract.teamAvote(session.accountId, req.body.age)
		}
		if(req.body.team=="teamBvote")
		{

			await contract.contract.teamBvote(session.accountId, req.body.age)
		}
		if(req.body.team=="teamCvote")
		{
			await contract.contract.teamCvote(session.accountId, req.body.age)
		}
		res.render('thankyou')
	}
	catch(error)
	{
		console.log(error)
		res.send("Sorry voting is closed or may be you have already given vote please....!!!")
		session.is_closed = true
	}
})

app.listen(port, ()=>{
	console.log(`Now listening on port ${port}...!!!`)
})

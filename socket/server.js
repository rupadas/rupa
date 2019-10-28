let express = require('express');
let app = express();
let config = require('config');
// parse urlencoded request bodies into req.body
let  bodyParser = require('body-parser');

let port = config.get('Port');

let notify = require('./app/routes/notify');
let endpoint = config.get('Endpoint');

let options = {
  inflate: true,
  limit: '100kb',
  type: 'application/json'
};

//app.use(bodyParser.raw(options));
function v_json(req,rew, buf, encoding) {
	console.log('verify json');

        // get rawBody        
        req.rawBody = buf.toString();
        console.log("rawBody", req.rawBody);

    }

app.use(bodyParser.json({ verify: v_json }));

app.use(bodyParser.urlencoded({ extended: true , verify: v_json}));

app.route(endpoint).post(notify.Notify);

app.listen(port);

console.log("Listening on port " + port);

module.exports = app;

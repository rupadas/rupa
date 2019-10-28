'use strict'

let config = require('config');
let Pusher = require('pusher');
let Messages = require('../../app/model/notify');

let pusher_cfg =  config.get('Pusher');

//console.log(JSON.stringify(pusher_cfg));

var pusher = new Pusher({
    appId: pusher_cfg.app_id,
    key: pusher_cfg.key,
    secret: pusher_cfg.secret,
    authEndpoint: pusher_cfg.auth_url,
    cluster:  pusher_cfg.cluster
    }
);

function Poll() {
    if (Messages.Queue.length > 0)  {
    	console.log('sending');
        let msg = Messages.Queue.shift();
	console.log(msg);
	return pusher.trigger(pusher_cfg.channel, msg.target, msg.msg);
	}	

    return;
    }

let Sender = setInterval(Poll, 100);

function Enqueue(target,msg) {
    console.log('receive', target, msg)
    Messages.Queue.push( new Messages.Message({"target":target, "msg": msg}) );
    }

function Send(target,msg) {
    return pusher.trigger(pusher_cfg.channel, target, msg);
    }

function Notify(req,res) {
    //    console.log(req);

    let o = null;
    if (req.body !== undefined) {
    	o = req.body;

	res.status(200).send('OK');
	Enqueue(o.target, o.msg);
    	//Send(o.target,o.msg);
	console.log('sent');
    	}
    else {
	res.status(404).end();
	}
    }

module.exports = { Notify };

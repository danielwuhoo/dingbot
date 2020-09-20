const fs = require("fs");
const { QUEUE } = require('../modules/constants.js');

exports.run = async (client, message, args) => {
	fs.readFile(QUEUE, 'utf8', (e, data) => {
		if (e) {
			console.error(e)
		} else {
			let queue = JSON.parse(data);
			if (!queue.playing) {
				console.log("Nothing is being played");
			} else {
				client.dispatcher.emit('finish');
			}

		}
	})



}
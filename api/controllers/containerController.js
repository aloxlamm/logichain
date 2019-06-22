'use strict';

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider());
var version = web3.version.api;
const https = require('https');

const apikey = 'SN1MGHDSXXISPY2HVEJ9JYYB3UYHDM995T';
//const hash = '0x7f3dcbe720c5f314279dd3b6ca5cf7db3a27175a8fe556b0f87f67d189601528';


exports.get_container_by_hash = function (req, res) {
    const hash = req.params.hash
    console.log(hash)
    https.get(`https://api-ropsten.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=${hash}&apikey=${apikey}`, (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            console.log(JSON.parse(data).explanation);
            console.log(data)
            res.json(data)
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
};

exports.get_container = function (req, res) {
    const requestid = req.params.id
    res.json({
        id: 'xxxx',
        test: '123',
        requestid: requestid
    });
};
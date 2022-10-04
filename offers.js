import logo from './logo.svg';
import './App.css';

import https from 'https'
const opensea = require("opensea-js");
const OpenSeaPort = opensea.OpenSeaPort;
const Network = opensea.Network;
const HDWalletProvider = require("@truffle/hdwallet-provider");
var fs = require('fs');
var request = require('request');

// var obj_js = JSON.parse(fs.readFileSync('parameters.json', 'utf8'));
// var array = fs.readFileSync('Webshare 500 proxies.txt').toString().split("\n");

var obj_js = {
  "mnemonic": "hope select bleak airport wine term quiz blossom betray scatter census virus",
  "apiKey": "2f6f419a083c46de9d83ce3dbe7db601",
  "limit_1": 1000, 
  "limit_2": 2000,
  "FP": 0,
  "INFURA": ["wss://mainnet.infura.io/ws/v3/50ef4cfe17ee4356b05bb6a715d95e64", "wss://mainnet.infura.io/ws/v3/305331924a554231aff0e4fefc486644", "wss://mainnet.infura.io/ws/v3/0d82eaf9320f46e090b1766ec18161c0", "wss://mainnet.infura.io/ws/v3/674b7a9d7b154ed498a87faf449a6c51"],
  "tokenAddress": "0x8cd8155e1af6ad31dd9eec2ced37e04145acfcb3",
  "accountAddress": "0x0B47224ca6509934E3e35bA1Db440e7bd9a80D6C",
  "Bid_Time": 2.5,
  "profit_lower": 0.9,
  "profit_upper": 0.75,
  "proxy_start": 0,
  "proxy_end": 100
}

// function sleep(duration) {return new Promise(resolve => {setTimeout(() => {resolve()}, duration * 1000)})}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const tokenAddress = obj_js.tokenAddress; //
const accountAddress = obj_js.accountAddress;

const requestget = url => {
  return new Promise((resolve, reject) => {
    request(url, (err, response, body) => {
      if (!err && response.statusCode == 200){
        resolve(body);
      }else if(err){
        reject(err)
      }
      else if (!err && response.statusCode != 200){
        reject()
      }

    });
  });
};

const httpGet = url => {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => resolve(body));
    }).on('error',function(err) {
      console.log(err)
      reject(err)
    });
  });
};

var proxies = [];

(async () => {
  let proxy_array = await requestget({
    'url': 'https://proxy.webshare.io/proxy/list/download/igpyfixbszpjlxqjwizhxgdqvrhbvnkjallbacxc/-/http/username/direct/',
    'method': 'GET',
    'timeout': 5000
  })
  for (var i = obj_js.proxy_start; i < obj_js.proxy_end; i++){
    const vals = proxy_array.split('\r\n')[i].split(':')
    const proxy_api = 'http://'+ vals[2]+ ":" + vals[3] + "@" + vals[0] + ":" + vals[1]
    proxies.push(proxy_api);
  }
})();

console.log(proxies)

if (tokenAddress == '0xf497253c2bb7644ebb99e4d9ecc104ae7a79187a'){ //sevens
  var token_fee = 0.0527
  var token_name = 'the-sevens-official'
}
else if (tokenAddress == '0x8943c7bac1914c9a7aba750bf2b6b09fd21037e0'){ //lazylions
  var token_fee = 0.065
  var token_name = 'lazy-lions'
}
else if (tokenAddress == '0x8630cdeaa26d042f0f9242ca30229b425e7f243f'){ // clayings
  var token_fee = 0.1
  var token_name = 'theclaylings'
}
else if (tokenAddress == '0xa08126f5e1ed91a635987071e6ff5eb2aeb67c48'){ // egg
  var token_fee = 0.075
  var token_name = 'galaxyeggs9999'
}
else if (tokenAddress == '0x1cb1a5e65610aeff2551a50f76a87a7d3fb649c6'){ // toadz
  var token_fee = 0.0375
  var token_name = 'cryptoadz-by-gremplin'
}
else if (tokenAddress == '0xecdd2f733bd20e56865750ebce33f17da0bee461'){ //cryptodad
  var token_fee = 0.075
  var token_name = 'thecryptodads'
}
else if (tokenAddress == '0x3f5fb35468e9834a43dca1c160c69eaae78b6360'){ // koalas
  var token_fee = 0.075
  var token_name = 'koala-intelligence-agency'
}
else if (tokenAddress == '0xc92ceddfb8dd984a89fb494c376f9a48b999aafc'){ // creature world
  var token_fee = 0.095
  var token_name = 'creature-world-collection'
}
else if (tokenAddress == '0x3bf2922f4520a8ba0c2efc3d2a1539678dad5e9d'){ // oniforce
    var token_fee = 0.075
    var token_name = '0n1-force'
  }
else if (tokenAddress == '0x8cd8155e1af6ad31dd9eec2ced37e04145acfcb3'){ // cupcat
  var token_fee = 0.075
  var token_name = 'cupcatsofficial'
}
else if (tokenAddress == '0x2d0ee46b804f415be4dc8aa1040834f5125ebd2e'){ // dino
  var token_fee = 0.05
  var token_name = 'dapperdinosnft'
}
else if (tokenAddress == '0x099689220846644f87d1137665cded7bf3422747'){ // robot
  var token_fee = 0.065
  var token_name = 'robotos-official'
}
else if (tokenAddress == '0xc4a0b1e7aa137ada8b2f911a501638088dfdd508'){ // unicorn
  var token_fee = 0.07
  var token_name = 'ununicornsofficial'
}
else if (tokenAddress == '0xbd3531da5cf5857e7cfaa92426877b022e612cf8'){ // penguin
  var token_fee = 0.055
  var token_name = 'pudgypenguins'
}
else if (tokenAddress == '0xe785e82358879f061bc3dcac6f0444462d4b5330'){ //women who lift
  var token_fee = 0.065
  var token_name = 'world-of-women-nft'
}
else if (tokenAddress == '0x11450058d796b02eb53e65374be59cff65d3fe7f'){ //shiba
  var token_fee = 0.075
  var token_name = 'theshiboshis'
}
else if (tokenAddress == '0x8a90cab2b38dba80c64b7734e58ee1db38b8992e'){ //doodle
  var token_fee = 0.075
  var token_name = 'doodles-official'
}
else if (tokenAddress == '0x219b8ab790decc32444a6600971c7c3718252539'){ //vampire
  var token_fee = 0.05
  var token_name = 'sneaky-vampire-syndicate'
}

var initial_ids = [];
var ids_iter = [];
var ids_new_iter = [];
for (var i = obj_js.limit_1; i <= obj_js.limit_2; i++) {
  initial_ids.push(i);
  ids_iter.push(i);
}
console.log(ids_iter)

var key_flag = 0;
var flag_fp = 1;
var proxy_flag = 0;
var place_bid = [];
var iter_counter = 0;
var infura_key = obj_js.INFURA[key_flag];
console.log(infura_key);

var provider = new HDWalletProvider({
  mnemonic: obj_js.mnemonic,
  providerOrUrl: infura_key,
  numberOfAddresses: 10,
  shareNonce: true,
  derivationPath: "m/44'/60'/0'/0/"
});

var seaport = new OpenSeaPort(provider, {
    networkName: Network.Main,
    apiKey: obj_js.apiKey
}, (arg) => console.log(arg));

(async () => {
  // const ids = [200, 201, 202, 203, 204, 205, 20];
  while (ids_iter.length > 0){
    for (const id of ids_iter) {

      iter_counter += 1
      if (iter_counter%1200 === 0){
        key_flag += 1;
        if (key_flag == obj_js.INFURA.length){
          key_flag = 0;
        }
        infura_key = obj_js.INFURA[key_flag];
        console.log(infura_key);
        provider.engine.stop();

        provider = new HDWalletProvider({
          mnemonic: obj_js.mnemonic,
          providerOrUrl: infura_key,
          numberOfAddresses: 10,
          shareNonce: true,
          derivationPath: "m/44'/60'/0'/0/"
        });

        seaport = new OpenSeaPort(provider, {
          networkName: Network.Main,
          apiKey: obj_js.apiKey
        }, (arg) => console.log(arg));
      }

      global.proxy = proxies[proxy_flag]
      console.log('A')
      console.log(proxies[proxy_flag])
      console.log(global.proxy)
      console.log('B')
      proxy_flag += 1
      if (proxy_flag == proxies.length){
        proxy_flag = 0;
      }

      console.log('Token number ' + id.toString())
      // make next loop -1. This will change based on output of API. If output is -1 then we retry, if +1 then we move to next token
      var next_loop_a = -1;
      var next_loop_b = -1;
      var fp_tries = 0;
      // Start while loop of checking API
      while (next_loop_a == -1 || next_loop_b == -1){
        // Try except statement to catch any errors
        if (next_loop_a == -1){
          try{
            //get the API return  
            // var body = await httpGet('https://api.opensea.io/api/v1/asset/' + tokenAddress + '/'+id.toString()+'/');
            var fp_body = await requestget({
              'url': 'https://api.opensea.io/api/v1/collection/' + token_name + '/',
              headers: {
                'x-api-key': '2f6f419a083c46de9d83ce3dbe7db601'
              },
              'method': 'GET',
              'proxy': proxies[proxy_flag],
              'timeout': 5000
            })
            next_loop_a = 1;
            // console.log('Floor price obtained!')
            if (flag_fp === 1){
              var fp = JSON.parse(fp_body).collection.stats.floor_price;
              console.log('Floor Price: ' + fp.toString(), 'Min Profit: ' + fp*(obj_js.profit_lower-token_fee).toString(),
                'Max Profit: ' + fp*(obj_js.profit_upper-token_fee).toString());
              flag_fp = 0
            }
          }
          catch{console.log('Floor bid api throttled.');
            next_loop_a = -1;
          }
        }
        if (next_loop_b == -1){
          try{
            var body = await requestget({
              'url': 'https://api.opensea.io/api/v1/asset/' + tokenAddress + '/'+id.toString()+'/',
              headers: {
                'x-api-key': '2f6f419a083c46de9d83ce3dbe7db601'
              },
              'method': 'GET',
              'proxy': proxies[proxy_flag],
              'timeout': 5000
            })
            next_loop_b = 1;
          }
          catch{console.log('Other bid api throttled. Waiting');
            next_loop_b = -1;
            proxy_flag += 1
            if (proxy_flag == proxies.length){
              proxy_flag = 0;
            }
            await sleep(1000)
          }
        }
        fp_tries += 1;
        if (fp_tries === 10){
          console.log('Too many floor price API throttles.')
          break;
        }
      }
      try{
      //set results as body of api
        let result = JSON.parse(body).orders;
        let actual_owner = JSON.parse(body).owner.address;
        var m = []
        var m_owner = []
        for (var r of Object.keys(result)){
          if ((result[r].maker.address!=actual_owner) & (result[r].payment_token_contract.symbol.toLowerCase() =='weth')){
            m.push(parseFloat(result[r].current_price/1e18));
            m_owner.push(result[r].maker.address);
          }
        }
        // Get floor price
        if (obj_js.FP === 0){
          var fp = JSON.parse(fp_body).collection.stats.floor_price;
        } else{
          var fp = obj_js.FP;
        }
        // console.log(fp)
        //if there are no orders
        let cmb =  Math.max.apply(Math,m);
        let owner_cmb = m_owner[m.indexOf(cmb)];
        if (owner_cmb === accountAddress.toLowerCase()){
          console.log('Already own highest bid. Removing our name from the list');
          m_owner.splice(m.indexOf(cmb), 1)
          m.splice(m.indexOf(cmb), 1)
        }
        if (m.length === 0){
          seaport.createBuyOrder({asset: {tokenId: id.toString(),
          tokenAddress: tokenAddress},
          accountAddress: accountAddress,
          startAmount: 0.001,
          // startAmount: fp*(obj_js.profit_upper-token_fee),
          expirationTime: Math.round(Date.now() / 1000 + 60 * 60 * obj_js.Bid_Time)})
          .then((res) => {console.log('\x1b[33m%s\x1b[0m', 'Bid Successful! ' + id.toString());}).catch((err) => {
            if (err.toString().includes('API Error 400:') || err.toString().includes('Insufficient balance')){
              console.log('Not bidding on auction');
            }
            else if (err.toString().includes('API Error 429:') || err.toString().includes('FetchError: network timeout at')) {
              console.log('\x1b[36m%s\x1b[0m', 'Will bid on ' + id.toString() +' in next loop.');
              ids_new_iter.push(id);
            };
            });
          }
        else {
          // get best offer
          let cmb =  Math.max.apply(Math,m);
          let owner_cmb = m_owner[m.indexOf(cmb)];
          if (owner_cmb === accountAddress.toLowerCase()){
            console.log('Already own highest bid, bidding same price.');
            place_bid.push(seaport.createBuyOrder({asset: {tokenId: id.toString(),
              tokenAddress: tokenAddress},
              accountAddress: accountAddress,
              startAmount: 0.001,
              // startAmount: cmb,
              expirationTime: Math.round(Date.now() / 1000 + 60 * 60 * obj_js.Bid_Time)})
              .then((res) => { console.log('\x1b[33m%s\x1b[0m', 'Bid Successful! ' + id.toString());}).catch((err) => {
                if (err.toString().includes('API Error 400:')){
                  console.log('Not bidding on auction');
                }
                else if (err.toString().includes('API Error 429:') || err.toString().includes('FetchError: network timeout at')) {
                  console.log('\x1b[36m%s\x1b[0m', 'Will bid on ' + id.toString() +' in next loop.');
                  ids_new_iter.push(id);
                };
              }))
          }
          else{
            if (cmb < fp*(obj_js.profit_lower-token_fee) & cmb >= fp*(obj_js.profit_upper-token_fee)){ //if highest bid is between 10 and 25% profit margin
              // if (cmb < 0.4){
              console.log('Token has bids, bidding')
              place_bid.push(seaport.createBuyOrder({asset: {tokenId: id.toString(),
                                                        tokenAddress: tokenAddress},
                                                        accountAddress: accountAddress,
                                                        startAmount: 0.001,
                                                        // startAmount: cmb + 0.0001,
                                                        expirationTime: Math.round(Date.now() / 1000 + 60 * 60 * obj_js.Bid_Time)})
                                                        .then((res) => { console.log('\x1b[33m%s\x1b[0m', 'Bid Successful! ' + id.toString());}).catch((err) => {
                                                          if (err.toString().includes('API Error 400:')){
                                                            console.log('Not bidding on auction')
                                                            return(1);
                                                          }
                                                          else if (err.toString().includes('API Error 429:') || err.toString().includes('FetchError: network timeout at')) {
                                                            console.log('\x1b[36m%s\x1b[0m', 'Will bid on ' + id.toString() +' in next loop.');
                                                            ids_new_iter.push(id);
                                                          };
                                                        }))
            }
            else if (cmb < fp*(obj_js.profit_upper-token_fee)){ //if highest bid is very low
              // if (cmb < 0.4){
                console.log('Token has very low bids, bidding')
                place_bid.push(seaport.createBuyOrder({asset: {tokenId: id.toString(),
                                                          tokenAddress: tokenAddress},
                                                          accountAddress: accountAddress,
                                                          startAmount: 0.001,
                                                          // startAmount: fp*(0.75-token_fee),
                                                          expirationTime: Math.round(Date.now() / 1000 + 60 * 60 * obj_js.Bid_Time)})
                                                          .then((res) => { console.log('\x1b[33m%s\x1b[0m', 'Bid Successful! ' + id.toString());}).catch((err) => {
                                                            if (err.toString().includes('API Error 400:')){
                                                              console.log('Not bidding on auction');
                                                            }
                                                            else if (err.toString().includes('API Error 429:') || err.toString().includes('FetchError: network timeout at')) {
                                                              console.log('\x1b[36m%s\x1b[0m', 'Will bid on ' + id.toString() +' in next loop.');
                                                              ids_new_iter.push(id);
                                                            };
                                                          }))
            }
            else{
              console.log('Not Bidding')
              console.log('Max Bid: ' + cmb.toString(), 'Floor Price: ' + fp.toString(), 'Min Profit: ' + fp*(obj_js.profit_lower-token_fee).toString(),
              'Max Profit: ' + fp*(obj_js.profit_upper-token_fee).toString())
            }
          }
        }
      }
      catch{
        console.log('Other error for ' + id.toString());
        ids_new_iter.push(id);
      }
      await sleep(5000);
    }
    await Promise.all(place_bid).then((res) => {console.log('All bids done')});
    console.log()
    console.log(ids_new_iter)
    ids_iter = ids_new_iter;
    ids_new_iter = [];
    if (ids_iter.length === 0){
      ids_iter = initial_ids;
    };
    console.log(ids_iter);
  };
})();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

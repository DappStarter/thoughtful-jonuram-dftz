require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drop tail solution mansion creek stick mad heavy kiwi outer tonight'; 
let testAccounts = [
"0x60b3ca1e84a0690b22ee6363d46a508ce168887f160062bedc6f77ceee766189",
"0x790762cd5226d618459bfd81cc8acc47a12b5506e5c06f15251d34f9b4b3f9da",
"0x736617571e26c8dca3b587c69dc440cc271b96301e3fb9120c47d88859928f82",
"0xbe0b82b2244de6a404d96576235fb2e309117c3ae1a31822068823a9201213f1",
"0xb602e40da181a13aebd1bf7526272ae466ab6ed2eb398d1f3138927ce02cb9a0",
"0x067230edf9212083c0f3c99d4b9fcf76338af701f611911acdfc6da3fd477088",
"0x6748623dae236c321e6efd7913a478c22272933f7b62c3e8619922710f4ede38",
"0xd54827d98b91de080eb390769270dba76c1e0c070c04bfdd69cc4e0483671403",
"0x8995b1ef3c6a5e645f9a9649f1381cdd33d92188a76deb733a498b7b5d3efdc3",
"0x0948c4abd44a4c857a12e19c2d9d5a5e35ad377474d411610a0354f31663889a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



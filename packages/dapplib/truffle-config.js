require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remind concert grace nation fringe spare'; 
let testAccounts = [
"0xc38e4c594341366047a31be379d1cce4b1497b96d5c52a8d690123f875cd4ad2",
"0x6268a4ac778a279dfe695b1f91526f093d1d3c6054522b30a342cc9c39caa9d1",
"0x7b83e50fc4a27e07d6b616ddbcd7e11a3bd82a0b693dc542f8985422b1acc57c",
"0x64038b844708264e2734e3fb14e343c79e6e345cab8ffe214ecc3d69fafd3cf8",
"0x848044cae8a7ec4d9f182947014f36b8e59da08ce6b42c4b63b7f800a95fede4",
"0x5c379cd010cc3ab88bd66e234afb8fe2104a7b5f04ff518404bc99a2ee1a0d2e",
"0x5fab167a453e729c1b63bcef414cc02eed5c7948a52369c2ef8a1011d03e1271",
"0xee5ef2b7b33113545ee013a1aec714d4b77a839d5a85e5c94e5e911f7f332fe7",
"0x960f6a32be118478b9095e9a3cd87e2a2c6b795eeb993f43d4a0bd7ed6a5fc48",
"0x345c0eda379f95f81f7f38f33ade8436a73141c6296e1af34c5e05fe0eb8d43c"
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



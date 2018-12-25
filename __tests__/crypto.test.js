import * as crypto from '../src/crypto';

const privateKey = crypto.generatePrivateKey();
const keyStore = crypto.generateKeyStore(privateKey, '1234567');

describe('crypto', () => {

  it('generate a random address', () => {
    const pk = crypto.generatePrivateKey();
    const address = crypto.getAddressFromPrivateKey(pk);
    console.log(crypto.getPublicKeyFromPrivateKey(pk));
    expect(address).toBe('bnc1hgm0p7khfk85zpz5v0j8wnej3a90w7098fpxyh');
  });

  it('generate an address from privateKey', () => {
    const pk = '90335b9d2153ad1a9799a3ccc070bd64b4164e9642ee1dd48053c33f9a3a05e9';
    const address = crypto.getAddressFromPrivateKey(pk);
    expect(address).toBe('bnc1hgm0p7khfk85zpz5v0j8wnej3a90w7098fpxyh');
  });

  it('generate private key from keyStore', () => {
    const pk = crypto.getPrivateKeyFromKeyStore(keyStore, '1234567');
    expect(pk).toBe(privateKey);
  });

  it('generate mnemonic from private key', ()=>{
    const pk = '90335b9d2153ad1a9799a3ccc070bd64b4164e9642ee1dd48053c33f9a3a05e9';
    const mnemonic = crypto.getMnemonicFromPrivateKey(pk);
    expect(mnemonic).toBe('mother onion trap dress depart minute fury crucial smoke adjust consider siren door chef flip fruit build piano belt major whale brown bless decide');
  });

  it('decodeAddress', ()=>{
    let address = 'cosmosaccaddr1wqrn76z0v36pr3vx3sgue4y5rv4pzpu6ffnjj0';
    const decod = crypto.decodeAddress(address);
    expect(decod.toString('hex')).toBe('70073f684f647411c5868c11ccd4941b2a11079a');
  });

  it('generate address from mnemonic', ()=>{
    const mnemonic = 'offer caution gift cross surge pretty orange during eye soldier popular holiday mention east eight office fashion ill parrot vault rent devote earth cousin';
    const pk = crypto.getPrivateKeyFromMnemonic(mnemonic);
    const address = crypto.getAddressFromPrivateKey(pk);
    expect(address).toBe('bnc1hgm0p7khfk85zpz5v0j8wnej3a90w7098fpxyh');
  });

  it('generateSignature', ()=>{
    const hex = '7b226163636f756e745f6e756d626572223a2231222c22636861696e5f6964223a22626e62636861696e2d31303030222c226d656d6f223a22222c226d736773223a5b7b226964223a22423635363144434331303431333030353941374330384634384336343631304331463646393036342d3130222c226f7264657274797065223a322c227072696365223a3130303030303030302c227175616e74697479223a313230303030303030302c2273656e646572223a22626e63316b6574706d6e71736779637174786e7570723667636572707073306b6c797279687a36667a6c222c2273696465223a312c2273796d626f6c223a224254432d3543345f424e42222c2274696d65696e666f726365223a317d5d2c2273657175656e6365223a2239227d';
    let bz = crypto.generateSignature(hex, '30c5e838578a29e3e9273edddd753d6c9b38aca2446dd84bdfe2e5988b0da0a1');
    expect(bz.toString('hex')).toBe('9c0421217ef92d556a14e3f442b07c85f6fc706dfcd8a72d6b58f05f96e95aa226b10f7cf62ccf7c9d5d953fa2c9ae80a1eacaf0c779d0253f1a34afd17eef34');
  });

});
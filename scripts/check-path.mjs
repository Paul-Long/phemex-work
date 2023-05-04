
const Base_Dir = 'phemex-home-dev';
const Packages_Path = '/Users/houbaolong/Desktop/coding/phemex-home-dev/packages';
const Path_Url = '/Users/houbaolong/Desktop/coding/phemex-home-dev/src/const/paths.js';
const New_Path_Dir = [
  'templates-account',
  'templates-assets',
  'templates-buy-crypto',
  'templates-contract',
  'templates-learn-crypto',
  'templates-main',
  'templates-web3',
];

(async () => {
  for (let i = 0; i < New_Path_Dir.length; i++) {
    const p = Packages_Path + '/' + New_Path_Dir[i] + '/' + 'index.ts';
    const templates = await import(p);
    console.log(templates);
  }
})()

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "93e97fbd83d76c3efb1c0eaee44fd131",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "d981fb2498e180d58a15f4fe3f6c8ecb",
"/": "d981fb2498e180d58a15f4fe3f6c8ecb",
"CNAME": "4529376ba740b09bf6daa3a321a8d4ab",
"main.dart.js": "fc8105c5cf65c8352f5d464f4d5776b5",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"resume.pdf": "6b4f5f1ea93cc9717b5a7fee218a00f7",
"takutitus-seo.png": "f92ab3d21730a10bba7570a9b3b567da",
"favicon.png": "72a1b37c67e2dbc350c97cf28b9ed593",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/ORIG_HEAD": "2480c04e558eb377bdc53c48b32805d6",
".git/config": "d93555efd063ca18bae8c1014c71f2c6",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/66/978a253087ddc48e24335183b88284de556f5a": "677013823297c562bc2bf1c6c6b68a8a",
".git/objects/3e/6e006df3bed5928875420aadcc17b64063f8cd": "3be1df73546a67b3457cc3c44f55d1be",
".git/objects/03/3bdae02edccb6063c3b8d8c549046516ac1cf0": "8b7fc6835fa963fddb3f942ac01d6652",
".git/objects/9e/42ade547c8937aaa6af177b41f397c1963b351": "1b93f1783942657ef0060777e4afaa3d",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/69/0d1f7128666bec9119d2dc92da39e34a302fa2": "db7dc97d55ef51abaf447db9762b506d",
".git/objects/3d/48f7f635e1b5df7b164304c9a4d4f4e277e874": "2e8949296849472c86d0e2a2ba2052e5",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/791100dcf7958b5b5353b9057646b477feb882": "73a743a1549f971d8c8075cbfe2f8ae9",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/0b/52de570926e46c766d6b07f019bbc2bc925620": "431e47774cc4007c328200743917d59a",
".git/objects/93/8efe35405ced5509b25144dd34a1fd261547db": "0dbc9d2ca7a92d34739f32c704c89c8a",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/5f/07285177116af5c0f269645c32a5b963f3352f": "3375b38be72d5d1ca8d173c5a4bd91d6",
".git/objects/9d/b97cc40cbba3e2332d8bd4d48296ee6e6c9bd5": "08b37f7e28c79e8f931ad78ed4756a54",
".git/objects/9c/68820d8659dd780e7b9e869a36b4838171c0c8": "667e80118a0b966124493112b7c0199b",
".git/objects/d7/f737247dd550ece5bef922962dc30b2cb759e3": "b552c5f9c5d3601ebef5548295d561d5",
".git/objects/d0/7f11b65ce4525fc4eecd01ca5c8559536ebfe2": "d50acf69b57f5fd0affbcd0cea82266b",
".git/objects/be/9fdb48df9240d229f7665f36140c80b4572092": "2aef9c04524e8f53fd5509f5f9f7a181",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/da/fb1e304524b95a32dc9a121f0cd2028d1b6006": "ac7fcc6150c9c9d326c2dce3064ce296",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a5/9d7023830a69b60947970feb9788b0e137a366": "3583599d0386420be9acbb073114f120",
".git/objects/d1/2164e0ea0a71f467bc159e29ef7d9ac83dc5d5": "3fecac250d71e50414577a62046f843a",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/4c9653df843906137957d91954ac161d5c0499": "509ebb2d8dc34edd99a311349c2da44f",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/2a7a690ed91409e3e4c751d6e82c3ef2ed8ed5": "358e990d6b9549be91bf3ea7ace6441b",
".git/objects/f5/c388f6184b533e944a8f5eb3db1cf54abe6dea": "77e8a5ed6066f8c5ef2fcf40c7676d2b",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/ed/c5ea1a84e123d446b6287eee02f06c633c4dc6": "9aa16edfe56169eaaf69215c4c257fc1",
".git/objects/c6/3da4fad92e4cfd86a749d57d1d032f3a0c5ce2": "e9bd6f6f78e65ce77f148e1d3ad3ac63",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/ec932f858634d38aed06e9d0859049239797d5": "edf589d0746dcc3d6a9b88213fb0ee29",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/42/7645fc240a9b867a492f37cb2074983dcd81f4": "1d46d245c5cc8d0b18e974093f71bc6d",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/fa6c31823809ca1475c65bb1e56d616e60c69f": "9c0cff6fda314ecbd0bc4d99bdb8f444",
".git/objects/74/0a1453b609dee212192c29e2413b77a078f892": "39a24c4ad85c19ad0dacdae4d23b119b",
".git/objects/19/dceaafab632a9e5ed58203b99a24671bef734b": "cc14fe35029439431f89215408fe3542",
".git/objects/4d/cfcf301240644dbfb53db8c7ce78b54d63e6a6": "dfc49816ba3ce98f1aeaff6504fb7ff9",
".git/objects/81/f95755d67fd63637cb56e575d67b8b212510cd": "de1cd97ebc116a3d97c9ed75a07ff00e",
".git/objects/81/d2e794e795287a3c3664148369a2065ddeafff": "f21018aff12c0b215a1a75deb22c2ebc",
".git/objects/81/22db7103307d1d897af3e3eba1b658894f1f73": "7d61ed2ad08461757b6a1a296d4075e7",
".git/objects/72/de38a7914343a00e8a970063a88909372f5140": "5ba3ac9475afaa6842301fb05bb580d9",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/1f1307d06e760fdc3e963a5e36e36e3fe15118": "04ffe3a56a4e0452bebb3290ab80c0ba",
".git/objects/9f/b8bd840d4f3c628bc0483d5e3b51fe30d6edb9": "7872635937a68d54baa6af74ee1eb860",
".git/objects/07/b1b197150382f24e23f14b0bab07d6d0eb1299": "322be5b127b1038240578f5b1c808505",
".git/objects/07/ad12633c4c0ddd8115b04fa9f7c951c8388535": "71cfb32508afd95a5f8156514ed251c4",
".git/objects/00/082fbf2392b297c26ade941d9a709b87571d69": "199e1dea38350debb363ac491e6faef5",
".git/objects/09/f6ca127636c8f43a57e2ee852726583359ff9c": "3e7f6cc1980543b6eb52b9150e344d95",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/91/b7f694c01ff7beeaf3a8c74890a5df73512c50": "c94dbe986df0a56e8e1bfe2197c79418",
".git/objects/62/7fe8a9959b05d030a19e367fdaf32d88d4245c": "de89e23f533885ef22bbe535ad7e2feb",
".git/objects/96/088b49126683edd03b3579a971c1073dc33005": "36c46c069f0f11139bfbfcc3ffd2cfa9",
".git/objects/55/5ab9a6e7011c3345a16a82d6bdac29fe424ec7": "700813dcfd718bdff6e2013dd53e6930",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/97/be8dbc28fd722a16459e849c3582500ab7f079": "a395efc2ef9b4a7d382e5e19d637fa20",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/9e6abd4bdee4b3324dd475a93cc8b0e922745f": "36cd05851fa1188bfca2872a6f00f63e",
".git/objects/b1/ccce3f7e9d0cd95bf3eac77ba4d9974b69dd46": "66cfd4763278c9341f2c46b5a9c4172b",
".git/objects/b6/9582fa539f0755c26978cd4c99e1396188e0c9": "d2663f4936e0d75a51da5320cecd0146",
".git/objects/d2/f7f6cf665c64ed27bd57854d4e1b118277ff9a": "dcba3191bcd0b74be4f47ddce0562c9d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/2748f9420dd984348928a0997c466ca199c1d3": "ef674de3acb2e795bc6cf5fb60947fbe",
".git/objects/db/03314032c7ff858277103ccd914f155ba073ed": "99795a957251244a8a6449d206062653",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cd/abfd4dc20112b58b742b4ae8c34b9f45a390af": "76bd85e12522b5391848176be8dab8a6",
".git/objects/f9/3ab71bdbfa5d0d40b1cf5d0e280b21b60e76b8": "563bc4853bf85989ee42799e4133dfe8",
".git/objects/ff/3f3429e377d1ae687dec237757297bcceabbbc": "007c6f12d05f05f1caabbda2c6a84e15",
".git/objects/c5/d15eb6500e7c3caf645d3e2ccb0e9d8245c97b": "d54dae8f61d5d8b014464a213e866aa5",
".git/objects/c2/6e441d78e73b579f9e94cc3f4067191086fff3": "23ca1917e248ab1696e540e26761822e",
".git/objects/f6/da9146a8f64067014efc8102559f504a21f649": "399a2954acfe4b27005b0e91fb441d47",
".git/objects/e7/8e529dad9ccd669d3141a3f984091334598c94": "48ae2bdc85a1f1c190e32132d93e42b2",
".git/objects/e7/df5d322c3c544893298f0b8883d77e00a95f4e": "90ee226361442e4917d2677e7de73743",
".git/objects/e0/bd34c0388d99509c999c9b9bc08a86d9ca3c73": "fa891370b87e21727043339a4376261d",
".git/objects/79/7271e43d12c9722093651082dece63ad4462c3": "1b9eb49e24e70665f6d738ae34ab489e",
".git/objects/77/353b7f33e6fdc13550f132022405adbeb11a80": "b12a203d5edfc77348d3ab8dc6853538",
".git/objects/48/6506d54bc31c90422518c4003e2964f26ab9a5": "c15db3fd1ebc52a120e5f4bdc3a9872d",
".git/objects/84/7ec5a31572a7c78ae1f9bf359661f00aa0f829": "eb6e2947b873dd577fa8c4c9450c44b8",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/9a79189dee20619b912e911947494c961630ff": "22a889bd548722007083cf90e6bdcf5b",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/1c/ce343620c7876a0ae9c16d61e46c0f8a12f852": "048badd7fde5418339e3cf1bec030072",
".git/objects/82/e7b53e89ee6228831377122c46e994328ec08c": "9149cf88d69599115c3831ced7858082",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/40/f142625cbe370b5defcce5e20e3a77bc4d3f48": "42983802c3a8bdc65e6f94a8d9a52898",
".git/objects/2e/2c76f09a52fbf997509ec0cc3d51087ddbcbdb": "c45f065fcb56691f8c6fabac38783456",
".git/objects/2b/4d560e90f302488364c8275a90064fa29afe56": "e0d68c5bc1dca43d02a9f1245dceb0f6",
".git/objects/47/69d10057b02a730fa272e3ea9708e8f2337d89": "46163fda1d66670d73b13f651edfcd29",
".git/objects/8b/4fbbcbb35fbdf276fd90c5194c7772b50186f0": "0f67e683d1a715eab92a95254acb6796",
".git/objects/13/81e0234201031d5ad429afee272ded6626acec": "4041b7170f8b6ad1be25602897bbb117",
".git/objects/7a/f2bf6772cee1e59641015a2d05ded391b35f10": "d7f742511a8cdc051422ffc20fd000e7",
".git/objects/7a/1b9837541c0927a8d29ba7d62738cb4a0c2820": "c2d066ab2c210650c8976b9f943d9aa7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cf4baed456fffa1f56d701a8767e6063",
".git/logs/refs/heads/main": "cf4baed456fffa1f56d701a8767e6063",
".git/logs/refs/remotes/origin/main": "fd78735a05cc3ff2e32bf9f906962af7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "ba19c89011d87b49bbc432a02f2ef86e",
".git/refs/remotes/origin/main": "ba19c89011d87b49bbc432a02f2ef86e",
".git/index": "b7bba0df2d3dd08e293e4f349b50ce2c",
".git/COMMIT_EDITMSG": "bd7ac311bf1c50685a47131fbc6bce39",
".git/FETCH_HEAD": "bddf86b0a1e3608fc953bb42b2870584",
"assets/AssetManifest.json": "32f57845fb81870d1f87bd401b60bec3",
"assets/NOTICES": "d221f7f6679c752af68e817c4025cab3",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "84d49b797364b15db4dd34113a93dd8c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "df39d2146e47ae507584ebc1f8c80f42",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "e36f59028a1a932c13f926ba777f788a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9a08d810bb6965ce7710d05292790139",
"assets/fonts/MaterialIcons-Regular.otf": "7aae1457c383bb71d6978c21c696a732",
"assets/assets/extension_icon.png": "1c7b6e45568ddc4d283fd28b721cb3ab",
"assets/assets/mbesa-graphics-image.png": "52680d8f5da7536a1fbd0e9a7e20a4f8",
"assets/assets/favicon.ico": "72a1b37c67e2dbc350c97cf28b9ed593",
"assets/assets/zanupf-graphics-image.png": "6a92c890a5551ff0bd8f47a57469cee0",
"assets/assets/xano-logo.png": "962080ebf5b4261f042c5010cd8204e5",
"assets/assets/flask-logo.png": "d86e03d4c0d0c67fb133218c997d84d4",
"assets/assets/IMG_6577_Original%25206.jpg": "1576b5ad1833dbbffc3a28110afcf5bf",
"assets/assets/sql-logo.png": "59be133be642bbc001704908e079d584",
"assets/assets/murez-graphics-image.png": "f691dbd869bb0f057090eb9356e7ec35",
"assets/assets/zimplats-graphics-image.png": "cf9091946fefd5f95112ba8578db6927",
"assets/assets/telco-logo.png": "c7697bc2fea947f9a2d4978ff07dc139",
"assets/assets/framer-logo.png": "37cf60ecd4d06208d870c4082c4a69ec",
"assets/assets/afrosoft-logo.png": "b93d3020dd41320f7a56231801430374",
"assets/assets/flutter-logo.png": "bd540077ebad3dd1eba3c578b5eac811",
"assets/assets/gmf-graphics-image.png": "03e3d6a3faf6582b9ba39db3b89111df",
"assets/assets/epay-graphics-image.png": "c0d9bce5d06696cd976a46a5dbec4d92",
"assets/assets/weweb-logo.png": "b44c7e4d9884d017b24ce5dff24d755e",
"assets/assets/afrocodemy-logo.png": "d2ea1b96a18f311fdf76d91792b1446f",
"assets/assets/nocoderebels-logo.jpeg": "592a495c902c597278eee542b990b04f",
"assets/assets/nocode-rebels-logo.jpeg": "592a495c902c597278eee542b990b04f",
"assets/assets/598shots_so.png": "f64d6742ee154d72983f26b3b2c37719",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

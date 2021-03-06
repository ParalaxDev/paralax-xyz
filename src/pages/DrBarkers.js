import ScrollingHeader from '../components/ScrollingHeader'
import Heading from '../components/Heading'
import React, { useEffect } from 'react'
// import React from 'react'
import Gallery from '../components/Gallery';

import '../styles/basicStyling.scss'
import '../styles/gallery.scss'


import titleThumbnail from '../images/drbarkers.png'
import Collapseable from '../components/Collapseable';
import Section from '../components/Section';
import Index from '../components/Index';
import Image from '../components/Image';
import Navbar from '../components/Navbar';
import Spacer from '../components/Spacer'

import Subsection from '../components/Subsection';


const moodboardImages = [
    'https://i.pinimg.com/474x/6e/83/1f/6e831f00afadee6872f4fa1000687971.jpg',
    'https://i.pinimg.com/474x/33/31/83/3331836d1f3147b94d2d943f6dc6a4d8.jpg',
    'https://i.pinimg.com/474x/2a/09/96/2a0996c5764b866c106b9ace8a08eb51.jpg',
    'https://i.pinimg.com/474x/78/20/ae/7820ae8b82ea565c00791d1246ce260f.jpg',
    'https://i.pinimg.com/474x/04/8c/81/048c812457101d8c61bd58ebb08e0526.jpg',
    'https://i.pinimg.com/474x/bb/b1/8a/bbb18a664ea4bf2b2568915d1373e1fb.jpg',
    'https://i.pinimg.com/474x/9c/d0/58/9cd0587c8239b18ddc6a1f7c5f31ff2f.jpg',
    'https://i.pinimg.com/474x/fa/70/fa/fa70faf41d52ac6a13b7d2d9e2b53873.jpg',
    'https://i.pinimg.com/474x/ad/4c/bc/ad4cbc2b571c1570d20a6a95534a9acd.jpg',
    'https://i.pinimg.com/474x/70/14/6f/70146f7a002e4058c4d79efe73b61541.jpg',
    'https://i.pinimg.com/474x/de/5b/6a/de5b6a0ffa5ffd3c0710f7db561db0a4.jpg',
    'https://i.pinimg.com/474x/cf/4b/e8/cf4be8d97e313687f0df35264fd42768.jpg',
    'https://i.pinimg.com/474x/0e/5d/2c/0e5d2c628a102eba97411deca54079e3.jpg',
    'https://i.pinimg.com/474x/43/05/b4/4305b4afff7ed3533d6f102e6303f7bb.jpg',
    'https://i.pinimg.com/474x/6f/bb/04/6fbb041c5d0ec95b09aa1d0930b5da8d.jpg',
    'https://i.pinimg.com/474x/6f/c8/a5/6fc8a5a39029d0268a91aebb97d8ec28.jpg',
    'https://i.pinimg.com/474x/4d/58/2a/4d582aa6220149f5f1c85c081af8e779.jpg',
    'https://i.pinimg.com/474x/b5/1a/08/b51a0870acb4a8347da6bbdd3abbae07.jpg',
    'https://i.pinimg.com/474x/db/58/e8/db58e823a298b3b3b1f8bb7ac554a8c2.jpg',
    'https://i.pinimg.com/474x/50/aa/53/50aa532adbaf14e76b7dc682ee00d9e1.jpg',
    'https://i.pinimg.com/474x/86/48/89/86488938bcbbde5e76aa98b312a8e759.jpg',
    'https://i.pinimg.com/474x/a1/73/95/a17395b4a16a70e2a944e2a51ab45e42.jpg',
    'https://i.pinimg.com/474x/b1/27/0a/b1270a5340af84a63e50db6a7940f3c5.jpg',
    'https://pro2-bar-s3-cdn-cf1.myportfolio.com/a21db12f-3a56-4739-a144-6dc87aa0a368/92442fa7-e9e1-4ec8-b932-8d9265c787be_rw_3840.png?h=c3f5cb4237c815d696c0eb5745742dd8',
    'https://pro2-bar-s3-cdn-cf3.myportfolio.com/a21db12f-3a56-4739-a144-6dc87aa0a368/e949411a-cc12-4eaa-9589-9e405bb04352_rw_1920.png?h=b163f8847f2125ee452dc85381f21ef0',
    'https://pro2-bar-s3-cdn-cf3.myportfolio.com/a21db12f-3a56-4739-a144-6dc87aa0a368/ef522edb-b1ee-4918-bbd2-133c70191bd6_rw_3840.png?h=5f32af0fe9ca617df89444c96784e95f',
    'https://pro2-bar-s3-cdn-cf5.myportfolio.com/a21db12f-3a56-4739-a144-6dc87aa0a368/6fd06295-f196-40c0-a589-8380b0be898f_rw_3840.jpg?h=05a9377a7a4fbad4b8e56a42d352d026',
    'https://pro2-bar-s3-cdn-cf6.myportfolio.com/a21db12f-3a56-4739-a144-6dc87aa0a368/770338fe-e5ec-4ae0-9569-4a1e53bc9b53_rw_3840.jpg?h=ef693d623655ef9381184f61654e9f0d',
    'https://pro2-bar-s3-cdn-cf6.myportfolio.com/a21db12f-3a56-4739-a144-6dc87aa0a368/77146ff7-2d9c-476e-9814-b164f9af4d8d_rw_3840.png?h=54ed245123b2619558f1af2ef416389c',
    'https://pro2-bar-s3-cdn-cf6.myportfolio.com/a21db12f-3a56-4739-a144-6dc87aa0a368/76609707-fbb8-41e6-b505-970e94d56c80_rw_3840.png?h=44c785410f315459d1f72583cdf55cf1',
    'https://pro2-bar-s3-cdn-cf.myportfolio.com/a21db12f-3a56-4739-a144-6dc87aa0a368/86ed3f07-1083-4d42-b8ff-1cd08f136443_rw_3840.png?h=bc58f7647303d649197b6bc7b1853907'
]

const primarySourcePhotos = [
    'https://i.ibb.co/vz58dBQ/IMG-20210530-WA0003.jpg',
    'https://i.ibb.co/sHKMMdz/IMG-20210607-WA0000.jpg',
    'https://i.ibb.co/gW4yYvX/IMG-20210701-WA0001.jpg',
    'https://i.ibb.co/VWm8PD0/IMG-20210730-WA0005.jpg',
    'https://i.ibb.co/mBdTPYY/IMG-20210811-WA0003.jpg',
    'https://i.ibb.co/GWbndFS/IMG-20210816-WA0008.jpg',
    'https://i.ibb.co/G5pkLZW/IMG-20210821-WA0003.jpg',
    'https://i.ibb.co/GWd0TtN/IMG-20210825-WA0003.jpg',
    'https://i.ibb.co/kB6Nv9w/IMG-20210826-WA0003.jpg',
    'https://i.ibb.co/xLvmJPn/IMG-20210829-WA0000.jpg',
    'https://i.ibb.co/cvxc5v2/IMG-20210831-WA0004.jpg',
    'https://i.ibb.co/CQBTdBm/IMG-20210904-WA0001.jpg',
    'https://i.ibb.co/DbN4fkK/IMG-20210927-WA0001.jpg',
    'https://i.ibb.co/fHbMCJb/IMG-20210927-WA0004.jpg',
    'https://i.ibb.co/7vkKy68/20210515-122821.jpg',
]

const packagingPrimarySourcePhotos = [
    'https://i.ibb.co/hFQXzq0/20211025-134125.jpg',
    'https://i.ibb.co/br67DWV/20211025-134138.jpg',
    'https://i.ibb.co/SJFGXmW/20211025-134142.jpg',
    'https://i.ibb.co/Jj3RHHS/20211025-134150.jpg',
    'https://i.ibb.co/PYPh1gZ/20211025-134156.jpg',
    'https://i.ibb.co/c1v7Qzq/20211025-134210.jpg',
    'https://i.ibb.co/5WT9WjC/20211025-134215.jpg',
    'https://i.ibb.co/LnQZz7z/20211025-134228.jpg',
    'https://i.ibb.co/wzpfqx6/20211025-134231.jpg',
    'https://i.ibb.co/njp35Nk/20211025-134317.jpg',
    'https://i.ibb.co/C87Vtjy/20211025-134325.jpg',
    'https://i.ibb.co/TWr6t3t/20211025-134334.jpg',
    'https://i.ibb.co/8YJVjD5/20211025-134345.jpg',
    'https://i.ibb.co/0C59K3y/20211025-134405.jpg',
    'https://i.ibb.co/K7234Xx/20211025-134739.jpg',
    'https://i.ibb.co/zbqtzCG/20211025-140206.jpg',
    'https://i.ibb.co/C6PyxqS/20211025-140220.jpg',
    'https://i.ibb.co/wwNRW96/20211025-140233.jpg',
    'https://i.ibb.co/YXjDT0W/20211025-140239.jpg',
    'https://i.ibb.co/vH7LqQ5/20211025-140247.jpg',
    'https://i.ibb.co/HTkyBC4/20211025-140259.jpg',
    'https://i.ibb.co/0D3K15g/20211025-140307.jpg',
    'https://i.ibb.co/nDQj94p/20211025-140322.jpg',
    'https://i.ibb.co/JjWLBHY/20211025-140326.jpg',
    'https://i.ibb.co/jbypBrw/20211025-140329.jpg',
    'https://i.ibb.co/RpR7zX9/20211025-140338.jpg',
    'https://i.ibb.co/0Bj4Nhv/20211025-140350.jpg',
    'https://i.ibb.co/gW2mzqj/20211025-140357.jpg',
    'https://i.ibb.co/PxRLNSN/20211025-140419.jpg',
    'https://i.ibb.co/7NKdnxf/20211025-140422.jpg',
    'https://i.ibb.co/mqHYMhF/20211025-140425.jpg',
    'https://i.ibb.co/Xppr7cz/20211025-140437.jpg',
    'https://i.ibb.co/hK02LCg/20211025-140439.jpg',
    'https://i.ibb.co/wJRXTBZ/20211025-140446.jpg',
    'https://i.ibb.co/BwBRBG9/20211025-140455.jpg',
    'https://i.ibb.co/0YzW4Qj/20211025-140507.jpg',
    'https://i.ibb.co/8zmGRfp/20211025-140514.jpg',
    'https://i.ibb.co/HxBnSmf/20211025-140518.jpg',
    'https://i.ibb.co/vHCj4rv/20211025-140522.jpg',
    'https://i.ibb.co/LdRMTqj/20211025-140532.jpg',
    'https://i.ibb.co/31jkP56/20211025-140540.jpg',
    'https://i.ibb.co/qDQN0Cv/20211025-140556.jpg',
    'https://i.ibb.co/5BdL2MS/20211025-140607.jpg',
    'https://i.ibb.co/JFNHk0B/20211025-140616.jpg',
    'https://i.ibb.co/d5MYmzB/20211025-140624.jpg',
    'https://i.ibb.co/92jB1NG/20211025-140643.jpg',
    'https://i.ibb.co/G3b1Xv0/20211025-140645.jpg',
    'https://i.ibb.co/h7nVsfz/20211025-140648.jpg',
    'https://i.ibb.co/PxBTWzs/20211025-140653.jpg',
    'https://i.ibb.co/mFZrj53/20211025-140655.jpg',
    'https://i.ibb.co/ssgdMR0/20211025-140704.jpg',
    'https://i.ibb.co/C98ZRWG/20211025-140714.jpg',
    'https://i.ibb.co/87hhShN/20211025-140722.jpg',
    'https://i.ibb.co/sC9j8nX/20211025-140739.jpg',
    'https://i.ibb.co/PQYbJQz/20211025-140754.jpg',
    'https://i.ibb.co/hWsmwkK/20211025-140803.jpg',
    'https://i.ibb.co/mz6Vn6Q/20211025-140815.jpg',
    'https://i.ibb.co/Rz7V2nJ/20211025-140832.jpg',
    'https://i.ibb.co/w4Z2Gc9/20211025-140834.jpg',
    'https://i.ibb.co/6XghPhS/20211025-140843.jpg',
    'https://i.ibb.co/tbKxzqS/20211025-140848.jpg',
    'https://i.ibb.co/1fj6FDV/20211025-140853.jpg',
    'https://i.ibb.co/DRJymd3/20211025-140902.jpg',
    'https://i.ibb.co/2hKg6Np/20211025-140911.jpg',
    'https://i.ibb.co/qjDrDL0/20211025-140922.jpg',
    'https://i.ibb.co/ftWNycy/20211025-140932.jpg',
    'https://i.ibb.co/KVkvGnc/20211025-140938.jpg',
    'https://i.ibb.co/5htGtYP/20211025-140943.jpg',
    'https://i.ibb.co/WHy7Qqm/20211025-140950.jpg',
    'https://i.ibb.co/DbqM8zC/20211025-140959.jpg',
    'https://i.ibb.co/3cdQ3xC/20211025-141001.jpg',
    'https://i.ibb.co/SXB25Lx/20211025-141029.jpg',
    'https://i.ibb.co/7YTHw7R/20211025-141031.jpg',
    'https://i.ibb.co/yF5LXVX/20211025-141152.jpg',
    'https://i.ibb.co/2yNqSS3/20211025-141229.jpg',
    'https://i.ibb.co/Y27m8XC/20211025-141254.jpg',
    'https://i.ibb.co/nDb7XbN/20211025-141258.jpg',
    'https://i.ibb.co/F0t7Fvg/20211025-141307.jpg',
    'https://i.ibb.co/syGRNMR/20211025-141310.jpg',
    'https://i.ibb.co/MnRk5Sh/20211025-141317.jpg',
    'https://i.ibb.co/4YM1g2W/20211025-141320.jpg'
]

const artistResearchMediaExperiment = [
    'https://i.ibb.co/dmQGW6n/20211011-123356.jpg',
    'https://i.ibb.co/4tv316z/20211011-123848.jpg',
    'https://i.ibb.co/zmpZcYX/20211011-124811.jpg',
    'https://i.ibb.co/ZKhnnjp/20211011-124817.jpg',
    'https://i.ibb.co/QPNjQkW/20211011-130201.jpg',
    'https://i.ibb.co/v3pd8yy/20211011-130316.jpg',
    'https://i.ibb.co/d7MS5gW/20211011-130455.jpg',
    'https://i.ibb.co/frsy781/20211011-130635.jpg',
    'https://i.ibb.co/56tjRFY/20211011-130637.jpg',
    'https://i.ibb.co/0Bfj1pp/20211011-130938.jpg',
    'https://i.ibb.co/DfVv9WC/20211011-131035.jpg',
    'https://i.ibb.co/pRHJHMq/20211011-131037.jpg',
    // 'https://i.ibb.co/FbpZtV3/20211012-105228.jpg',
    // 'https://i.ibb.co/FbpZtV3/20211012-105228.jpg',
    // 'https://i.ibb.co/hX910Rn/20211013-133938.jpg'
]
const artistResearchDigitalOutcomes = [
    'https://i.ibb.co/GMKg2cZ/2.png',
    'https://i.ibb.co/d7zrpnZ/3.png',
    'https://i.ibb.co/PmzWs4t/4.png',
    'https://i.ibb.co/m6HQcz6/5.png',
    'https://i.ibb.co/bFLFX6S/6.png',
    'https://i.ibb.co/xMH2TLx/7.png',
    'https://i.ibb.co/jvcHGRT/8.png',
    'https://i.ibb.co/BTMy4cZ/9.png',
    'https://i.ibb.co/ZmK9MSD/10.png',
    'https://i.ibb.co/SvtkdSB/11.png',
    'https://i.ibb.co/ss4xQT8/12.png',
    'https://i.ibb.co/SvtkdSB/11.png',
    'https://i.ibb.co/6BCHb9q/13.png',
    'https://i.ibb.co/FqFqQW6/14.png',
    'https://i.ibb.co/Kz1Mkhq/15.png',
    'https://i.ibb.co/Tg12dmN/16.png',
    'https://i.ibb.co/ZN9GLhx/17.png',
    'https://i.ibb.co/rF4SQQM/18.png',
    'https://i.ibb.co/rF4SQQM/18.png',
    'https://i.ibb.co/cbWDdjp/19.png',
    // 'https://i.ibb.co/rF4SQQM/18.png',
]

const logoMoodboard = [
    'https://i.pinimg.com/474x/8a/24/e9/8a24e9897f91030a39bc2fbc52d88ed4.jpg',
    'https://i.pinimg.com/474x/9c/d0/58/9cd0587c8239b18ddc6a1f7c5f31ff2f.jpg',
    'https://i.pinimg.com/474x/62/40/d8/6240d881a3ece4d59249b35f9ff420a0.jpg',
    'https://i.pinimg.com/474x/4e/07/c2/4e07c24e44317ba1129a7cda4406ec62.jpg',
    'https://i.pinimg.com/474x/df/cd/7e/dfcd7e7d98ccfcc59d3550c8ffc91716.jpg',
    'https://i.pinimg.com/474x/b5/33/92/b533920ee75e471a6fb2fb3e7c4297d2.jpg',
    'https://i.pinimg.com/474x/ed/4d/20/ed4d20aa0325dba7b1cc55c4539d3b4d.jpg',
    'https://i.pinimg.com/474x/91/5d/82/915d8216347ab93d1e47714b0ea989de.jpg',
    'https://i.pinimg.com/474x/c3/20/9b/c3209ba804ff8c2187b1123386f2289e.jpg',
    'https://i.pinimg.com/474x/6e/09/37/6e0937a443f991208f026b11eb94142d.jpg',
    'https://i.pinimg.com/474x/8b/1c/0c/8b1c0c57d50822908d3ee0e76eb05291.jpg',
    'https://i.pinimg.com/474x/60/05/62/600562d6b161b6a181174672ea6ea8ab.jpg',
    'https://i.pinimg.com/474x/b1/e6/37/b1e63781c8c297a1fdf8835196cf6b46.jpg',
    'https://i.pinimg.com/474x/d0/f8/71/d0f871a01d5a6e0e61d4bb3d1833921b.jpg',
    // 'https://i.pinimg.com/474x/a1/62/a8/a162a8cfb16e89376ccc2c8c662e1eb5.jpg',
    'https://i.pinimg.com/474x/75/41/b1/7541b1dd8a301b5af0b569a2089fac6c.jpg',
    'https://i.pinimg.com/474x/14/eb/3b/14eb3b0cccc6f6c7afc82e112dc6e1b0.jpg',
    'https://i.pinimg.com/474x/52/d8/37/52d8379682554785260caa81954d8063.jpg',
    'https://i.pinimg.com/474x/64/49/b1/6449b12a5936e6b68249c38e0cd16cb6.jpg',
    'https://i.pinimg.com/474x/18/78/f8/1878f8ae7c2782b1dabf331e4909093b.jpg',
    'https://i.pinimg.com/474x/55/b0/32/55b032f1303c62cc058e7d2b642bceeb.jpg'
]

const infographicsMoodboard = [
    'https://i.pinimg.com/474x/26/a5/23/26a523793fc9b5671ad8ff69902041b8.jpg',
    'https://i.pinimg.com/474x/44/ee/b2/44eeb23fcb8c5991c409719680fa1be1.jpg',
    'https://i.pinimg.com/474x/79/1b/92/791b92403b5d4dcd84091d96e301813a.jpg',
    'https://i.pinimg.com/474x/ea/70/b4/ea70b4b9ce47f2644ed440f36dbe084c.jpg',
    'https://i.pinimg.com/474x/cd/9c/65/cd9c653991c0c5d15d7f18f6b68fe9ed.jpg',
    'https://i.pinimg.com/474x/b7/da/1b/b7da1b5431bf38540ebff44b88d3b6e7.jpg',
    'https://i.pinimg.com/474x/cd/54/28/cd5428fac98dc1aa12efc0a39f67a35c.jpg',
    'https://i.pinimg.com/474x/2e/62/ae/2e62ae55ba56a98b1678fdf1e1a8e3f7.jpg',
    'https://i.pinimg.com/474x/eb/5e/8c/eb5e8c764fcd8408350e18bbc081ab43.jpg',
    'https://i.pinimg.com/474x/5c/84/23/5c8423750828ca53a08e973e60a1a2c4.jpg',
    'https://i.pinimg.com/474x/00/c5/e1/00c5e1a214b37fc22f1fe211df0bf64b.jpg',
    'https://i.pinimg.com/474x/db/2d/87/db2d87e38df30a7130c7f0f6d537a08a.jpg',
    'https://i.pinimg.com/474x/de/ab/e1/deabe10f21f07a42d5acd4865e917b65.jpg'

]

const stickersMoodboard = [
    'https://i.pinimg.com/474x/11/28/46/112846fda0a7a67488bcbf924993a107.jpg',
    'https://i.pinimg.com/474x/51/a4/0d/51a40d60a164613d663feb1ead5398e5.jpg',
    'https://i.pinimg.com/474x/7a/37/cf/7a37cfb071761b36d624d6013a531f3a.jpg',
    'https://i.pinimg.com/474x/4a/ef/c9/4aefc976272a5cb49ace165210bc583a.jpg',
    'https://i.pinimg.com/474x/a3/8e/0f/a38e0f494d37982204062cd016dc364d.jpg',
    'https://i.pinimg.com/474x/5a/5a/d4/5a5ad436f0dd7ae8189eb6e315493b4c.jpg',
    'https://i.pinimg.com/736x/63/95/32/639532ae48c5cf3ff5fe1590eb15026e.jpg',
    'https://www.organising-chaos.com/ekmps/shops/fa10da/images/juice-box-holographic-sticker-1890-p.jpg',
    'https://i.etsystatic.com/15845023/r/il/cef57e/2843786250/il_570xN.2843786250_7l3v.jpg',
    'https://ih1.redbubble.net/image.255399151.8071/st,small,507x507-pad,600x600,f8f8f8.u4.jpg',
    'https://i.etsystatic.com/22641803/r/il/1584e2/2516612888/il_570xN.2516612888_149r.jpg',
    // 'https://i.etsystatic.com/22641803/r/il/1584e2/2516612888/il_570xN.2516612888_149r.jpg',
]

const infographicsExperiments = ['https://i.ibb.co/WGw7V7h/2.png', 'https://i.ibb.co/rd7v5Th/3.png', 'https://i.ibb.co/3vMHb3F/4.png', 'https://i.ibb.co/CP6SZQQ/5.png', 'https://i.ibb.co/ypJcVkB/6.png', 'https://i.ibb.co/R6rq2qm/7.png', 'https://i.ibb.co/KFq5BX8/8.png', 'https://i.ibb.co/Y35Lwwm/9.png', 'https://i.ibb.co/r7GFVd2/10.png', 'https://i.ibb.co/7jtFqGj/11.png', 'https://i.ibb.co/WkBbW8c/12.png', 'https://i.ibb.co/0KJ1fzy/13.png']

const stickerVariants = ['https://i.ibb.co/jwJGQ7q/0-1.png', 'https://i.ibb.co/gJCy84R/2.png', 'https://i.ibb.co/fGgV27x/3.png', 'https://i.ibb.co/vqmHsYJ/4.png', 'https://i.ibb.co/XttY8vh/5-1.png', 'https://i.ibb.co/mcsZw1F/5.png', 'https://i.ibb.co/D9TPmV2/6-1.png', 'https://i.ibb.co/fQgbKJ8/6.png']



// https://i.ibb.co/jwJGQ7q/0-1.png
// https://i.ibb.co/XttY8vh/5-1.png
// https://i.ibb.co/D9TPmV2/6-1.png



const DrBarkers = (props) => {
    
    
    return (
        <>
            <ScrollingHeader title='DR BARKERS' image={titleThumbnail} />
            {/* <Navbar /> */}
            {/* <Index />  */}
            <div className='text-container'>
                
                {/* <Section id='the-brief' > */}
                    <h1>The Brief</h1>
                    <p>A manufacturer requires graphics for a new brand of pet food named 'Dr Barker's'. You might consider approaches such branding and packaging or advertising material. Examples can be seen in packaging designs and in advertising for pet food by Ideas that Kick, 29 Agency, Seymourpowell Ltd, and Break Packaging and Design. When producing your response, carefully consider shelf presence and the target market.</p>
                    <Image className='divider-img' src='https://2.bp.blogspot.com/-ErxBjsRqob8/Xkzmc_awSiI/AAAAAAAGkSI/QO6G4ypy3KUpSaw239LII9459E0cxeEoACLcBGAsYHQ/s1600/2.Pawmona1.jpg' />
                {/* </Section> */}
                {/* <Section id='statement-of-intent' > */}
                    <h1>Statement of Intent</h1>
                    <Image className='left content-img' src='https://1.bp.blogspot.com/-uIq3xvvK1z0/YC4IJ90bkzI/AAAAAAAHnsw/IEllq4G3BPUJGQd21LWgl7KBH8GabIDrwCLcBGAsYHQ/s1600/1-JOMO-Packaging1.jpg' />
                    <p>I chose the Dog Food Brief, as i thought that it related to me far more than any of the others. Whilst I have loved space for a while, and will continue to, I thought that by choosing to make packaging for Dog Food, I would be able to combine by love for my Dog, Milo, and my graphical ability. I also chose it, as upon seeing it, I instantly had loads of ideas (that you can see below), for what I wanted the company and packaging to be. As well as this, I also thought that it would give me the most individual elements to demonstrate my artistic and graphical ability.</p>
                    <br />
                {/* </Section> */}
                <Section id='ideas' >
                    {/* <h1>Ideas</h1> */}
                    {/* <h2>The Company</h2> */}
                    <Subsection id='ideas--the-company' />
                    <p>I wanted to represent Dr Barker's as a family friendly, premium, fun dog food company. I wanted its packaging to be organic, environmentally friendly, and eye catching. To do this, I wanted to primarily use paper bags, and sustainable resources, as the environment is a big aspect to the customer.</p>
                    <p>I chose to use subscriptions boxes as a way to deliver my smaller packages to the customer, allowing more control over the customer experience, and how they view the products. In addition to this, I realised that there is no existing product for this, however there are similar for meal planning such as <a href='https://www.gousto.co.uk/'>Gousto</a> and <a href='https://www.hellofresh.co.uk/'>Hello Fresh</a>, and wanted to base my business off of this. I saw this as a way to deliver to dog owners who want a more personal and customised experience, but don't have the time to go visiting Pet Stores. I wanted to make the shopping experience very convenient for the customer, so it encourages them to shop again.</p>
                    <p>I want Dr Barker's to cater to all types of Dog, from Puppies to Older dogs, and to be nutritious and healthy. I wanted fun looking treats, so it would be fun for a small child to enjoy feeding their dog, but also making it an interesting shape, so its an experience for the dog to eat it.</p>

                    <Image className='divider-img' src='https://ucarecdn.com/538b6797-3bc8-4c85-9852-5c3c2ad2a464/-/quality/lighter/-/format/auto/-/scale_crop/1920x1080/center/' />
                    <Subsection id='ideas--the-packaging' />
                    {/* <h2>The Packaging</h2> */}
                    <Image className='left content-img' src='https://www.petfoodprocessing.net/ext/resources/030921_Packaging-trends_Lead-Srcrangizzz.jpg?t=1615230590&width=1080' />
                    <p>For me, I knew I wanted the packaging to be aesthetic, and environmentally friendly. I knew this would mean using sustainable cardboard, and recycled plastic. As well as this, I wanted to make the treat, dog biscuit and kibble bags all resealable, making it very convenient for the customer, further adding to the environmental aspect. I wanted the packaging very colourful, making it fun for the customer to view. To further use the subscription boxes to my advantage, I want to change the design every month, making it an experience for the customer to open.</p>
                    <p>I also want the packaging to be functional, by making the treat bag into a reusable holder, acting as advertising for when the customer uses out and about, further reducing its environmental impact. I would shape my packaging to give me as much space as possible, giving me more real estate to advertise the brand. I want to make sure the packaging is capable of keeping in the odour and freshness contained, making it more pleasurable to keep in the house.</p>

                    {/* <h2>The Advertising</h2> */}
                    <Subsection id='ideas--the-advertising' />
                    <Image className='right content-img' src='https://i.pinimg.com/474x/85/aa/5f/85aa5f4ca8fa523e27fc61caa93b0df0.jpg' />
                    <p>For the advertising campaign I knew I want to do it via Social Media. In this case I chose Instagram, for its simple advertising style. Instagram uses square images or videos to distribute to the customer in their feed. As well as this, it uses tracking to give the user customised adverts based on their interests. This is useful for me, as it will prioritise sending adverts to dog owners, or people interested in dogs, increasing traffic to the website.</p>
                    <p>I want to make a range of adverts, some displaying the actual subscription, some displaying the individual products, and some using just standard graphics, similar to the artwork I will be using on the packaging. As well as this, I will be creating a series of video adverts, demonstrating all the products, and giving some examples using my own dog. It will also give an example of the experience I want to give to the user.</p>
                    <p>For my moodboard, I created a Pinterest board full of ideas and styles that I love, and want to introduce into my final outcomes. I especially adore the very simple and flat illustrated styles, more specifically from the artist <a href='https://georgetonks.com/'>George Tonks</a>.</p>
                    <Subsection id='ideas--moodboard' />
                    <Gallery imgs={moodboardImages} />
                    <p>I love the very simple and illustrative style, often associated with big tech companies. I particularly love the playful way of using the packaging to display the product, such as with a small perspex window, and the very saturated colours that are used in packaging, as it represents a playful product, which is exactly what I want Dr Barker's to represent. </p>
                    <p>In addition to this, I also like the simple geometric shapes that are used, implying to the customer that the food itself is fuss free and simple, encouraging them to try it out.</p>
                    <br />
                    <br />
                    <br />
                </Section>
                {/* <Section id='moodboard' > */}
                {/* <h1>Moodboard</h1> */}
                {/* </Section> */}
                <Section id='primary-source-photos'  >
                    {/* <h2>Photos of My Dog</h2> */}
                    <Subsection id='primary-source-photos--my-dog' />
                    <Gallery imgs={primarySourcePhotos} />
                    <Subsection id='primary-source-photos--packaging' />
                    <Gallery imgs={packagingPrimarySourcePhotos} />
                    {/* <h2>Photos of Dog Food Packaging</h2> */}
                </Section>
                <Section id='george-tonks' >
                    {/* <h1>Artist Research</h1> */}
                    <Image className='right content-img' src='https://pro2-bar-s3-cdn-cf5.myportfolio.com/a21db12f-3a56-4739-a144-6dc87aa0a368/6fd06295-f196-40c0-a589-8380b0be898f_rw_3840.jpg?h=05a9377a7a4fbad4b8e56a42d352d026' />
                    {/* <p>I chose George Tonks to research for his colourful and approchable art style, which I think represents what I want my brand to be perfectly</p> */}
                    <p>For my Artist Research I chose to look at <a href='https://georgetonks.com/'>George Tonks</a>, an artist who uses digital illustrations to create colourful and inciting designs by combining his passion of the outdoors and wildlife. He uses a very geometric approach to exaggerate their shape and form to show off their diversity. He is 28, and was born in the Cotswolds and has a 1st class BA Hons degree in Illustration from the University of Arts in Bournemouth.</p>
                    {/* <Image className='left content-img' src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/29197c96340871.5eac0a49ce5fa.jpg' /> */}
                    <Image className='left content-img' src='/assets/images/dr-barkers/instagram.png' />
                    <p>He primarily uses Procreate for sketches and illustrator where he refines the line work, and adds colours and textures. However, in his final year project, a short film called <a href='https://www.youtube.com/watch?v=g7vEjF0lebE'>N-Orbit</a> where he uses Blender.</p>
                    <p>I got in touch with him via his Instagram, where he told me that his primary goal is to provide awareness towards local wildlife. He does this by including snippets of interesting information and facts with each piece of art. As well as this, he sells prints and t-shirts of his work, where the product materials are sustainably sourced.</p>
                    <p>His inspiration primarily comes from wildlife which stems from his childhood love of Steve Irwin and documentaries by David Attenborough.</p>
                    <p>I love his style due to how he uses very exaggerated proportions in his animals, emphasising and adding to the character. This helps create a link between the viewer, and makes the animal seem more friendly.</p>
                    <p>In addition to this, he also uses saturated colours, suggesting a very friendly design, which i think matches what I want to represent. He also uses a very flat illustrative style, which has become very popular recently. This is partly why I have chosen this style, as it is something that the audience can relate with, making it more approachable. </p>
                    <Image className='divider-img' src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/07bffa96340871.5eac0a49cf33f.png' />
                    {/* <h2>My Response</h2> */}
                    <Subsection id='geroge-tonks--my-response' />
                    <p>For my Response to my artist, I decided to create a visually similar image, but using this picture of my dog as a reference.</p>
                    <Image className='right content-img' src='https://i.ibb.co/wLPgThG/IMG-20210530-WA0001.jpg' />
                    <Image className='inline content-img' src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/29197c96340871.5eac0a49ce5fa.jpg' />
                    {/* <h2>Non Digital Response</h2> */}
                    <Subsection id='geroge-tonks--non-digital-response' />
                    <p>I first decided to make a non digital collage as it would best represent the simple and flat shapes and colours Tonks uses in his own work, and to help give me an idea of what i wanted to do digitally. </p>
                    <Gallery imgs={artistResearchMediaExperiment} />
                    <p>I started off my cutting out the rough shapes of my dog, and placing them together. I used a contrasting colour for the nose and eyes, to further define its shape, and to add to the recognisability of the dog. I then added some grass and leaves behind him, to add variety to the image. I then added pupils and lines on the nose, to add realism, and to make it more recognisable</p>
                    <Image className='divider-img' src='https://i.ibb.co/hX910Rn/20211013-133938.jpg' />
                    {/* <h2>Digital Response</h2> */}
                    <Subsection id='geroge-tonks--digital-response' />
                    <Gallery imgs={artistResearchDigitalOutcomes} />
                    {/* <h2>Final Outcome</h2> */}
                    <Subsection id='geroge-tonks--final-outcome' />
                    <Image className='right content-img' src='https://i.ibb.co/NVp1WpS/final.png' />
                    <p>For my final artist research outcome, I removed the extra hairs on his stomach, as I thought that it didn't look as similar as my reference photo. This is because my dog has quite smooth hair on the rest of his body, apart from his tummy</p>
                    <p>I'm really happy with how it came out, and I think it represents Tonks' style very well.</p>
                    <Spacer h='50' />
                </Section>
                <Section id='infographics,-logo-and-bag' >
                    <h1>Logo</h1>
                    <Subsection id='logo--logo-moodboard' />
                    <p>I knew I wanted my logo to be very simple, but also quite striking. To do this, I created a moodboard of logos similar to what i desired:</p>
                    <Gallery imgs={logoMoodboard} />
                    <p>I love how they use clean lines and curves to create a very simple logo, but it is very clear what it demonstrates, and is instantly recognisable. I also like the use of negative space used by a lot of them. This further keeps them simple to view, but adds to the audience's viewing experience. I also love the very flat, two-tone style most of these designs embrace. I think it works really well with the simple lines, as though its emulating a pen stroke</p>
                    <p>I knew I wanted to create a logo, to help emphasise brand identity and recognition. It is very important for any company to create an icon, a range of colours, a font, or a distinct style, to help separate itself from its competitors. To do this for Dr Barkers, I knew I would have to separate my brand from the thousands of other independent dog food companies.</p>
                    <p>I wanted my logo to be a circle because I want to later create a stamp out of it. I would use this stamp (along with wax) to seal the box and various packages inside. This is firstly great for the environment as instead of using sellotape, which is made of single use plastic, I would be using wax, which is good for the environment as it can easily decompose, and is sustainable. As well as this, it also gives a more handmade feel, and makes the purchaser feel as though they are helping a niche and small business.</p>
                    <p>A primary way to do this is to create a logo to be associated with. I love the very simple logos as they clearly display what the brand is, and what the audience can expect from it, and so set out to create something similar:</p>
                    <Subsection id='logo--logo-digital-response' />

                    <Image className='inline content-img' style={{ marginRight: '20px' }} src='https://i.ibb.co/Z8SJcbV/1.png' />
                    <Image className='inline content-img' src='https://i.ibb.co/XjVHzmP/2.png' />

                    <Image className='inline content-img' style={{ marginRight: '20px' }} src='https://i.ibb.co/Qn9jtFb/3.png' />
                    <Image className='inline content-img' src='https://i.ibb.co/ctFnCmt/4.png' />
                    <Image className='left content-img' src='https://i.ibb.co/1fCGPd8/logo.png' />
                    <p>This is the design I finally came up with. It was originally just black and white, but didn't like the very harsh result it gave. To fix this, I switched the colour to be a more friendly. I like how the ear breaks up the consistent linework and adds variety to the logo. I also like how the text wraps around the logo, giving it a more traditional style, similar to those like the old Starbucks logo.</p>
                    <Spacer h='22'/>
                    <h1>Infographics</h1>
                    <Subsection id='infographics--infographics-moodboard' />
                    <p>To help with my development of my infographics, I created a moodboard of existing similar images to help inspire me:</p>
                    <Gallery imgs={infographicsMoodboard} />
                    <p>When I started to create my Infographics, I knew I wanted to include it into my final package. To do this, I would include it in the box as a promotional piece. To do this, I wanted to keep it in a 1:1.4142 or a tradition A4 size, similar to the size of my box. This differentiates it from existing Infographics as they are in the portrait format. </p>
                    <p>I like how some of the images in my moodboard have faint patterned background, using icons of paw prints or similar. I really like this as it breaks up the otherwise plain background. They also all have very distinct titles to separate the sections. This makes it easy for the audience to discern the different parts, allowing them to find their particular information far quicker. I also love how they display information using pie charts and and tables, making it more engaging for the audience.</p>
                    <Subsection id='infographics--infographics-digital-response' />
                    <Gallery imgs={infographicsExperiments} columnOverride='2' />
                    <p>I created my final design in <a href='https://affinity.serif.com/en-gb/'>Affinity Designer</a> on my laptop. I wanted to have a very neutral beige colour for my background, to keep it from being very bland and boring. It also better represents a natural, recycled card look, which is ultimately what I want to do. To keep continuity, I also coloured the font a similar darker beige, to add contrast, but to also keep it more interesting, than if I used back and white.</p>
                    <p>To create a vibrant red, I changed the hue of the beige, to link them, and to keep my work consistent. I used this red colour sparingly, to give it more impact. For example, when I want to highlight important information and statistics. When I chose additional colours, I also based them off of the original red colour, but selected them to ensure that they would provide sufficient contrast to the background. </p>
                    <p>I chose the font <a href='https://fonts.google.com/specimen/Inter'>Inter</a>, as it is very easy to read, making it accessible for everyone to read. This is very important for my Infographics, as there is a lot of text, so I wanted to reduce eye strain by using a very legible font.</p>
                    <p>I added the textured background last, as I thought they infographics as a whole looked very empty. I had hoped that it would help to tie all the other elements together, and to fill empty space. Initially it was a far too similar colour to the text, making it very disrupting. To help with this, I lowered the opacity, and made the text far easier to read.</p>
                    <Subsection id='bag--the-bag' />
                    <p>I made a simple Bag that could be included within the box to help promote the brand. The bag itself is very simple, by only using the logo on it. I tried making a worn out version to help give it texture and to not make it as plain, but it just ended up looking odd.</p>
                    <Image className='inline content-img' src='/assets/images/dr-barkers/old-bag.png' />
                    <Image className='left content-img' src='/assets/images/dr-barkers/3d-outcomes/bag-front.jpg' />
                    <Image className='inline content-img' style={{paddingTop: '10px'}} src='/assets/images/dr-barkers/3d-outcomes/bag-hung-up.jpg' />
                    {/* <h1>Stickers</h1>
                    <Subsection id='stickers--stickers-moodboard' />
                    <p>My Dad originally suggested to me that I include stickers in the box, similar to how Apple do with their products. I thought that it was a great idea to give the customer a little extra, as a gift for choosing Dr Barkers. I had seen similar dog brands include stickers as well, so thought that it would be a great thing to include.</p>
                    <p>I then created this small moodboard to help influence my design:</p>
                    <Gallery imgs={stickersMoodboard} />
                    <Subsection id='stickers--stickers-digital-outcomes' />
                    <Gallery imgs={stickerVariants} />
                    <p>In the end, I created 3 different stickers to include in my box, in addition to the products. One of them contained just the logo, one with the surrounding text, and finally an inverted icon. I used <a href='https://affinity.serif.com/en-gb/'>Affinity Designer</a> to create these, and used a mixture of raidial gradients (for the colours), and two concial gradients with screen and difference opacity effects to make it look realistic, and to make it look reflective.</p>
                    <Subsection id='stickers--stickers-non-digital-outcomes' /> */}

                </Section>
                <Section id='the-exam' >
                    <Subsection id='box--the-box' />
                    <p>I knew that the Box would be a major factor for the overall experience of the customer. To help with this, I conducted research on a variety of box types, to see which ones would suit best for my ideals. These varied from boxes with pull tabs and lids. I found a website called <a href='https://www.templatemaker.nl'>templatemaker.nl</a>, that I used to generate all of my box nets.</p>
                    <p>I decided on using a box with a lid. This was partly due to an easier and smaller footprint, allowing me to utilise more cardboard, and thus have a bigger box. This was good as I didn't have any large sizes of cardboard. It also gives a more premium feel, as people associate the opening experience with far more premium products that use the same box type, for example the iPhone and iPad.  </p>
                    <p>However, upon creating a prototype of the box, I found that the lid wasn't staying securely to the base. I originally thought to make the lid smaller, but realised that I don't have the tolerances of smaller card, like Apple do. To compensate for this, I came up with the idea of a sleeve. This would help keep the two elements together, as well as act as a place for me to print branding on, as printing to cardboard in colour is very difficult.</p>

                    <Image className='left content-img' src='/assets/images/dr-barkers/cardboard material.png' />
                    <p>I originally experimented with creating a full length sleeve, but later realised that it covered up too much of the organic cardboard underneath, undermining the companies ideals for an environmentally friendly company. I wanted it to be visible from the first moment that we cared for the environment, and upon showing rustic cardboard, the customers instantly understand this.</p>
                    <p>To allow for rapid prototype of box sizes, and sleeve designs, without having to create a new box every time, I setup a <a href='https://blender.org'>Blender</a> workspace, and 3d modelling a box for me to edit. I aimed to make it as realistic as possible, by using the Cycles X render engine, and a custom procedural cardboard material.</p>
                    <Subsection id='box--the-sleeve-design' />
                    <Image className='left content-img' src='/assets/images/dr-barkers/original design.png' />
                    <p>I created the original design in <a href='https://affinity.serif.com/en-gb/'>Affinity Designer</a>, and then UV mapped it onto the sleeve in Blender. The proportions didn't exactly match up, so I had to correct for some distortion, but eventually got it working. </p>
                    <p>I originally had the idea to have the large logo in the center with the tagline below, and the bone pattern underneath. However, after some iterating, I found that the bone pattern was 1) not visible enough on the actual design, but 2) also interfered with the other elements. </p>
                    <p>To help with this, I removed the pattern on the from side, and increased the contrast on the remaining sides. This had the desired effect, by making the front more legible, but also keeping the link to my <a href='#infographics--infographics-digital-response'>Infographics</a>, helping to create a well-rounded experience for the entire product.</p>
                    <br />
                    <br />
                    <br />
                    <Image className='right content-img' src='/assets/images/dr-barkers/edited design.png' />
                    <p>I then experimented with introducing another element, a small banner stating the tier of the box. This further elevates the premium feel, and makes the customer feel more posh. I used the same colours, and overall style from my infographics, to further solidify the link between them. I also experimented with introducing my <a href='http://localhost:3000/projects/drbarkers#geroge-tonks--digital-response'>Artist Response</a> into the design. At first, I thought that the colours looked way too saturated, but when I placed it on the mockup, it looked slightly less saturated, making it fit well. </p>
                    <p>I also shrunk the logo slightly, helping to make the composition less crowded, but this resulted in their being far too much empty space, so I later repositioned the composition.</p>
                    {/* <Image className='left content-img' src='/assets/images/dr-barkers/redesign.png' /> */}
                    <Image className='left content-img' src='/assets/images/dr-barkers/final design.png' />
                    <p>I then experimented with moving the logo up to the top corner, and shrinking it. This help to shift the focus off of the brand, which I think helps a lot, as it can be very distracting, but I still made sure to keep the logo relevant, as it is incredibly important for brand recognition. </p>
                    <p>This then gave me lots of empty space in the middle, allowing me to reintroduce the illustration of the dog, helping to demonstrate what the box contains, further pushing the brand to the customer, in a subtle way. </p>
                    <p>For the final design, I added some leaves at the base of the Dog, to add some colour, as without it, it was very bland and monotone. I also think that it really helps to add a sense of playfulness to the design. Before, he was just a dog standing very upright, as though he was on guard. Now, however, he looks as though he is playing in the leaves, and makes the customer more confident that my product will make their dog happy.</p>
                    <p>I also made some small quality changes, such as shifting the bones on the side to stop it from clipping with the edge. I also increased the contrast between some of the text and the background. I also experimented with centring the text, and making the artwork bigger, to further promote the illustration</p>
                    <br />
                    <br />
                    <p> I then created some final renders of the box mockup:</p>
                    <Image className='divider-img' src='/assets/images/dr-barkers/final box.png' />
                    <Image className='divider-img' src='/assets/images/dr-barkers/final top box.png' />

                    <Subsection id='box--box-non-digital-outcome' />
                    <p>After the exam I then created the box with the sleeve:</p>
                    <Image className='divider-img' src='/assets/images/dr-barkers/3d-outcomes/top.jpg' />
                    <Image className='divider-img' src='/assets/images/dr-barkers/3d-outcomes/side-profile.jpg' />
                    <Image className='divider-img' src='/assets/images/dr-barkers/3d-outcomes/box-with-milo.jpg' />

                    <Subsection id='biscuit-tub--the-biscuit-tub' />


                    <p>I knew from the start that I wanted to include dog biscuits. My dog loves them, and they are a great way to reward puppies, without overfeeding them with treats. However, I wanted to include them in a unique way, as I knew that a more traditional goodie bag would fit better for the treats, and I didn't want it to become too repetitive. That's when I came up with the idea for a circular tub. I thought that as well as producing an interesting outcome, the customer could also use it as a reusable carry case for biscuits, helping to reduce its environmental footprint.</p>
                    <p>For the design of the box, I drew inspiration from the original box, by using a similar lid system. This was to help keep the box sturdy for repeated use, and so it doesn't wear out easily. It also keeps a sense of consistency between the two products.</p>

                    <h2>The Design</h2>
                    <Image className='left content-img' src='/assets/images/dr-barkers/biscuit-box/1.png' />
                    <p>I started off by creating a basic UV map in <a href='https://affinity.serif.com/en-gb/'>Affinity Designer</a>, to allow me to map pixels on the artwork, to vertices on the model. This was particularly hard, due to the elliptical shape of the lid. </p>
                    <p>The first iteration had the brand logo in the middle, with the flavour and product wrapped around it in a circle. At first, the text was very hard to read, due to the bones being a very similar colour. I first tried fixing this by increasing the disparity of the text, but this just made the text murky and unpleasant, due to how much I would have had to increase the contrast. To try to negate this, I instead increased the contrast slightly, and added a plain ring around the text with no pattern, helping to make it more legible.</p>

                    <Image className='right content-img' src='/assets/images/dr-barkers/biscuit-box/2.png' />
                    <p>For the second iteration, i experimented with including the banners as seen in <a href='#box--the-box'>My Box</a> and <a href='#infographics--infographics-digital-response'>Infographics</a>. However I didn't particularly like this, as it made it very boring, and far too similar to the other products I had already made.</p>
                    <p>As well as this, the banners were too small, making it hard to read, but also resulting in a lot of whitespace around the main content. This felt very distracting to me, and resulted in a very plain and boring box. To help with this, I tried increasing the size of the logo and banners, but that didn't help at all, and instead made the packaging look clumsy, instead of the very professional and sleek look I wanted. </p>

                    <Image className='left content-img' src='/assets/images/dr-barkers/biscuit-box/3.png' />

                    <p>For this iteration, I decided to mix the two previous designs, to help create a coherent design. This is in part due to how the information is displayed to the customer. I made sure that the more important information (the flavour) was in the red banner, as it is incredibly bright and vibrant, attracting the eye immediately. This key, as most dog owners will decide on treats that they find interesting and appetising for themselves.</p>
                    <p>I then included the secondary information (the actual product), in a more subtle colour, and in a way that takes advantage of the uniquely circular box. I then increased the text size, to increase legibility.</p>

                    <Image className='right content-img' src='/assets/images/dr-barkers/biscuit-box/4.png' />

                    <p>I then added some nutritional information on the back of the box. I used a table system similar to that used in my Infographics. I then added a solid background, and increased text contrast to help with legibility. I also added a banner to display the title, to make it eye catching, as it is very important to make the owner aware of this information.</p>
                    <p>I then added a thin, matching red strip along the side of the container, to help breakup the otherwise boring sides. When I create the actual designs, however, I will replace this with a red ribbon, to further emphasise the premium products that the company sells.</p>
                    <br />
                    <p>I finally made some final renders to advertise the product:</p>

                    <Image className='divider-img' src='/assets/images/dr-barkers/biscuit-box/final.png' />
                    <Image className='divider-img' src='/assets/images/dr-barkers/biscuit-box/final top.png' />
                    <Image className='divider-img' src='/assets/images/dr-barkers/biscuit-box/final bottom.png' />

                    <Subsection id='kibble-bag--the-kibble-bag' />

                    <h2>The Bag</h2>


                    <Image className='left content-img' src='/assets/images/dr-barkers/kibble-bag/photoscan.jpg' />

                    <p>I wanted to make a kibble bag, as its a staple for most dog's diets. As well as being nutritious and healthy, it is also highly convenient, and this is something my brand strives to be. However, I couldn't find any free models of a kibble bag to superimpose my design onto. To help with this, I decided that Flour bags and Kibble bags look very similar, in the way they bulge and are folded, and so decided to experiment with photogrammetry to help capture the organic shape.</p>
                    <p>Photogrammetry is the process of taking loads of photos of your item, from various angles, and using a piece of software to process these images and create a model from them. In this case, I places the flour on my table, in a well lit condition, and took approximate 150 photos, and transferred them to my computer for processing</p>
                    <p>I originally used a program called <a href='https://alicevision.org/#meshroom'>Meshroom</a>, but later found out that due to my computer's specs, it was not able to create a depth map without a GPU. to help with this, I found a program with OpenCL support called <a href='https://www.agisoft.com/'>Agisoft Metahape</a>.</p>
                    <Image className='divider-img' src='/assets/images/dr-barkers/kibble-bag/metashape 1.png' />
                    <p>It works by estimating where the photo was taken in 3D space, and then creating a point cloud based off of the locations of the photos. It then samples some points to create a depth map, where it estimates roughly how far away the item is. The more of these you sample, the more accurate, but it can take ages due to CPU intense calculations. It then stitches the photos together to create a high-res texture, however I would be replacing this later, so this was unimportant. I then took the model into <a href='https://github.com/wjakob/instant-meshes'>Instant Meshes</a> to create a more uniform vertex topology, and then into Blender to remove excess geometry like the table. I finally UV unwrapped it, and I was ready to start designing the packaging.</p>

                    <Image className='divider-img' src='/assets/images/dr-barkers/kibble-bag/metashape 2.png' />

                    <h2>The Design</h2>
                    <Image className='left content-img' src='/assets/images/dr-barkers/kibble-bag/1.png' />
                    <p>For the first Iteration, I used a similar styling as the <a href='#biscuit-tub--the-biscuit-tub'>Biscuit Box</a>, with the flavour in the banner, and the product in the less prevalent secondary text. In addition to this, I also reused the same bone pattern that could be seen in the other products, although I later switched this out, as it looked far too repetitive. This was to help keep a sense of consistency that is often seen in premium products, and to not confuse or overwhelm the customer with a very contrasting design.</p>
                    <p>However, I didn't like how prevalent the logo was, and how it didn't help to identify the product you were receiving. Instead of just removing the Logo, I moved it to one of the unused sides, to still represent the brand, but in more of a subtle way. </p>
                    <Spacer h='35' />
                    <Image className='right content-img' src='/assets/images/dr-barkers/kibble-bag/2.png' />
                    {/* <Image className='inline content-img' src='/assets/images/dr-barkers/kibble-bag/2.1.png' /> */}
                    <p>To replace the logo, I added the Illustration I used on the box. I thought this dramatically helped by adding some vibrant colour, rather than the otherwise very duotone colour scheme, and helped to balance the design, making a far more well rounded product. </p>
                    <p>As well as this, by including him in multiple designs, it was suggested that he became mascot for Dr Barkers. I think that this was a great idea, as it creates a friendly and more vibrant image to associate with Dr Barkers, other than the more traditional monotone logo.</p>
                    <Spacer h='45' />
                    <Image className='left content-img' src='/assets/images/dr-barkers/kibble-bag/3.png' />
                    <p>For the nutritional and ingredients sections I decided to place it on the side rather than on the back. This was because there was far too much empty space, and that its overall size fitted far better on a slimmer footprint. I think that this was definitely a good decision, as many people view this information as quite tedious and boring, so making it fit on the back would have been unattractive for the brand.</p>
                    <p>I also used a similar layout and style to represent this information, to keep consistency across the various shapes and sizes of packaging.</p>
                    <Spacer h='45' />

                    <Image className='right content-img' src='/assets/images/dr-barkers/kibble-bag/5.png' />
                    <Image className='inline content-img' src='/assets/images/dr-barkers/kibble-bag/4.png' />
                    <p>I then experimented with different background patterns, as I thought that the bones were becoming too repetitive and boring. I first experimented with creating a grid with a simplified design of the Mascot, but found this to be quite similar to the bones, and didn't seem overly different from a distance. To help with this, I instead tried alternating between a filled and outlined variant, which I think helped to create a far more interesting and engaging pattern, that is visibly different from the previous.</p>
                    <p>I finally made some final renders of the Kibble Bag Mockup:</p>
                    <Image className='divider-img' src='/assets/images/dr-barkers/kibble-bag/final.png' />
                    <Image className='divider-img' src='/assets/images/dr-barkers/kibble-bag/final front.png' />
                    <Image className='divider-img' src='/assets/images/dr-barkers/kibble-bag/final side.png' />

                    <Subsection id='wet-pouch--the-wet-food-pouch' />
                    <p>My dog can sometimes be a picky eater, and so we often mix wet food in with the kibble. This gives the food a far more enticing taste and smell, encouraging him to finish it. It also contains many more nutrients that are lacking in dry food, and so I thought that it would be an interesting product to include.</p>

                    <p>The Pouch's design is very similar to the kibble bag, with very few changes, so here are the final renders:</p>
                    <Image className='divider-img' src='/assets/images/dr-barkers/wet-food-pouch/final.png' />
                    <Image className='divider-img' src='/assets/images/dr-barkers/wet-food-pouch/final front.png' />
                    <Image className='divider-img' src='/assets/images/dr-barkers/wet-food-pouch/final back.png' />

                    <Subsection id='group-renders--the-final-group-renders' />
                    <p>I then created a final composition, including all of the mockups I made during the exam:</p>

                    <Image className='divider-img' src='/assets/images/dr-barkers/final-group-renders/final high res.png' />
                    <Image className='divider-img' src='/assets/images/dr-barkers/final-group-renders/final top.png' />

                </Section>
                <Section id='lucas-zarebinski' >
                    <p>For my second Artist Research, I decided on <a href='https://www.lucaszarebinski.com/'>Lucas Zarebinski</a>. This is because, as I previously stated, that I wanted to delve more into the social media marketing for my company. I would do this through a mixture of mediums including stills of products, and animations.</p>
                    <Image className='left content-img' src='/assets/images/dr-barkers/lucas-zarebinski/nuggets.jpg' />
                    <p>Lucas Zarebinski is a Polish Still Life photographer who specialises in Food, Beauty, Cosmetics and Product Photography. After studying Fine Arts and Photography in Michigan, he moved to New York, where he now creates Product Photography for companies such as Sony, IBM, Target and Pepsi</p>
                    <p>He always wanted to be an artist, as he wanted to encapsulate his creative visions, but he struggled with the more traditional physical mediums. However, his girlfriend introduced him to photography, when he then found out about his skill of still life photography. This allowed him to create stunning photos full of colour and personality, without the need for time being able to draw. He also loves the instantaneous results that a camera gives, allowing him to see if a certain angle or element works, without having to spend hours to create an outcome.</p>
                    <p>He prefers a minimal and clean style, allowing him to create concise images that clearly display the given product. He often uses vibrant colours to help encapsulate and intrigue the audience.</p>
                    <Spacer h='10vh' />
                </Section>
                <Section id='product-animation' >
                    <p>For my final outcome, I wanted to create a more dynamic outcome, as previously, all my other final results have been static renders or posters. To try and remedy this, I wanted to stick with the idea of creating an Instagram advert, but instead create a 3D animation in Blender.</p>
                    <p>I was greatly inspired by Zarebinski's style of sing gravity to advertise the product. To create an interesting spin on this idea, I decided to create a small box of biscuits, which would then open up to release a volcano of doggy treats. To start, I first created a very simple box in Blender, and textured it in Affinity Designer. This process was very similar to what I did for these boxes <a href='#the-exam'>here</a>.</p>
                    <p>I then began to animate the Box. I knew from the beginning that I wanted it to be very playful to help bring the animation to life. To do this, I implemented Squash and Stretch to the box. This would help make it seem far less rigid and stiff, and give it some flexibility. I was able to achieve this using a mixture of keyframes, animation curves and shape keys.</p>

                    <iframe className='embed-video' width="100%" height="500px" src="https://www.youtube.com/embed/rZR9KqcjJPE?loop=1&playlist=rZR9KqcjJPE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                    <p>I knew that I wanted the biscuits to fly out at then end of the boxes jump, so I added some shake to the box, as though it was anticipating the eruption of snacks:</p>

                    <iframe className='embed-video' width="100%" height="500px" src="https://www.youtube.com/embed/MV0PMAAkXRg?loop=1&playlist=MV0PMAAkXRg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                    <p>I then added a particle effect that produces the biscuits, and opened up the top of the box. I also added some squash to the box, as though it was compressing under the force of the biscuits exploding out:</p>

                    <iframe className='embed-video' width="100%" height="500px" src="https://www.youtube.com/embed/O_D-6m83qOk?loop=1&playlist=O_D-6m83qOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                    <p>I then adjusted the camera angle so the audience has a clearer view of the front of the box, and adjusted the particles to allow them to land on the floor:</p>

                    <iframe className='embed-video' width="100%" height="500px" src="https://www.youtube.com/embed/FnOIRNh2600?loop=1&playlist=FnOIRNh2600" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                    <p>To fix the buggy physics that blender simulates with particles, I added a second load of biscuits to replace the particle system at the right time. This gave me much more control over where they landed, and allowed me to edit any biscuits that would land in weird spots.</p>
                    
                    <iframe className='embed-video' width="100%" height="500px" src="https://www.youtube.com/embed/E3yQ03HmWuM?loop=1&playlist=E3yQ03HmWuM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                    <p>I then proceeded to start work on the second part of the animation. For this part, I wanted to give one of the one of the biscuits more character, and to make it jump up, look around, and then jump off to the side. Originally, I would have also animated the rest of the biscuits to follow him, but I was unable to due to time constraints. I continued to use squash and squeeze to further solidify his character, and to make the animation more friendly:</p>
                
                    <iframe className='embed-video' width="100%" height="500px" src="https://www.youtube.com/embed/kMJF1-8fyzI?loop=1&playlist=kMJF1-8fyzI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                    <p>I then combined these two parts, and animated the biscuit to look around before jumping away. I also fixed some bugs with the shadows of the </p>

                    <iframe className='embed-video' width="100%" height="500px" src="https://www.youtube.com/embed/vXyWaYdIZ1I?loop=1&playlist=vXyWaYdIZ1I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                    <p>I then experimented with using different background colours, and by adding an ending with the companies mascot. This would be the final animation that I would use, with only small changes being made.</p>
                    
                    <iframe className='embed-video' width="100%" height="500px" src="https://www.youtube.com/embed/Ef-ZOyv_eeA?loop=1&playlist=Ef-ZOyv_eeA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                
                    <p>Up until now, I had been using Blender's Eevee render engine, which prioritises speed for accuracy. Whilst this was good to see what a certain composition would look like, it's not the best for creating final videos. to help with this, I switched to Blender's cycles render engine, which accurately calculates thousands of light bounces. However, this takes much longer wih the render below taking 3 hours compared to the 5 minutes of the previous animations.</p>
                    <p>In addition to this, Youtube applies lots of compression, and lowers the resolution depending on your internet bandwidth. To view the animations in the best quality, change the quality to 1080p. You can find the playlist full of all the processes <a href='https://www.youtube.com/watch?v=rZR9KqcjJPE&list=PLJHlF1wziMY4jcUkOiZHgzQs_d10eCEUJ'>here</a></p>
                    
                    <h1>Final Render</h1>
                    
                    <iframe className='embed-video' width="100%" height="500px" src="https://www.youtube.com/embed/00OrYSd5Tqk?loop=1&playlist=00OrYSd5Tqk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                    
                
                </Section>
                {/* <div style={{ height: '1000vh' }} /> */}
            </div>
        </>
    )
}

export default DrBarkers
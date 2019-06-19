void function () {
    let duration=0;
    const code=`/*
 * 首先，需要准备耿鬼的背景
 */
.preview{
    background: #000;
}
/*
 * 接下来，画耿鬼的头部
 */
.head{
    width: 280px;
    height: 100px;
    position: relative;
    top: 20px;
}
/*
 * 接下来，画耿鬼的左耳朵
 */
.ear-left{
    border-left: 47px solid transparent;
    border-right: 100px solid transparent;
    border-bottom: 119px solid #706698;
    transform: rotate(-138deg);
    position: absolute;
    top: 30px;
    left: -30px;
}

.ear-left:after{
    content: "";
    border-left: 47px solid transparent;
    border-right: 58px solid transparent;
    border-bottom: 82px solid #706698;
    transform: rotate(-122deg);
    position: absolute;
    top: 70px;
    left: -113px;
}

/*
 * 接下来，画耿鬼的头发
 */
.hair-middle{
    border-left: 47px solid transparent;
    border-right: 88px solid transparent;
    border-bottom: 54px solid #706698;
    transform: rotate(154deg);
    position: absolute;
    top: 71px;
    left: 104px;
}

.hair-middle:before{
    content: "";
    border-left: 47px solid transparent;
    border-right: 88px solid transparent;
    border-bottom: 54px solid #706698;
    transform: rotate(120deg);
    position: absolute;
    top: 0px;
    left: 3px;
}

.hair-middle:after{
    content: "";
    border-left: 47px solid transparent;
    border-right: 88px solid transparent;
    border-bottom: 66px solid #706698;
    transform: rotate(153deg);
    position: absolute;
    top: -27px;
    left: -49px;
}

/*
 * 接下来，画耿鬼的右耳朵
 */
.ear-right{
    border-left: 72px solid transparent;
    border-right: 111px solid transparent;
    border-bottom: 91px solid #706698;
    transform: rotate(182deg);
    position: absolute;
    top: 102px;
    left: 161px;
}

/*
 * 接下来，画耿鬼的小手
 */
.hands{
    position: absolute;
}

/*
 * 接下来，画耿鬼的左手
 */
.hand-left{
    position: absolute;
    width: 93px;
    height: 42px;
    background: #706698;
    top: 143px;
    left: -214px;
    transform: rotate(25deg);
    border-radius: 20% 0 0 20%;
}

.hand-left:before{
    content: "";
    width: 43px;
    height: 43px;
    top: 34px;
    left: -10px;
    position: absolute;
    background: #000;
    border-radius: 50%;
    z-index: 2;
}

.hand-left:after{
    content: "";
    width: 95px;
    height: 44px;
    bottom: -19px;
    right: -28px;
    position: absolute;
    border-radius: 50%;
    transform: rotate(7deg);
    background: #706698;
}

/*
 * 接下来，画耿鬼左手的手指
 */
.finger-left-top{
    position: absolute;
    border-left: 29px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 17px solid #706698;
    top: 1px;
    left: -23px;
    transform: rotate(-181deg);
}

.finger-left-middle{
    position: absolute;
    border-left: 15px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 17px solid #706698;
    top: 12px;
    left: -23px;
    transform: rotate(-204deg);
}

.finger-left-bottom{
    position: absolute;
    border-left: 12px solid transparent;
    border-right: 18px solid transparent;
    border-bottom: 8px solid #706698;
    top: 31px;
    left: -18px;
    transform: rotate(-224deg);
}

/*
 * 接下来，画耿鬼的右手
 */
.hand-right{
    position: absolute;
    width: 116px;
    height: 42px;
    background: #706698;
    top: 227px;
    right: -227px;
    transform: rotate(2deg);
    border-radius: 0 20% 20% 0;
}

.hand-right:before{
    content: "";
    width: 152px;
    height: 43px;
    top: -7px;
    right: 1px;
    position: absolute;
    border-radius: 50%;
    transform: rotate(-2deg);
    background: #706698;
}

.hand-right:after{
    content: "";
    width: 152px;
    height: 43px;
    top: 19px;
    right: 1px;
    position: absolute;
    background: #706698;
    border-radius: 50%;
    transform: rotate(-8deg);
}

/*
 * 接下来，画耿鬼右手的手指
 */
.finger-right-top{
    position: absolute;
    top: -1px;
    right: -18px;
    border-left: 14px solid transparent;
    border-right: 33px solid transparent;
    border-bottom: 17px solid #706698;
    transform: rotate(-6deg);
}

.finger-right-middle{
    position: absolute;
    top: 11px;
    right: -25px;
    border-left: 14px solid transparent;
    border-right: 33px solid transparent;
    border-bottom: 21px solid #706698;
    transform: rotate(-16deg);
}

.finger-right-bottom{
    position: absolute;
    top: 25px;
    right: -16px;
    border-left: 15px solid transparent;
    border-right: 42px solid transparent;
    border-bottom: 14px solid #706698;
    transform: rotate(4deg);
}

/*
 * 接下来，画耿鬼的身体
 */
.body{
    width: 287px;
    height: 298px;
    background: #706698;
    position: absolute;
    top: 100px;
    border-radius: 50%;
}

/*
 * 接下来，画耿鬼的眼睛
 */
.eyes{
    position: relative;
    top: 125px;
    transform: rotate(21deg);
}

/*
 * 接下来，画耿鬼的左眼
 */
.eye-left{
    position: absolute;
    width: 75px;
    height: 50px;
    border-radius: 50%;
    background: #b50000;
    top: -26px;
    left: 53px;
    transform: rotate(19deg) scale(1.4);
}

/*
 * 接下来，画耿鬼的左眼珠
 */
.eye-left:after{
    content: "";
    width: 7px;
    height: 12px;
    position: absolute;
    top: 23px;
    left: 42px;
    background: #000;
    z-index: 1;
    border-radius: 48%;
    transform: rotate(-7deg);
}

.eye-left:before{
    position: absolute;
    content: "";
    width: 75px;
    height: 29px;
    top: -4px;
    left: 10px;
    background: #706698;
    border-radius: 20%;
    transform: rotate(24deg);
    z-index: 2;
}

/*
 * 接下来，画耿鬼的右眼
 */
.eye-right{
    position: absolute;
    width: 75px;
    height: 60px;
    border-radius: 50%;
    background: #b50000;
    top: -43px;
    right: 48px;
    transform: rotate(-39deg) scale(1.4);
}

.eye-right:before{
    position: absolute;
    content: "";
    width: 82px;
    height: 40px;
    top: -6px;
    left: -2px;
    background: #706698;
    border-radius: 16%;
    transform: rotate(-6deg);
    z-index: 2;
}

/*
 * 接下来，画耿鬼的右眼珠
 */
.eye-right::after{
    content: "";
    width: 7px;
    height: 12px;
    position: absolute;
    top: 32px;
    left: 22px;
    background: #000;
    z-index: 1;
    border-radius: 48%;
    transform: rotate(30deg);
}

/*
 * 接下来，画耿鬼的嘴巴
 */
.mouth{
    width: 203px;
    height: 99px;
    border-bottom: 46px solid #fff;
    position: absolute;
    top: 90px;
    left: 33px;
    border-radius: 50%;
    z-index: 1;
    transform: rotate(20deg);
}

/*
 * 接下来，画耿鬼的牙齿
 */
.tooth-left{
    position: absolute;
    width: 10px;
    height: 37px;
    bottom: -32px;
    left: 37px;
    border-radius: 54%;
    transform: rotate(5deg);
    border-left: 3px solid #000;
}

.tooth-left:after{
    content: "";
    position: absolute;
    height: 45px;
    bottom: -9px;
    left: 37px;
    border-radius: 54%;
    transform: rotate(0deg);
    border-right: 3px solid #000;
}

.tooth-middle{
    position: absolute;
    width: 10px;
    height: 46px;
    bottom: -45px;
    left: 113px;
    transform: rotate(1deg);
    border-radius: 18%;
    border-right: 3px solid #000;
}

.tooth-right{
    position: absolute;
    width: 10px;
    height: 37px;
    bottom: -31px;
    left: 156px;
    transform: rotate(1deg);
    border-radius: 37%;
    border-right: 3px solid #000;
}

/*
 * 接下来，画耿鬼的小脚
 */
.footer{
    position: absolute;
}

/*
 * 接下来，画耿鬼的左脚
 */
.foot-left{
    position: absolute;
    top: 280px;
    left: -152px;
}

.leg-left{
    width: 91px;
    height: 119px;
    background: #706698;
    border-radius: 50%;
    transform: rotate(-23deg);
    position: relative;
}

/*
 * 接下来，画耿鬼的右脚
 */
.foot-right{
    position: absolute;
    top: 280px;
    left: -152px;
}

.leg-right{
    width: 103px;
    height: 128px;
    background: #706698;
    border-radius: 50%;
    transform: rotate(18deg);
    position: absolute;
    left: 195px;
    top: 59px;
}

.leg-right:after{
    content: "";
    width: 94px;
    height: 50px;
    position: absolute;
    bottom: 36px;
    left: -43px;
    background: #706698;
    transform: rotate(42deg);
}

/*
 * 好了，这只耿鬼送给你
 */
`;
    
    function writeCSS(prefix,code,fn) {
        let container=document.querySelector('#code');
        let styleTag=document.querySelector('#styleTag');
        let n=0;
        let id=setInterval(()=>{
            n+=1;
            container.innerHTML=code.substring(0,n);
            styleTag.innerHTML=code.substring(0,n);
            container.scrollTop=container.scrollHeight;
            if(n>=code.length){
                window.clearInterval(id);
                fn && fn.call();
            }
        },duration);
    }

    writeCSS('',code);
}.call();
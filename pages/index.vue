<template>
  <div class="container">
    <!-- banner -->
    <swiper :options="swiperOption1" style="width:1900px">
        <swiper-slide>
            <a class="backgroundImage" style="background-image:url(http://www.gorenjechina.cn//storage/images/3616f61abf3a6cdc0b00d1b4fdc2ac8f.jpg)"></a>
        </swiper-slide>
        <swiper-slide>
            <a class="backgroundImage" style="background-image:url(http://www.gorenjechina.cn//storage/images/3616f61abf3a6cdc0b00d1b4fdc2ac8f.jpg)"></a>
        </swiper-slide>
        <swiper-slide>
            <a class="backgroundImage" style="background-image:url(http://www.gorenjechina.cn//storage/images/3616f61abf3a6cdc0b00d1b4fdc2ac8f.jpg)"></a>
        </swiper-slide>
        <swiper-slide>
            <a class="backgroundImage" style="background-image:url(http://www.gorenjechina.cn//storage/images/3616f61abf3a6cdc0b00d1b4fdc2ac8f.jpg)"></a>
        </swiper-slide>
        <swiper-slide>
            <a class="backgroundImage" style="background-image:url(http://www.gorenjechina.cn//storage/images/3616f61abf3a6cdc0b00d1b4fdc2ac8f.jpg)"></a>
        </swiper-slide>
        <swiper-slide>
            <a class="backgroundImage" style="background-image:url(http://www.gorenjechina.cn//storage/images/3616f61abf3a6cdc0b00d1b4fdc2ac8f.jpg)"></a>
        </swiper-slide>
      </swiper>
    <div class="banner-style2" style="">
      <p class="title">— 购买系列产品 —</p>
      <swiper :options="swiperOption2" style="width:1600px">
        <swiper-slide>
          <a class="product-item">
            <img src="~static/img/pic_starck.png" alt="">
            <p class="name">Starck系列</p>
            <Button  shape="circle" :ghost="true">点击了解详情 
              <Icon type="ios-arrow-forward" />
            </Button >
          </a>
        </swiper-slide>
        <swiper-slide>
          <a class="product-item">
            <img src="~static/img/pic_starck.png" alt="">
            <p class="name">Starck系列</p>
            <Button  shape="circle" :ghost="true">点击了解详情 
              <Icon type="ios-arrow-forward" />
            </Button >
          </a>
        </swiper-slide>
        <swiper-slide>
          <a class="product-item">
            <img src="~static/img/pic_starck.png" alt="">
            <p class="name">Starck系列</p>
            <Button  shape="circle" :ghost="true">点击了解详情 
              <Icon type="ios-arrow-forward" />
            </Button >
          </a>
        </swiper-slide>
        <swiper-slide>
          <a class="product-item">
            <img src="~static/img/pic_starck.png" alt="">
            <p class="name">Starck系列</p>
            <Button  shape="circle" :ghost="true">点击了解详情 
              <Icon type="ios-arrow-forward" />
            </Button >
          </a>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev pre-btn" slot="button-prev">
        <img src="~static/img/jiantou_zuo.png" height="68" alt="">
      </div>
      <div class="swiper-button-next next-btn" slot="button-next">
        <img src="~static/img/jiantou_you.png" height="68" alt="">
      </div>
    </div>
    <div class="grid">
      <p class="title">— 收藏大师系列 —</p>

      <div class="banner-series">
        <div class="detail">
          <a href="javascript:void(0);" class="series">Ora-ϊto系列</a>
          <p class="intr">全覆盖式的纯黑、纯白玻璃，让它完美融入不同风格的厨房，让厨房空间浑然一新，带来一丝令人兴奋的未来感，只要感受它、触摸它，就能享受到魔幻般完美的设计。</p>
          <p class="order">01.</p>
        </div>
        <div class="image" style="background-image:url(http://www.gorenjechina.cn//storage/images/3616f61abf3a6cdc0b00d1b4fdc2ac8f.jpg)"></div>
      </div>

      <div class="banner-series flex-left">
        <div class="image" style="background-image:url(http://www.gorenjechina.cn//storage/images/3616f61abf3a6cdc0b00d1b4fdc2ac8f.jpg)"></div>
        <div class="detail">
          <a href="javascript:void(0);" class="series">Starck系列</a>
          <p class="intr">精心打造的细节设计，金属质感的玻璃面板与橙色的门把手， 映射出您生活的热情，与厨房中优雅的质感相融合。 </p>
          <p class="order">02.</p>
        </div>
      </div>
    </div>
    <div class="banner-style3">
      <p class="title">— 体验产品服务 —</p>
      <swiper :options="swiperOption3" style="width:1900px">
        <swiper-slide>
          <a class="experience-item">
            <img src="~static/img/pic_chanpim2.png" alt="">
            <p class="name">“碗”美生活，灵活洗涤 </p>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a class="experience-item">
            <img src="~static/img/pic_chanpin1.png" alt="">
            <p class="name">顶级美食制作之旅 </p>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a class="experience-item">
            <img src="~static/img/pic_chanpin3.png" alt="">
            <p class="name">健康轻食-美学厨房</p>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a class="experience-item">
            <img src="~static/img/pic_chanpin4.png" alt="">
            <p class="name">暖心烹煮</p>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a class="experience-item">
            <img src="~static/img/pic_chanpim2.png" alt="">
            <p class="name">“碗”美生活，灵活洗涤 </p>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a class="experience-item">
            <img src="~static/img/pic_chanpin1.png" alt="">
            <p class="name">顶级美食制作之旅 </p>
          </a>
        </swiper-slide>
        <div class="swiper-button-prev pre-btn" slot="button-prev">
          <img src="~static/img/jiantou_zuo.png" height="68" alt="">
        </div>
        <div class="swiper-button-next next-btn" slot="button-next">
          <img src="~static/img/jiantou_you.png" height="68" alt="">
        </div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      swiperOption1: {
        slidesPerView: 1,
        watchSlidesVisibility:true,
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: true//修改swiper的父元素时，自动初始化swiper
      },
      swiperOption2: {
        slidesPerView: 3,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        watchSlidesVisibility:true,
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: true//修改swiper的父元素时，自动初始化swiper
      },
      swiperOption3: {
        slidesPerView: 4,
        spaceBetween:10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        watchSlidesVisibility:true,
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: true//修改swiper的父元素时，自动初始化swiper
      }
    }
  }
}
</script>
<style scoped lang="scss">
  .flex-left{
    justify-content: flex-start;
  }
  
  .banner-style3{
    background-color: #525252;
    height: 585px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title{
      margin-bottom: 81px;
      font-size: 30px;
      font-family: MicrosoftYaHeiLight;
      font-weight: 400;
      color: #FFFFFF;
    }
    .pre-btn{
      left: 24px;
      margin-top:-30px;
    }
    .next-btn{
      right: 24px;
      margin-top:-30px;
    }
    .pre-btn:after, .next-btn:after{
      content:""
    }
    .pre-btn:focus,
    .next-btn:focus{
      outline:none;
    }
    .swiper-slide{
       width: 467.4px !important;
    }
    .swiper-button-next.swiper-button-disabled, 
    .swiper-button-prev.swiper-button-disabled{
      display: none;
    }
  }
  .experience-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 467.4px;
    margin:0 auto;
    .name{
      font-size: 18px;
      font-weight: 400;
      color: #FFFFFF; 
      margin-top:33px;
      text-align: center;
    }
    &:focus{
      outline: none;
    }
  }
  .product-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 525px;
    height: 550px;
    background-color: #292929;
    padding-bottom: 51px;
    margin: 0 auto;
    margin:0 auto;
    &:hover{
      box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.8);
      width: 505px;
      height: 530px;
      margin: 10px auto;
      transition: all 0.3s ease;
      .ivu-btn-ghost.ivu-btn-dashed:hover, 
      .ivu-btn-ghost.ivu-btn-default{
        color:#b59469;
        border-color:#b59469
      }
    }
   .ivu-btn-ghost.ivu-btn-dashed:hover, 
   .ivu-btn-ghost.ivu-btn-default:hover{
      color:#b59469;
      border-color:#b59469
    }
    .name{
      font-size: 26px;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 1;
      margin-bottom: 18.3px;
      margin-top: -20px;
    }
    &:focus{
      outline: none;
    }
  }
  .banner >>> .ivu-carousel-arrow{
      width: 100px;
      height: 100vh;
      border-radius: 0;
      background-color: transparent;
  }
  .banner >>> .ivu-icon{
    font-size: 3em;
  }
  .banner-style2{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: relative;
    height: 783px;
    width: 100%;
    background-color: #535353; /* 浏览器不支持的时候显示 */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('~static/img/bj_1.png');
      .title {
        color: #ffffff;
        // padding-top: 59px;
        text-align:center;
        line-height: 1;
        font-weight: 400;
        font-size: 30px;
        margin-bottom: 70px;
      }
      .backgroundImage{
        width: 525px;
        height: 550px;
      }
      .pre-btn:after, .next-btn:after{
        content:""
      }
      .pre-btn:focus,
      .next-btn:focus{
        outline:none;
      }
      .pre-btn{
        left: 55px;
      }
      .next-btn{
        right: 55px;
      }
      .swiper-button-next.swiper-button-disabled, 
      .swiper-button-prev.swiper-button-disabled{
        display: none;
      }
  }
  .grid{
    background-color: #000000;
    background-image: url('~static/img/bj_2.png');
    height: 1306px;
    .banner-series{
      display: flex;
      justify-content: center;
      margin-bottom: 59px;
      &:last-child{
        margin-bottom: 0;
      }
    }
    
    .title {
        color: #ffffff;
        padding-top: 83px;
        text-align:center;
        line-height: 1;
        font-weight: 400;
        font-size: 30px;
        margin-bottom: 82px;
      }
    .detail{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      height: 497px;
      padding-right: 127px;
      a.series{
        // height: 225px;
        margin-bottom: 85px;
        margin-top: 85px;
        display: flex;
        align-items: center;
        font-size: 36px;
        font-weight: bold;
        color: #B49567;
        border-bottom:0;
        position: relative;
        &:hover{
          &::after{
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #B49567;
          }
        }
      }
      .intr{
        // height: 196px;
        padding-bottom: 71px;
        width: 647px;
        font-size: 24px;
        font-weight: 400;
        color: #C8C8C8;
        line-height: 46px;
      }
      .order{
        font-size: 24px;
        font-weight: 400;
        color: #C8C8C8;
        line-height: 36px;
        text-align: right;
        width: 647px;
        position: relative;
        padding-top: 21px;
        &::before{
          content:"";
          position: absolute;
          right: 0;
          left: 0;
          width: 647px;
          height:1px;
          background-color: #ffffff;
          top: 0;
        }
      }
    }
    .image{
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 817px;
      height: 497px;
    }
    .flex-left{
      .detail{
        align-items: flex-start;
        padding-right:0;
        padding-left: 127px;
        .order{
          text-align: left;
        }
      }
    }
  }
  .backgroundImage{
    display: block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: calc(100vh);// - 145px 菜单高度
  }
</style>

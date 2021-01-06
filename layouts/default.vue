<template>
    <div class="layout">
        <Header :style="{position:'fixed',zIndex: 999,width: '100%',height:'145px'}">
            <Navigator />
        </Header>
        <Content :style="{margin: '0', background: '#fff', minHeight: '500px'}">
            <Nuxt />
        </Content>
      <Footer class="layout-footer-center">
          <div class="footer-content">
            <img src="~static/img/logo2.png" height="79" alt="">
            <div class="link-box">
                <p>
                    <a href="">经销商</a>
                    <a href="">新浪新闻</a>
                </p>
                <p>
                    <a href="">@2021 Gorenje</a>
                    <a href="">站内导航</a>
                    <a href="">个人隐私</a>
                </p>
                <p><a href="">沪ICP备案1721982789号</a></p>
            </div>
            <div class="qrcode">
                <img src="~static/img/pic_chanpin4.png" width="100" height="100" alt="">
                <p>微信扫二维码</p>
            </div>
          </div>
      </Footer>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style scoped>
.layout >>> .ivu-layout-header{
        background:linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.2));
        box-shadow: 1px 16px 20px 0px rgba(0, 0, 0, 0.2);
    }
</style>
<style scoped lang="scss">
    
    .layout{
        border: 1px solid #d7dde4;
        background: rgba(0,0,0,0.5);
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-footer-center{
        background-color: #000000;
        .footer-content{
            width: 80%;
            margin: 0 auto;
            text-align: center;
            height: 269px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .link-box{
                height: 157px;
                padding: 35px 0;
                display: flex;
                align-items:stretch;
                flex-direction: column;
                justify-content: space-between;
                a{
                    margin: 0 14px;
                    color: #ffffff;
                }
            }
        }
        .qrcode{
            color: #c5c2c2;
            margin-right: 100px;
        }
    }
</style>

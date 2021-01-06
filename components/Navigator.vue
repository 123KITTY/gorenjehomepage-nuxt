<template>
    <Menu mode="horizontal" theme="dark" active-name="1" class="panel-menu">
        <Logo />
        <div class="layout-nav">
            <Dropdown :transfer="true" transfer-class-name="opacity-bg" :stop-propagation="true" @on-visible-change="handleOpen($event,'active1')">
                <a href="javascript:void(0)" :class="{'active':active1}" class="menu">
                    产品
                </a>
                <DropdownMenu slot="list" class="submenu-flex">
                    <DropdownItem class="border-r padding-r">
                        <a href="" class="submenu-name">设计系列</a>
                        <DropdownMenu class="third-menu flex-column">
                            <DropdownItem>
                                <a href="">gorenje By Ora-Ïto系列</a>
                            </DropdownItem>
                            <DropdownItem>
                                <a href="">Retro复古冰箱系列</a>
                            </DropdownItem>
                            <DropdownItem>
                                <a href="">Gorenje Lifestyle杂志</a>
                            </DropdownItem>
                        </DropdownMenu>
                        <a href="" class="submenu-name">Gorenje Lifestyle杂志</a>
                    </DropdownItem>
                    <DropdownItem class="padding-l">
                        <a href="" class="submenu-name">厨房电器</a>
                        <DropdownMenu class="third-menu">
                            <DropdownItem>
                                <a href="">嵌入式灶具</a>
                            </DropdownItem>
                            <DropdownItem>
                                <a href="">油烟机</a>
                            </DropdownItem>
                            <DropdownItem>
                                <a href="">微波烤箱</a>
                            </DropdownItem>
                            <DropdownItem>
                                <a href="">保温抽屉</a>
                            </DropdownItem>
                            <DropdownItem>
                                <a href="">嵌入式自动咖啡机</a>
                            </DropdownItem>
                        </DropdownMenu>
                        <a href="" class="submenu-name">冰箱</a>
                        <DropdownMenu class="third-menu">
                            <DropdownItem>
                                <a href="">独立式</a>
                            </DropdownItem>
                            <DropdownItem>
                                <a href="">嵌入式</a>
                            </DropdownItem>
                            <DropdownItem>
                                <a href="">冰箱和冰柜装饰面板</a>
                            </DropdownItem>
                        </DropdownMenu>
                        <a href="" class="submenu-name">洗衣房电器</a>
                        <DropdownMenu class="third-menu">
                            <DropdownItem>
                                <a href="">洗衣机</a>
                            </DropdownItem>
                            <DropdownItem>
                                <a href="">干衣机</a>
                            </DropdownItem>
                            <DropdownItem>
                                <a href="">嵌入式洗衣干衣一体机</a>
                            </DropdownItem>
                        </DropdownMenu>
                    </DropdownItem>
                    <DropdownItem class="padding-l">
                         <a href="" class="submenu-name">小型家用电器</a>
                        <DropdownMenu class="third-menu">
                            <DropdownItem>
                                <a href="">手持料理机</a>
                            </DropdownItem>
                            <DropdownItem>
                                <a href="">多功能料理机</a>
                            </DropdownItem>
                            <DropdownItem>
                                <a href="">烤面包机</a>
                            </DropdownItem>
                            <DropdownItem>
                                <a href="">厨房用电子秤</a>
                            </DropdownItem>
                            <DropdownItem>
                                <a href="">电水壶和咖啡机</a>
                            </DropdownItem>
                        </DropdownMenu>
                        <a href="" class="submenu-name">洗碗机</a>
                        <DropdownMenu class="third-menu">
                            <DropdownItem>
                                <a href="">洗碗机</a>
                            </DropdownItem>
                            <DropdownItem>
                                <a href="">洗碗机装饰面板</a>
                            </DropdownItem>
                        </DropdownMenu>
                         <a href="" class="submenu-name">可选配件</a>
                        <DropdownMenu class="third-menu">
                            <DropdownItem>
                                <a href="">烹饪锅具</a>
                            </DropdownItem>
                            <DropdownItem>
                                <a href="">其他配件</a>
                            </DropdownItem>
                        </DropdownMenu>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Dropdown @on-visible-change="handleOpen($event,'active2')">
                <a href="javascript:void(0)" :class="{'active':active2}" class="menu">
                    品牌故事
                </a>
            </Dropdown>
            <Dropdown @on-visible-change="handleOpen($event,'active3')">
                <a href="javascript:void(0)" :class="{'active':active3}" class="menu">
                    新闻中心
                </a>
            </Dropdown>
            <Dropdown @on-visible-change="handleOpen($event,'active4')">
                <a href="javascript:void(0)" :class="{'active':active4}" class="menu">
                    网点查询
                </a>
            </Dropdown>
            <Dropdown @on-visible-change="handleOpen($event,'active5')">
                <a href="javascript:void(0)" :class="{'active':active5}" class="menu">
                    服务预约
                </a>
            </Dropdown>
            <a class="search-btn" @click.stop="clickSearchBar">
                <Icon type="md-search" />
            </a>
            <div class="search-bar" @click.stop :class="{'showSearchBar':showSearchBar}" >
                 <Form ref="searchForm"  :model="searchForm" :rules="searchFormRule" inline @submit.native.prevent>
                     <FormItem prop="keywords">
                        <Input :focus="searchFocus" @on-focus="handleFocus" search placeholder="请输入关键字搜索" v-model="searchForm.keywords"  :clearable="true" @on-clear="handleclear" @on-search="handleSearch" />
                    </FormItem>
                 </Form>
                 <div v-show="searchHistroy" class="searchHistroy">
                     <p v-for="(item,index) in histroy" :key="index" @click="searchFromHistroy(item)" >{{item}}</p>
                 </div>
            </div>
        </div>
    </Menu>
</template>
<script>
export default {
    data () {
        return {
            active1: false,
            active2: false,
            active3: false,
            active4: false,
            active5: false,
            searchForm: {
                keywords: ''
            },
            searchFormRule: {
                keywords: [
                    { required: false}
                ]
            },
            searchFocus:false,
            showSearchBar:false,
            searchHistroy:false,
            histroy:[
                '嵌入式烤箱',
                '嵌入式烤箱',
                '嵌入式烤箱'
            ]
        }
    },
    mounted(){
        // console.log('mounted')
        let _this = this
        document.addEventListener('click',function(){
            _this.showSearchBar = false
        })
    },
    methods: {
        handleOpen (visible,active) {
            this[active] = visible
        },
        handleSearch(){
            this.$refs['searchForm'].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!：' + this.searchForm.keywords);
                } else {
                    this.$Message.error('Fail!：' + this.searchForm.keywords);
                }
            })
        },
        handleclear(){
            this.$refs['searchForm'].resetFields()
        },
        handleFocus(){
            this.searchHistroy = !this.searchHistroy
        },
        searchFromHistroy(keywords){
            this.searchForm.keywords = keywords
            this.searchFocus = true
            this.handleSearch()
        },
        clickSearchBar(){
            this.showSearchBar = !this.showSearchBar
        }
    }
}
</script>
<style>
   .opacity-bg {
        position: fixed !important;
        left: 0;
        right: 0;
        top: 145px !important;
        width: calc(100% - 1px);
        background-color: #313131 !important;
        opacity: 1;
        margin: 0 auto !important;
        padding: 0 !important;
        left: 1px !important;
        border-radius: 0 !important;
        padding-top: 49px !important;
        max-height: 50vh !important;
    }
    
</style>
<style scoped lang="scss">
    .submenu-flex{
        display: flex;
        justify-items: flex-start;
        flex-wrap: wrap;
        justify-content: center;
        &.right{
            display: flex;
            flex-direction: column;
            height: 300px;
        }
    }
    .panel-menu{
        background:transparent;
        height: auto;
    }
    .ivu-dropdown-rel{
        color:#000;
    }
    .search-bar{
        position: absolute;
        top: 100px;
        transform: translateX(50%);
        right: 50%;
        overflow: hidden;
        height: 0;
        transition: height 0.3s ease;
        &.showSearchBar{
            height: auto;
             .ivu-form{
                height: 42px;
                transition: height 0.3s ease;
             }
        }
        .ivu-form-item{
            margin: 0;
            border-radius: 100px;
            overflow: hidden;
            width: 700px;
            margin-top: 10px;
           
        }
        .searchHistroy{
            background-color: #000;
            color: #fff;
            text-align: left;
            padding: 20px;
            margin-top: -20px;
            max-height: 200px;
            overflow: hidden auto;
            cursor: pointer;
        }
    }
    .layout-nav{
        // width: 600px;
        margin: 0 auto;
        height: 42px;
        line-height: 42px;
        text-align: center;
        .search-btn{
            font-size: 19px;
            color: #ffffff;
            width: 130.3px;
            height: 41.7px;
            display: inline-block;
        }
        a{
            color: #ffffff;
            width: 130.3px;
            height: 41.7px;
            display: inline-flex;
            align-items: flex-end;
            justify-content: center;
        }
        a.active{
            background-color: #313131;
        }
        a.menu:hover{
            background-color: #313131;
        }
        
    }
    .opacity-bg {
        .padding-r{
            padding-right: 100px;
        }
        .padding-l{
            padding-left: 50px;
        }
        .border-r{
            .submenu-name{
                border-bottom-width: 0;
            }
        }
        .submenu-name{
            font-size: 18px;
            font-weight: bold;
            color: #FFFFFF;
            border-bottom: 1px solid #ffffff;
            margin-bottom: 5px;
            display: inline-block;
        }
        .ivu-dropdown-item:hover{
            background:none;
        }
        .border-r {
            position: relative;
            &::after{
                content: "";
                width: 1px;
                height: 272px;
                background-color: #50555B;
                position: absolute;
                right: 0;
                top: 14px;
            }
        }
        .third-menu{
            display: flex;
            justify-items: flex-start;
            flex-wrap: wrap;
            margin-bottom: 60px;
            li.ivu-dropdown-item{
                padding-left: 0;
                padding-right: 0;
                flex: 0 0 110px;
                a{
                    font-size: 16px;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 1;
                    &:hover{
                        color: #B49567;
                    }
                }
            }
        }
        .flex-column{
            flex-direction: column;
            li.ivu-dropdown-item{
                flex: 0 0 37px;
            }
        }
    }
</style>
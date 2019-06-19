        <!-- template -->
        <template >
                <div class="myaso_content">
                        <div class="header">
                            <div class="row_left">
                                <div class="logo">
                                    <img src="../../assets/images/leafleaf.png" alt="">
                                    <p>myaso_aktobe</p>
                                </div>
                                <!-- <a>О нас</a> -->
                            </div>
                            <!-- <div>
                                <h3>Вы заказываете мы вам позвоним</h3>
                            </div> -->
                            <div class="row_right">
                           
                                <div class="busket_header" >
                                    <img class="insta_img" src="../../assets/images/instagram-logo.png">
                                    <a style="cursor:pointer; text-decoration: none" href="https://www.instagram.com/myaso_aktobe/?hl=ru">myaso_aktobe</a>
                                    <div class="count"><p style="color: green">{{this.counter}}</p></div>
                                    <!-- <a class="busket" >Корзина</a> -->
                                    <img @click="busket" src="../../assets/images/basket.png">
                                </div>
                            </div>
                        </div> 
                        <router-view></router-view>
                        <footer>
                            <div class="footer">
                                <p style="font-weight: normal">Разработка &nbsp</p>
                                <img src="../../assets/images/instagram-logo.png">
                                <a style="cursor:pointer; text-decoration: none" href="https://www.instagram.com/encode__/">encode_</a>
                            </div>
                        </footer> 
                </div>                   
        </template>
        <!-- scripts -->
        
        <script>
            export default {
                data() {
                    return {
                        counter: 0,
                    };
                },
                methods: {
                    busket() {
                        this.$router.push({ 
                            path: '/busket'
                        });
                    },
                    SearchOrder(id) {
                        var i = null;
                        for (i = 0; this.data.length > i; i += 1) {
                            if (this.data[i].id === id) {
                                return this.data[i];
                            }
                        }
                        return null;
                    }
                
                },
                
            };
        </script>
        <style scoped lang="scss"> 
              #app {
                  width: 100%;
              }
             .header {
                background-color: #009f3e;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: flex-end;
                padding: 20px;
               
               
            }
            @media only screen and (max-width: 600px) {
                .header {
                    width: 100%;
                }
                .footer {
                    width: 100%;
                }
                footer {
                    width: 100%;
                }
                body {
                    width: 100%;
                }
                .app {
                    width: 100%;
                }
            }
            .header a {
                color: white;
            }

            .row_left {
                display: flex;
                flex-direction: row;
                align-items: center;
            }
            .row_left img {
                width: 22px;
                height: 22px;
            }
            .row_left a {
                padding-left: 30px;
            }
            .row_left p {
                font-size: 14px;
                color: white;
            }
            .row_left .logo {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
            }
            .row_right {    
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }
            .row_right p { 
                color: white;
            }
            .row_right .busket {
                padding-left: 5px;
                cursor: pointer;
                text-decoration: underline;
            }
            .row_right img {
                width: 18px;
                height: 18px;
            }
            p,a{
                font-family: Tahoma, Geneva, sans-serif;
            }
            .myaso_content {
                width: 100%;
            }
            footer {
                background-color: #009f3e;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: center;
                font-weight: bold;
                padding: 20px;
            }
            .footer {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: flex-end;
            }
            .footer img {
                width: 18px;
                height: 18px;
            }
            .footer p, .footer a {
                color: white;
            }
            .busket_header {
                display: flex;
                flex-direction: row;
                align-items: flex-end;
            }
             .busket_header  .insta_img {
                width: 15px;
                height: 15px
            }
            .busket_header  img{
                width: 26px;
                height: 24px;
            }
            .count {
                border-radius: 50%;
                background-color: white;
                padding: 5px;
                width: 10px;
                height: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-left: 5px;
            }
        </style>
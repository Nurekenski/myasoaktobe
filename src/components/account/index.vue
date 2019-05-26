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
                                <img src="../../assets/images/instagram-logo.png">
                                <a style="cursor:pointer; text-decoration: none" href="https://www.instagram.com/myaso_aktobe/?hl=ru">myaso_aktobe</a>
                                <div class="busket_header" >
                                    <div class="count"><p style="color: green">{{this.counter}}</p></div>
                                    <a class="busket" @click="busket">Корзина</a>
                                </div>
                            </div>
                        </div> 
                        <router-view></router-view>
                        <footer>
                            <div class="footer">
                                <p>Разработка &nbsp</p>
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
                        data:[
                            {"id":"1","name":"Сиыр еті - Говядина", "amount":"15-23кг","cost":"1700тг/кг","image":require("../../assets/images/cow.jpg")}, 
                            {"id":"2","name":"Жылқы еті - Конина", "amount":"17-25кг","cost":"1800тг/кг","image":require("../../assets/images/horse.jpg")},
                            {"id":"3","name":"Сиыр/Говядина: Тіл/Язык", "amount":"1-1,5кг","cost":"1700тг/кг","image":require("../../assets/images/til.jpg")},
                            {"id":"4","name":"Сиыр/Говядина: Өкпе бауыр жүрек", "amount":"6-10кг","cost":"700тг/кг","image":require("../../assets/images/bauir.jpg")},
                            {"id":"5","name":"Сиыр/Говядина: Бас", "amount":"1-шт/1 дана","cost":"6000тг","image":require("../../assets/images/horse.jpg")},
                            {"id":"6","name":"Қымыз", "amount":"1-шт/1 дана","cost":"1000тг/кг","image":require("../../assets/images/horse.jpg")},
                            {"id":"7","name":"Айран", "amount":"1-шт/1 дана","cost":"1000тг/кг","image":require("../../assets/images/horse.jpg")},
                            {"id":"8","name":"Қаймақ", "amount":"1-шт/1 дана","cost":"1000тг/кг","image":require("../../assets/images/horse.jpg")}   
                        ],
                   
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
             .header {
                background-color: #009f3e;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
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
                align-items: flex-start;
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
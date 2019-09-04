        <template>
            <div class="body" >
                <div class="busket">
                    <img src="../../assets/images/left-arrow.png" class="back" @click="Back" >
                    <div class="buskets" v-for="item in this.allorder" :key="item">
                        <img v-bind:src="item.image" >
                        <div class="info">
                            <p class="title">{{item.name}}</p>
                            <p>{{item.amount}}</p>
                            <p>{{item.cost}}</p>
                            <input type="number" name="quantity" min="1" max="10" v-model="item.count">
                        </div> 
                      
                    </div>
                    <div v-if="this.loader==true" class="loading">
                            <img src="../../assets/images/loader_order.gif">
                    </div>
                    <div v-else>
                        <center><p class="oformit_zakaz">{{this.information}}</p></center>
                    </div>
                    
                    <p class="oformit_zakaz">Оформить заказ</p>
                    <form>
                        <div class="order_form">
                            <input placeholder="Имя" v-model="order.name">
                            <input placeholder="Телефон"  v-model="order.phone">
                            <input placeholder="Адрес"  v-model="order.adress">
                            <input placeholder="Комментарий"  v-model="order.comment">
                        </div>
                    </form>
                    <button @click="SendOrder">
                                Отправить
                    </button>
                </div>
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
                            {"id":"5","name":"Сиыр/Говядина: Бас", "amount":"1-шт/1 дана","cost":"5000тг/кг","image":require("../../assets/images/horse.jpg")},
                            {"id":"6","name":"Қымыз", "amount":"1-шт/1 дана","cost":"1000тг/кг","image":require("../../assets/images/horse.jpg")},
                            {"id":"7","name":"Айран", "amount":"1-шт/1 дана","cost":"1000тг/кг","image":require("../../assets/images/horse.jpg")},
                            {"id":"8","name":"Қаймақ", "amount":"1-шт/1 дана","cost":"1000тг/кг","image":require("../../assets/images/horse.jpg")}   
                        ],
                        information: "",
                        order: {
                            name: "",
                            phone: "",
                            adress: "",
                            comment: "",
                            who: ""
                        },
                        loader: false,
                        object: [],
                        allorder: JSON.parse(localStorage.getItem("order_myaso"))
                    };
                },
                methods: {
                    Back() {
                        this.$parent.orders = JSON.parse(localStorage.getItem("order_myaso"));
                        this.$router.push({ 
                            path: '/'
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
                    },
                    SendOrder(){
                       
                        var obj = {
                            "name": this.order.name,
                            "phone": this.order.phone,
                            "adress": this.order.adress,
                            "comment": this.order.comment,
                            "who": "488"
                        }
                        this.loader = true;
                        this.$http.post('/insert_data/get_order', obj,
                            {
                                headers: {
                                        'Content-Type': 'application/json'
                                }
                            }
                        ).then(res => {
                                this.allorder.forEach(element => {
                                    var product = {
                                         "product_name": element.name,
                                         "amount": element.amount,
                                         "cost": element.cost,
                                         "who": res.data.id
                                    }
                           
                                    this.$http.post('/insert_data/get_order_product/', product,
                                        {
                                            headers: {
                                                'Content-Type': 'application/json'
                                            }
                                        }
                                    ).then(res => {
                                     
                                    }).catch(error => {   
                                        console.log(error);
                                    });
                                });
                            this.information = "Ваш заказ принято мы вам позвоним ждите звонка ...";

                            window.location.assign("https://api.whatsapp.com/send?phone=77074252290&text=I%27m%20interested%20in%20your%20car%20for%20sale%20маган%20ет&source=&data=")
                            this.loader = false;
                        })
                        .catch(error => {   
                           console.log(error);
                        }
                        );
                        
                    }
                },
                beforeMount() {
                  
                }
            };
        </script>
        <style scoped lang="scss"> 
            /*  <---------------------->  */  
            .loading img {
                height: 40px;
                width: 40px;
            }        
            .body {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                padding: 20px;
            }
            .body p {
                color: #009f3e;
            }
            .busket {
                border-radius: 10px;
                background-color: white;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 5px;
            }
            .back {
                align-self: flex-start;
                padding: 10px;
                width: 20px;
                height: 20px;
                cursor: pointer;
            }
            form {
                margin-bottom: 10px;
            }
            button {
                border-radius: 20px;
                width: 55%;
                background-color: #009f3e;
                padding: 8px;
                outline: none;
                color: white;
                border: none;
            }
            .oformit_zakaz {
                font-size: 18px;
                margin-bottom: 10px;
                font-weight: bold;
            }
        
            .buskets {
                width: 90%;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                margin-bottom: 10px;
            }
            .info {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                padding-left: 20px;
            }
            .info p{
                color: #009f3e;
            }
            .buskets input {
                padding: 5px;
                border-radius: 5px;
                outline: none;
                border: 2px solid  #009f3e;
                margin-left: 5px;
            }
            .buskets img {
                width: 110px;
                height: 110px;
                border-radius: 50%;
                border: 5px solid #db2f74;
            }
            .order_form {
                display: flex;
                flex-direction: row;
            }
            .order_form input {
                border-radius: 5px;
                padding: 10px;
                width: 200px;
            }
            .order p {
                margin-bottom: 5px;
                color:  #009f3e;
            }
            .order button {
                margin-bottom: 15px;
            }
            .product {
                width: 50%;
                height: 50%;
                border-radius: 50%;
                margin: 10px;
                border: 5px solid #db2f74;
            }
            .busket button {
                border-radius: 20px;
                width: 55%;
                background-color: #009f3e;
                padding: 8px;
                outline: none;
                color: white;
                border: none;
                margin-bottom: 10px;
            }
            button:hover {
                box-shadow: 0 2px 20px #149c49;
            }
            @media only screen and (max-width: 600px) {

                .busket {
                    width: 100%;
                    margin: 0;
                }
                .order_form {
                    flex-direction: column;
                }
                .order_form input {
                    margin-bottom: 10px;
                    width: 270px;
                }

                
            }
          

        </style>
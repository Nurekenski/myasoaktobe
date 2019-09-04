        <!-- template -->
        <template>
            <div class="body">
              
               
                <div class="order" v-for="item in this.data" :key="item">
                    <img src="../../assets/images/leaf_catalog.png" alt="" class="catalog_img">
                    <img v-bind:src="item.image" class="product">
                    <p class="title">{{item.name}}</p>
                    <p>{{item.amount}}</p>
                    <p>{{item.cost}}</p>
                     
                    <button @click="Order(item.id)">ХОЧУ</button>
                    <img src="../../assets/images/like.png" alt="" class="like_img"> 
                 
                </div>
            </div>                 
        </template>
        <!-- scripts -->
        <script>
            export default {
                data() {
                    return {
                        data:[
                            {"id":"1","name":"Сиыр еті - Говядина", "amount":"15-17кг","cost":"1700тг/кг","image":require("../../assets/images/cow.jpg"),"count":1}, 
                            {"id":"2","name":"Жылқы еті - Конина", "amount":"20-22кг","cost":"1800тг/кг","image":require("../../assets/images/horse.jpg"),"count":1},
                            {"id":"3","name":"Фарш", "amount":"кг","cost":"2200тг/кг","image":require("../../assets/images/farsh.jpg"),"count":1},
                            {"id":"4","name":"Сиыр/Говядина: Өкпе бауыр жүрек", "amount":"6-10кг","cost":"700тг/кг","image":require("../../assets/images/bauir.jpg"),"count":1},
                            // {"id":"5","name":"Сиыр/Говядина: Бас", "amount":"1-шт/1 дана","cost":"6000тг","image":require("../../assets/images/bas.jpg"),"count":1},
                            {"id":"5","name":"Сиыр/Говядина: Тіл/Язык", "amount":"1-1,5кг","cost":"1700тг/кг","image":require("../../assets/images/til.jpg"),"count":1},
                            {"id":"6","name":"Қымыз", "amount":"1-шт/1 дана","cost":"1000тг/1,5л","image":require("../../assets/images/kymyz.jpg"),"count":1},
                            {"id":"7","name":"Айран", "amount":"1-шт/1 дана","cost":"300тг/л","image":require("../../assets/images/airan.jpg"),"count":1},
                            {"id":"8","name":"Қаймақ", "amount":"1-шт/1 дана","cost":"250тг/л","image":require("../../assets/images/kaimak.jpg"),"count":1}   
                        ],
                        orders: this.checkStorage()
                    };
                },
                methods: {
                    checkStorage() {
                        if(!JSON.parse(localStorage.getItem("order_myaso"))==null) {
                            return JSON.parse(localStorage.getItem("order_myaso"));
                        }
                        else {
                            return [];
                        }
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
                    Order(id) {
                        this.$parent.counter++; 
                        console.log(this.orders===null);
                        if(this.orders===null) {
                            console.log(this.SearchOrder(id));
                            this.orders.push(this.SearchOrder(id));
                            localStorage.setItem('order_myaso', JSON.stringify(this.orders));
                        }
                        else if(this.CheckExist(this.orders,id)) {
                          
                            localStorage.setItem('order_myaso', JSON.stringify(this.orders));
                        }
                        else {
                            this.orders.push(this.SearchOrder(id));
                            localStorage.setItem('order_myaso', JSON.stringify(this.orders));
                        }
                       
                    },
                    CheckExist(array,id) {
                        var setId = [];
                        array.forEach(element => {
                            setId.push(parseInt(element.id))
                        });
                        if(setId.includes(parseInt(id))) {
                          this.SearchOrder(id).count=this.SearchOrder(id).count+1;
                          this.orders[this.orders.indexOf(this.SearchOrder(id))] = this.SearchOrder(id);
                          
      
                           console.log(this.SearchOrder(id));

                           console.log(this.orders.indexOf(this.SearchOrder(id)));
                           return true;
                        }
                        else {
                          return false
                        }
                    }
                }
            };
        </script>
        <style scoped lang="scss"> 
            /*  <---------------------->  */  
            .body {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                padding: 20px;
            }
            .order {
                border-radius: 10px;
                background-color: white;
                width: 23%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 5px;
            }
            .order .catalog_img {
                align-self: flex-start;
                padding: 20px;
                width: 25px;
                height: 25px;
                cursor: pointer;
            }
           
            .order .like_img {
              
                width: 25px;
                height: 25px;
                padding: 10px;
               
            }
            .order p {
                margin-bottom: 5px;
                color:  #009f3e;
            }
            .order button {
                margin-bottom: 15px;
               
            }
            .product {
                width: 200px;
                height: 200px;
                border-radius: 50%;
                margin: 10px;
                border: 5px solid #db2f74;
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
            button:hover {
                box-shadow: 0 2px 20px #149c49;
            }
            .right_group {
                display: flex;
                flex-direction: column;
            }
            .left .product {
                width: 50%;
                border-radius: 45px;
            }
            .right div {
                display: flex;
            
                justify-content: flex-start;
            }
            .right .title {
                font-size: 20px;
                color: black;
            }
            .left_button,.right_button {
                width: 65px;
                height: 65px;
            }
            @media only screen and (max-width: 600px) {
                .body {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 20px;
                }
                .order {
                    border-radius: 10px;
                    background-color: white;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin: 0;
                    margin-bottom: 10px;
                }
             } 

        </style>
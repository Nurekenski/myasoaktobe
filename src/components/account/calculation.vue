<!-- template -->
<template>
        <div class="content">
            <div class="nameMenu">
                <div class="newBorrow">
                    <div class="backButton">
                    <img @click="backMain" src="../../assets/images/back.png">
                    </div>
                    <div>
                    <p>Есептесу</p>
                    </div>
                </div>
            </div>
            <div class="flexInputs">
                <div class="flexInputsLeft">
                            <!-- name -->
                            <div class="formGroup">
                                <!-- <label for="name">{{$t("message.name")}}*</label> -->
                                <label for="name">Аты жөні*</label>
                                <input 
                                id="name"
                                type="text"
                                autocomplete="off"
                                maxlength="20"
                                value = "Маденов Нурбол"
                                >
                            </div>
                            <!-- lastname -->
                            <div class="formGroup">
                                <!-- <label for="lastname">{{$t("message.surname")}}*</label> -->
                                <label for="lastname">Телефон*</label>
                                <input 
                                id="lastname"
                                type="number"
                                autocomplete="off"
                                maxlength="11"
                                value = "87074252290"
                                >
                            </div>
                            <!-- nickname -->
                            <div class="formGroup">
                                <!-- <label for="nickname">{{$t("message.nickname")}}*</label> -->
                                <label for="nickname">Қанша тг*</label>
                                <input 
                                id="nickname"
                                type="text"
                                autocomplete="off"
                                maxlength="20"
                                v-model="calculation.cost"

                                >
                            </div>
                             <div class="formGroup">
                                <!-- <label for="nickname">{{$t("message.nickname")}}*</label> -->
                                <label for="nickname">Қанша берді*</label>
                                <input 
                                id="given"
                                type="text"
                                autocomplete="off"
                                maxlength="20"
                                v-model="calculation.given"
                                @change="givenHandler"
                                >
                            </div>
                             <div class="formGroup">
                                <!-- <label for="nickname">{{$t("message.nickname")}}*</label> -->
                                <label for="nickname">Қанша қалды*</label>
                                <p>{{calculation.ostatok}}</p>
                            </div>
                            <!-- date -->
                            <div class="formGroup">
                                    <!-- <label for="date">{{$t("message.birthday")}}*</label> -->
                                     <label for="date">Қай күні*</label>
                                     <input type="date" value="21.05.1997">
                            </div> 
                            <!-- ким берип жатыр -->
                            <div class="formGroup">
                                <!-- <label for="gender">{{$t("message.gender")}}*</label> -->
                                <label for="gender">Кім беріп жатыр*</label>
                                <select id="gender">
                                <!-- <option value="male">{{$t("message.male")}}</option>
                                <option value="female">{{$t("message.female")}}</option> -->
                                <option value="male">Таңдау</option>
                                <option value="male">Нұрбек</option>
                                <option value="female">Елшат</option>
                                </select>
                            </div>
                            <div class="changeData">
                                <button @click="ok">ЕНГІЗУ</button>
                            </div>
                </div>
            </div>

           
        </div>                   
</template>

<!-- scripts -->

<script>
import Vue from 'vue'
import VueSwal from 'vue-swal'
const options = {
  confirmButtonColor: 'red',
}
Vue.use(VueSwal,options)
    // imports libraries
    import Datepicker from 'vuejs-datepicker';
    import { ru } from 'vuejs-datepicker/dist/locale';

    export default {
        components: {
            Datepicker
        },
        
        data() {
            return {
                date: {
                    value: '',
                    ru: ru,
                    disabledDates: {
                    to: new Date(1902, 1, 1),  
                    from: new Date(2003, 0, 0),
                    },
                },
                calculation : {
                    cost: 23000,
                    ostatok: 0,
                    given: 0
                },
                
            }
        },
        methods: {
            backMain() {
                this.$router.push({ 
                    path: '/'
                });
            },
            givenHandler(){
                this.calculation.ostatok = this.calculation.cost - this.calculation.given;
            },
            ok() {
                 this.$swal("Төленді", "Қалды "+this.calculation.ostatok, "success");
            }
        }
    };
</script>

<!-- style -->
<style>
.inputDate2 {
    padding: 8px;
    border: 1px solid;
    width: 240px;
    border-radius: 3px;
}

.vdp-datepicker__calendar {
    width: 100%;
}
.backButton:hover {
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);  
}
</style>
<style scoped lang="scss"> 
    
    .content {
        width: 100%;
        background: var(--main-white-color);
        flex-wrap: wrap;
        display: flex;
        align-items: center;
        justify-content: center;
        .newBorrow {
            padding: 20px;
        }
        .changeData {          
            margin-bottom: 20px;
           
            button {
                width: 240px;
                color: var(--main-white-color);
                height: 35px;
                border-radius: 5px;
                border: none;
                outline: none;
                background: var(--main-project-color);
                cursor: pointer;
                font-weight: bold;
                font-size: 16px;

                &:hover {
                    background: var(--main-hover-btn-color);
                    transition: 0.3s;
                }
            }
        }
        .nameMenu {
                width: 100%;
                border-bottom: 2px solid var(--main-border-color);

                p {
                    font-weight: bold;
                    align-self: center;
                    margin-left: 80px;
                }
                .newBorrow {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    
                }
                .newBorrow img {
                    width: 25px;
                    height: 25px;
                    
                }
                
        }

       .flexInputs {
           width: 100%;
           padding-top: 20px;
           padding-bottom: 20px;
           display: flex;
           justify-content: flex-start;

           .flexInputsLeft {
               width: 320px;
               margin-left: 20px;
               
               .formGroup {
                    display: flex;
                    flex-direction: column;
                    margin-bottom:10px;
                    width: 300px;   
 
                    input {
                        padding: 8px;
                        border: 1px solid;
                        width: 220px;
                        border-radius: 3px;
                        outline: none;
                    }
                   
                    select {
                        padding: 8px;
                        border: 1px solid;
                        width: 240px;
                        border-radius: 3px;
                        outline: none;
                    }
                    label {
                        margin-bottom: 5px;
                        font-size: 14px;
                        font-weight: bold;
                    }
               }
           }

           .flexInputsRight {
               width: 320px;
               margin-right: 20px;
               
               .formGroup {
                    display: flex;
                    flex-direction: column;
                    margin-bottom:10px;
                    width: 300px;   
                    
                    input {
                        padding: 8px;
                        border: 1px solid;
                        width: 220px;
                        border-radius: 3px;
                        outline: none;
                    }
                    
                    label {
                        margin-bottom: 5px;
                        font-size: 14px;
                        font-weight: bold;
                    }
               }
           }
       }
    }

    // media request
    $bp-normal: 730px;
    $bp-small: 400px;
    
    @media only screen and (max-width: $bp-normal) {
            .content {
                 .flexInputs {
                    justify-content: center;
                    flex-wrap: wrap;

                    .flexInputsLeft {
                        width: 100%;
                        margin-left: 20px;
                        margin-right: 20px;
                    }

                    .flexInputsRight {
                        width: 100%;
                        margin-left: 20px;
                        margin-right: 20px;
                    }
                 }
                
            }
    }

    @media only screen and (max-width: $bp-small) {
            .content {
                 .flexInputs {
                    
                    .flexInputsLeft {
                        width: 100%;
                        margin-left: 20px;
                        margin-right: 20px;

                        .formGroup {
                            width: 100%;
                        }
                    }

                    .flexInputsRight {
                        width: 100%;
                        margin-left: 20px;
                        margin-right: 20px;
                        .formGroup {
                            width: 100%;
                        }
                    }
                 }
               
            }
    }

</style>
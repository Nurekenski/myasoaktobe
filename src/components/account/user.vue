<!-- template -->
<template>
        <div class="content">
             <div class="flexContent">
                    <!-- photos -->
                    <div class="photosMainBlock" style="background:white">
                        <div class="nameMenu">
                        <p>ІЗДЕУ</p>
                        </div>
                        <div class="photoScrollBlock">
                            <div class="labels">
                                <div class="label_search">
                                    <p>Аты жөні</p>
                                    <input placeholder="Аты жөні">
                                </div>
                                <div  class="label_search">
                                    <p>Қай күн аралығы</p>
                                    <input type="date">
                                    <input type="date">
                                </div>
                                <div  class="label_search">
                                    <p>Кім берді</p>
                                    <select>
                                        <option>Тандау</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                                <div  class="label_search">
                                    <p>Телефон</p>
                                    <input placeholder="Телефон">
                                </div>
                                <div class="nextNews">ІЗДЕУ</div>
                            </div>
                        </div>    
                    </div> 
                    <div class="BorrowMainBlock" @click="calculation">
                        <div class="photoScrollBlock">
                            <div class="inform_row">
                                <p class="borrowText">Маденов Нурбол</p>
                                <p class="borrowText"><a href="tel:87074252290">87074252290</a></p>
                            </div>
                            <div class="inform_row">
                                <div>
                                <p class="cost">13 000 тг</p>
                                <p class="borrowText">Алған күні: 25.05.2019</p>
                              
                                </div>
                                <div>
                                <p class="borrowText">Елшат</p>
                                </div>
                            </div>
                        </div>    
                    </div> 
                    <div class="BorrowMainBlock" style="background:#9241af" @click="calculation">
                         <div class="photoScrollBlock">
                             <div class="inform_row">
                                <p class="borrowText">Маденов Нурбол</p>
                                <p class="borrowText"><a href="tel:87074252290">87074252290</a></p>
                            </div>
                            <div class="inform_row">
                                <div>
                                <p class="cost">13 000 тг</p>
                                <p class="borrowText">Алған күні: 25.05.2019</p>
                             
                                </div>
                                <div>
                                <p class="borrowText">Елшат</p>
                                </div>
                            </div>
                        </div>         
                    </div> 
                  
                    <!-- load news -->
                    <!-- <div class="nextNews">{{$t("message.add_news")}}</div> -->
             </div> 
                     
        </div>                   
</template>

<!-- scripts -->
<script>
    // imports scripts
    import VueGallery from 'vue-gallery';
    
    export default {
        data() {
            return {
                images: [
                    'https://dummyimage.com/800/ffffff/000000',
                    'https://dummyimage.com/1600/ffffff/000000',
                    'https://dummyimage.com/1280/000000/ffffff',
                    'https://dummyimage.com/400/000000/ffffff',
                ],
                index: null
            }
        },
        components: {
            'gallery': VueGallery
        },
        methods: {
            calculation(){
                 this.$router.push({ 
                    path: '/calculation'
                });
            }
        }
    };
</script>

<!-- style -->

<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style>

<style scoped lang="scss"> 
    
    .content {
        width: 100%;
        .newBorrow {
            padding: 20px;
        }
        
        .flexContent {
            width: 100%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 20px;

            .nextNews {
                    width: 240px;
                    text-align: center;
                    margin: 0 auto;
                    height: 35px;
                    border-radius: 5px;
                    line-height: 35px;
                    outline: none;
                    color: var(--main-white-color);
                    background: var(--main-project-color);
                    cursor: pointer;

                    &:hover {
                        background: var(--main-hover-btn-color);
                        transition: .3s;
                    }
            }

            .BorrowMainBlock, .photosMainBlock {

                width: 100%;
                background: #ca356f;
                border-radius: 2px;
                padding: 20px;
                margin-bottom: 20px;
                .borrowText {
                    color: white;
                    font-size: 14px;
                }
                a {
                    text-decoration: none;
                    color: white;
                }
                .cost {
                    color: white;
                    font-size: 17px;
                }
                .inform_row {
                    padding-top: 10px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: flex-end;
                }
                .labels {
                    display:flex;
                    flex-direction: column;
                    align-items: center;
                }
                .label_search {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    margin-bottom: 10px;
                }
                .label_search input {
                    padding: 8px;
                    border: 1px solid;
                    width: 220px;
                    border-radius: 3px;
                }
                .label_search select {
                    padding: 8px;
                    border: 1px solid;
                    width: 240px;
                    border-radius: 3px;
                }
                .newsScrollBlock {
                    width: 100%;
                    padding-top: 20px;
                    padding-bottom: 20px;
                    padding-left: 20px;
                    padding-right: 20px;
                }
                .photoScrollBlock {
                    width: 100%;
                    .photoImg {
                        width: 100px;
                        height: 100px;
                        overflow: hidden;
                        border-radius: 5px;
                        background: var(--main-white-color);

                        img {
                             max-height: 100%;
                             border-radius: 5px;
                        }
                    }
                }
                .nameMenu {
                        width: 100%;
                        border-bottom: 2px solid var(--main-border-color);

                        p {
                            font-weight: bold;
                        }
                }
            }
            .mainAvatar {
                height: 203px;
                background: var(--main-white-color);

                .nameProfile {
                        width: 100%;
                        padding: 10px 20px;
                        border-bottom: 2px solid var(--main-border-color);
                        display: none;

                        p {
                            font-weight: bold;
                        }
                }

                .avatarImg {
                    width: 126px;
                    height: 126px;
                    border-radius: 50%;
                    margin: 20px;
                    overflow: hidden;
                    background: var(--main-user-page-color);
                    
                    img {
                        width: 100%;
                        height: 100%;
                        clip-path: circle(74px at center);
                    }
                }

                .btnChange {
                    width: 100%;
                    text-align: center;
                    margin-bottom: 20px;

                    span {
                        cursor: pointer;
                        font-size: 14px;
                    }
                }
            }

            .infoUser {
                    width: 82%;
                    background: var(--main-white-color);
                    margin-left: 20px;

                    .flexFactsShowAndHide {
                        margin-top: 17px;
                    }

                    .nameProfile {
                        width: 100%;
                        padding: 10px 20px;
                        border-bottom: 2px solid var(--main-border-color);

                        p {
                            font-weight: bold;
                        }
                    }

                    .profileFacts {
                        margin: 20px;

                        .name {
                            margin-bottom: 10px;

                            p {
                                font-weight: bold;
                                font-size: 1.2rem;
                            }
                        }

                        .flexFacts {
                            width: 100%;
                            display: flex;
                            justify-content: flex-start;

                            .flexFactsLeft {
                                width: 155px;

                                p {
                                    font-weight: bold;
                                    font-size: 14px;
                                    margin-bottom: 5px;
                                }
                            }

                            .flexFactsRight {
                                width: 200px;

                                p {
                                    font-size: 14px;
                                    margin-bottom: 5px;
                                }
                            }
                        }
                        .btnShow {
                                width: 100%;
                                height: 30px;
                                border: none;
                                outline: none;
                                background: transparent;
                                cursor: pointer;
                                color: var(--main-project-color);
                                margin-top: 11px;
                                font-size: 14px;
                                &:hover {
                                    transition: .3;
                                    border: 1px solid var(--main-project-color);
                                }
                        }
                        
                    }
            }
        }
       
    }

    // media request
    $bp-small: 730px;
    
    @media only screen and (max-width: $bp-small) {
            .content {
                .flexContent {
                    .mFlex {
                        justify-content: center;
                        flex-wrap: wrap;
                    }  
                    .infoUser {
                        width: 100%;
                        margin-left: 0px;

                        .nameProfile {
                            display: none;
                        }
                    }
                    .mainAvatar {
                        width: 100%;
                        display: flex;
                        height: 244px;
                        justify-content: center;
                        flex-wrap: wrap;
                        border-bottom: 2px solid var(--main-border-color);
 
                        .nameProfile {
                            display: block;
                        }
                    }

                    .infoUser {
                        .profileFacts {
                            .flexFacts {
                                .flexFactsLeft {
                                    width: 50%;
                                    p {
                                        font-size: 12px;
                                    }
                                }
                                .flexFactsRight {
                                    width: 50%;
                                    p {
                                        font-size: 12px;
                                    }
                                }
                            }
                            .name {
                                p {
                                    font-size: 1rem;
                                }
                            }
                           
                        }
                    }   
                }
            }  
    }
</style>
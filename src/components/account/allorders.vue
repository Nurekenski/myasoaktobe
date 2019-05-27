  <template>
            <div class="body">
                <img src="../../assets/images/left-arrow.png" class="back" @click="Back" >
                <div class="order" v-for="item in this.data" :key="item">
                    <img v-bind:src="item.image" class="product">
                    <p class="title">{{item.name}}</p>
                    <p>{{item.amount}}</p>
                    <p>{{item.cost}}</p> 
                    <button @click="Order(item.id)">ХОЧУ</button>
                </div>
            </div>                 
</template>

<script>
    export default {
        data() {
            return {
                counter: 0,
            };
        },
        methods: {
            Back() {
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
            }
        
        },
        
    };
</script>
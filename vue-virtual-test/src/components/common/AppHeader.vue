<template>
  <div class="header">
    <div class="top">
        Login<ion-icon name="log-in-outline" class="log-icon"></ion-icon>
    </div>
    <div class="tab-area">
        <router-link to="/">
            <ion-icon name="home-outline" class="home-icon"></ion-icon>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
    justify-content: space-between;
    align-items: center;
    margin: 0;
    height: 80px;
    
}
.top{
    height: 50px;
    background-color: #1DC7BE;
    text-align: right;
}
.tab-area{
    height: 30px;
    background-color: #3BDACA;
    text-align: left;
}
.home-icon{
    font-size: 20px;
    padding: 5px 30px 5px;
    /* border-left : 1px solid white;
    border-top : 1px solid white;
    border-right : 1px solid white; 
    border-radius: 5px 5px 0 0;*/
    border: 1px solid white;
    background-color: white;
}
.log-icon{
    font-size: 30px;
}
</style>
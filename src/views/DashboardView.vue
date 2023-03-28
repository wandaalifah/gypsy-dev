<template>
    <v-app>
        <DefaultLayout>
            <div class="landing">
                <img src="../assets/image/Tarian_Wayang_Orang.png" alt="Tari Wayang Orang" style="width:100%;">
                <div class="landing-caption">
                    <h1>Welcome to Sekar!</h1>
                    <v-btn size="large" variant="outlined">
                        Discover More
                    </v-btn>
                </div>
            </div>
    
        </DefaultLayout>
    </v-app>
</template>

<style>
    .landing {
    position: relative;
    text-align: center;
    color: white;
    }
    .landing-caption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }
</style>

<script>
import DefaultLayout from '../components/DefaultLayout.vue';

export default {
    name: 'DashboarView',
    components: {
        DefaultLayout,
    },
    // data() {
    //     return{
    //         backgroundImage: require('../assets/image/Tarian_Wayang_Orang.png')
    //     }
    // }
}
</script>
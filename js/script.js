var app = new Vue ({
    el: "#app",
    data: {
        emailList: [],
    },
    mounted() {
        // const self = this;
        // // while (this.emailList.length <= 10)
        // for (let i = 0; i < 10; i++){
        //     axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        //     .then(function (response){
        //     self.emailList.push(response.data.response);
        //     console.log(self.emailList);
        // });
        // };
        this.genEmail();

    },
    methods: {
        genEmail(){
                const self = this;
                /* while (this.emailList.length <= 10) */
                for (let i = 0; i < 10; i++){
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(function (response){
                self.emailList.push(response.data.response);
                console.log(self.emailList);
            });
            }
        }
    },
});
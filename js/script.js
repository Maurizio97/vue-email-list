var app = new Vue ({
    el: "#app",
    data: {
        emailList: [],
    },
    mounted() {
        genEmail()
        /* const self = this;
        // for (let i = 0; i < 10; i++)
        while (this.emailList.length <= 10){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(function (response){
            self.emailList.push(response.data.response);
            console.log(self.emailList);
        });
        }; */
    },
    methods: {
        genEmail: function (){
                const self = this;
                // for (let i = 0; i < 10; i++)
                while (this.emailList.length <= 10){
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(function (response){
                self.emailList.push(response.data.response);
                console.log(self.emailList);
            });
            }
        }
    },
});
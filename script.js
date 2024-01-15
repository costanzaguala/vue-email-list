const { createApp } = Vue;

createApp({
    data() {
        return {
            url: 'https://flynn.boolean.careers/exercises/api/random/mail',
            emails: [],
        };
    },
    mounted() {

    for (let i=0; i < 10; i++) {
        axios
        .get(this.url)
        .then((res) => {
            console.log(res.data.response);

            this.emails.push(res.data.response);
            console.log(this.emails)
        });
    }
    }
}).mount('#app')

import axios  from "axios";
axios.interceptors.response.use(resp=>resp,async error =>{
        let refresh=false;
    if (error.response.status===401 && !refresh ){
        refresh=true;
        const response= await axios.post('https://moviesapi.ir/oauth/token',{grant_type,refresh_type},{withCredentials:true});

        if (response.status===200){

            axios.defaults.headers.common['Authorization']=`bearer ${response.data['token']}`

        }

    }

})
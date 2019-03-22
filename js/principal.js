var app=new Vue({
    el :'#app',
    data:{
        lista : [
        
        ],
        name : '',
        average:''
    },
    methods: {
       clicknote: function(){
            statusA=false;
            if(this.average>=12.5){
                statusA=true;
            }
            if(this.name!==""&& this.average!=""){
                this.lista.push({name:this.name,average:this.average,status:statusA});
                this.name="";
                this.average="";
            }
            else{
                alert("Ingrese el nombre y promedio del estudiante")
            }
        }
    },
})
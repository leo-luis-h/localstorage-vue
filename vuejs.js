const app = new Vue({
el: "#app",

data: {
titulo :'gym',
tareas:[],
nuevaTarea:''
},

methods: {
agregarTarea(){
    if(this.nuevaTarea!=""){
    this.tareas.push({
        nombre: this.nuevaTarea,
        estado: false
    })
    this.nuevaTarea=''
    localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
  }
},

editarTarea(indice){
    this.tareas[indice].estado=true
    localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
  
},

eliminarTarea(indice){
    this.tareas.splice(indice,1)
    localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
}
},
created: function(){
    let data = JSON.parse(localStorage.getItem('gym-vue'))
   if(data===null){
    this.tareas=[]
   }else{
    this.tareas=data
   }
}
})
new Vue({
    el: '#shop_list',
    data:{
            item: '',
            items: []
        }
      ,
    methods: {
        addItem() {
          if(this.item != ""){
          this.items.push(this.item)
          this.item = "";
          }else{
            alert("Enter your item")
            return false;
        }
        
        },
        removeItem(){
            while(this.items.length>0){
                this.items.pop();
            }
        },
      
      }
    

}
)

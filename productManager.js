class productManager {
    list
    constructor() {
        this.list = JSON.parse(localStorage.getItem("list"));
    }
    //hiển thị tât cả
    findAll(){
        return this.list
    }
    // thêm vào trang chủ
    add(newProduct){

        this.list.push(newProduct)
        localStorage.setItem("list", JSON.stringify(this.list))
    }
    //tao ra chức nắng xoá sản phẩm
    remove(id){
            let index = this.findIndexById(id)
        this.list.splice(index,1)
        localStorage.setItem("list", JSON.stringify(this.list))
    }
    //tìm vị trí của id
    findIndexById(id){
        console.log(id)
        for (let i = 0; i < this.list.length; i++) {
            console.log(this.list[i].id)
            if( id == this.list[i].id){
                return i
            }

        }
        return -1
    }
    // lấy id thông tin muốm sửa
    findProductById(id){
        let index= this.findIndexById(id)
        console.log(index)
        let product = this.list[index]
        return product;
    }
    // sửa chữa thông tin
    upDate(id,newProduct){
        let index= this.findIndexById(id)
        this.list[index]= newProduct
        localStorage.setItem("list", JSON.stringify(this.list))
    }
    //tạo chức năng tìm kiếm tên học sinh
    searchProduct(name){
        let search=[]
        for (let i=0;i<this.list.length;i++){
            if(this.list[i].name.includes(name)){
                search.push(this.list[i])
            }

        }
        return search
    }
}
let store = new productManager();
// Hien thi tất cả
function showAll(){
        let arr = store.findAll()
    suDung(arr)
}
// tạo hàm arr tái sử dụng
function suDung(arr)  {
    let html=
        `
        <h2>Danh sách sinh viên</h2>
         <table border="1" style="width: 100%">
         <tr>
           <th>Id</th>
            <th>Name</th>
            <th>day</th>
            <th>Lớp </th>
            <th>Imail</th>
            <th>Image</th>
            <th colspan="2">Ation</th>
         <tr/>
           `
    for (let i = 0; i < arr.length; i++) {
        html+=`
         <tr>
            <td>${arr[i].id}</td>
            <td>${arr[i].name}</td>
            <td>${arr[i].day}</td>
            <td>${arr[i].lop} </td>
            <td>${arr[i].email}</td>
            <td> <img src="${arr[i].image}" alt=""> </td>
            <td><button onclick="showFormUpdate(${arr[i].id})">Sửa</button></td>
            <td><button onclick="remove(${arr[i].id})">Xoá</button></td>
         <tr/>
                        `
    }
    html+= `</table>
        `
    document.getElementById("main").innerHTML =html
}
// tạo ra lây  thông tin sinh viên xem sửa
function showFormUpdate(id){
    let oldProduct = store.findProductById(id);
    console.log(oldProduct)
    document.getElementById("main").innerHTML=`
                <h2>Sửa thông tin sinh viên</h2>
     <input type="number" id="id" placeholder="ID" value="${oldProduct.id}">
        <br>
        <input type="text" id="name" placeholder="NAME" value="${oldProduct.name}">
        <br>
        <input type="text" id="day" placeholder="DAY" value="${oldProduct.day}">
        <br>
        <input type="text" id="lop" placeholder="LOP" value="${oldProduct.lop}">
        <br>
        <input type="text" id="email" placeholder="EMAIL" value="${oldProduct.email}">
        <br>
        <input type="text" id="image" placeholder="IMAGE" value="${oldProduct.image}">
        <br>
        <img src="${oldProduct.image}" alt="">
        <br>
        <button onclick="upDate()">Sửa thông tin</button>
    `
}
//sửa chữa thông tin sinh viên
function upDate(){
    let id = +document.getElementById('id').value
    let name = document.getElementById('name').value
    let day = document.getElementById('day').value
    let lop = document.getElementById('lop').value
    let email = document.getElementById('email').value
    let image = document.getElementById('image').value
    let newProduct = new product(id,name,day,lop,email,image)
    store.upDate(id,newProduct)
    alert("sửa thành công")
    showAll()
}
//tạo ra chức nắng xoá sản phẩm
function remove(id){
    let isConfirm = confirm("bạn có đồng ý xoá?")
    if(isConfirm){
        store.remove(id)
        alert("Bạn đã xoá thành công")
        showAll()
    }

}

// tạo trang thêm sinh viên
showAll()
function showFormAdd(){
    document.getElementById("main").innerHTML=`
                <h2>Thêm sinh viên</h2>
     <input type="number" id="id" placeholder="ID">
        <br>
        <input type="text" id="name" placeholder="NAME">
        <br>
        <input type="text" id="day" placeholder="DAY">
        <br>
        <input type="text" id="lop" placeholder="LOP">
        <br>
        <input type="text" id="email" placeholder="EMAIL">
        <br>
        <input type="text" id="image" placeholder="IMAGE">
        <br>
        <button onclick="add()">Thêm sinh viên</button>
    `
}
//tạo thêm sinh viên vào trang chỉ (list)
function add(){
    let id = document.getElementById('id').value
    let name = document.getElementById('name').value
    let day = document.getElementById('day').value
    let lop = document.getElementById('lop').value
    let email = document.getElementById('email').value
    let image = document.getElementById('image').value
    let newProduct = new product(id,name,day,lop,email,image)
    store.add(newProduct)
    alert("Thêm thành công")
    showAll()
}
//tạo chưc nắng tìm kiếm tên sinh viên
function searchProduct(){
    let dulieu = document.getElementById('search').value

    let pr = store.searchProduct(dulieu);
    suDung(pr)

}

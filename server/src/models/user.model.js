import { PrismaClient } from '@prisma/client'
import { log } from 'console';
const prisma = new PrismaClient()
const bcrypt = require('bcryptjs');
const saltRounds = 10;
import jwt from '../services/jwt';


let users = [
    {
        id: 1,
        name: "Abc"
    },
    {
        id: 1,
        name: "Xyz"
    }
];

export default {
read: async () => {
        return {
            status: true,
            messsage: "Read users success !",
            data: users
        }
    }, 
create: async function (newUser) {
        console.log("newUser",newUser);
        try {
           await prisma.users.create({
            data: newUser
           })//tạo user trong database
           //nếu tạo không có lỗi return về
           return {
                status: true,
                message: "Register thành công!",
           }

        }catch(err) {
            console.log(err);
            //nếu lỗi trùng email
            if (err.meta?.target == "users_email_key") {
                try {
                    //tìm email chưa xác nhận trong database
                    let user = await prisma.users.findUnique({
                        where: {
                            email: newUser.email,
                            email_confirm: false
                        }
                    })
                    //nếu không có email chưa kích hoạt trả về đã tồn tại
                    if (!user) {
                        return {
                            status: false,
                            message: "Email đã tồn tại!"
                        }
                    //nếu có email chưa kích hoạt
                    }else {
                        let nowDay = new Date(Date.now());
                        let flag = false;
                        //nếu năm hiện tại bằng năm của tài khoản lúc tạo
                       if (nowDay.getFullYear() == user.create_at.getFullYear() 
                            &&nowDay.getMonth() == user.create_at.getMonth()
                            &&nowDay.getDay() == user.create_at.getDay()
                             ) {
                             //nếu giờ hiện tại bằng giờ của tài khoản lúc tạo
                            if (nowDay.getHours() == user.create_at.getHours()) {
                                //nếu phút hiện tại -phút của tài khoản tạo lớn hơn 5 trả về flag true
                                if (nowDay.getMinutes() - user.create_at.getMinutes() > 5) {
                                    flag = true;
                                //nếu phút hiện tại -phút của tài khoản tạo nhỏ hơn 5 trả về status false
                                }else {
                                    return {
                                        status: false,
                                        message: `Email đã tồn tại nhưng chưa được kích hoạt, sau ${5 - (nowDay.getMinutes() - user.create_at.getMinutes())} phút thử đăng ký lại!`
                                    }
                                }
                            //nếu giờ hiện tại không bằng giờ của tài khoản lúc tạo
                            }else {
                                flag = true;
                            }
                    //nếu năm hiện tại không bằng năm của tài khoản lúc tạo
                       }else {
                        flag = true;
                       }

                       //nếu flag =true xoá tài khoản cũ bằng cách thay đổi email
                       if (flag) {
                        try {
                            console.log("create replace", this)

                            await prisma.users.update({
                                where: {
                                    email: newUser.email
                                },
                                data: {
                                    email: `${Date.now() * Math.random()}@fakemail.com`
                                }
                            })
                            //tạo user mới sau khi xoá user cũ
                            return await this.create(newUser);
                        }catch(err) {
                            // xuất file log
                            //console.log("err loi can xu ly tay", err)
                            return {
                                status: false,
                                message: "Email đã tồn tại!"
                            }
                        }
                       }
                    }


                }catch(err) {
                    return {
                        status: false,
                        message: "Hệ thống bận, thử lại sau!"
                    }
                }
            }

            //nếu không có lỗi trùng email
            return {
                status: false,
                message: "Đăng ký thất bại!"
            }
        }
    },
confirm: async (data) => {
        console.log(data);
        try {
           let user = await prisma.users.update({
            where: {
                email: data.email
            },
            data: {
                emailconfirm: true
            }
           })
           
           return {
                // status: true,
                message: "Confirm email thành công!",
                // data: user
           }
        }catch(err) {
            return {
                status: false,
                message: "Đang"
            }
        }
    },
login: async (loginData) => {
    // console.log("vào model login");
    //     console.log(loginData.type ?{email:loginData.email}:{username:loginData.email});
    //     return

   
        try {
           let user = await prisma.users.findUnique({
            where: loginData.type ?{email:loginData.email}:{username:loginData.email}
            // where: {user_name:"canh"}
           })

          let flag = await bcrypt.compare(loginData.password , user.password);
          let token = jwt.createTokenforever(user)
          if(flag){
            return {
                status: true,
                message: "Login thành công",
                // data: user
                token:token
           }
          }else{
            return {
                status: false,
                message: "Login Thất bại",
                // data: user
           } 
          }
           

        }catch(err) {
            console.log("model err",err);
            return {
                status: false,
                message: "Đang"
            }
        }
    },
tokenlogin: async (loginData) => {
        // console.log("vào model login");
        //     console.log(loginData.type ?{email:loginData.email}:{username:loginData.email});
        //     return
    
        let decode = jwt.verifyToken(loginData)
        console.log(decode,"decode");
            try {
               let user = await prisma.users.findUnique({
                where:{username:decode.username}
                // where: {user_name:"canh"}
               })
    
              let flag = true;
            //   let token = jwt.createTokenforever(user)
              if(flag){
                return {
                    status: true,
                    message: "Login thành công",
                    // data: user
                    // token:token
               }
              }else{
                return {
                    status: false,
                    message: "Login Thất bại",
                    // data: user
               } 
              }
               
    
            }catch(err) {
                console.log("model err",err);
                return {
                    status: false,
                    message: "Đang"
                }
            }
        },
getcategory: async () => {
            console.log("vào get category");
            try{
                return await prisma.category.findMany()
            }
            catch(err){
        console.log("lỗi get category",err);
            }
        
           
            },
getwomen: async () => {
    console.log("vào get women");
    try{
        let findWoman=await prisma.category.findMany({where:{sex:"Women"}})
        let findWoman1=findWoman.map(item=>Number(item.id))
        console.log(findWoman1); 
        
        return await prisma.product.findMany({
         where:{categoryId:{in:findWoman1},delete:null}
        })
    }
    catch(err){
console.log("lỗi getwomen",err);
    }

   
    },
getmen: async () => {
        console.log("vào get men");
        try{
            let findMan=await prisma.category.findMany({where:{sex:"Men"}})
            let findMan1=findMan.map(item=>Number(item.id))
            console.log(findMan1); 
            
            return await prisma.product.findMany({
             where:{categoryId:{in:findMan1},delete:null}
            })
        }
        catch(err){
    console.log("lỗi getmen",err);
        }
    
       
        },
getsinglecard: async (cardid) => {
    try{
        return await prisma.product.findUnique({
            where: {
                id:Number(cardid)
            }
        })
    }
    catch(err){
console.log("lỗi getwomen",err);
    }

    
    },
addtocart: async (usertoken,cardid) => {
    try{
        let decode = jwt.verifyToken(usertoken)
        let addproduct= await prisma.cart.findMany({
            where: {
                userId:Number(decode.id),
                productId:Number(cardid)
            }
        })
        //nếu giá trị trả về mảng rỗng
        if(addproduct.length==0){
            let addproduct0= await prisma.cart.create({
                data: {
                    userId:Number(decode.id),
                    productId:Number(cardid),
                    quantity:1,
                }
            })
            return {
                status:true,
                message:"Thêm sản phẩm thành công"
            }

            //nếu tìm thấy sản phẩm trong giỏ
        }else{
        //     console.log("vào else");
            let addproduct1= await prisma.cart.update({
                where: {
                    id:addproduct[0].id,
                    userId:Number(decode.id),
                    productId:Number(cardid)
                },data:{
                    quantity:Number(addproduct[0].quantity)+1
                }
                }
                )
                return {
                    status:true,
                    message:"Thêm sản phẩm thành công"
                }
        }
    }
    catch(err){
                    console.log("lỗi add to cart",err);
            return {
                        status:false,
                        message:"Hệ Thống bận thử lại sau 2"
                    }


    }

    
    },
getcart: async (usertoken) => {
    try{
        let decode = jwt.verifyToken(usertoken)
        let addProduct = await prisma.cart.findMany({
           include:{
            product:true
           },
           where:{userId:decode.id}
          });
        // console.log("addProduct",addProduct);

        // return
        //nếu giá trị trả về mảng rỗng
        if(addProduct.length==0){
            
            return {
                status:true,
                message:"",
                length:0
            }

            //nếu tìm thấy sản phẩm trong giỏ
        }else{
        //     console.log("vào else");
           
                return {
                    status:true,
                    message:"",
                    length:addProduct.length,
                    data:addProduct
                }
        }
    }
    catch(err){
                    console.log("lỗi add to cart",err);
            return {
                        status:false,
                        message:"Hệ Thống bận thử lại sau 2"
                    }


    }

    
    },
deleteuserproduct:async (usertoken,id) => {
    try{
        let decode = jwt.verifyToken(usertoken)
        let deleteProduct = await prisma.cart.delete({
           where:{userId:decode.id,
                    id:id
                 }
          });
        console.log("addProduct",deleteProduct);

        // return
        //nếu giá trị trả về mảng rỗng

            return {
                status:true,
                message:"",
                length:0
            }

    }
    catch(err){
                    console.log("lỗi deleteuserproduct",err);
            return {
                        status:false,
                        message:"Hệ Thống bận thử lại sau"
                    }


    }

    
    },
adminlogin: async (loginData) => {
        // console.log("vào model login");
        //     console.log(loginData.type ?{email:loginData.email}:{username:loginData.email});
        //     return
    
       
            try {
               let user = await prisma.users.findUnique({
                where: loginData.type ?{email:loginData.email}:{username:loginData.email}
                // where: {user_name:"canh"}
               })
    
              let flag = await bcrypt.compare(loginData.password , user.password);
              let token = jwt.createTokenforever(user)
              if(flag){
                if(user.username=="admin"){
                    return {
                        status: true,
                        message: "Login thành công",
                        // data: user
                        token:token
                   }
                }else{
                    return {
                        status: false,
                        message: "Login Thất bại",
                        // data: user
                   } 

                }
  
              }else{
                return {
                    status: false,
                    message: "Login Thất bại",
                    // data: user
               } 
              }
               
    
            }catch(err) {
                console.log("model err",err);
                return {
                    status: false,
                    message: "Đang"
                }
            }
        },
addnewproduct:async (newproduct) => {
    console.log("newproduct",newproduct);
            try{
                
                let addnew = await prisma.product.create({
                   data:newproduct
                  });
                 return {
                    status:true,
                    message:"Thêm sản phẩm thành công"
                }
                  
            }
            catch(err){
                    console.log("lỗi deleteuserproduct",err);
                return {
                        status:false,
                        message:"Hệ Thống bận thử lại sau"
                        }
        
            }
        
            
            },
admingetmen:async () => {
    console.log("vào get women");
    try{
        let findMan=await prisma.category.findMany({where:{sex:"Men"}})
        let findMan1=findMan.map(item=>Number(item.id))
        console.log(findMan1); 
        
        return await prisma.product.findMany({
         where:{categoryId:{in:findMan1},delete:null}
        })
    }
    catch(err){
console.log("lỗi admingetmen",err);
    }

   
    },
admingetwomen:async () => {
    console.log("vào get women");
    try{
        let findWoman=await prisma.category.findMany({where:{sex:"Women"}})
        let findWoman1=findWoman.map(item=>Number(item.id))
        console.log(findWoman1); 
        
        return await prisma.product.findMany({
         where:{categoryId:{in:findWoman1},delete:null}
        })
    }
    catch(err){
console.log("lỗi admingetmen",err);
    }

   
    },
admingetuser:async () => {
        console.log("vào get women");
        try{
            return await prisma.users.findMany()
        }
        catch(err){
    console.log("lỗi admingetmen",err);
        }
    
       
        },
admineditproduct:async (newproduct) => {
        console.log("newproduct",newproduct);
                try{
                    let oldproduct=await prisma.product.findMany({ where:{id:Number(newproduct.id)}
                    });
                    // console.log(oldproduct); return

                    let editproduct = await prisma.product.update({
                        where:{id:Number(newproduct.id)},
                       data:{
                        title:newproduct.title?newproduct.title:oldproduct[0].title,
                        image:newproduct.image?newproduct.image:oldproduct[0].image,
                        img1:newproduct.img1?newproduct.img1:oldproduct[0].img1,
                        img2:newproduct.img2?newproduct.img2:oldproduct[0].img2,
                        img3:newproduct.img3?newproduct.img3:oldproduct[0].img3,
                        img4:newproduct.img4?newproduct.img4:oldproduct[0].img4,
                        price:newproduct.price?Number(newproduct.price):oldproduct[0].price,
                        actualPrice:newproduct.actualPrice?Number(newproduct.actualPrice):oldproduct[0].actualPrice,
                        categoryId:newproduct.categoryId!="null"?Number(newproduct.categoryId):oldproduct[0].categoryId,
                       }
                      });
                     return {
                        status:true,
                        message:"Update sản phẩm thành công"
                    }
                      
                }
                catch(err){
                        console.log("lỗi admineditproduct",err);
                    return {
                            status:false,
                            message:"Hệ Thống bận thử lại sau"
                            }
            
                }
            
                
    },
adminaddproduct:async (newproduct) => {  
                try{                
                    let editproduct = await prisma.product.create({
                       data:{
                        title:newproduct.title,
                        image:newproduct.image,
                        img1:newproduct.img1,
                        img2:newproduct.img2,
                        img3:newproduct.img3,
                        img4:newproduct.img4,
                        price:Number(newproduct.price),
                        actualPrice:Number(newproduct.actualPrice),
                        categoryId:Number(newproduct.categoryId),
                        delete:null
                       }
                      });
                     return {
                        status:true,
                        message:"Thêm sản phẩm thành công"
                    }
                      
                }
                catch(err){
                        console.log("lỗi admin add product",err);
                    return {
                            status:false,
                            message:"Hệ Thống bận thử lại sau"
                            }
            
                }
            
                
    },
increaseproduct:async (product) => {
    console.log(product);
    try{
        let decode = jwt.verifyToken(product.token)
        let oldProduct = await prisma.cart.findMany({
            where:{     userId:Number(decode.id),
                     productId:Number(product.id)
                  }
           });
// console.log(oldProduct); return
        let updateProduct = await prisma.cart.update({
           where:{  id:Number(oldProduct[0].id),
                    userId:Number(decode.id),
                    productId:Number(oldProduct[0].productId),
                    // quantity:Number(oldProduct[0].quantity+1)
                 },
            data:{
                // userId:Number(decode.id),
                // id:Number(product.id),
                // productId:Number(oldProduct[0].id),
                quantity:product.type=="increase"?Number(oldProduct[0].quantity+1):Number(oldProduct[0].quantity-1)
            }

          });
        console.log("updateProduct",updateProduct);

            return {
                status:true,
                message:"",
                // length:0
            }

    }
    catch(err){
                    console.log("lỗi deleteuserproduct",err);
            return {
                        status:false,
                        message:"Hệ Thống bận thử lại sau"
                    }


    }

    
    },
admindeleteproduct:async (admintoken,id) => {
    try{
        let decode = jwt.verifyToken(admintoken)
        // console.log(decode);
        if(decode.username=="admin"){
            let deleteProduct = await prisma.product.update({
                where:{
                         id:id
                      },
                data:{
                    delete:"detete"
                }
               });
            //  console.log("addProduct",deleteProduct);
     
             // return
             //nếu giá trị trả về mảng rỗng
     
                 return {
                     status:true,
                     message:"",
                    //  length:0
                 }
        }else{
            return {
                status:false,
                message:"Hệ thống bận thử lại sau 1",
                // length:0
            }


        }


    }
    catch(err){
                    console.log("lỗi deleteuserproduct",err);
            return {
                        status:false,
                        message:"Hệ Thống bận thử lại sau 2"
                    }


    }

    
    },
}



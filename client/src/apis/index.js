import axios from 'axios';

export default {
    SignupRequest:(newUser)=> {
        console.log("newUser",newUser);
        return axios.post(process.env.REACT_APP_SERVER_HOST+`apis/v1/users`,newUser)
          .then(res => {
            console.log(res);
           return res
          })
          .catch(error => 
            {
                console.log(error)
                return {
                    toast:"sd"
                   }
            }
            );
      },
      LoginRequest:(newUser)=> {
        console.log("newUser",newUser);
        return axios.post(process.env.REACT_APP_SERVER_HOST+`apis/v1/users/login`,newUser)
          .then(res => {
            console.log(res);
           return res
          })
          .catch(error => 
            {
                console.log(error)
                return {data:{
                    status:false,
                    message:"Đăng nhập thất bại kiểm tra tài khoản và mật khẩu"
                }
                    
                   }
            }
            );
      },
      LogintokenRequest:(newUser)=> {
        console.log("newUser",newUser);
        return axios.post(process.env.REACT_APP_SERVER_HOST+`apis/v1/users/tokenlogin`,{newUser})
          .then(res => {
            console.log(res);
           return res
          })
          .catch(error => 
            {
                console.log(error)
                return {data:{
                    status:false,
                    message:"Đăng nhập thất bại kiểm tra tài khoản và mật khẩu"
                }
                    
                   }
            }
            );
      },
      getCategory:()=> {
        return axios.get(process.env.REACT_APP_SERVER_HOST+`apis/v1/users/getcategory`)
          .then(res => {
            console.log(res);
            if(res.status==200){
              return {
                status:true,
                data:res.data}
            }else{
              return {
                status:false,
                data:[],
                }

            }

           
          })
          .catch(error => 
            {
                console.log(error)
                return {data:{
                    status:false,
                    message:"Lỗi hệ thống"
                }
                    
                   }
            }
            );
      },
      getWomen:()=> {
        return axios.get(process.env.REACT_APP_SERVER_HOST+`apis/v1/users/getwomen`)
          .then(res => {
            console.log(res);
            if(res.status==200){
              return {
                status:true,
                data:res.data}
            }else{
              return {
                status:false,
                }

            }

           
          })
          .catch(error => 
            {
                console.log(error)
                return {data:{
                    status:false,
                    message:"Lỗi hệ thống"
                }
                    
                   }
            }
            );
      },
      getmen:()=> {
        return axios.get(process.env.REACT_APP_SERVER_HOST+`apis/v1/users/getmen`)
          .then(res => {
            console.log(res);
            if(res.status==200){
              return {
                status:true,
                data:res.data}
            }else{
              return {
                status:false,
                }

            }

           
          })
          .catch(error => 
            {
                console.log(error)
                return {data:{
                    status:false,
                    message:"Lỗi hệ thống"
                }
                    
                   }
            }
            );
      },
      getSinglecard:(cardid)=> {
          try{
            console.log("cardid",cardid);
                  
            return axios.post(process.env.REACT_APP_SERVER_HOST+`apis/v1/users/getsinglecard`,{cardid})
              .then(res => {
          return {
            data:{
              status:true,
              data:res
          }

          }
              
              })
              .catch(error => 
                {
                    console.log(error)
                    return {data:{
                        status:false,
                        message:"Lỗi hệ thống"
                    }
                        
                      }
                }
                );
          }
          catch(err){
            console.log(err);
          }
      },
      addtocart:(usertoken,cardid)=> {
        try{
          console.log("cardid",cardid);
                
          return axios.post(process.env.REACT_APP_SERVER_HOST+`apis/v1/users/addtocart`,{usertoken,cardid})
            .then(res => {
  
                return {
                  status:res.data.status,
                  message:res.data.message
                }
          
            }
            )
            .catch(error => 
              {
                  console.log(error)
                  return {data:{
                      status:false,
                      message:"Lỗi hệ thống"
                  }
                      
                     }
              }
              );
        }
        catch(err){
          console.log(err);
        }
      },
      getcart:(usertoken)=>{
        try{
          return axios.post(process.env.REACT_APP_SERVER_HOST+`apis/v1/users/getcart`,{usertoken})
        }
        catch(err){
          console.log("getcart err",err);
        }
      },
      deleteproduct:(usertoken,id)=>{
        try{
          return axios.post(process.env.REACT_APP_SERVER_HOST+`apis/v1/users/deleteuserproduct`,{usertoken,id})
        }
        catch(err){
          console.log("getcart err",err);
        }
      },
      adminLoginRequest:(newUser)=> {
        console.log("newUser",newUser);
        return axios.post(process.env.REACT_APP_SERVER_HOST+`apis/v1/users/adminlogin`,newUser)
          .then(res => {
            console.log(res);
           return res
          })
          .catch(error => 
            {
                console.log(error)
                return {data:{
                    status:false,
                    message:"Lỗi hệ thống"
                }
                    
                   }
            }
            );
      },
      addnewproduct:(newproduct)=> {
        console.log("newproduct",newproduct);
        return axios.post(process.env.REACT_APP_SERVER_HOST+`apis/v1/users/addnewproduct`,newproduct)
          .then(res => {
            console.log(res);
           return res
          })
          .catch(error => 
            {
                console.log(error)
                return {data:{
                    status:false,
                    message:"Lỗi hệ thống"
                }
                    
                   }
            }
            );
      },
      admingetmen:(menorwomen)=> {
        return axios.get(process.env.REACT_APP_SERVER_HOST+`apis/v1/users/${menorwomen}`)
          .then(res => {
            console.log(res);
            if(res.status==200){
              return {
                status:true,
                data:res.data}
            }else{
              return {
                status:false,
                }

            }

           
          })
          .catch(error => 
            {
                console.log(error)
                return {data:{
                    status:false,
                    message:"Lỗi hệ thống"
                }
                    
                   }
            }
            );
      },
      admingetuser:()=> {
        return axios.get(process.env.REACT_APP_SERVER_HOST+`apis/v1/users/admingetuser`)
          .then(res => {
            console.log(res);
            if(res.status==200){
              return {
                status:true,
                data:res.data}
            }else{
              return {
                status:false,
                }

            }

           
          })
          .catch(error => 
            {
                console.log(error)
                return {data:{
                    status:false,
                    message:"Lỗi hệ thống"
                }
                    
                   }
            }
            );
      },
      admineditproduct:(product)=>{
                console.log("newproduct",product);
        return axios.post(process.env.REACT_APP_SERVER_HOST+`apis/v1/users/admineditproduct`,product)
          .then(res => {
            console.log(res);
           return res
          })
          .catch(error => 
            {
                console.log(error)
                return {data:{
                    status:false,
                    message:"Lỗi hệ thống"
                }
                    
                   }
            }
            );
      },
      adminaddproduct:(product)=>{
        // console.log("newproduct",product);
      return axios.post(process.env.REACT_APP_SERVER_HOST+`apis/v1/users/adminaddproduct`,product)
},
      increaseproduct:(product)=>{
        
        try{
          return axios.post(process.env.REACT_APP_SERVER_HOST+`apis/v1/users/increaseproduct`,product)
        }
        catch(err){
          console.log("err",err);
        }
      },
      admindeleteproduct:(admintoken,id)=>{
        // console.log(id);
        try{
          return axios.post(process.env.REACT_APP_SERVER_HOST+`apis/v1/users/admindeleteproduct`,{admintoken,id})
        }
        catch(err){
          console.log("getcart err",err);
        }
      },
}
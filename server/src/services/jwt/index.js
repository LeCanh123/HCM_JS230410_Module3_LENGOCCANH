import jwt from 'jsonwebtoken';

export default {
    //gọi lúc tạo tài khoản để gửi vào email
    createToken: function (data, time) {
        // time(ms)
        try {
            return jwt.sign(
                data
                , process.env.JWT_KEY
                , { expiresIn: `${time}` });
        } catch (err) {
            return false
        }
    },
    //gọi lúc người dùng ấn nút xác nhận trong email
    verifyToken: function(token) {
        let result;
        jwt.verify(token, process.env.JWT_KEY, function(err, decoded) {
            if(err) {
                result = false
            }else {
                result = decoded
            }
        });
        return result
    },
    createTokenforever: function (data) {
        // time(ms)
        try {
            return jwt.sign(
                data
                , process.env.JWT_KEY
                , { expiresIn: `9999 years` });
        } catch (err) {
            return false
        }
    },
}


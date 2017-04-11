/**
 * Created by jayan on 2017/4/1.
 */
/**
 * 发送ajax请求组件，使用es6的promise，返回promise对象
 * */
const HEADER = {"Content-Type": "application/x-www-form-urlencoded"};

/**
 * zepto ajax 结合es6 promise实现请求
 * @params ajaxObj 参数对象
 * @returns {Promise对象}
 * */
export function ajaxDefine(ajaxObj){
    return new Promise((resolve, reject)=>{
        let data = JSON.stringify(ajaxObj.data);
        $.ajax({
            url: ajaxObj.url,
            type: ajaxObj.method || 'GET',
            header: HEADER,
            //data: `data=${data}`,
            dataType: 'jsonp',
            jsonp: 'callback',
            success: function(res){
                resolve(res);
            },
            error: function(msg){
                reject(msg);
            }

        });

    });

}
function display(){
    // console.log("focus on script");
    const cookies=getAllCookies();
    
        let name=cookies["UserName"];
        if(name){
        // console.log(name);
        let password=cookies["password"];
        // console.log(password);
        let nowDate=new Date();
        document.getElementById('usernameInput').value=name;
    }
}

function getAllCookies(){
    let associativeCookies=[];
    let splitCookie=document.cookie.split(";");
    for(i=0;i<splitCookie.length;i++){
        associativeCookies[splitCookie[i].split("=")[0].trim()]=splitCookie[i].split("=")[1];
        
    }
    return associativeCookies;
}
function deleteCookies(){
    var cookies=getAllCookies();
    for(i in cookies){
        document.cookie=i+"=;expires=9/9/2019";
    }
    console.log('cookies deleted');
}
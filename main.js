 let button = document.getElementById('button');
 button.addEventListener('click', loadData);

 function loadData() {
    var xhr = new  XMLHttpRequest();
    //const url = 'https://api.github.com/users';

    xhr.open('GET', 'https://api.github.com/users');

    xhr.onload = function ()  {
        if(this.status == 200){
            const data = JSON.parse(xhr.responseText);
            console.log(xhr.responseText)
            let user = '';

            for(let i = 0; i<data.length;i++){
                user+= '<div class="userinfo">' +
                '<img src="'+ data[i].avatar_url+'" width="70" height="70">'+ 
                '<ul>' +
                '<li>ID: '+data[i].id +'</li>' +
                '<li>Login: '+data[i].login+ '</li>' +
                '</ul>' +
                '</div>'

            }

            document.getElementById('info').innerHTML = user;   
        }
    }
    
    // handle Errors
xhr.onerror = () => {
    console.log('Request Error...');
    
}
   

    xhr.send();

}



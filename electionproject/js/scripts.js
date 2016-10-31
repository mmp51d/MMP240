
function timer(id){
        var date_future = new Date(2016, 10, 8);
        var date_now = new Date();
        var delta = Math.abs(date_future - date_now) / 1000;        
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;        
        var minutes = Math.floor(delta / 60) % 60;
        document.getElementById(id).innerHTML = days+" days "+hours+" hrs. "+minutes+" min.";
    setInterval(function(){
        var date_now = new Date();
        var delta = Math.abs(date_future - date_now) / 1000;        
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;        
        var minutes = Math.floor(delta / 60) % 60;
        document.getElementById(id).innerHTML = days+" days "+hours+" hrs. "+minutes+" min.";
    },30000)
}

document.querySelectorAll('.nav button').forEach(e=>{
    e.addEventListener('click',(e)=>{
        if(e.target.value==="1"){
            document.querySelector('.form').classList.add('active');
        }else{
            document.querySelector('.form').classList.remove('active');
        }
    })
});
document.addEventListener('DOMContentLoaded', function(){
    var slider = tns({
        container: document.getElementById("slider"),
        items: 1,
        navPosition:"bottom",
        speed:0,
        autoplay:true,
        loop:true,
        autoplayTimeout:3000
      });
})

 

$(document).ready(()=> {
    
    // smooth scroll
    $('a').click(function(e){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 700);
        e.preventDefault();
    })
    // scroll to top
    let toTop = document.getElementById('toTop');
    window.onscroll = function() {scrolltoTop()};
    function scrolltoTop(){
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            toTop.style.display = 'block';
        } else {
            toTop.style.display = 'none';
        }
    }
    $('#toTop').click(()=>{
        $('html, body').animate({
            scrollTop: 0
        }, 700);
        // document.body.scrollTop = 0; //for safari
        // document.documentElement.scrollTop = 0; //*others
    })

    /* header */
    //  with phone view
    $('.mobile-nav-icon').click(
        function(){
            // $('.main-nav').slideToggle(200);

            if($('.mobile-nav-icon').hasClass('fa-bars')){
                $('.mobile-nav-icon').addClass('fa-times');
                $('.mobile-nav-icon').removeClass('fa-bars');
                $('.main-nav').slideToggle(200);
                $('.main-nav').css({
                    'position':'absolute',
                    'top':'50%',
                    'right':'5%',
                    'text-align':'right'
                })
                $('.main-nav li').css({
                    'display':'table',
                    'padding':'5px 5px 10px 5px',
                    'border':'1px solid #fff',
                    'border-radius':'5px',
                    'margin':'5px',
                    'background-color':'rgba(73, 75, 104, 0.8)',
                });

            }
            else{
                $('.mobile-nav-icon').addClass('fa-bars');
                $('.mobile-nav-icon').removeClass('fa-times');
                $('.main-nav').stop().slideToggle(200);
              
            }
        }
    )
    /* END header */
    
    /* photos */
    let picL = document.getElementById('imageList');

    let imgIndex = 0;
    let size = picL.options.length;
    
    picL.addEventListener('change', selectImg)
    function selectImg(){
        imgIndex = picL.selectedIndex;
        viewImg();
    }
    function viewImg(){
        let img = document.getElementById('img');
        
        let imgPath = 'resources/img/class/' + picL.options[imgIndex].value;
    
        img.setAttribute('src', imgPath);
    
        picL.options[imgIndex].selected = true;
    
        let imgLabel = document.getElementById('imgLabel');
        // console.log(imgLabels);
        imgLabels.innerHTML = picL.options[imgIndex].value + ' (' +(imgIndex + 1) + '/' + size + ')';
    }
    document.getElementById('backbtn').addEventListener('click', preImg);
    function preImg(){
        if (imgIndex === 0){
            imgIndex = size - 1;
            
            viewImg();
        }
        else {
            imgIndex--;
            viewImg();
        }
    }
    document.getElementById('nextbtn').addEventListener('click', nextImg);
    function nextImg(){
        if(imgIndex === size-1){
            imgIndex = 0;
            viewImg();
        }
        else {
            imgIndex++;
            viewImg();
        }
    }
    
    document.getElementById('slideshow').addEventListener('click', showSlide);
    function showSlide(){
        if(slideshow.innerHTML.slice(0,5) === 'Start'){
            slideshow.innerHTML = 'Stop slideshow';
            backbtn.disabled = true;
            nextbtn.disabled = true;
            sldshow = setInterval(sldshowImg, 1000);
        } else {
            slideshow.innerHTML = 'Start slideshow';
            backbtn.disabled = false;
            nextbtn.disabled = false;
            clearInterval(sldshow);
        }
    }
    
    function sldshowImg(){
        viewImg();
        nextImg();
    }
      
    /* END photos */

    /* contacts */
    document.getElementById('name').addEventListener('click', 
    hiddenErrMsg);
    document.getElementById('phone').addEventListener('click', hiddenErrMsg);
    document.getElementById('email').addEventListener('click', hiddenErrMsg);

    function hiddenErrMsg(){
        document.getElementById('err-msg').innerHTML = '';
    }
    /* END contacts */

})
/* contacts */
// submit form

function checkInput(){
    let nameBox = document.getElementById('name');
    let phoneBox = document.getElementById('phone');
    let emailBox = document.getElementById('email');
    let err_msg = document.getElementById('err-msg');
    

    let name = nameBox.value;
    let phone = phoneBox.value;
    let email = emailBox.value;


    if(name.length === 0){
        err_msg.innerHTML = 'Name is empty!';
        return false;
    }
    else if(email.length === 0){
        err_msg.innerHTML = 'Email is empty!';
        return false;
    }
    else if(phone.length > 0){
        if(!phone.match('/^\d{10}$/') && phone.length != 10){
            err_msg.innerHTML = 'Your phone is not valid!';
            return false;
        }
    }

    return true;
}
/* END contacts */


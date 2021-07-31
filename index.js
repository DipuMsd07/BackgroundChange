var prev = document.getElementById('prev');
        var next = document.getElementById('next');
        var thumnail = document.getElementsByClassName('thumbnail');
        var hero = document.getElementById('hero');
        var preview = document.querySelectorAll('.thumbnail');

        var bgImg = new Array(
            "img/bg1.png",
            "img/bg2.png",
            "img/bg3.png",
            "img/bg4.png",
            "img/bg5.png"
        );

        let i = 0;
        let size = preview.length - 1;
        next.onclick = function(){
            if(i<size){
                hero.style.background = 'url('+bgImg[i+1]+')';
                thumnail[i+1].classList.add('active');
                thumnail[i].classList.remove('active');
                i++;
            }
            else if(i == size)
            {
                thumnail[i].classList.remove('active')
                i = 0;
                thumnail[i].classList.add('active')
                hero.style.background = 'url('+bgImg[i]+')';
            }
        }
        prev.onclick = function(){
            if(i>0){
                hero.style.background = 'url("'+bgImg[i-1]+'")';
                thumnail[i-1].classList.add('active');
                thumnail[i].classList.remove('active');
                i--;
            }
            else if(i == 0){
                thumnail[i].classList.remove('active');
                thumnail[size].classList.add('active');
                i = size;
            }
        }
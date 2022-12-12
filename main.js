    // navbar 햄버거 버튼 클릭 이벤트
    const navbtn = document.querySelector('.navbar-toggler')
    const navlist = document.querySelector('.list-group')

    navbtn.addEventListener('click', function(){
      // list-group 클래스명에 show를 추가해줘
      //document.querySelector('.list-group').classList.add('show');
      // toggle -> show가 있으면 제거, 없으면 추가하라는 뜻
      navlist.classList.toggle('show');
    });

      // form의 전송버튼 누를 때 첫째input이 공백이면 알림창 띄우기
      const send = document.getElementById('send');
      const input = document.getElementById('input');
  
      // $('#send').on('click',function(){
      //   // 이 방법도 되고
      // })
  
      // $('form').on('submit',function(){
      //   // 그냥 form태그 찾아서 'submt'이벤트 걸어도됨
      //   if() {
      //     alert('아이디입력안함')
      //   }
      // })
  
      send.addEventListener('click', function(e){
        if(input.value == '') {
          e.preventDefault();
          alert('아이디를 입력해 주세요')
        } 
      })

    
    const btnlogin = document.querySelector('#login')
    const modalbg = document.querySelector('.black-bg')
    const close = document.querySelector('#close')

    // 모달창 열기
    btnlogin.addEventListener('click', function(){
      modalbg.classList.add('show-modal')
    });

    // 모달창 닫기
    close.addEventListener('click', function(){
      modalbg.classList.remove('show-modal')
    });

    // if/else 실습1 : 삼육구게임
    function 삼육구게임(num) {
      if(num % 9 == 0) {
        console.log("박수x2");
      } else if (num % 3 == 0) {
        console.log("박수");
      } else {
        console.log("통과");
      }
    }

    삼육구게임(6);
    삼육구게임(9);
    삼육구게임(12);
    삼육구게임(11);

    // if/else 실습2 : 공인중개사
    function 합격했냐 (score1, score2){
      if(score1 < 40 || score2 < 40) {
        console.log("불합격!");
        } else if(score1 + score2 >= 120) {
          console.log("합격");
        } else {
          console.log("불합격!");
        }
    }

    합격했냐(70, 70); // 합격
    합격했냐(30, 100); // 불합격
    합격했냐(50, 50); // 불합격

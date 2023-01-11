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

    /* ******************************[[ 실습 ]]]************************************* */
    
    // if, else 실습1 : 삼육구게임
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


    // 변수 문법
    let 이름; // 선언, let 이름 = 'lee' 하고 밑에서 재할당도 가능
    이름 = 'kim' // 할당
    console.log(이름);

    // 변수, 사칙연산 실력향상 과제
    let age = 20; // let 재할당 가능
    const place = '서울'; // 재할당, 재선언 불가

    // 이자율 계산 퀴즈
    // 첫 예금액이 5만원 미만이면 이율이 연 15%(연이자 15%), 5만원 이상이면 이율이 연 20%
    // 변수에 예금액을 넣으면 2년 후의 총 예금액을 구하는 기능 만들기
    var 예금액 = 60000;
    var 미래예금액 = 0;

    function calInterest() {
      if(예금액 >= 50000) {
        미래예금액 = 예금액 * 1.2 * 1.2;
      } else {
        미래예금액 = 예금액 * 1.15 * 1.15;
      }
    }
    
    calInterest();
    console.log(미래예금액); // 86400



    // 커피 리필양 구하기
    // 방금 마신 커피의 3분의 2만큼 총 2번 리필해주는 카페
    // ex) 처음 커피르 90ml 주문하면 첫 리필은 60ml, 그 다음은 40ml
    var first = 360;
    var total = 0;

    total = first + first * 2 / 3 + first * 2 / 3 * 2 / 3

    console.log(total)

    
    /* **************************************************************************** */


    let main = document.querySelector(".main-bg");
    let mode = document.querySelector(".mode");
    let badge = document.querySelector(".badge");
    let navbar = document.querySelector(".navbar");
    let count = 0;
    
    // 다크모드
    function darkMode() {
      count++; // or count += 1;
      console.log(count);
      if(count % 2 == 1) {
        //main.style.color = "white";
        main.style.backgroundColor = "darkgray";
        mode.classList.replace("light", "dark");
        navbar.classList.replace("navbar-light", "navbar-dark")
        navbar.classList.replace("bg-light", "bg-dark")
        badge.innerHTML = "Light 🔄";
        badge.classList.replace("text-bg-dark", "text-bg-light")
      } else {
        //main.style.color = "black";
        main.style.backgroundColor = "lightgray";
        mode.classList.replace("dark", "light");
        navbar.classList.replace("navbar-dark", "navbar-light");
        navbar.classList.replace("bg-dark", "bg-light");
        badge.innerHTML = "Dark 🔄";
        badge.classList.replace("text-bg-light", "text-bg-dark")
      }
    }

    // 다크모드 - JQuery 버전
    /* $('.badge').on('click', function(){
      count++; // or count += 1;
      console.log(count);
      
      if (count % 2 == 1) {
        $('.badge').html('Light 🔄');
      } else {
        $('.badge').html('Dark 🔄')
      }
    }) */
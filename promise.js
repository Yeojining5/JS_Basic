// promise의 생성자는 executor라는 생성자를 가지고 있는데 여기서 또 2가지의 콜백함수를 받음
// rosolve-> 기능을 정상적으로 수행해서 마지막에 최종 데이터를 반환
// reject -> 기능을 수행하다가 중간에 문제가 생기면 호출함
// 네트워크에서 데이터를 받아오거나 큰 데이터를 읽어오는 과정과 같이 렌더링에
// 시간이 소요되는 작업들은 비동기적으로 실행하는 것이 좋음 (정적 데이터 보여준 이후 실행되도록)
// 만약 프로미스 안에 네트워크 통신과 관련된 코드를 작성했다면 
// promise가 만들어지는 순간 바로 네트워크 통신을 수행하게 됨
// 만약 네트워크 요청을 사용자가 요구했을 때만 해야하는 경우라면 or 버튼을 눌렀을 때만 수행하고 싶다면
// 새로운 프로미스가 만들어 질때는 전달한 executor 콜백함수가 바로 자동적으로 실행 된다는 것을 기억해 둘 것!


// Producer 
const promise = new Promise((resolve, reject) => {
	// doing some heave work(network, read files)
console.log('doing something...'); // executor 콜백함수에 의해 바로 수행되어 출력됨
setTimeout(() => {
		resolve('ellie');
	//reject(new Error('no network')); -> reject되면 consumer에서 catch가 수행됨
	}, 2000) // 프로미스가 어떤일을 2초정도 수행하다가 잘 마무리되면 resolve 콜백함 수 호출 
});

// Consumers : then, catch, finally를 통해 값을 받아 올 수 있음, producer를 이용하기
// 위에서 만든 promise 변수를 이용
// 값이 정상적으로 잘 수행이 된다면 -> then그러면 value를 받아와서
// 해당 => 콜백함수를 수행함, value 파라미터는 promise가 정상적으로 잘 수행이 되어서
// 마지막으로 resolve 콜백함수에서 전달된  'ellie' 라는 값이 해당value에 들어있음!

promise //
.then(value => {
	console.log(value); // 2초뒤에 !! ellie 출력됨
})
.catch(error => {
	console.log(error); // reject가 있을 때 출력됨
})
.finally(()=> {console.log('finally'); // 무조건 마지막에 호출되는 코드
});







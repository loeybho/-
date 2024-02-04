const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const submit = document.querySelector(".btn-login");

// 1. email 정규표현식을 사용한 validation

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

userEmail.addEventListener("input", function () {
  const isValidEmail = emailReg(this.value);

  if (isValidEmail) {
    this.classList.remove("is--invalid");
  } else {
    this.classList.add("is--invalid");
  }
});

//2. pw 정규표현식을 사용한 validation

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

userPassword.addEventListener("input", function () {
  const isValidPassword = pwReg(this.value);

  if (isValidPassword) {
    this.classList.remove("is--invalid");
  } else {
    this.classList.add("is--invalid");
  }
});

//3. 상태 변수 관리 - 사용자가 아이디를 제대로 입력했을 때, 비밀번호를 제대로 입력했을 때 - 둘 다 true가 떨어지게 한다면, - 고민: 어떻게 하면 true가 떨어지게 할 수 있을까?

function handleCheckId() {
  const user = {
    id: "asd@naver.com",
    pw: "spdlqj123!@",
  };

  if (userEmail.value === user.id && userPassword.value === user.pw) {
    console.log("success");
    this.classList.remove("is-active");
  } else {
    console.log("error!");
    this.classList.add("is-active");
  }
}

//4. 로그인 버튼을 클릭시 조건처리
function handleSubmit(e) {
  e.preventDefault();
  console.log("제출!");
  window.location.href = "welcome.html";
}

userEmail.addEventListener("input", handleCheckId);
submit.addEventListener("click", handleSubmit);

const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*
    
    1. email 정규표현식을 사용한 validation
    2. pw 정규표현식을 사용한 validation
    3. 상태 변수 관리 - 사용자가 아이디를 제대로 입력했을 때, 비밀번호를 제대로 입력했을 때 - 둘 다 true가 떨어지게 한다면, - 고민: 어떻게 하면 true가 떨어지게 할 수 있을까?
    4. 로그인 버튼을 클릭시 조건처리
    
    */

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

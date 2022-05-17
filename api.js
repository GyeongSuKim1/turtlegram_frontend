//  제이쿼리를 사용하지 않고 바닐라로 작성 예정
// 비 동기적으로 작성 예정
async function handlesignin() {

    const signupData = {
        email: document.getElementById('floatingInput').value,
        password: document.getElementById('floatingPassword').value
    }

    const response = await fetch('http://127.0.0.1:5000/signup', {
        method: 'POST',
        body: JSON.stringify(signupData)
    })

    if (response.status == 200) {
        alert('환영합니다~')
        window.location.replace('http://127.0.0.1:5500/turtlegram_frontend/login.html')
    } else {
        alert('로그인 해라')
        window.location.reload()
    }
}
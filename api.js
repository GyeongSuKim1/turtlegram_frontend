//  제이쿼리를 사용하지 않고 바닐라로 작성 예정
// 비 동기적으로 작성 예정
async function handlesignin() {

    const signupData = {   
        email : document.getElementById('floatingInput').value,
        password : document.getElementById('floatingPassword').value
    }

    const response = await fetch('http://127.0.0.1:5000/signup', {
        method: 'POST',
        body: JSON.stringify(signupData)
    }) 

    console.log(response)

}
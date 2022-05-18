//  제이쿼리를 사용하지 않고 바닐라로 작성 예정
// 비 동기적으로 작성 예정
const backend_base_url = "http://127.0.0.1:5000/"
const frontend_base_url = "http://127.0.0.1:5500/"


async function handlesignin() {
    const signupData = {
        email: document.getElementById('floatingInput').value,
        password: document.getElementById('floatingPassword').value
    }
    
    const response = await fetch(`${backend_base_url}signup`, {
        method: 'POST',
        body: JSON.stringify(signupData)
    })
    console.log(response)

    response_json = await response.json()
    console.log(response_json)

    if (response.status == 201) {
        alert('환영합니다~')
        window.location.replace(`${frontend_base_url}turtlegram_frontend/login.html`)

    } else {
        alert('제대로 입력해주세요')
        window.location.reload()
    }
}


async function handlelogin() {
    console.log("start")

    const loginData = {
        email: document.getElementById('floatingInput').value,
        password: document.getElementById('floatingPassword').value
    }

    const response = await fetch(`${backend_base_url}login`, {
        method: 'POST',
        body: JSON.stringify(loginData)
    })
    console.log(response)


    response_json = await response.json()
    console.log(response_json)
    // 로컬스토리지에 토큰 값 저장
    localStorage.setItem("token", response_json.token)
}


async function getName() {
    const response = await fetch(`${backend_base_url}getuserinfo`, {
        headers: {
            'Authorization':localStorage.getItem("token")
        }
    })
    response_json = await response.json()
    console.log(response_json)

    const username = document.getElementById("user_name")
    username.innerText = response_json.email
}


async function postArticle(title, content) {
    const articleData = {
        title : title,
        content , content
    }
    console.log(articleData)

    const response = await fetch (`${backend_base_url}article`, {
        method : 'POST',
        headers : {'Authorization':localStorage.getItem("token")},
        body: JSON.stringify(articleData)
    })
    response_json = await response.json()
    console.log(response_json)

    if (response.status == 200) {
        window.location.replace(`${frontend_base_url}turtlegram_frontend/`);
    } else {
        alert(response.status)
    }
}


async function getArticles() {
    const response = await fetch (`${backend_base_url}article`, {
        method : 'GET',
    })
    response_json = await response.json()

    return response_json.articles
}
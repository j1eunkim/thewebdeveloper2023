fetch("https://swapi.dev/api/people/1/")
.then(res => {
    console.log("resolved", res);
    return res.json()
})
.then((data) => {
    console.log(data);
    return fetch("https://swapi.dev/api/people/2/")
})
.then(res => {
    console.log("second request resoloved")
    return res.json();
})
.catch((e) => {
    console.log("Error",e)
})


// in-series 연속적인 요청으로 첫번째 요청이 성공해야 다음 요청이 처리됨. 
// fetch를 사용하면 복잡한 중첩구문 없이 쉽게 요청을 할 수 있음. 

const loadStarWarsPeople = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1/");
        const data = await res.json();
        console.log(data);
    } catch (e) {
        console.log("Error", e)
    }
};

loadStarWarsPeople();

// 이렇게 비동기함수를 활용하면 위와 똑같지만 더 간단함. 
const movies = [{
    title: "abce",
    score: "80"
},
{   title: "fghi",
    score: "90",

},
{
    title: "zzzzzzz",
    score: "10"
}
]

const goodMovies = movies.filter(movie => movie.score > 70)
const goodTitles = goodMovies.map(movie => movie.title)

movies.filter(movie => movie.score > 80).map(movie => movie.title);
// 위 두개를 합치면 이렇게 됨 

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}`)
})

movies.map(function(movie) {
    console.log(movie.title.toUpperCase())
})
//map은 원래의 배열을 변형할 때 필요함 


const add = function(x,y) {
    return x + y;
}

// 화살표 함수
const add2 = (x,y) => {
    return x + y;
}

const add3 = x => {
    return x*x;
}

const add4 = x => (
    x * 2 )
    //중괄호에서 괄호로 바꿔주면 암묵적으로 return을 하도록 함

const add5 = (a,b) => a+b 
// 이게 최종 짧아진 버전 대신 하나의 표현식만이 들어갈 수 있음

const newMovies = movies.map(function(movie) {
    return `${movie.title} - ${movie.score / 10}`
})

const newMovies2 = movies.map(movie => (
 `${movie.title} - ${movie.score/10}`
))

const nums = [9,8,7,6,5,4,3,2,1];

nums.filter(n => {
    return n < 5
})
// 필터링 된 item이 속한 새로운 배열이 만들어짐

document.getElementById()
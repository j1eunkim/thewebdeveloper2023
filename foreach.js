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
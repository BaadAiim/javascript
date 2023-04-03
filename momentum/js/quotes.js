const quotes = [
    {
        quote: "돈이 있는데도 행복하지 않다면 돈이 부족한지 생각해봐라",
        author: "어느 누군가",
    },
    {
        quote: "첫째, 생각하라. 둘째, 믿어라. 셋째, 꿈꿔라. 그리고 마지막으로 덤벼들어라.",
        author: "월트 디즈니",

    },
    {
        quote: "꿈을 끝까지 추구할 용기가 있다면 우리의 꿈들은 모두 실현될 수 있다.",
        author: "월트 디즈니",
    },
    {
        quote: "무엇인가 시작하려면 입을 다물고 몸을 움직여라.",
        author: "월트 디즈니",
    },
    {
        quote: "불가능한 일을 하는 게 쏠쏠한 재미다.",
        author: "월트 디즈니",
    },
    {
        quote: "자기의 지식과 IQ를 뽐내는 사람은 루저입니다.",
        author: "스티븐 호킹",
    },
    {
        quote: "나의 삶이 재미있지 않다면 비극일 것입니다.",
        author: "스티븐 호킹",
    },
    {
        quote: "나의 삶이 아무리 어렵다고 하더라도, 그 속에 무엇인가를 할 수 있는 일과 성골할 것이 있습니다.",
        author: "스티븐 호킹",
    },
    {
        quote: "정말 중요한 일이라면, 다른 생각을 가졌더라도 그 일을 계속 해야한다.",
        author: "일론 머스크",
    },
    {
        quote: "모두가 원하지만 아무도 하지 않는 일에 도전해라.",
        author: "마크 저커버그"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

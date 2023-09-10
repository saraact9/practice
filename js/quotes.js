const quotes = [
    {
        quote: "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
        author: "이드리스 샤흐",
    },
    {
        quote: "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다",
        author: "제임스 오펜하임",
    },
    {
        quote: "행복은 습관이다,그것을 몸에 지니라",
        author: "허버드",
    },
    {
        quote: "인생은 자신을 찾는 것이 아닙니다. 인생은 자신을 만드는 것입니다.",
        author: "조지 버나드 쇼",
    },
    {
        quote: "자신과 사랑에 빠지는 것이 행복의 첫 번째 비결입니다.",
        author: "로버트 몰리",
    },
    {
        quote: "시간과 정성을 들이지 않고 얻을 수 있는 결실은 없다.",
        author: "그라시안",
    },
    {
        quote: "모든 말을 존중하라",
        author: "톨스토이",
    },
    {
        quote: "여행하지 않은 사람에겐 이 세상은 한 페이지만 읽은 책과 같다.",
        author: "아우구스티누스",
    },
    {
        quote: "언제나 현재에 집중할수 있다면 행복할것이다",
        author: "파울로 코엘료",
    },
    {
        quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다",
        author: "엘버트 허버드",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = todaysQuote.author;
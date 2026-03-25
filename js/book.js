// 새로나온교재

async function bookData() {
    const params = new URLSearchParams({
        target: "title",
        query: "미움받을 용기",
        size: 10
    });
    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: "KakaoAK 38e2e14d7f21aa9270502efe4b79ba51"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        // .box 요소 전체 선택
        const boxElements = document.querySelectorAll("#new .swiper-slide");
        console.log(boxElements)

        // documents 데이터를 각 box에 대응하여 렌더링
        boxElements.forEach((box, i) => {
            const doc = data.documents[i];

            if (!doc) return; // 데이터가 부족할 경우 생략

            // 요소 생성 및 추가
            box.innerHTML = `
                <a href="#">
        <img src="${doc.thumbnail}">
             </a>
                    <h3>${data.documents[i].title}</h3>
                    <h6>${data.documents[i].authors}</h6>
                    <p>${data.documents[i].price}</p>
                    `
        });

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData();


// 베스트셀러
async function bestSellerData() {

    const params = new URLSearchParams({
        target: "title",
        query: "공무원 기출문제",
        size: 10
    });

    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: "KakaoAK 38e2e14d7f21aa9270502efe4b79ba51"
            }
        });

        const data = await response.json();

        const bestItems = document.querySelectorAll("#best .best_item");

        bestItems.forEach((item, i) => {

            const book = data.documents[i];
            if (!book) return;

            item.innerHTML = `
    <img src="${book.thumbnail}">
    <div class="rank">${i + 1}</div>
    <h4 class="title">${book.title}</h4>
    <p class="author">${book.authors}</p>
    <p class="price">${book.price}원</p>
`;
        });

    } catch (error) {
        console.log("에러 발생", error);
    }
}

bestSellerData()


// 슬라이더 북
async function sliderBookData() {

    const params = new URLSearchParams({
        target: "title",
        query: "공무원 영어 기출문제",
        size: 3
    });

    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: "KakaoAK 38e2e14d7f21aa9270502efe4b79ba51"
            }
        });

        const data = await response.json();

        const slides = document.querySelectorAll("#slider .swiper-slide");

        slides.forEach((slide, i) => {

            const book = data.documents[i];
            if (!book) return;

            slide.innerHTML = `
<a href="book-detail.html?isbn=${book.isbn}" class="slide_link"></a>

<img src="${book.thumbnail}">

<div class="book_text">
    <h3>${book.title}</h3>
    <p>${book.authors}</p>
</div>
`;

        });

    } catch (error) {
        console.log("슬라이더 오류", error);
    }
}

sliderBookData();
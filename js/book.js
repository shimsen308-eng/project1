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


// 서브페이지 상세정보
async function bookDetail() {

    const params = new URLSearchParams({
        target: "title",
        query: "공무원 영어 기출문제",
        size: 1
    });

    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    const response = await fetch(url, {
        headers: {
            Authorization: "KakaoAK 38e2e14d7f21aa9270502efe4b79ba51"
        }
    });

    const data = await response.json();
    const book = data.documents[0];

    document.getElementById("book_title").innerText = book.title;

      // 이미지 넣기
    // document.getElementById("book_img").src = book.thumbnail;

     // 가격 넣기
    document.getElementById("price").innerText = book.price + "원";

    // 저자 넣기  
    document.getElementById("author").innerText = book.authors;

    // 출판사 넣기
    document.getElementById("publisher").innerText = book.publisher;

    // 등록일
    document.getElementById("date").innerText = book.datetime.substring(0, 10);

}

bookDetail();




const tabs = document.querySelectorAll(".tab_menu li");
const contents = document.querySelectorAll(".tabcontent");

/* 1번 탭 */
tabs[0].addEventListener("click", () => {
    fetch("introduce.txt")
        .then(res => res.text())
        .then(data => {
            contents[0].innerHTML = data;
        });
});

/* 2번 탭 */
tabs[1].addEventListener("click", () => {
    fetch("목차.txt")
        .then(res => res.text())
        .then(data => {
            contents[1].innerHTML = data;
        });
});

/* 3번 탭 */
tabs[2].addEventListener("click", () => {
    fetch("서평.txt")
        .then(res => res.text())
        .then(data => {
            contents[2].innerHTML = data;
        });
});

/* 4번 탭 */
tabs[3].addEventListener("click", () => {
    fetch("exchange_refund.txt")
        .then(res => res.text())
        .then(data => {
            contents[3].innerHTML = data;
        });
});




async function authorSliderData() {

    const params = new URLSearchParams({
        target: "title",
        query: "성정혜 공무원 영어",
        size: 4
    });

    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: "KakaoAK 38e2e14d7f21aa9270502efe4b79ba51"
            }
        });

        const data = await response.json();

        const slides = document.querySelectorAll(".authorSwiper .swiper-slide");

        slides.forEach((slide, i) => {

            const book = data.documents[i];
            if (!book) return;

            slide.innerHTML = `
                <div class="author_book">

                    <img src="${book.thumbnail || './img/noimg.jpg'}">

                    <div class="book_info">
                        <h3>${book.title}</h3>
                        <p>${book.authors ? book.authors.join(", ") : ""}</p>
                        <p>${book.price ? book.price.toLocaleString() + "원" : ""}</p>
                    </div>

                </div>
            `;
        });

    } catch (error) {
        console.log("카카오 API 오류:", error);
    }
}

authorSliderData();



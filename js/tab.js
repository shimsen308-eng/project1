const tabMenu = document.querySelectorAll('.tab_menu li');
        const tabContent = document.querySelectorAll('.tabcontent');

        tabMenu.forEach((tm, i) => {
            tm.addEventListener('click', () => {
                // 모든 탭 메뉴에서 'active' 클래스 제거
                tabMenu.forEach(item => {
                    item.classList.remove('active');
                });

                // 클릭한 탭 메뉴에만 'active' 클래스 추가
                tm.classList.add('active');

                // 탭에 해당하는 리스트 보이고, 나머지는 숨기기
                tabContent.forEach((tc, j) => {
                    tc.style.display = (i === j) ? 'flex' : 'none';
                });
            });
        });





// 'no-animation' 클래스를 제외한 모든 이미지를 선택
const images = document.querySelectorAll("img:not(.no-animation)");

// Intersection Observer 옵션 설정 (50% 이상 보일 때 트리거)
const observerOptions = {
    threshold: 0.5
};

// Intersection Observer 콜백 함수
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("appear"); // 'appear' 클래스 추가하여 애니메이션 실행
            observer.unobserve(entry.target); // 한 번 나타나면 더 이상 관찰하지 않음
        }
    });
};

// Intersection Observer 생성
const observer = new IntersectionObserver(observerCallback, observerOptions);

// 'no-animation' 클래스가 없는 이미지들만 관찰 시작
images.forEach(image => observer.observe(image));

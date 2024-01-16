export function submit() {
    const form = document.querySelector('form');
    if (!form) return; // 폼이 없으면 함수 종료

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // 폼의 기본 제출 동작 방지
        alert("감사합니다!"); // 알림 표시
        window.location.href = 'https://bfsvisitor.netlify.app'; // 리디렉션할 URL 지정
    });
}

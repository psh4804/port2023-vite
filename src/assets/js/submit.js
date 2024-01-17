export function submit() {
    const form = document.querySelector('form');
    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // 기본 제출 동작 방지

        var formData = new FormData(event.target);
        var actionUrl = event.target.action;

        fetch(actionUrl, {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        }).then(() => {
            alert("Complete!");
            window.location.href = 'https://bfsvisitor.netlify.app';
        }).catch(error => console.error('Error:', error));
    });
}
document.getElementById('youtubeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const channelId = document.getElementById('channelId').value;
    const apiKey = document.getElementById('apiKey').value;
    const oauthToken = document.getElementById('oauthToken').value;

    localStorage.setItem('channelId', channelId);
    localStorage.setItem('apiKey', apiKey);
    localStorage.setItem('oauthToken', oauthToken);

    fetch('/generate-video', { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            let progress = 0;
            const interval = setInterval(() => {
                progress += 10;
                document.getElementById('progressText').innerText = `${progress}%`;
                document.getElementById('progressBar').value = progress;
                if (progress >= 100) clearInterval(interval);
            }, 500);
        });
});
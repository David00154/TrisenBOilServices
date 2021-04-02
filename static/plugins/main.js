if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
        .register('./service_worker.js')
        .then(reg => console.log("Services worker registered"))
        .catch(e => console.error(e))
    })
}
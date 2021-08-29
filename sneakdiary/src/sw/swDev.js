export default function swDev() {
    let swUrl= `/sw.js`
    navigator.serviceWorker.register('/sw.js').then((response) =>{
        console.warn("response", response)
    })
}
async function checkConnection() {
    const req = await fetch("https://google.com");
    return req.status === 200;
}
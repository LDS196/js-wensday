 function getCurrentDateTime() {
    const now = new Date()
    const day = String(now.getDate()).padStart(2, "0")
     console.log(now.getDate())
    const month = String(now.getMonth() + 1).padStart(2, "0")
     console.log(String(now.getMonth() + 1).padStart(2, "0"))
    const year = now.getFullYear()
    const hours = String(now.getHours()).padStart(2, "0")
    const minutes = String(now.getMinutes()).padStart(2, "0")
    const seconds = String(now.getSeconds()).padStart(2, "0")

    const formattedDateTime = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`
    return formattedDateTime
}
getCurrentDateTime()

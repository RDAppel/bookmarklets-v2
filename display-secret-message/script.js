(async () => {

    alert(localStorage.getItem(`It's a secret to everybody.`) || localStorage.getItem(`It's a secret to everybody`) || `No messge found.`)

})()
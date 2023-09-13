var n=parseInt(prompt("Enter The n value"))
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        document.write("&nbsp;")
        letter=String.fromCharCode(j+64);
        document.write(letter);
    }
    document.write("<br>")
}

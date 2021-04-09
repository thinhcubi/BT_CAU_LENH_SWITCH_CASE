function Tinh() {
    let number =+document.getElementById("number").value;
    let result=null
    switch (number) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            result=('31 ngay')
            break;
        case 2 :
            result=('28 ngay')
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            result=('30 ngay')
            break;
    }
    document.getElementById('result').innerHTML=('Có ' +result)
}

// 1. adjacent parentheses

(true, (num)=>{return num*2})(5,10)
// -> num = first param = 5 ->
return 5*2

// 2. Windows button not working
// Windows Powershell: run sfc /scannow

// 3. in vs hasOwnProperty

 if (key in object) // include protytype chain

 if (object.hasOwnProperty(key)) // only its own property

 // 4. JS <=> JQ
$('#elm').css('color') === (window.getComputedStyle(elm))['color']

// 5. array
let a = [1,2,3];
console.log(...a); // 1 2 3

// 6. syntax sugar
const handleSubmit = this.props.handleSubmit;
const {handleSubmit: handleSubmit} = this.props;
const {handleSubmit} = this.props;

// 7. instanceof
class ABC{}
class DEF extends ABC{}
let test = new DEF();
console.log(test instanceof ABC);
console.log(test instanceof DEF);
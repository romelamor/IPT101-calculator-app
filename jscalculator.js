let currentInput='';
let currentOperator='';
    function appendNumber(number) {
        currentInput +=  number;
        document.getElementById('result').value = currentInput


    }
    function devide(){
        currentOperator= '/';
        currentInput +=currentOperator;
        document.getElementById('result').value = currentInput
    }

    function calculate(){
        const result = eval(currentInput);
        document.getElementById('result').value=result;
        currentInput = result.toString();
        currentOperator = '';

    }
    function clearInput() {
        currentOperator=''
        currentInput=''
        document.getElementById('result').value ='';
    }
    function multiply(){
        currentOperator='*';
        currentInput +=currentOperator;
        document.getElementById('result').value = currentInput
    }
    function minus(){
        currentOperator='-';
        currentInput +=currentOperator;
        document.getElementById('result').value = currentInput
    }


    function add(){
        currentOperator='+';
        currentInput +=currentOperator;
        document.getElementById('result').value = currentInput
    }

    function dot(){
        currentOperator='.';
        currentInput +=currentOperator;
        document.getElementById('result').value = currentInput
    }

    function deleteone() {
        currentInput = currentInput.slice(0, -1);
        document.getElementById('result').value = currentInput;
    }
    function percent(){
        const per=currentInput/100;
        document.getElementById('result').value = per;

    }
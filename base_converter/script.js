// 1. 이진수 입력에 대한 변환
document.getElementById('binaryInput').addEventListener('input', function () {
    this.value = this.value.replace(/[^01]/g, '');
    const inputValue = this.value;
    if (/^[01]+$/.test(inputValue)) {
        convertBinary(inputValue);
    } else if (inputValue == '') {
        document.getElementById('binaryInput').value = '';
        document.getElementById('octalInput').value = '';
        document.getElementById('decimalInput').value = '';
        document.getElementById('hexadecimalInput').value = '';
    }
});

// 2. 팔진수 입력에 대한 변환
document.getElementById('octalInput').addEventListener('input', function () {
    this.value = this.value.replace(/[^0-7]/g, '');
    const inputValue = this.value;
    if (/^[0-7]+$/.test(inputValue)) { // isNaN은 소수점 하나까지 숫자로 간주
        convertOctal(inputValue);
    } else if (inputValue == '') { // 입력바가 비어있을 때
        document.getElementById('binaryInput').value = '';
        document.getElementById('octalInput').value = '';
        document.getElementById('decimalInput').value = '';
        document.getElementById('hexadecimalInput').value = '';
    }
});

// 3. 십진수 입력에 대한 변환
document.getElementById('decimalInput').addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
    const inputValue = this.value;
    if (/^[0-9]+$/.test(inputValue)) { // isNaN은 소수점 하나까지 숫자로 간주
        convertDecimal(inputValue);
    } else if (inputValue == '') { // 입력바가 비어있을 때
        document.getElementById('binaryInput').value = '';
        document.getElementById('octalInput').value = '';
        document.getElementById('decimalInput').value = '';
        document.getElementById('hexadecimalInput').value = '';
    }
});

// 4. 십육진수 입력에 대한 변환
document.getElementById('hexadecimalInput').addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9abcdef]/g, '');
    const inputValue = this.value;
    if (/^[0-9abcdef]+$/.test(inputValue)) { // isNaN은 소수점 하나까지 숫자로 간주
        convertHexadecimal(inputValue);
    } else if (inputValue == '') { // 입력바가 비어있을 때
        document.getElementById('binaryInput').value = '';
        document.getElementById('octalInput').value = '';
        document.getElementById('decimalInput').value = '';
        document.getElementById('hexadecimalInput').value = '';
    }
});




function convertBinary(binaryInput) {
    // 정규식을 사용하여 0 또는 1인지 확인
    if (/^[01]+$/.test(binaryInput)) {
        // 이진수를 팔진수로 변환
        const octalOutput = parseInt(binaryInput, 2).toString(8);

        // 이진수를 십진수로 변환
        const decimalOutput = parseInt(binaryInput, 2);

        // 이진수를 십육진수로 변환
        const hexadecimalOutput = parseInt(binaryInput, 2).toString(16);

        // 변환된 숫자를 각 숫자 바에 출력
        document.getElementById('octalInput').value = octalOutput;
        document.getElementById('decimalInput').value = decimalOutput;
        document.getElementById('hexadecimalInput').value = hexadecimalOutput;
    }
}

function convertOctal(octalInput) {
    // 정규식을 사용하여 0~7의 숫자인지 확인
    if (/^[0-7]+$/.test(octalInput)) {
        // 팔진수를 이진수로 변환
        const binaryOutput = parseInt(octalInput, 8).toString(2);

        // 팔진수를 십진수로 변환
        const decimalOutput = parseInt(octalInput, 8);

        // 팔진수를 십육진수로 변환
        const hexadecimalOutput = parseInt(octalInput, 8).toString(16);

        // 변환된 숫자를 각 숫자 바에 출력
        document.getElementById('binaryInput').value = binaryOutput;
        document.getElementById('decimalInput').value = decimalOutput;
        document.getElementById('hexadecimalInput').value = hexadecimalOutput;
    }
}

function convertDecimal(decimalInput) {
    // 숫자인지 확인
    if (/^[0-9]+$/.test(decimalInput)) {
        // 십진수를 이진수로 변환
        const binaryOutput = (BigInt(decimalInput)).toString(2);

        // 십진수를 팔진수로 변환
        const octalOutput = (BigInt(decimalInput)).toString(8);
        
        // 십진수를 십육진수로 변환
        const hexadecimalOutput = (BigInt(decimalInput)).toString(16);
        
        // 변환된 숫자를 각 숫자 바에 출력
        document.getElementById('binaryInput').value = binaryOutput;
        document.getElementById('octalInput').value = octalOutput;
        document.getElementById('hexadecimalInput').value = hexadecimalOutput;
    } 
}

function convertHexadecimal(hexadecimalInput) {
    // 1~9 숫자 또는 a~f의 알파벳인지 확인
    if (/^[0-9abcdef]+$/.test(hexadecimalInput)) {
        // 십육진수를 이진수로 변환
        const binaryOutput = BigInt(parseInt(hexadecimalInput, 16)).toString(2);

        // 십육진수를 팔진수로 변환
        const octalOutput = BigInt(parseInt(hexadecimalInput, 16)).toString(8);
        
        // 십육진수를 십진수로 변환
        const decimalOutput = BigInt(parseInt(hexadecimalInput, 16));
        
        // 변환된 숫자를 각 숫자 바에 출력
        document.getElementById('binaryInput').value = binaryOutput;
        document.getElementById('octalInput').value = octalOutput;
        document.getElementById('decimalInput').value = decimalOutput;
    } 
}
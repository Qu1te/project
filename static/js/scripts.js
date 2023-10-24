vwindow.onload = function () {
    let c = {'USD':'78', 'EUR':'85.60', 'RUB':'1','KZT':"0.2",'CHF' :"8.49",'CBP' : "114.5", 'JPY' : "1.60" , "UAH" : "2.58", "BYN" : "28.62", "TRY" : "3.33", "CNY":"13.09","PLN":"22.29"};

    let val = document.getElementById('val'); 
    let currency1 = document.getElementById('cur1'); 
    let currency2 = document.getElementById('cur2'); 
    let result = document.getElementsByClassName('convert_result')[0]; 
    function summ() { 
        let z = 0;
        if(currency1.value === currency2.value){ 
            result.innerText = val.value; 
        } else {
            if(currency1.value != 'RUB'){ 
                z = val.value*c[currency1.value]; 
                result.innerHTML = Math.ceil((z/c[currency2.value])*100)/100; 
            } else { // Если не равны
                result.innerHTML = Math.ceil((val.value*c[currency2.value])*100)/100; 
            }
        }
    }
    val.oninput = function () { 
        summ();
    };
    currency1.onchange = function () { 
        summ();
    };
    currency2.onchange = function () { 
        summ();
    }
}

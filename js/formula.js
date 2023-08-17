let
    start = document.querySelector('.calc'),
    result = document.querySelector('.result'),
    heart_rate /* ЧСС - частота сердечных сокращений, мин-1; */ ,
    respiratory_rate /* ЧДД - частота дыхательных движений, мин - 1; */ ,
    systolic_pressure
    /* сист.АД - уровень систолического артериального давления, 
                      измеренный на 3 - 5 минуте ортостаза, мм рт.ст.;*/
    ,
    concentration_N_peptide_blood_serum
/*   NT-proBNP - концентрация N - концевого предшественника мозгового
натрийуретического пептида в сыворотке крови, пг / мл, */
;
start.onclick = function (event) {
    event.preventDefault();
    heart_rate = document.getElementById('heart_rate').value;
    respiratory_rate = document.getElementById('respiratory_rate').value;
    systolic_pressure = document.getElementById('systolic_pressure').value;
    concentration_N_peptide_blood_serum = document.getElementById('concentration_N_peptide_blood_serum').value;
    aa4 = document.getElementById('aa4').value;

    S_t = Math.exp(-0.514056 *
        Math.exp(
            (0.019 * heart_rate) +
            (0.169 * aa4) +
            (-0.049 * systolic_pressure) +
            (0.000003 * concentration_N_peptide_blood_serum)
        )
    ) * 100;
    result.innerHTML = result.innerHTML + S_t + '%';
}


/*S_t = Math.exp(-0.514056 *
    Math.exp(
        (0.019 * heart_rate) +
        (0.169 * 4 AA) +
        (-0.049 * systolic_pressure) +
        (0.000003 * concentration_N_peptide_blood_serum)
    )
) * 100  %*/
;




/* и при значениях S(t) более 80 % считают прогноз выживаемости больного СНнФВ
в течение 1 года благоприятным, при значениях от 60 до 80 % -неблагоприятным, менее
60 % -крайне неблагоприятным. */
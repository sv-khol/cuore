let
    start = document.querySelector('.calc'),
    result = document.querySelector('.result'),
    Z,
    age
    /* возраст дебюта СНнФВ - возраст пациента, в котором дебютировала клиника
    СНнФВ, лет */
    ,
    /*heart_rate  ЧСС - частота сердечных сокращений, мин-1; ,*/

    respiratory_rate /* ЧДД - частота дыхательных движений, мин - 1; */ ,
    systolic_pressure
    /* сист.АД - уровень систолического артериального давления, 
                      измеренный на 3 - 5 минуте ортостаза, мм рт.ст.;*/
    ,
    LYM /*1 уровень лимфоцитов, %*/ ,
    RDW /* ширина распределения эритроцитов по объему, % */ ;


start.onclick = function (event) {
    event.preventDefault();
    age = document.getElementById('age').value;
    respiratory_rate = document.getElementById('respiratory_rate').value;
    systolic_pressure = document.getElementById('systolic_pressure').value;
    LYM = document.getElementById('LYM').value;
    RDW = document.getElementById('RDW').value;


    Z = (-0.075 * age) +
        (0.290 * respiratory_rate) +
        (-0.04 * systolic_pressure) +
        (-0.051 * LYM) +
        (0.161 * RDW);
    result.innerHTML = result.innerHTML + Z;
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
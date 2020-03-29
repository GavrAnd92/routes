import React from 'react';
import '../App.css';




class Articles extends React.Component{


    


    render (){

        const articlesArr = [
            {id: 1,name:"Lorem ipsum", article:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, quia. Numquam atque vitae eos, nesciunt, laborum veritatis consequatur et voluptatibus hic saepe deleniti repellat dolorem, reprehenderit recusandae minus sunt praesentium." },
            {id: 2, name:"НАУКА ТА МЕДИЦИНА Тілля Ліндеманна госпіталізували з коронавірусом", article: "Про те, в якому стані співак потрапив до лікарні, поки не повідомляється. Офіційних коментарів поки немає. Соліст німецького гурту Rammstein Тілль Ліндеманн госпіталізований з коронавірусом. Про це повідомляє Телеграм-канал Novel CoronaVirus Channel. Зазначається, що співак перебуває в одній із клінік Берліна, але в якій саме, поки невідомо. Про стан здоров'я музиканта також поки не повідомляється. Раніше повідомлялося, що Лев Лещенко хворий на коронавірус." },
            {id: 3, name:"Вчені припустили, чому чоловіки від коронавірусу помирають частіше", article: "В Іспанії від COVID-19 вмирає в два рази більше чоловіків, ніж жінок, а в Італії на частку чоловіків припадає 71% смертей. У міру того, як пандемія коронавірусу поширюється  планетою, стає очевидною головна закономірність: хвороба частіше вбиває чоловіків, ніж жінок. Про це пише The Guardian. Видання зазначає, що вперше про статеві відмінності в смертності від коронавірусу вказали в Китаї. Там ризик померти від нього становив 2,8% для чоловіків і 1,7% для жінок. Про схожу картину заявили у Франції, Німеччині, Південній Кореї, Ірані, Іспанії, Італії. Спочатку передбачалося, що причина може бути в курінні. У Китаї курить 50% чоловіків і лише 2% жінок. Однак з часом вчені прийшли до висновку, що це єдина звичка, що робить чоловіків вразливіші до вірусу. Деякі вчені припустили, що вся справа в жіночих гормонах естрогенів, які підсилюють противірусну реакцію імунних клітин. Можливо, причина лежить в фундаментальних біологічних відмінностях між чоловіками і жінками. Відповідно одного з досліджень, чоловіча імунна система гірше справляється з рядом вірусів, включаючи гепатит C і ВІЛ. Дослідження на мишах показують, що це може бути вірно і для коронавірусу, хоча збудник COVID-19 в цьому відношенні поки не вивчали, - говорять вчені, на яких посилається видання. Однак, щоб сказати напевно, вчені чекають деталізованих даних про смертність. Поки їх надали тільки 20 країн, причому в списку немає ні Великобританії, ні США - найбільшого вогнища пандемії." },
            {id: 4, name:"Колір волосся пов'язаний з тривалістю життя - вчені", article: "Британські вчені з Кембриджа на основі дослідження кількох сотень тисяч добровольців виявили, що колір волосся пов'язаний з тривалістю життя.Такий висновок експерти зробили із спеціального дослідження, пише Nature Communications.Під час дослідження були обстежені кілька сотень тисяч добровольців, у яких досліджували ДНК.Отримані результати дозволили зробити висновок, що у людей з темним кольором волосся статеве дозрівання наступає раніше.Цей висновок співзвучний з ранніми роботами вчених, які довели, що чим раніше у людини настає пубертатний період, тим вище ризик розвитку низки захворювань, наприклад, хвороб серцево-судинної системи і деяких типів діабету.Також фахівці припустили, що колір волосся і статеве дозрівання можуть бути пов'язані через одну із залоз головного мозку, яка виробляє гормони, що впливають як на пігментацію, так і на дорослішання людини.У дослідженні робиться висновок, що \"більш ранні терміни статевого дозрівання нерозривно пов'язані з більш високим ризиком виникнення захворювань у пізньому віці\".Як повідомлялося раніше, вчені розрахували ефективність карантину. У жодному зі сценаріїв пандемію COVID-19 не вдасться повністю зупинити. Різні види карантину допоможуть лише відтермінувати або розтягнути її в часі.Також Korrespondent.net писав, що вчені вперше омолодили клітини людини." },
        ];

        const articlId = this.props.match.params.id;
        console.log(articlId);

        const findArticl = articlesArr.find(articl => articl.id == articlId);


        return (
            <div>
                <h1>{findArticl.name}</h1>

                <p>У этого продукта id = {findArticl.article}</p>
            </div>
        );
    }

}

export default Articles;
'use strict';

// Рандомайзер
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

// === Profession (61шт.) ===
class Profession {
    constructor(vocation) {
        this.vocation = vocation;
    }

    name = "Профессия";

    nameFontSize = '30px';
    vocationFontSize = '20px';
    borderColor = "white";
    imgURL = function() {
        return "./assets/Professions/" + this.vocation.toString() + ".png";
    }

    card; 
    cardType; cardTypeContent; cardImg; cardImgContent; cardName; cardNameContent;
    cardBorder;
}

let Professions = [
    "Адвокат", "Актёр", "Археолог", "Архитектор", "Астроном", "Банкир",
    "Биоинженер", "Биолог", "Ветеренар", "Визажист", "Вирусолог", "Вор",
    "Воспитатель", "Врач", "Географ", "Гитарист", "Грузчик", "Диджей",
    "Журналист", "Звукорежиссёр", "Иммунолог", "Инженер", "Инструктор по выживанию", "Искусствовед",
    "Историк", "Кинолог", "Клоун", "Композитор", "Кондитер", "Копирайтер",
    "Космонавт", "Критик",  "Лётчик", "Математик", "Модель", "Наркодилер",
    "Парикмахер", "Переводчик", "Писатель", "Повар", "Предприниматель", "Преподователь",
    "Программист", "Продавец", "Проститутка", "Психолог", "Режиссёр", "Сантехник",
    "Строитель", "Судья", "Телефонист", "Терапевт", "Физик",  "Философ",
    "Финансист", "Фотограф", "Химик", "Хирург", "Художник", "Экономист",
    "Электрик"
]
// === / Profession (61шт.) ===

// === HumanQuality (41шт.) ===
class HumanQuality {
    constructor(vocation) {
        this.vocation = vocation;
    }

    name = "Человеческие качества";

    nameFontSize = '25px';
    vocationFontSize = '20px';
    borderColor = "#B15F17";
    imgURL = function() {
        return "./assets/HumanQuality/HumanQualityImg.png";
    }

    card; 
    cardType; cardTypeContent; cardImg; cardImgContent; cardName; cardNameContent;
    cardBorder;
}

let HumanQualities = [
    "Агрессивный", "Аккуратный", "Алчный", "Безумный", "Бережливый", "Брезгливый",
    "Великодушный", "Весёлый", "Впечатлительный", "Вредный", "Вспыльчивый", "Высокомерный",
    "Героический", "Гнусный", "Гордый", "Грамотный", "Грубый", "Грустный",
    "Депрессивный", "Добрый", "Заботливый", "Зависимый", "Закрытый", "Занудный",
    "Застенчивый", "Капризный", "Коварный", "Лицемерный", "Мелочный", "Меркантильный",
    "Молчаливый", "Неграмотный", "Нудный", "Общительный", "Пессимистичный", "Пошлый",
    "Слабый", "Тихий", "Храбрый", "Честный", "Яростный"
]
// === / HumanQuality (41шт.) ===

// === HealthStatus (41шт.) ===
class HealthStatus {
    constructor(vocation) {
        this.vocation = vocation;
    }

    name = "Состояние здоровья";

    nameFontSize = '28px';
    vocationFontSize = '20px';
    borderColor = "red";
    imgURL = function() {
        return "./assets/HealthStatus/HealthStatus.png";
    }

    card; 
    cardType; cardTypeContent; cardImg; cardImgContent; cardName; cardNameContent;
    cardBorder;
}

let HealthStatuses = [
    "Аллергия на лекарства", "Альбинизм", "Аритмия", "Астигматизм (70%)", "Астма (30%)", "Аутизм",
    "Без ноги", "Без руки", "Бесплодие", "Биполярное расстройство", "Болезнь Альцгеймера (20%)", "Бронхит",
    "ВИЧ (Умрет через 3 года)", "Глухо-немой", "Дальтонизм (Черно-белый монохроматизм)", "Депрессия", "Диабет", "Диарея",
    "Заикание", "Инсульт", "Кариес", "Конъюнктивит", "Косоглазие (10%)", "Мигрень (60%)",
    "Наркомания", "Не ходит", "Немой", "Не- свертываемость крови", "Паранойя", "Полностью здоровый",
    "Психическая неустойчивость", "Псориаз (Поражена малая часть кожи)", "Рак (умрет через 5 лет)", "Рак (умрет через месяц)", "Синдром Дауна", "Сифилис (80%)",
    "Слепота", "Туберкулез (40%)", "Шизофрения (2 стадия)", "Эпилепсия", "Язва желудка"
]
// === / HealthStatus (41шт.) ===

// === AddInfo (41шт.) ===
class AddInfo {
    constructor(vocation) {
        this.vocation = vocation;
    }

    name = "Дополнительная информация";

    nameFontSize = '21px';
    vocationFontSize = '18px';
    borderColor = "#944347";
    imgURL = function() {
        return "./assets/AddInfo/AddInfo.png";
    }

    card; 
    cardType; cardTypeContent; cardImg; cardImgContent; cardName; cardNameContent;
    cardBorder;
}

let AddInfos = [
    "Был(а) вожатым в лагере", "В прошлом мастер спорта по борьбе", "Ведёт личный дневник", "Верит в экстрасенсов", "Выиграл(а) в лотерее целое состояние", "Гадает по картам",
    "Занял(а) первое место на марафоне", "Знает четыре языка", "Играл(а) в театре", "Любит показывать карточные фокусы", "Может оказать первую помощь", "Не переносит алкоголь",
    "Ненавидит кофе", "Ненавидит современную музыку", "Ограбил(а) банк", "По первому образованию - терапевт", "Побывал(а) на вершине Эвереста", "Поставил(а) мировой рекорд по поеданию бургеров",
    "Продал(а) почку", "Проектировал(а) этот бункер", "Проходил(а) курсы кулинарии", "Проходил(а) курсы массажа", "Проходил(а) курсы парикмахера", "Проходил(а) курсы психолога",
    "Разговаривает на 3 языках", "Сидел(а) в тюрьме", "Страдает морской болезнью", "Считает, что живет в матрице", "Увлекается животноводством", "Увлекается охотой",
    "Умеет варить пиво", "Умеет делать и чинить часы", "Умеет делать оружие", "Умеет ориентироваться по звездам", "Умеет стрелять", "Хорошо знает высшую математику",
    "Читал книги про зомби", "Читал(а) книгу про выживание", "Является вегетарианцем", "Является копрофилом", "Является мастером спорта по боксу"
]
// === / AddInfo (41шт.) ===

// === Hobby (41шт.) ===
class Hobby {
    constructor(vocation) {
        this.vocation = vocation;
    }

    name = "Хобби";

    nameFontSize = '30px';
    vocationFontSize = '22px';
    borderColor = "#9F8B2A";
    imgURL = function() {
        return "./assets/Hobby/Hobby.png";
    }

    card; 
    cardType; cardTypeContent; cardImg; cardImgContent; cardName; cardNameContent;
    cardBorder;
}

let Hobbies = [
    "Бег", "Бодибилдинг", "Боевые искусства", "Ведение блога", "Велосипед", "Верховая езда",
    "Виноделие", "Волонтёрство", "Восточные танцы", "Вязание и шитье", "Готовка", "Зоология",
    "Зумба", "Йога", "Кемпинг", "Кладо- искательство", "Лыжи", "Любит собирать грибы",
    "Медитация", "Нумизматика", "Охота", "Паркур", "Пение", "Походы на природу",
    "Психологи", "Путешествие", "Разведение червей", "Резьба по металлу", "Робототехника", "Рыбалка",
    "Садоводство", "Скалолазание", "Сноуборд", "Стриптиз", "Сурвивализм", "Теннис",
    "Фитнес", "Футбол", "Хиромантия", "Чтение", "Шахматы"
]
// === / Hobby (41шт.) ===

// === Phobia (41шт.) ===
class Phobia {
    constructor(vocation) {
        this.vocation = vocation;
    }

    name = "Фобия";

    nameFontSize = '30px';
    vocationFontSize = '18px';
    borderColor = "#803E7D";
    imgURL = function() {
        return "./assets/Phobia/Phobia.png";
    }

    card; 
    cardType; cardTypeContent; cardImg; cardImgContent; cardName; cardNameContent;
    cardBorder;
}

let Phobias = [
    "Агорафобия (Боязнь открытого пространства)", "Акрофобия (Страх высоты)", "Альгинофобия (Паника при боли)", "Андрофобия (Страх перед мужчинами)", "Антофобия (Боязнь цветов)", "Арахнофобия (Боязнь пауков)",
    "Астрофобия (Страх при виде звездного неба)", "Аутофобия (Боязнь одиночества)", "Блаттофобия (Страх при виде тараканов, жуков)", "Ботанофобия (Страх при виде растений)", "Вагинофобия (Боится женских гениталий)", "Витрикофобия (Боязнь отчима)",
    "Гаптофобия (Боязнь касаний)", "Гераскофобия (Страх постареть)", "Гидрозофобия (Страх вспотеть)", "Гилофобия (Боязнь леса)", "Гинофобия (Боязнь женского пола)", "Гиппофобия (Боязнь лошадей)",
    "Годофобия (Страх отправляться в путешествие)", "Децидофобия (Боязнь принятия решений)", "Дистихифобия (Страх несчастного случая)", "Земмифобия (Боязнь крыс)", "Ипохондрия (Страх заболеть)", "Катагелофобия (Страх быть осмеянным)",
    "Каунтерфобия (Страх испугаться)", "Кимофобия (Боязнь волн)", "Клаустрофобия", "Клинофобия (Страх уснуть)", "Копрофобия (Страх фекалий)", "Коулрофобия (Боязнь клоунов)",
    "Кхорофобия (Страх танцев)", "Мезофобия (Страх заразиться какой-либо инфекцией)", "Нет фобий", "Радиофобия (Страх радиации)", "Социофобия", "Спидофобия (Страх заболеть СПИДом)",
    "Танатофобия (Страх при мысли о смерти)", "Электрофобия (Страх электричества)", "Эниссофобия (Страх услышать критику)", "Энозиофобия (Страх совершить грех)", "Ятрофобия (Страх при виде врача)"
]
// === / Phobia (41шт.) ===

// === Baggage (41шт.) ===
class Baggage {
    constructor(vocation) {
        this.vocation = vocation;
    }

    name = "Багаж";

    nameFontSize = '30px';
    vocationFontSize = '20px';
    borderColor = "#D2113E";
    imgURL = function() {
        return "./assets/Baggage/Baggage.png";
    }

    card; 
    cardType; cardTypeContent; cardImg; cardImgContent; cardName; cardNameContent;
    cardBorder;
}

let Baggages = [
    "Библия", "Биотуалет", "Газовая горелка", "Гитара", "Грудной ребёнок", "Губная гармошка",
    "Дедовское ружьё", "Две медицинских маски", "Дневник выжившего", "Дублёнка", "Зажигалка", "Запас шоколадок на две недели",
    "Игральные карты", "Ингалятор", "Канистра с бензином", "Карта местности", "Книга по социологии", "Компас",
    "Компьютер", "Коробка с боеприпасами", "Коробок спичек", "Кот", "Молоток и гвозди", "Набор инструментов",
    "Огнетушитель", "Пачка сигарет", "Попугай", "Презервативы", "Противогаз", "Респираторные маски",
    "Рулоны туалетной бумаги", "Семена пшеницы", "Сотовый телефон", "Таблетки от аллергии", "Топор и веревка", "Фильтр для воды",
    "Фонарик и запасные батарейки", "Фотоаппарат", "Четыре рации", "Шахматы", "Ящик пива",
]
// === / Baggage (41шт.) ===

// === / BioCharacteristic (672вар.) === age: 16-100
class BioCharacteristic {
    constructor(gender, sexOr) {
        this.gender = gender;
        this.sexOr = sexOr;
    }

    name = "Биологическая характеристика";

    nameFontSize = '22px';
    vocationFontSize = '22px';
    borderColor = "#B16216";
    imgURL = function() {
        if(this.gender == "Мужчина") {
            return "./assets/BioCharacteristic/Man.png";
        } else {
            return "./assets/BioCharacteristic/Woman.png";
        }
    }

    card; 
    cardType; cardTypeContent; cardImg; cardImgContent; cardName; cardNameContent; cardNameContentSpan1; cardNameContentSpan2;
    cardBorder;
}

let Gender = [
    "Мужчина", "Женщина"
]

let SexOr = [
    "Гетеросексуал", "Гетеросексуал", "Гетеросексуал", "Гетеросексуал", "Гетеросексуал",
    "Гетеросексуал", "Гомосексуал", "Гомосексуал", "Бисексуал", "Асексуал"
]
// === / BioCharacteristic (672вар.) ===

// === SpecСondition (56шт.) ===
class SpecСondition {
    constructor(vocation) {
        this.vocation = vocation;
    }

    name = "Специальные условия";

    nameFontSize = '24px';
    vocationFontSize = '16px';
    borderColor = "#C2B323";

    card; 
    cardType; cardTypeContent; cardImg; cardImgContent; cardName;
    cardBorder;
}

let SpecСonditions = [
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Ты можешь поменять свою карту 'Профессия' на новую из колоды",
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Ты можешь поменять свою карту 'Биологическая характеристика' на новую из колоды",
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Ты можешь поменять свою карту 'Фобия' на новую из колоды",
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Ты можешь поменять свою карту 'Состояние здоровья' на новую из колоды",
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Ты можешь поменять свою карту 'Дополнительная информация' на новую из колоды",
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Ты можешь поменять свою карту 'Биологическая характеристика' на новую из колоды",
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Ты можешь поменять свою карту 'Человеческие качества' на новую из колоды",
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Ты можешь поменять свою карту 'Багаж' на новую из колоды",
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Данная карта лечит тебя от бесплодия (Если тебе попалась 'карта здоровья' - бесплодие, то теперь ты идеально здоров)",
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Данная карта лечит бесплодие у мужчины (Если вам попалась 'карта здоровья' - бесплодие, то данная карта лечит тебя, при условии, что по игре вы мужчина)",
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Данная карта дает тебе возможность поменяться картой 'Фобия' с любым игроком на выбор",
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Данная карта дает тебе возможность поменяться картой 'Багаж' с любым игроком на выбор",
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Данная карта дает тебе возможность поменяться картой 'Хобби' с любым игроком на выбор",
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Данная карта дает тебе возможность поменяться картой 'Состояние здоровья'с любым игроком на выбор",
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Данная карта дает тебе возможность поменяться картой 'Хобби'с любым игроком на выбор",
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Данная карта дает тебе возможность поменяться картой 'Профессия'с любым игроком на выбор",
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Данная карта дает тебе возможность поменяться картой 'Состояние здоровья' с человеком справа",
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Данная карта дает тебе возможность поменяться картой 'Хобби' с человеком справа",
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Данная карта дает тебе возможность поменяться картой 'Профессия' с человеком справа",
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Данная карта дает тебе возможность перераздать у всех игроков (включая себя) Карточки 'Хобби'",
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Данная карта дает тебе возможность перераздать у всех игроков (включая себя) Карточки 'Состояние Здоровья'",
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Данная карта дает тебе возможность перераздать у всех игроков (включая себя) Карточки 'Биологическая характеристика'",
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Данная карта дает тебе возможность перераздать у всех игроков (включая себя) Карточки 'Профессия'",
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Данная карта дает тебе возможность перераздать у всех игроков (включая себя) Карточки 'Багаж'",
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Данная карта дает тебе возможность аннулировать карточки 'Профессия' у всех игроков (Принимайте решения на основании оставшейся информации)",
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Данная карта дает возможность тебе поменяться картой 'Дополнительная информация' с человеком справа",
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Данная карта дает возможность вылечить тебя от любого недуга, теперь ты абсолютно здоров",
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Данная карта дает возможность вылечить твою фобию",
    "<div class='imgTextDiv'>Смена карт<br></div><div></div> Все игроки меняются картами 'Профессия' по часовой стрелке",
    "<div class='imgTextDiv'>Окружение<br></div><div></div> Рядом с вами второй бункер, где находятся два строителя",
    "<div class='imgTextDiv'>Окружение<br></div><div></div> Рядом с вами второй бункер и он настроен не доброжелательно. Подумайте о своей безопасности",
    "<div class='imgTextDiv'>Окружение<br></div><div></div> Бункер находится на территории парка с аттракционами (разрушение парка 20%)",
    "<div class='imgTextDiv'>Окружение<br></div><div></div> В 20 метрах от вашего бункера сохранился погреб с вином",
    "<div class='imgTextDiv'>Окружение<br></div><div></div> В 30 метрах от вас склад с оружием",
    "<div class='imgTextDiv'>Окружение<br></div><div></div> Рядом с вами второй бункер, где находятся два медицинских сотрудника",
    "<div class='imgTextDiv'>Окружение<br></div><div></div> Возле вас находится бункер, в котором одни женщины (здоровые, возраст до 30 лет)",
    "<div class='imgTextDiv'>Окружение<br></div><div></div> Возле вас находится бункер, в котором одни мужчины(здоровые, возраст до 30 лет)",
    "<div class='imgTextDiv'>Окружение<br></div><div></div> Рядом с вами второй бункер, где находятся два химика",
    "<div class='imgTextDiv'>Окружение<br></div><div></div> Рядом с вами второй бункер, где находятся два охотника",
    "<div class='imgTextDiv'>Открытие карт<br></div><div></div> Данная карта дает тебе возможность открыть карту любой категории у любого игрока на выбор",
    "<div class='imgTextDiv'>Открытие карт<br></div><div></div> Данная карта дает тебе возможность открыть карту 'Состояние здоровья' у любого игрока выбор",
    "<div class='imgTextDiv'>Открытие карт<br></div><div></div> Данная карта дает тебе возможность открыть карту 'Фобия' у любого игрока выбор",
    "<div class='imgTextDiv'>Открытие карт<br></div><div></div> Данная карта дает тебе возможность открыть карту 'Биологическия характеристика' у любого игрока выбор",
    "<div class='imgTextDiv'>Друг<br></div><div></div> Чтобы одержать победу тебе нужно попасть в бункер вместе с игроком справа от тебя",
    "<div class='imgTextDiv'>Враг<br></div><div></div> Чтобы одержать победу тебе нужно попасть в бункер, а человек слева от тебя - враг, если он останется в игре ты проиграешь, даже попав в бункер.",
    "<div class='imgTextDiv'>Время<br></div><div></div> Данная карта увеличивает твое время на высказывание на 1 минуту",
    "<div class='imgTextDiv'>Время<br></div><div></div> Данная карта дает возможность сократить время высказывания любого игрока на 30 секунд",
    "<div class='imgTextDiv'>Количество<br></div><div></div> мест в бункере больше на 1",
    "<div class='imgTextDiv'>Количество<br></div><div></div> мест в бункере меньше на 1",
    "<div class='imgTextDiv'>Иммунитет<br></div><div></div> У тебя есть защита на один игровой круг, если против твоего персонажа максимальное количество голосов",
    "<div class='imgTextDiv'>Иммунитет<br></div><div></div> У тебя есть защита на один игровой круг другого игрока, ты не можешь защитить себя",
    "<div class='imgTextDiv'>Голосование<br></div><div></div> Данная карта дает тебе возможность самому выбрать кто покинет игровой круг без голосования",
    "<div class='imgTextDiv'>Голосование<br></div><div></div> Данная карта дает тебе возможность возвратить любого выбывшего игрока в игру",
    "<div class='imgTextDiv'>Голосование<br></div><div></div> Данная карта дает возможность аннулировать один голос против тебя",
    "<div class='imgTextDiv'>Голосование<br></div><div></div> Данная карта дает возможность добавить один голос на голосовании, теперь у тебя их два (1 раз)",
    "<div class='imgTextDiv'>Голосование<br></div><div></div> Данная карта дает тебе возможность забрать голос другого игрока, теперь у тебя их два"
]
// === / SpecСondition (56шт.) ===

// === Catastrophe (7шт.) ===
let Catastrophe = [
    "Зомби-апокалипсис",
    "Экологическая катастрофа",
    "Симианский грипп",
    "Суперкомпьютер",
    "Глобальный потоп",
    "Химическая война",
    "Проект «Стрела»",
    "Метеорит",
    "Биотерроризм",
    "Ядерная война",
    "Инопланетяне"
]

let CatastropheImgSrc = [
    "./assets/firstTitle/Catastrophe/Зомби-апокалипсис.png",
    "./assets/firstTitle/Catastrophe/Экологическая катастрофа.png",
    "./assets/firstTitle/Catastrophe/Симианский грипп.png",
    "./assets/firstTitle/Catastrophe/Суперкомпьютер.png",
    "./assets/firstTitle/Catastrophe/Глобальный потоп.png",
    "./assets/firstTitle/Catastrophe/Химическая война.png",
    "./assets/firstTitle/Catastrophe/Проект «Стрела».png",
    "./assets/firstTitle/Catastrophe/Метеорит.png",
    "./assets/firstTitle/Catastrophe/Биотерроризм.png",
    "./assets/firstTitle/Catastrophe/Ядерная война.png",
    "./assets/firstTitle/Catastrophe/Инопланетяне.png"
]

let CatastropheDescription = [
    "Неизвестный возбудитель стал причиной превращения людей в кровожадных зомби.<br> Коллапс системы.<br> Больницы более не функционируют.<br> Тотальная паника.<br> Армия начинает стрелять на поражение при попытке покинуть карантинную зону.<br> Власть уже не может контролировать ситуацию.<br> Начинается тотальное мародерство и анархия.<br> После выхода из бункера малый процент зомби останется в живых.<br> Остаток выжившего населения: 21%.<br> Разрушения на поверхности: 12%.",
    "Интенсивное ведение сельского хозяйства и деградация почв вкупе с засухой привели к пыльным бурям, которые массово уничтожают посевы и приводят к неурожаю и значительному уменьшению запасов пищи. Концентрация кислорода в атмосфере падает и климат значительно ухудшается.<br> Остаток выжившего населения: 17%.<br> Разрушения на поверхности: 4%.",
    "Созданный учеными штамм 'лекарства' от болезни Альцгеймера в итоге стал смертельным для людей, что привело к пандемии Cимианского гриппа и восходу эволюционировавших обезьян. У всех оставшихся людей есть иммунитет к вирусу но он способен мутировать. Больший процент обезьян настроен враждебно по отношению к людям.<br> Остаток выжившего населения: 4%.<br> Разрушения на поверхности: 24%.",
    "Искусственный интеллект, который задумывался для управления системами обороны, вышел из строя и посчитал человечество большой опасностью. Это привело к тому, что искусственный интеллект отключил инструкцию 'не убивать человека', и взял под контроль процедуры управления военными роботами, которые начали истреблять человечество. Суперкомпьютер захватил власть над планетой, выжившим людям пришлось прятаться в старых бункерах.<br> Остаток выжившего населения: 4%.<br> Разрушения на поверхности: 32%.",
    "Из-за деятельности человека все полярные снега расcтаяли, покрыв всю Землю водой. Климат серьезно нарушился, тропики теперь повсюду. Появились новые виды растений и насекомые крупных размеров. После выхода из бункера многие выжившие переквалифицировались в менял торговцев и бандитов, которые бороздят водные просторы и совершают разбои организованными группами.<br> Остаток выжившего населения: 25%.<br> Разрушения на поверхности: 1%.",
    "В результате применения химического и бактериологического оружия, был нарушен микробиологический состав почв, значительно изменился экологический баланс. Pастения, почва и вода были отравлены. На Земле остался малый процент населяющих её живых существ.<br> Остаток выжившего населения: 1%.<br> Разрушения на поверхности: 10%.",
    "Военные, работавшие над проектом, нечаянно открыли вход в иное измерение. Густой, неестественный белый туман медленно начал заполонять огромные участки поверхности Земли. Видимость практически нулевая. По миру стали бродить неведомые чудовища, которые могут уничтожить все Человечество. Разрушения глобальные.<br> Остаток выжившего населения: 1%.<br> Разрушения на поверхности: 26%.",
    "На планету падает космический объект огромных размеров, создавая мощную ударную волну, которая сносит все на своем пути. На месте падения образовывается масштабный кратер. Повсюду проходят сильные землетрясения и цунами. Пожары охватывают всю Землю, а из-за количества пыли, которая поднялась в атмосферу, на планете настает долгая 'ядерная зима'.<br> Остаток выжившего населения: 30%.<br> Разрушения на поверхности: 22%.",
    "Создавая более заразный и смертоносный штамм вируса в стенах исследовательской лаборатории, один из работников случайно им заразился, в результате чего вирус вышел из-под контроля и очень быстро распространился по всей планете. Большой процент всех живых существ погибло. У остальных существ и растений развились мутации.<br> Остаток выжившего населения: 29%.<br> Разрушения на поверхности: 10%.",
    "Несколько противоборствующих сторон одновременно запустили друг на друга залп ядерных боеголовок. После взрывов погибло большое количество людей и разразились огромные пожары. Всю планету окутала ядерная пыль, закрывшая солнечный свет и приведшая к долгой ядерной зиме. Наблюдаются проблемы с почвой, водой и растительностью на поверхности. Нужна химическая обработка.<br> Остаток выжившего населения: 28%.<br> Разрушения на поверхности: 44%.",
    "Инопланетная раса решила захватить Землю. Межпланетные аппараты падают на поверхность планеты один за другим. Оружие военных оказывается бессильным против них и постепенно пришельцы истребляют большую часть населения. К моменту выхода из бункера подавляющее большинство инопланетян погибло из-за неприспособленности к микроорганизмам, населяющих Землю.<br> Остаток выжившего населения: 1%.<br> Разрушения на поверхности: 18%."
]
// === / Catastrophe (7шт.) ===

// === BunkerDescription (41шт.) ===
let area = [
    "150 м²", "80 м²", "235 м²", "200 м²", "300 м²", "175 м²", "250 м²", "340 м²"
]

let time = [
    "1 год", "10 месяцев", "6 месяцев", "3 месяца", "4 месяца",
    "2 месяца", "3 года", "10 лет", "1 месяц", "8 месяцев", "2 года",
    "5 лет", "2 недели"
]

let equipment = [
    "Кухня-столовая", "Теплица", "Медкабинет", "Тренажерный зал", "Барьер для животных",
    "Библиотека", "Мастерская", "Химическая лаборатория", "Кинотеатр"
]

let things = [
    "Разобранный двигатель", "Шашки", "Пособие по выращиванию марихуаны", "Книга про динозавров", "Пять романов 'Песнь Льда и Пламени'", "Учебные пособия для изучения",
    "Книги по технологии строительства", "Набор столовых приборов", "Книга про зоологию", "Топографическая карта местности", "Атлас", "Глобус",
    "Шахматы", "Книги по ремонту электроники", "Телеграф", "Фортепиано", "Фонарик", "Бензин",
    "Бинокль", "Пистолет с боеприпасами", "Боеприпасы", "Пистолет", "Ружье", "Нож",
    "Рулетка", "Молоток с гвоздями", "Боксёрские перчатки", "Удобрение", "Зажигалка", "Калькулятор"
]

let residents = [
    "Крысы", "Насекомые", "Нету обитателей", "Пауки", "Змеи", "Слизни",
    "Летучие мыши", "Гусеницы"
]

let state = [
    "Убежище находится в хорошем состоянии и хорошо защищено внутри от недоброжелателей защитно-герметическими дверями",
    "Убежище находится в плохом состоянии, уязвимо к проникновению недоброжелателей"
]

let suppSystem = [
    "Все системы жизнеобеспечения в норме и работают в автономном режиме",
    "Некоторые системы жизнеобеспечения повреждены и зависят от специалиста"
]
// === / BunkerDescription (41шт.) ===

// Функция рендеринга карт
function createOneCard(type, cardsContainer, counter) {
    type.card = document.createElement("div");
    type.cardType = document.createElement("div");
    type.cardTypeContent = document.createElement("div");
    type.cardImg = document.createElement("div");
    if(counter == 7 || counter == 8) { type.cardImgContent = document.createElement("div"); } else { type.cardImgContent = document.createElement("img"); }
    type.cardName = document.createElement("div");
    if(counter != 7 && counter != 8) { type.cardNameContent = document.createElement("div"); }
    type.cardBorder = document.createElement("div");
    if(counter == 6) { type.cardNameContentSpan1 = document.createElement("span"); type.cardNameContentSpan2 = document.createElement("span"); }

        type.card.classList.add('card');
        type.cardType.classList.add('card-type');
        type.cardTypeContent.classList.add('card-type-content', 'flex-column');
        type.cardTypeContent.innerHTML = type.name.toUpperCase();
        type.cardTypeContent.style.fontSize = type.nameFontSize;
        type.cardImg.classList.add('card-img');
        if(counter == 7 || counter == 8) { 
            type.cardImgContent.innerHTML = type.vocation.toUpperCase();
            type.cardImgContent.style.color = "black";
            type.cardImgContent.style.fontSize = type.vocationFontSize;
            type.cardImgContent.style.padding = "0 25px";
            type.cardImgContent.style.textAlign = "center";
        } else {
            type.cardImgContent.classList.add('card-img-content'); 
            type.cardImgContent.src = type.imgURL();
        }
        type.cardName.classList.add('card-name');
        if(counter != 7 && counter != 8) { 
            type.cardNameContent.classList.add('card-name-content', 'flex-column');
            type.cardNameContent.style.fontSize = type.vocationFontSize;
            type.cardNameContent.style.color = 'white';
        }
        if(counter == 6) {
            type.cardNameContentSpan1.innerHTML = (type.gender + " " + (getRandomInt(84) + 16).toString() + " y.o.").toUpperCase();
            type.cardNameContentSpan1.style.color = '#E2B617';
            type.cardNameContentSpan2.innerHTML = type.sexOr.toUpperCase();
        } else {
            if(counter != 7 && counter != 8) { type.cardNameContent.innerHTML = type.vocation.toUpperCase(); }
        }
        type.cardBorder.classList.add('card-border');
        type.cardBorder.style.borderColor = type.borderColor;
    
    cardsContainer.appendChild(type.card);

        type.card.appendChild(type.cardType);
        type.cardType.appendChild(type.cardTypeContent);
        type.card.appendChild(type.cardImg);
        type.cardImg.appendChild(type.cardImgContent);
        type.card.appendChild(type.cardName);
        if(counter != 7 && counter != 8) { type.cardName.appendChild(type.cardNameContent); }
        if(counter == 6) {
            type.cardNameContent.appendChild(type.cardNameContentSpan1);
            type.cardNameContent.appendChild(type.cardNameContentSpan2);
        }
        type.card.appendChild(type.cardBorder);
}

function createCards(counter) {
    let cardsContainer = document.createElement("div");
    if(counter != 1) { 
        cardsContainer.classList.add("cards-container", "flex-row"); 
    } else {
        cardsContainer.classList.add("firstTitle", "flex-column"); 
    }
    mainBlock.appendChild(cardsContainer);

    if(counter == 1) {
        let firstTitleCatastrophe = document.createElement("div");
        let firstTitleCatastropheName = document.createElement("div");
        let firstTitleCatastropheDescription = document.createElement("div");
        let firstTitleCatastropheDescriptionDiv = document.createElement("div");
        let firstTitleBunkerDescription = document.createElement("div");
        let firstTitleBunkerDescriptionName = document.createElement("div");
        let firstTitleBunkerDescriptionDescription = document.createElement("div");
        let firstTitleBunkerDescriptionDescriptionDiv = document.createElement("div");
        
        let firstTitleCatastropheDescriptionDivImg = document.createElement("img");
        let firstTitleBunkerDescriptionDescriptionDivImg = document.createElement("img");

        firstTitleCatastrophe.classList.add("firstTitle-catastrophe");
        firstTitleCatastropheName.classList.add("firstTitle-catastrophe-name");
        firstTitleCatastropheDescription.classList.add("firstTitle-catastrophe-description", "flex-column");
        firstTitleCatastropheDescriptionDiv.classList.add("firstTitle-catastrophe-description-div", "flex-column");
        firstTitleCatastropheDescriptionDivImg.classList.add("firstTitle-img");

        firstTitleBunkerDescription.classList.add("firstTitle-bunkerDescription");
        firstTitleBunkerDescriptionName.classList.add("firstTitle-bunkerDescription-name");
        firstTitleBunkerDescriptionDescription.classList.add("firstTitle-bunkerDescription-description", "flex-column");
        firstTitleBunkerDescriptionDescriptionDiv.classList.add("firstTitle-bunkerDescription-description-div", "flex-column");
        firstTitleBunkerDescriptionDescriptionDivImg.classList.add("firstTitle-img");

        let numOfArr = getRandomInt(11);
        firstTitleCatastropheDescriptionDivImg.src = CatastropheImgSrc[numOfArr];
        firstTitleCatastropheName.innerHTML = Catastrophe[numOfArr].toUpperCase();
        firstTitleCatastropheDescriptionDiv.innerHTML = CatastropheDescription[numOfArr].toUpperCase();

        cardsContainer.appendChild(firstTitleCatastrophe);
            firstTitleCatastrophe.appendChild(firstTitleCatastropheName);
            firstTitleCatastrophe.appendChild(firstTitleCatastropheDescription);
                firstTitleCatastropheDescription.appendChild(firstTitleCatastropheDescriptionDiv);
                    firstTitleCatastropheDescriptionDiv.appendChild(firstTitleCatastropheDescriptionDivImg);


        let BunkerDescriptionText = "<p class='pPad'>Площадь убежища: " + area[getRandomInt(area.length)] + ";</p>" +
                                    "<p class='pPad'>Время нахождения в убежище: " + time[getRandomInt(time.length)] + ";</p>" +
                                    "<p class='pPad'>В убежище оборудовано: " + equipment[getRandomInt(equipment.length)] + ";</p>" +
                                    "<p class='pPad'>В убежище есть: " + things[getRandomInt(things.length)] + ";</p>" +
                                    "<p class='pPad'>В убежище есть: " + things[getRandomInt(things.length)] + ";</p>" +
                                    "<p class='pPad'>В убежище живут: " + residents[getRandomInt(residents.length)] + ";</p>" +
                                    "<p class='pPad'>" + state[getRandomInt(state.length)] + ";</p>" +
                                    "<p class='pPad'>" + suppSystem[getRandomInt(suppSystem.length)] + ";</p>";

        firstTitleBunkerDescriptionDescriptionDivImg.src = "./assets/firstTitle/BunkerDescription/BunkerDescriptionImg.png";
        firstTitleBunkerDescriptionName.innerHTML = "Описание бункера".toUpperCase();
        firstTitleBunkerDescriptionDescriptionDiv.innerHTML = BunkerDescriptionText.toUpperCase();

        cardsContainer.appendChild(firstTitleBunkerDescription);
            firstTitleBunkerDescription.appendChild(firstTitleBunkerDescriptionName);
            firstTitleBunkerDescription.appendChild(firstTitleBunkerDescriptionDescription);
                firstTitleBunkerDescriptionDescription.appendChild(firstTitleBunkerDescriptionDescriptionDiv);
                    firstTitleBunkerDescriptionDescriptionDiv.appendChild(firstTitleBunkerDescriptionDescriptionDivImg);
    } else if(counter == 2) {
        for(let i = 0; i < 9; i++) {
            let type = new Baggage(Baggages[getRandomInt(41)]);
            createOneCard(type, cardsContainer);
        }
    } else {
        for(let i = 0; i < 9; i++) {
            let type;
            if(i == 0) {
                type = new Profession(Professions[getRandomInt(61)]);
            } else if(i == 1) {
                type = new HumanQuality(HumanQualities[getRandomInt(41)]);
            } else if(i == 2) {
                type = new HealthStatus(HealthStatuses[getRandomInt(41)]);
            } else if(i == 3) {
                type = new AddInfo(AddInfos[getRandomInt(41)]);
            } else if(i == 4) {
                type = new Hobby(Hobbies[getRandomInt(41)]);
            } else if(i == 5) {
                type = new Phobia(Phobias[getRandomInt(41)]);
            } else if(i == 6) {
                type = new BioCharacteristic(Gender[getRandomInt(2)], SexOr[getRandomInt(10)]);
            } else if(i == 7) {
                type = new SpecСondition(SpecСonditions[getRandomInt(43)]);
            } else if(i == 8) {
                type = new SpecСondition(SpecСonditions[getRandomInt(43)]);
            }

            createOneCard(type, cardsContainer, i);
        }
    }
}

let mainBlock = document.querySelector(".mainBlock");
let numOfPlayers = document.querySelector(".numOfPlayers");
let button = document.querySelector('.button');
button.addEventListener('click', createCardsGo);

function createCardsGo() {
    while(mainBlock.firstChild) mainBlock.removeChild(mainBlock.firstChild);
    
    createCards(1);

    if(parseInt(numOfPlayers.value) < 10) {
        createCards(2);
    } else {
        createCards(2); createCards(2);
    }

    for(let i = 0; i < parseInt(numOfPlayers.value); i++) {
        createCards(3);
    }
}








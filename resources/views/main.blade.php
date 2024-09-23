<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Отзывы</title>
    <link rel="stylesheet" href="{{ url('styles.css') }}">
    <link rel="icon" href="{{url('logo.png')}}" type="image/png">
</head>
<body>
    

    <!-- Frame 190 -->
    <section class="frame" id="frame-190">
        <img src="{{url("logo.png")}}" alt="Логотип IFTAR" class="logo">
        <h1>Ас-саляму алейкум! 🙏</h1>
        <p>Поделитесь своим отзывом, и пусть ваш голос поможет нам стать лучше для всех наших гостей.</p>
        <button class="next-btn" onclick="nextFrame(184)">Далее</button>
    </section>

    <!-- Frame 184 -->
    <section class="frame hidden" id="frame-184">
        <label for="waiter-name">Имя Официанта</label>
        <input type="text" id="waiter-name" placeholder="Введите имя официанта">
        <p>Оценка работы официанта 🍽️</p>
        <div class="stars" id="rating-waiter">
            <span class="star" data-value="1">&#9733;</span>
            <span class="star" data-value="2">&#9733;</span>
            <span class="star" data-value="3">&#9733;</span>
            <span class="star" data-value="4">&#9733;</span>
            <span class="star" data-value="5">&#9733;</span>
        </div>
        <input type="hidden" id="rating-waiter-value" name="rating-waiter">
        <button class="next-btn" onclick="nextFrame(186)">Далее</button>
    </section>

    <!-- Frame 186 -->
    <section class="frame hidden" id="frame-186">
        <p>Скорость обслуживания ⏱️</p>
        <div class="stars" id="rating-service">
            <span class="star" data-value="1">&#9733;</span>
            <span class="star" data-value="2">&#9733;</span>
            <span class="star" data-value="3">&#9733;</span>
            <span class="star" data-value="4">&#9733;</span>
            <span class="star" data-value="5">&#9733;</span>
        </div>
        <input type="hidden" id="rating-service-value" name="rating-service">
        <button class="next-btn" onclick="nextFrame(187)">Далее</button>
    </section>

    <!-- Frame 187 -->
    <section class="frame hidden" id="frame-187">
        <p>Оценка еды 🍲</p>
        <div class="stars" id="rating-food">
            <span class="star" data-value="1">&#9733;</span>
            <span class="star" data-value="2">&#9733;</span>
            <span class="star" data-value="3">&#9733;</span>
            <span class="star" data-value="4">&#9733;</span>
            <span class="star" data-value="5">&#9733;</span>
        </div>
        <input type="hidden" id="rating-food-value" name="rating-food">
        <button class="next-btn" onclick="nextFrame(188)">Далее</button>
    </section>

    <!-- Frame 188 -->
    <section class="frame hidden" id="frame-188">
        <p>Замечания и предложения 😁</p>
        <textarea placeholder="Напишите свои предложения..."></textarea>
        <button class="next-btn" onclick="nextFrame(185)">Далее</button>
    </section>

    <!-- Frame 185 -->
    <section class="frame hidden" id="frame-185">
        <p>Для особых предложений и новостей, оставьте свои данные 😎</p>
        <input type="text" placeholder="Ваше Имя">
        <input type="tel" placeholder="Номер телефона">
        <button class="submit-btn" onclick="nextFrame(189); ">Далее</button>
    </section>

    <!-- Frame 189 -->
    <section class="frame hidden" id="frame-189">
        <img src="{{url("logo.png")}}" alt="Логотип IFTAR" class="logo">
        <p>Благодарим за обратную связь! 🙌</p>
    </section>

    <script src="{{url("scripts.js")}}"></script>
</body>
</html>

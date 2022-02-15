<template>
    <div class="dropdown-nav-menu">
        <div class="dropdown-menu__inner">
            <div class="dropdown-menu__item-wrapper">
                <h4 class="dropdown-menu__title">
                    Растения и горшки
                </h4>
                <li class="dropdown-menu__item">
                    <a href="/categories/1" class="dropdown-menu__chapter underline-animation">
                        Живые растения
                    </a>
                </li>
                <li class="dropdown-menu__item">
                    <a href="/categories/2" class="dropdown-menu__chapter underline-animation">
                        Растения в горшках
                    </a>
                </li>
                <li class="dropdown-menu__item">
                    <a class="dropdown-menu__chapter underline-animation">
                        Большие растения
                    </a>
                </li>
                <li class="dropdown-menu__item">
                    <a class="dropdown-menu__chapter underline-animation">
                        Горшки и средства для ухода
                    </a>
                </li>
            </div>

            <div class="dropdown-menu__item-wrapper">
                <h4 class="dropdown-menu__title">
                    Особые наборы
                </h4>
                <li class="dropdown-menu__item">
                    <a href="/categories/2" class="dropdown-menu__chapter underline-animation">
                        Для владельцев животных
                    </a>
                </li>
                <li class="dropdown-menu__item">
                    <a class="dropdown-menu__chapter underline-animation">
                        Легкий уход
                    </a>
                </li>
                <li class="dropdown-menu__item">
                    <a class="dropdown-menu__chapter underline-animation">
                        Высушенные растения
                    </a>
                </li>
                <li class="dropdown-menu__item">
                    <a class="dropdown-menu__chapter underline-animation">
                        Изящные цветы
                    </a>
                </li>
            </div>

            <div class="dropdown-menu__item-wrapper">
                <h4 class="dropdown-menu__title">
                    Подарки
                </h4>
                <li class="dropdown-menu__item">
                    <a class="dropdown-menu__chapter underline-animation">
                        Подарочные коллекции
                    </a>
                </li>
                <li class="dropdown-menu__item">
                    <a class="dropdown-menu__chapter underline-animation">
                        Для подписчиков
                    </a>
                </li>
                <li class="dropdown-menu__item">
                    <a class="dropdown-menu__chapter underline-animation">
                        Корпоративные подарки
                    </a>
                </li>
                <li class="dropdown-menu__item">
                    <a class="dropdown-menu__chapter underline-animation">
                        Подарочные карты
                    </a>
                </li>
            </div>

            <div class="dropdown-menu__item-wrapper">
                <p class="dropdown-menu__title">
                    Для дома
                </p>
                <li class="dropdown-menu__item">
                    <a class="dropdown-menu__chapter underline-animation">
                        Картины
                    </a>
                </li>
                <li class="dropdown-menu__item">
                    <a class="dropdown-menu__chapter underline-animation">
                        Свечи
                    </a>
                </li>
                <li class="dropdown-menu__item">
                    <a class="dropdown-menu__chapter underline-animation">
                        Аптечная лавка
                    </a>
                </li>
                <li class="dropdown-menu__item">
                    <a class="dropdown-menu__chapter underline-animation">
                        Наш мерч
                    </a>
                </li>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderDropdownMenu"
}
</script>

<style lang="scss">

.dropdown-nav-menu{
    position: absolute;
    left: 0;
    right: 0;

    width: 100%;
    max-width: 1440px;

    margin: 0 auto;

    background-color: #e6f6f3;
    display: block;
}

.dropdown-menu__inner{
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
}

.dropdown-menu__item-wrapper{
    display: flex;
    flex-direction: column;
    width: 25%;
    text-align: left;
}

.dropdown-menu__title{
    padding-bottom: 5px;
}

.dropdown-menu__chapter{
    font-size: 22px;
    font-weight: 600;
}

.dropdown-menu__item{
    padding-bottom: 8px;
}

</style>

<template>
    <landing name="dtkt_march2020_1" advantages="epressa_add_dtkt" class="landing-dtkt_march2020_1">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                             <picture class="cover__img">
                                 <source :srcset="mix('images/head_DK.webp')" type="image/webp">
                                 <img :src="mix('images/head_DK.jpg')" class="img-fluid" alt="">

                             </picture>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-slot:about>
            <div>
            </div>
        </template>
        <template v-slot:price-title>
            <div>
                <h2 class="landing-title landing-title--columns"><span>{{ page.options['order_title']}}</span></h2>
            </div>
        </template>
        <template v-slot:action-due>
            <p class="landing-section__action">{{ page.options['order_action']}} <br> <b>{{ page.options['order_action--bold']}}</b> </p>
        </template>
        <!--<template v-slot:tab-radio>
            <div class="tab-content"> <label class="label" :class="{active: tab ==='6'}" @click="tab = '6'">+ 1 подарунок </label> <label class="label" :class="{active: tab ==='12'}" @click="tab = '12'">+ 2 подарунки</label></div>
        </template>-->
        <template v-slot:packages_list>
            <landing-package-row >
                <landing-package article="ep-dtkt_ek" class="packages__column--one">
                    <template v-slot:title>
                        <span>ЕКСПЕРТ<br>та 2 подарунки</span>
                    </template>
                    <!--<template v-slot:period>
                        <div class="period">квітень - вересень 2020</div>
                    </template>-->
                    <template v-slot:gifts>
                        <li >Відеокурс "Виробництво та собівартість в 1С"</li>
                        <li  ><a href="https://rozetka.com.ua/193208401/p193208401/" target="_blank">Столик для ноутбука</a></li>
                    </template>
                    <template v-slot:abilities>
                        <li>Щоденна добірка новин</li>
                        <li>«Документи за тиждень»</li>
                        <li>«Запитання і відповіді» за тиждень</li>
                        <div v-if="show">
                            <li>Розумний податковий календар</li>
                            <li>База нормативних документів</li>
                            <li>Підсумковий випуск «Дебет-Кредит» за тиждень</li>
                            <li>Сервіс «Мій кабінет»</li>
                            <li>Пакет «Тематичні розсилки»</li>
                            <li>Електронний журнал «Дебет-Кредит»</li>
                            <li>Щомісячні спецвипуски</li>
                            <li>Доступ до архівних номерів на сайті</li>
                            <li class="package__abilities-item--noactive">Сервіс «Постав запитання редакції»</li>
                            <li class="package__abilities-item--noactive">Вебінари редакції</li>
                            <li class="package__abilities-item--noactive">Велика настільна книга</li>
                            <li class="package__abilities-item--noactive">Звітність у «СОТА»</li>
                        </div>
                        <p class="packages__list-show" @click="show = !show">{{ btnText }}</p>
                    </template>
                    <template v-slot:old-price>
                        <div class="package__old-price" style="text-decoration: line-through">253 грн/міс.</div>

                    </template>
                </landing-package>

                <landing-package article="ep-dtkt_pr" class="packages__column--one">
                    <template v-slot:title>
                        <span >ПРОФІ<br>та 2 подарунки</span>

                    </template>
                  <!--  <template v-slot:period>
                        <div class="period">квітень - вересень 2020</div>
                    </template>-->
                    <template v-slot:gifts>
                        <li >Відеокурс "Виробництво та собівартість в 1С"</li>
                        <li  ><a href="https://rozetka.com.ua/193208401/p193208401/" target="_blank">Столик для ноутбука</a></li>
                    </template>
                    <template v-slot:abilities>
                        <li>Щоденна добірка новин</li>
                        <li>«Документи за тиждень»</li>
                        <li>«Запитання і відповіді» за тиждень</li>
                        <div v-if="show">
                            <li>Розумний податковий календар</li>
                            <li>База нормативних документів</li>
                            <li>Підсумковий випуск «Дебет-Кредит» за тиждень</li>
                            <li>Сервіс «Мій кабінет»</li>
                            <li>Пакет «Тематичні розсилки»</li>
                            <li>Електронний журнал «Дебет-Кредит»</li>
                            <li>Щомісячні спецвипуски</li>
                            <li>Доступ до архівних номерів на сайті</li>
                            <li>Сервіс «Постав запитання редакції»</li>
                            <li>Вебінари редакції</li>
                            <li>Велика настільна книга</li>
                            <li>Звітність у «СОТА»</li>
                        </div>
                        <p class="packages__list-show" @click="show = !show">{{ btnText }}</p>
                    </template>
                    <template v-slot:old-price>
                        <div  class="package__old-price" style="text-decoration: line-through">366  грн/міс.</div>

                    </template>
                </landing-package>

                <landing-package article="ep-dtkt_pp" class="package-plus package-plus-top">
                    <template v-slot:title>

                        <span  >ПРОФІ + 7eminar.ua<br>та 2 подарунки</span>

                    </template>
                   <!-- <template v-slot:period>
                        <div class="period">квітень - вересень 2020</div>
                    </template>-->
                    <template v-slot:gifts>
                        <li >Відеокурс "Виробництво та собівартість в 1С"</li>
                        <li  ><a href="https://rozetka.com.ua/193208401/p193208401/" target="_blank">Столик для ноутбука</a></li>
                    </template>
                    <template v-slot:abilities>
                        <li>Щоденна добірка новин</li>
                        <li>«Документи за тиждень»</li>
                        <li>«Запитання і відповіді» за тиждень</li>
                            <div v-if="show">
                            <li>Розумний податковий календар</li>
                            <li>База нормативних документів</li>
                            <li>Підсумковий випуск «Дебет-Кредит» за тиждень</li>
                            <li>Сервіс «Мій кабінет»</li>
                            <li>Пакет «Тематичні розсилки»</li>
                            <li>Електронний журнал «Дебет-Кредит»</li>
                            <li>Щомісячні спецвипуски</li>
                            <li>Доступ до архівних номерів на сайті</li>
                            <li>Сервіс «Постав запитання редакції»</li>
                            <li>Вебінари редакції</li>
                            <li>Велика настільна книга</li>
                            <li>Звітність у «СОТА»</li>
                            <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>: понад 160 курсів та вебінарів для перегляду
                                <!--<br><span  > (квітень - вересень 2020)</span>--> </li>
                        </div>
                        <p class="packages__list-show" @click="show = !show">{{ btnText }}</p>
                    </template>
                    <template v-slot:old-price>
                        <div  class="package__old-price" style="text-decoration: line-through">516  грн/міс.</div>

                    </template>
                </landing-package>
            </landing-package-row>


            <landing-package-row >
                <landing-package article="ep-dtkt_ek_action" class="packages__column--two">
                    <template v-slot:title>
                        <span>ЕКСПЕРТ<br>та подарунок</span>

                    </template>
                    <!--<template v-slot:period>
                        <div class="period">квітень - вересень 2020</div>
                    </template>-->
                    <template v-slot:gifts>
                        <li >Відеокурс "Виробництво та собівартість в 1С"</li>
                        <li class="no-active" >Столик для ноутбука</li>
                    </template>
                    <template v-slot:abilities>
                        <li>Щоденна добірка новин</li>
                        <li>«Документи за тиждень»</li>
                        <li>«Запитання і відповіді» за тиждень</li>
                        <div v-if="show">
                            <li>Розумний податковий календар</li>
                            <li>База нормативних документів</li>
                            <li>Підсумковий випуск «Дебет-Кредит» за тиждень</li>
                            <li>Сервіс «Мій кабінет»</li>
                            <li>Пакет «Тематичні розсилки»</li>
                            <li>Електронний журнал «Дебет-Кредит»</li>
                            <li>Щомісячні спецвипуски</li>
                            <li>Доступ до архівних номерів на сайті</li>
                            <li class="package__abilities-item--noactive">Сервіс «Постав запитання редакції»</li>
                            <li class="package__abilities-item--noactive">Вебінари редакції</li>
                            <li class="package__abilities-item--noactive">Велика настільна книга</li>
                            <li class="package__abilities-item--noactive">Звітність у «СОТА»</li>
                        </div>
                        <p class="packages__list-show" @click="show = !show">{{ btnText }}</p>
                    </template>
                    <template v-slot:old-price>
                        <div class="package__old-price" style="text-decoration: line-through">165 грн/міс.</div>

                    </template>
                </landing-package>

                <landing-package article="ep-dtkt_pr_action" class="packages__column--two">
                    <template v-slot:title>
                        <span >ПРОФІ<br>та подарунок</span>

                    </template>
                    <!--  <template v-slot:period>
                          <div class="period">квітень - вересень 2020</div>
                      </template>-->
                    <template v-slot:gifts>
                        <li >Відеокурс "Виробництво та собівартість в 1С"</li>
                        <li class="no-active" >Столик для ноутбука</li>
                    </template>
                    <template v-slot:abilities>
                        <li>Щоденна добірка новин</li>
                        <li>«Документи за тиждень»</li>
                        <li>«Запитання і відповіді» за тиждень</li>
                        <div v-if="show">
                            <li>Розумний податковий календар</li>
                            <li>База нормативних документів</li>
                            <li>Підсумковий випуск «Дебет-Кредит» за тиждень</li>
                            <li>Сервіс «Мій кабінет»</li>
                            <li>Пакет «Тематичні розсилки»</li>
                            <li>Електронний журнал «Дебет-Кредит»</li>
                            <li>Щомісячні спецвипуски</li>
                            <li>Доступ до архівних номерів на сайті</li>
                            <li>Сервіс «Постав запитання редакції»</li>
                            <li>Вебінари редакції</li>
                            <li>Велика настільна книга</li>
                            <li>Звітність у «СОТА»</li>
                        </div>
                        <p class="packages__list-show" @click="show = !show">{{ btnText }}</p>
                    </template>
                    <template v-slot:old-price>
                        <div  class="package__old-price" style="text-decoration: line-through">278 грн/міс.</div>

                    </template>
                </landing-package>

                <landing-package article="ep-dtkt_pp_action" class="package-plus package-plus-top">
                    <template v-slot:title>

                        <span  >ПРОФІ + 7eminar.ua<br>та подарунок</span>

                    </template>
                    <!-- <template v-slot:period>
                         <div class="period">квітень - вересень 2020</div>
                     </template>-->
                    <template v-slot:gifts>
                        <li >Відеокурс "Виробництво та собівартість в 1С"</li>
                        <li class="no-active" >Столик для ноутбука</li>
                    </template>
                    <template v-slot:abilities>
                        <li>Щоденна добірка новин</li>
                        <li>«Документи за тиждень»</li>
                        <li>«Запитання і відповіді» за тиждень</li>
                        <div v-if="show">
                            <li>Розумний податковий календар</li>
                            <li>База нормативних документів</li>
                            <li>Підсумковий випуск «Дебет-Кредит» за тиждень</li>
                            <li>Сервіс «Мій кабінет»</li>
                            <li>Пакет «Тематичні розсилки»</li>
                            <li>Електронний журнал «Дебет-Кредит»</li>
                            <li>Щомісячні спецвипуски</li>
                            <li>Доступ до архівних номерів на сайті</li>
                            <li>Сервіс «Постав запитання редакції»</li>
                            <li>Вебінари редакції</li>
                            <li>Велика настільна книга</li>
                            <li>Звітність у «СОТА»</li>
                            <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>: понад 160 курсів та вебінарів для перегляду
                                <!--<br><span  > (квітень - вересень 2020)</span>--> </li>
                        </div>
                        <p class="packages__list-show" @click="show = !show">{{ btnText }}</p>
                    </template>
                    <template v-slot:old-price>
                        <div  class="package__old-price" style="text-decoration: line-through">428 грн/міс.</div>

                    </template>
                </landing-package>
            </landing-package-row>
        </template>
    </landing>

</template>

<script>
import Page from '../../core/Page'

export default {
    mixins: [Page],
    computed: {

        btnText: function() {
            if(this.show) {
                return 'Приховати'
            }

            return 'А ще входить...'
        }
    },
    data:()=>({
        show: false,
    })
}
</script>
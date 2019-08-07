<template>
    <div id="page-order">
        <div class="container">
            <div class="e-order">
                <div v-if="processing" class="e-order-loader">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
                <div v-if="loading" class="e-order-loader">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="order">
                        <h1 class="order__headline">Інформація про замовлення:</h1>
                        <div class="order__info-product">
                            <div class="form-group row">
                                <label class="col-3 col-sm-3 col-form-label">Назва:</label>
                                <div class="col-9 col-sm-9 col-form-value"><b>{{product.title}}</b></div>
                            </div>
                            <div class="form-group row align-items-center">
                                <label class="col-3 col-sm-3 col-form-label">Сума:</label>
                                <div class="col-9 col-sm-9">{{price.pretty}} грн</div>
                            </div>
                            <div v-if="options.begin" class="form-group row align-items-center">
                                <label class="col-sm-3 col-form-label">Початок:</label>
                                <div class="col-sm-9">
                                    <div v-if="product.options.beginValues && product.options.beginValues.length > 1">
                                        <select class="form-control" v-model="options.begin">
                                            <option v-for="value in product.options.beginValues" :key="value.value"
                                                    :value="value.value"
                                                    v-text="value.label"></option>
                                        </select>
                                    </div>
                                    <span v-else>{{options.begin}}</span>
                                </div>
                            </div>
                            <div v-if="options.periods" class="form-group row align-items-center">
                                <label class="col-sm-3 col-form-label">Період:</label>
                                <div class="col-sm-9">
                                    <div v-if="product.options.periodValues && product.options.periodValues.length > 1">
                                        <select class="form-control" v-model="options.periods">
                                            <option v-for="value in product.options.periodValues" :key="value.value"
                                                    :value="value.value"
                                                    v-text="value.caption">
                                            </option>
                                        </select>
                                    </div>
                                    <span v-else>{{options.periods}}</span>
                                </div>
                            </div>
                        </div>
                        <div v-if="product.hasQuantity" class="order__quantity align-items-center">
                            <template>
                                <div>Кількість: <input v-model="quantity"/></div>
                                <div>Cума: {{price.prettyTotal}} грн</div>
                            </template>
                        </div>
                        <div class="order__total align-items-center">
                            <span class="wallet">Загальна сума:</span>
                            <span><b>{{price.pretty}}</b> грн</span>
                        </div>
                        <div class="order__info-payer">
                            <div class="form-group row">
                                <label for="email" class="col-sm-3 col-form-label">E-mail:</label>
                                <div class="col-sm-9">
                                    <input v-model.trim="$v.customer.email.$model" class="form-control" id="email"/>
                                    <span class="error"
                                          v-if="$v.customer.email.$error && !$v.customer.email.required">це поле необхідно заповнити</span>
                                    <span class="error"
                                          v-else-if="$v.customer.email.$error && !$v.customer.email.email">введіть коректно e-mail</span>
                                    <span class="error" v-else-if="errors.has('customer.email')">{{errors.first('customer.email')}}</span>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="name" class="col-sm-3 col-form-label">Платник:</label>
                                <div class="col-sm-9">
                                    <input v-model.trim="$v.customer.name.$model" class="form-control" id="name"/>
                                    <span class="error"
                                          v-if="$v.customer.name.$error && !$v.customer.name.required">це поле необхідно заповнити</span>
                                    <span class="error"
                                          v-else-if="$v.customer.name.$error && !$v.customer.name.minLength">ведіть не менше {{ $v.customer.name.$params.minLength.min }} символів</span>
                                    <span class="error" v-else-if="errors.has('customer.name')">{{errors.first('customer.name')}}</span>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="phone" class="col-sm-3 col-form-label">Телефон:</label>
                                <div class="col-sm-9">
                                    <input v-model.trim="$v.customer.phone.$model" class="form-control" id="phone"
                                           v-mask="phoneMask"/>
                                    <span class="error"
                                          v-if="$v.customer.phone.$error && !$v.customer.phone.required">це поле необхідно заповнити</span>
                                    <span class="error"
                                          v-else-if="$v.customer.phone.$error && !$v.customer.phone.phone">введіть правильний номер телефону</span>
                                    <span class="error" v-else-if="errors.has('customer.phone')">{{errors.first('customer.phone')}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="order__controls align-items-center">
                            <div v-if="product.processing.includes('INVOICE')">
                                <button @click="send('INVOICE')" class="btn btn-order btn-form"
                                        :disabled="$v.$error">
                                    Отримати рахунок
                                </button>
                            </div>
                            <div v-if="product.processing.includes('CARD')">
                                <button @click="send('CARD')" class="btn btn-form btn-card" :disabled="$v.$error">
                                    Оплатити карткою
                                </button>
                            </div>
                        </div>
                        <div class="order__logo"></div>
                    </div>
                </div>

                <!--<router-link :to="{-->
                <!--name:'page',-->
                <!--params:{page:'order'},-->
                <!--query:{-->
                <!--article:'ep-interbuh_gazeta',-->
                <!--'options[periods]':3,-->
                <!--'options[begin]': '2020-01-01',-->
                <!--}-->
                <!--}" replace>3-->
                <!--</router-link>-->
                <!--,-->
                <!--<router-link :to="{-->
                <!--name:'page',-->
                <!--params:{page:'order'},-->
                <!--query:{-->
                <!--article:'ep-interbuh_gazeta',-->
                <!--'options[periods]':6,-->
                <!--'options[begin]': '2020-01-01',-->
                <!--}-->
                <!--}" replace>6-->
                <!--</router-link>-->
                <!--,-->
                <!--<router-link :to="{-->
                <!--name:'page',-->
                <!--params:{page:'order'},-->
                <!--query:{-->
                <!--article:'ep-interbuh_gazeta',-->
                <!--'options[periods]':12,-->
                <!--'options[begin]': '2020-01-01',-->
                <!--}-->
                <!--}" replace>12-->
                <!--</router-link>-->
                <div v-if="done" class="popup">
                    <div class="popup-body">
                        <h2>Дякуємо!</h2>
                        <p>Вам відправлено лист з рахунком</p>
                        <app-logo/>
                        <span @click='closeModal()' class="popup-close"></span>
                    </div>
                </div>

                <div v-if="liqpay" id="page-order-liqpay-wrapper">
                    <div id="page-order-liqpay">
                        <div class="close" @click="liqpay=false">x</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Errors from '../../core/Errors'
import liqpayFactory from './liqpay'
import AppLogo from './AppLogo'

const fill = (name, data) => Object.keys(data).reduce((obj, key) => Object.assign(obj, { [`${name}[${key}]`]: data[key] }), {})
export default {
    components: { AppLogo },
    props: {
        page: {
            type: Object,
            require: true,
        },
    },
    data() {
        return {
            loadingPrice: true,
            processing: false,
            quantity: 1,
            options: {
                begin: null,
                periods: 0,
            },
            price: {},
            product: null,
            customer: {
                email: '',
                name: '',
                phone: '',
            },
            errors: new Errors(),
            done: false,
            liqpay: false,
        }
    },
    validations() {
        return {
            customer: {
                email: {
                    required: this.$validators.required,
                    email: this.$validators.email,
                },
                name: {
                    required: this.$validators.required,
                    minLength: this.$validators.minLength(2),
                },
                phone: {
                    required: this.$validators.required,
                    phone: this.$validators.phone,
                },
            },
        }
    },
    mounted() {
        this.$v.customer.name.$reset()
    },
    beforeRouteEnter(from, to, next) {
        axios.get('/api/shop/product', {
            params: {
                ...to.query,
            },
        }).then(({ data }) => {
            next(vm => vm.setData(data))
        }, next)
    },
    computed: {
        loading() {
            return this.product === null
        },
        phoneMask() {
            let mask = '(0##) ###-##-##'
            const val = this.customer.phone.replace(/\D/g, '')

            if (val.match(/^(380|0)?(3(?:5[013-9]|[1-46-8])|4(?:[137][013-9]|6|[45][6-9]|8[4-6])|5(?:[1245][013-9]|6[0135-9]|3|7[4-6])|6(?:[49][013-9]|5[0135-9]|[12][13-8]))/)
                || val.match(/^(380|0)?(3(?:5[013-9]|[1-46-8](?:22|[013-9]))|4(?:[137][013-9]|6(?:[013-9]|22)|[45][6-9]|8[4-6])|5(?:[1245][013-9]|6(?:3[02389]|[015689])|3|7[4-6])|6(?:[49][013-9]|5[0135-9]|[12][13-8]))/)
            ) {
                mask = '(0####) #####'
            }

            if (val.match(/^(380|0)?(3[1-8]2|4[13678]2|5(?:[12457]2|6[24])|6(?:[49]2|[12][29]|5[24])|8[0-8]|90)/)
                || val.match(/^(380|0)?(3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[49]2|[12][29]|5[24])|8[0-8]|90)/)
            ) {
                mask = '(0###) ###-###'
            }

            if (val.match(/^(380|0)?([38]9|4(?:[45][0-5]|87)|5(?:0|6[37]|7[37])|6[36-8]|7|9[1-9])/)
                || val.match(/^(380|0)?([38]9|4(?:[45][0-5]|87)|5(?:0|6(?:3[14-7]|7)|7[37])|6[36-8]|7|9[1-9])/)
            ) {
                mask = '(0##) ###-####'
            }

            mask = '+38 ' + mask

            return mask
        },
    },
    watch: {
        options: {
            handler() {
                this.updatePrice()
            },
            deep: true,
        },
        quantity() {
            this.updatePrice()
        },
    },
    methods: {
        setData({ price, quantity, ...product }) {
            this.price = price
            this.product = product
            this.quantity = quantity
            const beginValues = product.options.beginValues || []
            this.options.begin = (beginValues.find(v => v.value === product.options.begin) || beginValues[0] || {}).value || product.options.begin
            const periodsValues = product.options.periodsValues || []
            this.options.periods = (periodsValues.find(v => v === product.options.periods) || periodsValues[0] || {}).value || product.options.periods
            this.loadingPrice = false
        },
        updatePrice() {
            this.loadingPrice = true
            axios.get('/api/shop/price', {
                params: {
                    article: this.product.article,
                    quantity: this.quantity,
                    ...fill('options', this.options),
                },
            }).then(({ data }) => {
                this.price = data
                this.loadingPrice = false
            })
        },
        send(processing) {
            this.$v.$touch()
            if (this.$v.$invalid) return
            this.processing = true
            axios.post('/api/shop/order', {
                article: this.product.article,
                quantity: this.quantity,
                processing,
                options: this.options,
                customer: this.customer,
            }).then(({ data: result }) => {
                    switch (result.action) {
                        case 'AWAIT':
                            this.done = true
                            ga('ecommerce:addTransaction', {
                                id: this.product.article,
                                affiliation: this.product.article,
                                revenue: this.price.total,
                                shipping: 0,
                                tax: 0,
                                'currency': 'UAH',
                            })

                            ga('ecommerce:addItem', {
                                id: this.product.article,
                                name: this.product.title,    // Product name. Required.
                                sku: this.product.article,                 // SKU/code.
                                price: this.price.total,                 // Unit price.
                                quantity: this.quantity,                   // Quantity.
                            })

                            ga('ecommerce:send')
                            break
                        case 'FORM':
                            if (result.data.provider === 'liqpay') {
                                liqpayFactory().then(liqpay => {
                                    this.liqpay = true
                                    this.$nextTick().then(() => {
                                        liqpay.init({
                                            data: result.data.data.data,
                                            signature: result.data.data.signature,
                                            embedTo: '#page-order-liqpay',
                                            language: 'uk',
                                            mode: 'embed', // embed || popup
                                        }).on('liqpay.callback', (data) => {
                                            console.log(data.status)
                                            console.log(data)
                                        }).on('liqpay.ready', (data) => {

                                            console.log('liqpay.ready', this, data, liqpay)
                                        }).on('liqpay.close', (data) => {
                                            console.log('liqpay.close', data)
                                        })
                                    })
                                })
                            }
                            break
                    }
                }, error => {
                    if (error.response.status === 422) {
                        this.errors = new Errors(error.response.data.errors)
                    } else {
                        alert('Виникла помилка, спробуйте пізніше.')
                    }
                },
            ).finally(() => {
                this.processing = false
            })
        },
        closeModal() {
            window.close()
        },
    },
}
</script>
<template>
    <div id="page-order">
        <router-link :to="{
        name:'page',
        params:{page:'order'},
        query:{
            article:'ep-interbuh_gazeta',
            'options[periods]':3,
            'options[begin]': '2020-01-01',
        }
        }" replace>3
        </router-link>
        ,
        <router-link :to="{
        name:'page',
        params:{page:'order'},
        query:{
            article:'ep-interbuh_gazeta',
            'options[periods]':6,
            'options[begin]': '2020-01-01',
        }
        }" replace>6
        </router-link>
        ,
        <router-link :to="{
        name:'page',
        params:{page:'order'},
        query:{
            article:'ep-interbuh_gazeta',
            'options[periods]':12,
            'options[begin]': '2020-01-01',
        }
        }" replace>12
        </router-link>
        <div v-if="loading">
            Loading
        </div>
        <div v-if="processing">
            Loading
        </div>
        <div v-else>
            <div>{{product.title}}</div>
            <div>Ціна: {{price.pretty}}</div>
            <div v-if="options.begin">
                Початок:
                <span v-if="product.options.beginValues && product.options.beginValues.length > 1">
                    <select v-model="options.begin">
                        <option v-for="value in product.options.beginValues" :key="value.value"
                                :value="value.value"
                                v-text="value.label"></option>
                    </select>
                </span>
                <span v-else>{{options.begin}}</span>
            </div>
            <div v-if="options.periods">
                Період:
                <span v-if="product.options.periodValues && product.options.periodValues.length > 1">
                    <select v-model="options.periods">
                        <option v-for="value in product.options.periodValues" :key="value"
                                :value="value"
                                v-text="value"></option>
                    </select>
                </span>
                <span v-else>{{options.periods}}</span>
            </div>
            <template v-if="product.hasQuantity">
                <div>Кількість: <input v-model="quantity"/></div>
                <div>Cума: {{price.prettyTotal}}</div>
            </template>

            <div>
                <div>email <input v-model="customer.email"/>
                    <span v-if="errors.has('customer.email')">{{errors.first('customer.email')}}</span></div>
                <div>Ім'я <input v-model="customer.name"/>
                    <span v-if="errors.has('customer.name')">{{errors.first('customer.name')}}</span></div>
                <div>Телефон <input v-model="customer.phone"/>
                    <span v-if="errors.has('customer.phone')">{{errors.first('customer.phone')}}</span></div>
            </div>
            <div v-if="product.processing.includes('INVOICE')">
                <button @click="send('INVOICE')">Рахунок</button>
            </div>
            <div v-if="product.processing.includes('CARD')">
                <button @click="send('CARD')">Картка</button>
            </div>
        </div>
        <div class="popup" v-if="done">
            done
        </div>
        <div v-if="liqpay" id="page-order-liqpay-wrapper">
            <div id="page-order-liqpay">
                <div class="close" @click="liqpay=false">x</div>
            </div>
        </div>
    </div>
</template>

<script>
import Errors from 'form-backend-validation/src/Errors'
import liqpayFactory from './liqpay'

const fill = (name, data) => Object.keys(data).reduce((obj, key) => Object.assign(obj, { [`${name}[${key}]`]: data[key] }), {})
export default {
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
            this.options.periods = periodsValues.find(v => v === product.options.periods) || periodsValues[0] || product.options.periods
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
            this.processing = true
            axios.post('/api/shop/order', {
                article: this.product.article,
                quantity: this.quantity,
                processing,
                options: this.options,
                customer: this.customer,
            }).then(({ data: result }) => {
                    this.processing = false
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
            )
        },
    },
}
</script>
<style lang="scss">
    #page-order {

    }
</style>
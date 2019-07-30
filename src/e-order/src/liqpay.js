const promise = new Promise((r, e) => {
    import(/* webpackMode: "eager" */ './liqpay.scss')
    requirejs(['https://static.liqpay.ua/libjs/checkout.js'], () => {
        r(window['LiqPayCheckout'])
    }, e)
})

export default () => promise
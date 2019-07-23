export default {
    props: {
        page: {
            type: Object,
            require: true
        },
        data: {
            type: Object
        },
        loading: {
            type: Boolean,
            default: false,
        }
    }
}
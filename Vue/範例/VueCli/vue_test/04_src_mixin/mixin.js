export const hunhe = {
    methods: {
        showName() {
            alert(this.name);
        },
    },
    mounted() {
        console.log("hunhe");
    },
};

export const hunhe2 = {
    data() {
        return {
            test: "測試",
        };
    },
    mounted() {
        console.log("hunhe2");
    },
};

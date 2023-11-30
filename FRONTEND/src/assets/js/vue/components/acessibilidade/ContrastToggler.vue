<template lang="pug">
button.contrast__toggler(
	type="button"
    @click="toggle"
    :class=`{
        'contrast__mode--enabled': contrastMode
    }`
)
    i.switch(
        :class=`{
            'checked': contrastMode
        }`
    )
    span CONTRASTE
</template>

<script>
export default {
    data() {
        return {
            contrastMode: false
        }
    },
    created() {
        let constrastMode = localStorage.getItem('contrastMode');

        if(constrastMode) {

            this.contrastMode = JSON.parse(constrastMode);
            this.toggleClass();
        }
    },
    watch: {
        contrastMode(value) {
            localStorage.setItem('contrastMode', JSON.stringify(value));
            this.toggleClass();
        }
    },
    methods: {
        toggle() {
            this.contrastMode = !this.contrastMode;
        },
        toggleClass() {
            let classMethod = this.contrastMode ? "add" : "remove";
            document.body.classList[classMethod]('contrast-mode')
        }
    }
}
</script>

<style lang="scss">
@import "../../utils/core.scss";

.contrast__toggler{
    display: inline-flex;
    align-items: center;
    padding: .375rem .75rem;
    border: none;
    background: transparent;
    font-size: 1rem;

    .switch{
        width: 2rem;
        height: 1rem;
        display: inline-flex;
        border: 1px solid #CCC;
        border-radius: .5rem;
        vertical-align: middle;
        margin-right: 1ch;
        overflow: hidden;
        position: relative;
        transition: background .3s linear;

        &:before{
            content:'';
            display: inline-block;
            width: calc(1rem - 2px);
            height: calc(1rem - 2px);
            display: inline-block;
            position: absolute;
            left: 0;
            top: 0;
            background: #FFF;
            border-radius: 50%;
            transition: transform .3s linear;
        }

        &:not(.checked) {
            background: #DDD;
        }

        &.checked{
            background: $success;

            &:before{
                transform: translateX(1rem);
            }
        }
    }
}
</style>

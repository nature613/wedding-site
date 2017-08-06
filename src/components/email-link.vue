<template>
    <a href="#" @click.prevent="open" v-html="obfuscatedText"></a>
</template>

<script>

    export default {
        props: {
            'domain': {
                required: true,
                type: String
            },
            'local-part': {
                required: true,
                type: String
            },
            'subject': String
        },
        computed: {
            href: function () {
                let uri = `mailto:${this.localPart}@${this.domain}`

                if (this.subject) {
                    uri += `?subject=${encodeURIComponent(this.subject)}`
                }

                return uri
            },
            obfuscatedText: function () {
                return obfuscateHTML(this.localPart) + '&#64;' + obfuscateHTML(this.domain)
            }
        },
        methods: {
            open() {
                window.open(this.href, '_self')
            }
        }
    }

    function obfuscateHTML(text) {
        return text.split('').join('<span style="display:none">anti-spam</span>')
    }

</script>

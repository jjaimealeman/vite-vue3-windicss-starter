import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    extract: {
        include: ['src/**/*.{vue}'],
        exclude: ['node_modules', '.git'],
    },
    plugins: [
        require('windicss/plugin/aspect-ratio'),
        require('windicss/plugin/forms'),
        require('windicss/plugin/filters'),
        require('windicss/plugin/line-clamp'),
        require('windicss/plugin/scroll-snap'),
        require('windicss/plugin/typography')
    ]
})

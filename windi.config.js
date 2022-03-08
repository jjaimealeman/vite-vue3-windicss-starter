import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['src/**/*.{vue}'],
    exclude: ['node_modules', '.git'],
  },
})

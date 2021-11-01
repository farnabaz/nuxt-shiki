import arraybuffer from './arraybuffer';
import { defineNuxtConfig } from "@nuxt/bridge"

export default defineNuxtConfig({
  buildModules: [
    '@nuxt/bridge'
  ],
  nitro: {
    experiments: {
      wasm: false
    },
    hooks: {
      'nitro:rollup:before'(ctx) {
        ctx.rollupConfig.plugins.push(
          // @ts-ignore
          arraybuffer({ include: '**/*.wasm' })
        )
      }
    }
  }
})
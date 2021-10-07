import { getHighlighter, setOnigasmWASM } from 'shiki'
// import onigasm from './onigasm.wasm' // works
import onigasm from 'shiki/dist/onigasm.wasm' // Don't worl

export default async () => {
  setOnigasmWASM(onigasm)
  const shikiHighlighter = await getHighlighter({})
  
  return {
    result: shikiHighlighter.codeToThemedTokens('const a = 1', 'typescript')
  }
}

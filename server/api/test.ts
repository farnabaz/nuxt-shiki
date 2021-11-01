import { getHighlighter, setOnigasmWASM } from 'shiki'
// import onigasm from './onigasm.wasm' // works
import onigasm from 'shiki/dist/onigasm.wasm' // Don't worl
import nord from 'shiki/themes/nord.json'
import tsLang from 'shiki/languages/typescript.tmLanguage.json'

export default async () => {
  setOnigasmWASM(onigasm)
  const shikiHighlighter = await getHighlighter({
    theme: nord,
    langs:[{
      id: 'typescript',
        scopeName: 'source.ts',
        grammar: tsLang,
        aliases: ['ts']
    }]
  })
  
  // const used = process.memoryUsage();
  // for (let key in used) {
  //   console.log(`${key} ${Math.round(used[key] / 1024 / 1024)} MB`);
  // }
  return {
    result: shikiHighlighter.codeToThemedTokens('const a = 1', 'typescript')
  }
}
// import { loadWASM } from 'onigasm'

// import sample from 'onigasm/lib/onigasm.wasm'
// console.log(sample);

//  // You can also pass ArrayBuffer of onigasm.wasm file

// export default async () => {
//   console.log(process.memoryUsage().heapUsed);
//   console.log(await loadWASM(sample));
  
//   // const { instance } = await sample({})

//   return {
//     result: 1
//   }
// }

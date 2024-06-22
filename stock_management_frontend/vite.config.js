import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // você pode especificar uma porta diferente aqui
  },
  build: {
    outDir: 'dist', // diretório de saída para os arquivos de construção
  },
})

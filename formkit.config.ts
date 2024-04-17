import { defineFormKitConfig } from '@formkit/vue'
import { createMultiStepPlugin } from '@formkit/addons'
import '@formkit/addons/css/multistep'

export default defineFormKitConfig({
  plugins: [createMultiStepPlugin()]
})
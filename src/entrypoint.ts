import type { Alpine } from 'alpinejs'
import type {DialogOptions} from './components/Dialog/type'
export default function (Alpine: Alpine) {
    Alpine.store('darkMode',false)
    Alpine.data('app',()=>({isModalOpen:false}))
    Alpine.data('dialog', () => ({
        open: false,
        contentHtml:``,

        openDialog(options:DialogOptions) {
            this.open = !this.open
        }
    }))
    Alpine.data('modal',()=>({
        open:false,
    }))
}
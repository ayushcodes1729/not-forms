import {create} from 'zustand'
import {persist} from 'zustand/middleware'

interface PopState {
    isOpen: boolean
    openPop: () => void
    closePop: () =>void
}

export const usePopStore = create<PopState>()(
    persist(
        (set) => (
            {
                isOpen: false,
                openPop: () => set(() => ({isOpen: true})),
                closePop: () => set(() => ({isOpen: false}))
            }
        ),
        {
            name: "pop store"
        }
    )
)
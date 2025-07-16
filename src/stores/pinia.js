import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    //状態定義（リアクティブデータ）
    state: () => ({
        user: {name: 'exampleName', email: 'example@gmail.com'},
        fileDetail: [
            {id: 1, name: 'Fruits', allWords: {originalText: ['apple', 'banana', 'strawberry', 'pineapple', 'mango'], translatedText: ['りんご', 'ばなな', 'いちご', 'パイナップル', 'マンゴー']}}, 
            {id: 2, name: 'Day', allWords: {originalText:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], translatedText: ['月曜', '火曜', '水曜', '木曜', '金曜', '土曜', '日曜']}}, 
            {id: 3, name: 'Planet', allWords: {originalText:['Mars', 'Jupiter', 'Earth', 'Mercury'], translatedText: ['火星', '木星', '地球', '水星']}}
        ]
    }),
    //computed
    getters: {
        getWordSetById: (state) => {
            return (id) => state.fileDetail.find(set => set.id === id);
        }
    },
    //methods
    actions: {
        
    }
})


<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8">
        <div class="w-full max-w-6xl bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-3xl shadow-2xl p-8">
        
        <!-- 上部ナビゲーション -->
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-3xl font-bold flex items-center gap-2">
            📚 Word Lists
            </h1>
            <router-link
            to="/learn/fileList"
            class="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm md:text-base font-bold px-6 py-2 rounded-lg shadow hover:scale-105 transition duration-300"
            >
            ← Back to File Lists
            </router-link>
        </div>

        <!-- テーブル -->
        <div class="overflow-x-auto rounded-xl shadow-inner">
            <table class="min-w-full text-sm text-left text-white border-collapse">
            <thead class="bg-white/20 text-xs uppercase tracking-wide">
                <tr>
                <th class="px-4 py-3">📄 File Name</th>
                <th class="px-4 py-3 text-yellow-300">🇯🇵 Japanese</th>
                <th class="px-4 py-3 text-blue-300">🇬🇧 English</th>
                <th class="px-4 py-3"></th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="(original, i) in file.allWords.originalText"
                :key="i"
                class="border-t border-white/10 hover:bg-white/10 transition duration-200"
                >
                <td class="px-4 py-3 font-semibold">{{ file.name }}</td>
                <td class="px-4 py-3 text-yellow-100">{{ original }}</td>
                <td class="px-4 py-3 text-blue-100">{{ file.allWords.translatedText[i] }}</td>
                <td class="px-4 py-3 text-right">
                    <!-- reserved: delete or edit button (optional) -->
                </td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
    </div>
</template>

<script setup>

import { useRoute } from 'vue-router';
import { useAuthStore } from '../stores/pinia.js'

const route = useRoute();
const fileId = Number(route.params.id);
const store = useAuthStore();
const file = store.getWordSetById(fileId);

</script>

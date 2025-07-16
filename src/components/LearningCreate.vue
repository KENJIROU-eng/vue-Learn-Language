<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
        <div class="max-w-5xl w-full backdrop-blur-md bg-white/10 rounded-3xl shadow-2xl p-8 border border-white/20">
        <!-- ヘッダー -->
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-3xl font-bold text-white">📘 Create Word List</h1>
            <router-link
            to="/learn/fileList"
            class="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-2 rounded-lg shadow hover:scale-105 transition transform duration-300"
            >
            Go to File Lists
            </router-link>
        </div>

        <!-- 翻訳エリア -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 英語入力 -->
            <div class="bg-white/10 border border-white/20 rounded-xl p-4 shadow-lg">
            <label class="block text-purple-200 mb-2 font-semibold">English</label>
            <textarea
                rows="4"
                placeholder="Enter English text..."
                class="w-full rounded-md p-3 bg-white/5 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <button class="mt-3 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition">
                Translate
            </button>
            </div>

            <!-- 日本語出力 -->
            <div class="bg-white/10 border border-white/20 rounded-xl p-4 shadow-lg">
            <label class="block text-purple-200 mb-2 font-semibold">Japanese</label>
            <textarea
                rows="4"
                placeholder="翻訳結果が表示されます..."
                class="w-full rounded-md p-3 bg-white/5 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <button class="mt-3 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md transition">
                Edit
            </button>
            </div>
        </div>

        <!-- 単語一覧 -->
        <div class="mt-10">
            <h2 class="text-2xl font-bold text-white border-b border-white/20 pb-2 mb-6 text-center">📝 New Words List</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl p-6 shadow-lg hover:scale-105 transition transform text-white">
                <h3 class="text-xl font-bold mb-2">English</h3>
                <p>Strawberry</p>
            </div>
            <div class="bg-gradient-to-br from-purple-600 to-indigo-500 rounded-xl p-6 shadow-lg hover:scale-105 transition transform text-white">
                <h3 class="text-xl font-bold mb-2">Japanese</h3>
                <p>いちご</p>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

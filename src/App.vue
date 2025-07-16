<template>
    <div>
        <nav class="p-4 bg-gray-800 text-white flex gap-4">
            <router-link to="/dashboard">Dashboard</router-link>
            <div class="ml-auto flex text-center text-white gap-4">
                <h1 class="text-md">Welcome to my application</h1>
                <p><strong>Name:</strong> {{ store.user.name }} </p>
            </div>
        </nav>
        <main class="p-4">
            <router-view />
        </main>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import { useAuthStore } from './stores/pinia.js';

    const store = useAuthStore()

    const showNotice = ref(false);
    const originalText = ref('');
    const translatedText = ref('');
    const router = useRouter();
</script>

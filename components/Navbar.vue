<template>
    <nav :class="[
        'fixed w-full transition-all duration-300 z-50',
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    ]">
        <div class="container mx-auto px-4 md:px-6 flex justify-between items-center">
            <!-- Logo or brand -->
            <div :class="scrolled ? 'text-gray-800' : 'text-white'">
                <a href="/" class="hover:text-primary transition-colors">
                    {{ logoText }}
                </a>
            </div>

            <!-- Desktop menu -->
            <div class="hidden md:flex space-x-6">
                <a 
                    v-for="(item, index) in navItems" 
                    :key="index" 
                    :href="item.link" 
                    :class="[
                        'transition-colors hover:text-primary',
                        scrolled ? 'text-gray-800' : 'text-gray-700'
                    ]"
                >
                    {{ item.text }}
                </a>
            </div>

            <!-- Mobile menu button -->
            <div class="md:hidden">
                <button 
                    @click="mobileMenuOpen = !mobileMenuOpen" 
                    class="focus:outline-none"
                    :class="scrolled ? 'text-gray-800' : 'text-white'"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile menu dropdown with animation -->
        <transition
            name="mobile-menu"
            enter-active-class="transition duration-300 ease-out"
            leave-active-class="transition duration-200 ease-in"
            enter-from-class="opacity-0 transform -translate-y-4"
            enter-to-class="opacity-100 transform translate-y-0"
            leave-from-class="opacity-100 transform translate-y-0"
            leave-to-class="opacity-0 transform -translate-y-4"
        >
            <div 
                v-if="mobileMenuOpen" 
                class="md:hidden bg-white shadow-lg absolute w-full origin-top"
            >
                <div class="container mx-auto px-4 py-4">
                    <a 
                        v-for="(item, index) in navItems" 
                        :key="index" 
                        :href="item.link" 
                        class=""
                        :class="[scrolled ? 'text-gray-800' : 'text-white', 'block py-2 transition-colors']"
                    >
                        {{ item.text }}
                    </a>
                </div>
            </div>
        </transition>
    </nav>
</template>

<script setup>

// Props
const props = defineProps({
    logoText: {
        type: String,
        default: 'Portfolio'
    },
    navItems: {
        type: Array,
        default: () => [
            { text: 'Home', link: '#home' },
            { text: 'About', link: '#about' },
            { text: 'Experience', link: '#experience' },
            { text: 'Projects', link: '#projects' },
            { text: 'Contact', link: '#contact' }
        ]
    }
});

// Reactive variables
const scrolled = ref(false);
const mobileMenuOpen = ref(false);

// Handle scroll event
const handleScroll = () => {
    // Update scrolled state based on scroll position
    scrolled.value = window.scrollY > 50;
    
    // Close mobile menu when scrolling
    if (mobileMenuOpen.value && scrolled.value) {
        mobileMenuOpen.value = false;
    }
};

// Lifecycle hooks
onMounted(() => {
    // Check initial scroll position
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    // Remove scroll event listener
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Optional additional animation styles if needed */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
    overflow: hidden;
}
</style>
<template>
    <main>
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-8 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div class="max-w-screen-md mb-8 lg:mb-16">
                    <h2 class="mb-4 text-4xl tracking-tight font-bold text-green-500 dark:text-white">Designed for business
                        teams like yours</h2>
                    <p class="text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where
                        technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                </div>
                <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <div>
                        <div
                            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <Icon icon="iconoir:delivery-truck" class="text-green-500" width="44" />
                        </div>
                        <h3 class="mb-2 text-xl font-semibold dark:text-white">Select your order</h3>
                        <p class="text-gray-500 dark:text-gray-400">Plan it, create it, launch it. Collaborate seamlessly
                            with all the organization and hit your marketing goals every month with our marketing plan.</p>
                    </div>
                    <div>
                        <div
                            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <Icon icon="ph:basket" class="text-green-500" width="44" />
                        </div>
                        <h3 class="mb-2 text-xl font-semibold dark:text-white">Preparing your items</h3>
                        <p class="text-gray-500 dark:text-gray-400">Protect your organization, devices and stay compliant
                            with our structured workflows and custom permissions made for you.</p>
                    </div>
                    <div>
                        <div
                            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <Icon icon="solar:delivery-outline" class="text-green-500" width="44" />
                        </div>
                        <h3 class="mb-2 text-xl font-semibold dark:text-white">Deliver to your home</h3>
                        <p class="text-gray-500 dark:text-gray-400">Auto-assign tasks, send Slack messages, and much more.
                            Now power up with hundreds of new templates to help you get started.</p>
                    </div>

                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
    components: { Icon },
}
</script>

<style></style>
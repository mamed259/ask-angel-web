<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-6">Contact Us</h1>
    <div class="max-w-md mx-auto">
      <form class="space-y-4" @submit.prevent="handleSubmit">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2" />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2" />
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" rows="4" class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"></textarea>
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Contact Us - Ask Angel',
  meta: [
    { name: 'description', content: 'Get in touch with Ask Angel' }
  ]
})

const handleSubmit = () => {
  console.log('Form submitted');
}
</script> 
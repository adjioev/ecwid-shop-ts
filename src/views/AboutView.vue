<template>
    <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-10">
      <div class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-4">
          <div class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
            <img class="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0" :src="banner" alt="" />
          </div>
        </div>
        <div>
          <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About "La Sha" brand</h1>
            <div class="max-w-xl">
              <p class="mt-6"> Founded in 2024 in the heart of Tbilisi, Sakartvelo, La Sha is the brainchild of a vision to redefine teenage fashion. What began as a local brand quickly grew into an international sensation, making La Sha one of the most popular names among youth worldwide.</p>
              <p class="mt-8"> In just a short time, we have taken the global stage, showcasing our collections at prestigious fashion shows across Italy, Turkey, Australia, and Canada. Our bold designs and trendsetting style have captured the hearts of young fashion enthusiasts, making La Sha synonymous with youthful elegance.</p>
              <p class="mt-8">At La Sha, we are committed to offering only the finest quality materials in every piece we create. Our craftsmanship rivals that of the biggest luxury brands, and we proudly stand alongside fashion giants such as Gucci, Louis Vuitton, and Prada. Every garment reflects our dedication to delivering superior quality and timeless style.</p>
              <p class="mt-8">Exciting times are ahead! We’re thrilled to announce the opening of our exclusive showrooms at Bazroba and Lilo markets, where you’ll soon be able to experience La Sha firsthand. The future of teenage fashion is here—and it’s La Sha!</p>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const banner = new URL('@/assets/sign.png', import.meta.url).href;
</script>
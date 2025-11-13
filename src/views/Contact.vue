<script setup lang="ts"></script>

<template>
  <main class="min-h-270 flex flex-col">
    <div class="max-w-6xl mx-auto px-6 py-12 w-full flex-1">
      <h1 class="text-4xl font-light text-gray-900 mb-12 border-b-2 border-gray-200 pb-4">
        Contact Us
      </h1>

      <p class="text-gray-700 mb-12 text-lg">
        The BioKLab is located in the National Institute of Healthcare Big Data at Shandong University.
      </p>

      <!-- Contact Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <!-- 联系信息 -->
        <div class="lg:col-span-2 space-y-10">
          <!-- Address -->
          <div class="border-l-4 border-gray-800 pl-6">
            <h2 class="text-lg font-semibold text-gray-900 mb-4 uppercase tracking-wide">Address</h2>
            <address class="not-italic text-gray-700 leading-relaxed space-y-1">
              <p class="font-semibold text-gray-900">BioKLab</p>
              <p>National Institute of Healthcare Big Data</p>
              <p>Shandong University, Xinglongshan Campus</p>
              <p>Room 224</p>
              <p>Jinan, Shandong 250002</p>
              <p>P. R. China</p>
            </address>
          </div>

          <!-- Email -->
          <div class="border-l-4 border-gray-800 pl-6">
            <h2 class="text-lg font-semibold text-gray-900 mb-4 uppercase tracking-wide">Email</h2>
            <a
              href="mailto:keliu.iluke@email.sdu.edu.cn"
              class="text-gray-700 hover:text-gray-900 underline decoration-gray-400 hover:decoration-gray-900 transition-colors"
            >
              keliu.iluke@email.sdu.edu.cn
            </a>
          </div>

          <!-- 电话 -->
          <div class="border-l-4 border-gray-800 pl-6">
            <h2 class="text-lg font-semibold text-gray-900 mb-4 uppercase tracking-wide">Phone</h2>
            <p class="text-gray-700">+86 531 8839 2345</p>
          </div>
        </div>

        <!-- 地图，如需替换可以叫我改 -->
        <div class="lg:col-span-3">
          <div class="bg-gray-50 border border-gray-300 overflow-hidden flex flex-col">
            <!-- 头部 -->
            <div class="bg-gray-800 px-6 py-3 border-b border-gray-700">
              <h2 class="text-sm font-semibold text-white uppercase tracking-wider">
                Location Map
              </h2>
            </div>

            <div class="p-6 flex-1">
              <div class="relative w-full" style="padding-bottom: 75%">

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25616.78132891145!2d117.02281049871628!3d36.62403566972524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35c204c5fa5c33fb%3A0x1d3d7185357c49f7!2sShandong%20University%20Xinglongshan%20Campus!5e0!3m2!1sen!2stw!4v1763014739347!5m2!1sen!2stw"
                  class="absolute inset-0 w-full h-full border border-gray-300"
                  style="border: 0"
                  allowfullscreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <!-- 尾部 -->
              <p class="text-xs text-gray-600 mt-4 text-center">
                Shandong University, Xinglongshan Campus
              </p>
            </div>

            <!-- google 地图链接 -->
            <div class="px-6 pb-6 border-t border-gray-200">
              <a
                href="https://www.google.com/maps/search/Shandong+University+Xinglongshan+Campus/@36.6519,117.1288,16.5z"
                target="_blank"
                rel="noopener noreferrer"
                class="block w-full text-center px-6 py-2.5 bg-gray-800 text-white text-sm font-medium hover:bg-gray-900 transition-colors uppercase tracking-wide"
              >
                View in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>

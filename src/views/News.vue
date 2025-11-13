<script setup lang="ts">
interface NewsItem {
  text: string
  link?: string
}

interface TimelineEntry {
  date: string
  items: NewsItem[]
}

// 时间线，date代表时间，items代表新闻，text代表新闻内容，link代表新闻链接
// link为空代表不加链接，如：{ text: '新闻1' }
// 可以添加多个时间线，如：
// {
//   date: '2025',
//   items: [
//     { text: '新闻1', link: '#' },
//     { text: '新闻2' },
//   ],
// },
const timeline: TimelineEntry[] = [
  {
    date: 'October 2025',
    items: [{ text: 'Undergraduate students Qichen and Shihang join BioKLab. Welcome!' }],
  },
  {
    date: 'September 2025',
    items: [
      { text: 'Yueqi and Maowang join BioKLab. Welcome!' },
      { text: 'Undergraduates Fuhan Lei and Jifeng Yu Admitted to Harbin Institute of Technology and Tsinghua University for Direct Ph.D. Studies! Congratulations to undergraduate student Fuhan Lei for being directly admitted to the Ph.D. program at Harbin Institute of Technology, and Jifeng Yu for direct admission to the Ph.D. program at Tsinghua University. This achievement highlights the laboratory\'s success in cultivating outstanding young talent. We take great pride in their accomplishments.' },
    ],
  },
  {
    date: 'June 2025',
    items: [
      { text: 'Master\'s student Jing Li has successfully completed her studies and obtained her Master\'s degree. During her time in the lab, Jing was the leader of the "TNBC_heterogeneity" project, and also actively participated in other\'s research. We wish her continued success in her future career.' },
      { text: 'Undergraduate student Yinzhi joins BioKLab. Welcome!' },
    ],
  },
  {
    date: 'September 2024',
    items: [
      { text: 'Ziyi and Sirui join BioKLab. Welcome!' },
    ],
  },
  {
    date: 'September 2023',
    items: [
      { text: 'Shumin, Yang, and Xueying join BioKLab. Welcome!' },
    ],
  },
  {
    date: 'June 2023',
    items: [
      { text: 'Undergraduate student Fuhan join BioKLab. Welcome!' },
    ],
  },
  {
    date: 'February 2023',
    items: [
      { text: 'Collaborative Paper "Histone tyrosine sulfation by SULT1B1 regulates H4R3me2a and gene transcription" was in published in Nature Chemical Biology.' },
    ],
  },
  {
    date: 'September 2022',
    items: [
      { text: 'Undergraduate students Jifeng and Weihang join BioKLab. Welcome!' },
    ],
  },
  {
    date: 'June 2022',
    items: [
      { text: 'Jing, Chunyang, and Xiuyuan join BioKLab. Welcome!' },
    ],
  },
  {
    date: 'March 2022',
    items: [
      { text: 'Ke joins the National Institute of Health Data Science at Shandong University and BioKLab opens!' },
    ],
  },
]
</script>

<template>
  <main class="max-w-6xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-light text-gray-800 mb-12">News</h1>

    <!-- 时间线 -->
    <div class="relative">
      <div class="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300"></div>

      <!-- 时间线条目 -->
      <div class="space-y-10">
        <div v-for="(entry, index) in timeline" :key="index" class="relative pl-10">
          <!-- 那个点 -->
          <div
            class="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-white"
          ></div>

          <h2 class="text-xl font-semibold text-gray-800 mb-4">
            {{ entry.date }}
          </h2>

          <ul class="space-y-3">
            <li
              v-for="(item, itemIndex) in entry.items"
              :key="itemIndex"
              class="text-gray-700 leading-relaxed"
            >
              <span v-if="item.link" class="inline">
                <a :href="item.link" class="text-blue-600 hover:text-blue-800 hover:underline">
                  {{ item.text }}
                </a>
              </span>
              <span v-else>{{ item.text }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>


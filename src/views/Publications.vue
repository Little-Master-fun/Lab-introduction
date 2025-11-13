<script setup lang="ts">
import { onMounted } from 'vue'
import PublicationCard from '../components/PublicationCard.vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

// 这里的type我只写了三种，预印本、会议、期刊这三种，如还需添加可联系我
interface Publication {
  authors: string
  year: number
  title: string
  journal: string
  type: 'preprint' | 'journal' | 'conference'
  link?: string
  correspondingAuthor?: string // 通讯作者姓名，用于加粗显示
}

interface PublicationSection {
  title: string
  items: Publication[]
}

// 论文，authors代表作者，year代表年份，title代表标题，journal代表期刊，type代表类型，link代表链接（可为空，则显示纯文本）
// correspondingAuthor代表通讯作者姓名（可选），填写后会在作者列表中加粗显示该作者（不区分大小写）
// type为preprint代表预印本，journal代表期刊，conference代表会议
// 例：
// {
//   authors: '作者1, McVicker G#, 作者3',
//   year: 2025,
//   title: '标题1',
//   journal: '期刊1',
//   type: 'preprint',
//   link: '',  // 可为空，则显示纯文本
//   correspondingAuthor: 'McVicker G', // 会将这个作者加粗显示（一般用于主要复制人）
// },

const sections: PublicationSection[] = [
  {
    title: 'Journal Publications',
    items: [
      {
        authors: 'Weixing Yu, Runxin Zhou, Nan Li, Zhi-Chao Lei, Dingyuan Guo, Fei Peng, Yan Li, Xue Bai, Shan Feng, Yu Wang, Jie He, Sibi Yin, Xiao Zeng, Leya He, Yuan Gao, Mingchang Li, Yusong R. Guo, Ke Liu & Yugang Wang',
        year: 2023,
        title:
          'Histone tyrosine sulfation by SULT1B1 regulates H4R3me2a and gene transcription',
        journal: 'Nature Chemical Biology',
        type: 'journal',
        link: 'https://www.nature.com/articles/s41589-023-01267-9',
      },
      {
        authors: 'Ke Liu, Martin Witteveen-Lane, Benjamin S Glicksberg, Omkar Kulkarni, Rama Shankar, Evgeny Chekalin, Shreya Paithankar, Jeanne Yang, Dave Chesla, Bin Chen',
        year: 2022,
        title:
          'BGLM: big data-guided LOINC mapping with multi-language support',
        journal: 'JAMIA Open',
        type: 'journal',
        link: '',
      },
      {
        authors:
          'Jing Xing, Shreya Paithankar, Ke Liu, Katie Uhl, Xiaopeng Li, Meehyun Ko, Seungtaek Kim, Jeremy Haskins, Bin Chen',
        year: 2021,
        title:
          'Published anti-SARS-CoV-2 in vitro hits share common mechanisms of action that synergize with antivirals',
        journal: 'Briefings in Bioinformatics',
        type: 'journal',
        link: 'https://doi.org/10.1093/jamiaopen/ooac099',
      },
      {
        authors:
          'Ke Liu, Elizabeth Theusch, Yun Zhou, Tal Ashuach, Andrea S. Dose, Peter J. Bickel, Marisa W. Medina, Haiyan Huang',
        year: 2019,
        title:
          'GeneFishing to reconstruct comprehensive context-specific portraits of biological processes and its application to cholesterol metabolism',
        journal: 'Proceedings of the National Academy of Sciences of the United States of America',
        type: 'journal',
        link: 'https://doi.org/10.1073/pnas.1820340116',
      },
      {
        authors:
          'Ke Liu, Patric Newbury, Benjamin Glicksberg, Eran Andrechek, Bin Chen',
        year: 2019,
        title:
          'Evaluating cell lines as models for metastatic breast cancer through integrative analysis of genomic data',
        journal: 'Nature Communications',
        type: 'journal',
        link: 'https://www.nature.com/articles/s41467-019-10148-6',
      },
      {
        authors:
          'Yugang Wang, Yusong R. Guo, Ke Liu, Zheng Yin, Rui Liu, Yan Xia, Lin Tan, Peiying Yang, Jong-Ho Lee, Xin-jian Li, David Hawke, Yanhua Zheng, Xu Qian, Jianxin Lyu, Jie He, Dongming Xing, Yizhi Jane Tao and Zhimin Lu',
        year: 2017,
        title:
          'KAT2A coupled with the α-KGDH complex acts as a histone H3 succinyltransferase',
        journal: 'Nature',
        type: 'journal',
        link: 'https://www.nature.com/articles/nature25003',
      },
      {
        authors:
          'Ke Liu, Zhangming Yan, Yuchao Li, Zhirong Sun',
        year: 2013,
        title:
          'Linc2GO: a human lincRNA function annotation resource based on ceRNA hypothesis',
        journal: 'Bioinformatics',
        type: 'journal',
        link: 'https://academic.oup.com/bioinformatics/article/29/17/2221/242211',
      },
    ],
  },
  {
    title: 'Conferences',
    items: [
      {
        authors: 'Ke Liu, Omkar Kulkarni, Martin Witteveen-Lane, Bin Chen, Dave Chesla',
        year: 2022,
        title:
          'MetBERT: a generalizable deep learning model for prediction of metastatic cancer',
        journal: 'AMIA 2022 Informatics Summit',
        type: 'conference',
        link: '',
      },
    ],
  },
  {
    title: 'Preprints',
    items: [
      {
        authors: 'Shumin Yin, Ke Liu',
        year: 2025,
        title:
          'CFMF: A Clustering-Free Cell Marker Finder for Single-Cell Transcriptomics Data',
        journal: 'bioRxiv',
        type: 'preprint',
        link: 'https://doi.org/10.1101/2025.10.26.683836',
      },
      {
        authors: 'Chunyang Fu, Ke Liu',
        year: 2025,
        title:
          'Pan-Cancer Single-Cell Profiling Uncovers the Biological Characteristics of Cancer-Testis Genes',
        journal: 'bioRxiv',
        type: 'preprint',
        link: 'https://doi.org/10.1101/2025.08.25.672079',
      },
      {
        authors:
          'Xueying Liu, Weixing Yu, Xiuyuan Jin, Yugang Wang, Ke Liu',
        year: 2025,
        title:
          'Multi-omics evaluation of cell lines as models for metastatic prostate cancer',
        journal: 'bioRxiv',
        type: 'preprint',
        link: 'https://doi.org/10.1101/2025.07.17.665334',
      },
      {
        authors:
          'Jing Li, Yuan Gao, Shouhui Guo, Qingzhen Hou, Shisong Zhang, Weixing Yu, Ke Liu',
        year: 2024,
        title:
          'Single-cell molecular subtyping reveals novel intratumor heterogeneity in human Basal-like breast cancer',
        journal: 'bioRxiv',
        type: 'preprint',
        link: 'https://doi.org/10.1101/2024.06.02.597060',
      },
    ],
  },
]

const { fadeInUp, fadeIn, staggerFadeInUp } = useScrollAnimation()

onMounted(() => {
  fadeInUp('.animate-title')
  fadeInUp('.animate-section')
  staggerFadeInUp('.animate-card')
})
</script>

<template>
  <main class="max-w-6xl mx-auto px-6 py-12">
    <h1 class="animate-title text-4xl font-light text-gray-800 mb-12">Publications</h1>

    <!-- 论文 -->
    <div class="space-y-16">
      <section
        class="animate-section"
        v-for="(section, sectionIndex) in sections"
        :key="sectionIndex"
      >
        <!-- 标题 -->
        <div class="flex items-center gap-4 mb-8">
          <h2 class="text-3xl font-semibold text-gray-800">{{ section.title }}</h2>
          <div class="flex-1 h-px bg-gray-300"></div>
          <span class="text-sm text-gray-500">{{ section.items.length }} items</span>
        </div>

        <!-- 论文卡片 -->
        <div class="space-y-6">
          <div class="animate-card" v-for="(pub, pubIndex) in section.items" :key="pubIndex">
            <PublicationCard :publication="pub" />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped></style>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PersonCard from '../components/PersonCard.vue'
import PersonModal from '../components/PersonModal.vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

// 这是一个图片引入示例
import avatar from '@avatar/avatar.jpg'

// 引入所有团队成员头像
import keliuAvatar from '@avatar/KeLiu.png'
import jinxiuyuanAvatar from '@avatar/JinXiuyuan.png'
import chunyangfuAvatar from '@avatar/DuChunyang.png'
import liuyangAvatar from '@avatar/LiuYang.png'
import liuxueyingAvatar from '@avatar/LiuXueying.png'
import haoyueqiAvatar from '@avatar/HaoYueqi.png'
import wangziyiAvatar from '@avatar/WangZiyi.png'
import bianmaowangAvatar from '@avatar/BianMaowang.png'
import yinshumingAvatar from '@avatar/YinShumin.png'
import zhangsiruiAvatar from '@avatar/ZhangSirui.png'
import yujifengAvatar from '@avatar/YuJifeng.png'
import leifuhanAvatar from '@avatar/LeiFuhan.png'
import juweihangAvatar from '@avatar/JuWeihang\'.png'
import shashihangAvatar from '@avatar/ShaShihang.png'
import huangyinzhiAvatar from '@avatar/HuangYinzhi.png'
import sunqichenAvatar from '@avatar/SunQichen.png'
// 这是人物卡片下的链接，一个type代表链接类型，url代表链接地址，label代表链接标签
// 我这里写了三种链接，type为cv代表简历，scholar代表学术认证，email代表邮箱，如果需要添加可以联系我
// url为空时显示为普通文本，不可点击
interface Link {
  type: 'cv' | 'scholar' | 'email'
  url?: string
  label?: string
}

interface Person {
  name: string
  role: string
  image: string
  bio: string
  links?: Link[]
}

interface TeamSection {
  title: string
  members: Person[]
}

const selectedPerson = ref<Person | null>(null)
const isModalOpen = ref(false)

const openPersonModal = (person: Person) => {
  selectedPerson.value = person
  isModalOpen.value = true
}

const closePersonModal = () => {
  isModalOpen.value = false
  // 等待动画结束
  setTimeout(() => {
    selectedPerson.value = null
  }, 300)
}

// 团队，一个title代表一个团队，members代表团队成员，name代表姓名，role代表角色，image代表图片，bio代表简介，links代表链接（只有三种，具体看上面）
// links为空代表不加链接，如：{ name: '成员1', role: '角色1', image: '图片1', bio: '简介1' }
// 例：
// {
//   title: '团队1',
//   members: [
//     { name: '成员1', role: '角色1', image: '图片1', bio: '简介1', links: [{ type: '链接类型', url: '链接地址', label: '链接标签' }] },
//   ],
// },

const team: TeamSection[] = [
  {
    title: 'Principal Investigator',
    members: [
      {
        name: 'Ke Liu',
        role: 'Ph.D.',
        image: keliuAvatar,
        bio: 'Dr. Ke Liu holds an interdisciplinary background in computer science, biology, and statistics. His research focuses on leveraging advanced computational approaches—such as statistical learning and artificial intelligence — to extract insights from biomedical big data, with the goal of advancing translational medical research from bench to bedside for complex diseases. Dr. Liu completed his undergraduate studies in Computer Science and Technology at Shandong University (2004–2008) and earned his Ph.D. in Biology from Tsinghua University (2008–2015). He further enriched his expertise through postdoctoral training at the University of California, Berkeley (Department of statistics, 2015 – 2017), the University of California, San Francisco (Institute for Computational Health Sciences, 2018), and Michigan State University (Department of Pediatrics and Human Development, 2018–2022).',
        links: [
          { type: 'email', url: 'mailto:keliu.iluke@email.sdu.edu.cn', label: 'keliu.iluke@email.sdu.edu.cn' },
        ],
      },
    ],
  },
  {
    title: 'Ph.D. Students',
    members: [
      {
        name: 'Jin Xiuyuan',
        role: 'Ph.D. Student',
        image: jinxiuyuanAvatar,
        bio: 'Jin Xiuyuan, Ph.D. Student, received her Master of Biostatistics from Shandong University in 2023. Her current research focuses on using multi-omics approaches to elucidate the cellular heterogeneity and molecular mechanisms of Congenital Pulmonary Airway Malformation (CPAM) in children.',
        links: [
          { type: 'email', url: 'mailto:jinxiuyuan@mail.sdu.edu.cn', label: 'jinxiuyuan@mail.sdu.edu.cn' },
        ],
      },
      {
        name: 'Fu Chunyang',
        role: 'Ph.D. Student',
        image: chunyangfuAvatar,
        bio: 'Fu Chunyang, Ph.D. Student, graduated from Shandong University with a Bachelor\'s degree in Preventive Medicine. He joined the laboratory in 2022 and transitioned to the Ph.D. program in 2024.',
        links: [
          { type: 'email', url: 'mailto:chunyangfu@mail.sdu.edu.cn', label: 'chunyangfu@mail.sdu.edu.cn' },
        ],
      },
      {
        name: 'Liu Yang',
        role: 'Ph.D. Student',
        image: liuyangAvatar,
        bio: 'Liu Yang, Ph.D. Student, holds a Bachelor\'s degree in Medicine from Shandong University. He joined the laboratory as a Master\'s student in 2023 and transitioned to the Ph.D. program in 2025. His research focuses on utilizing omics data to elucidate the pathogenic mechanisms of pediatric pulmonary mucoepidermoid carcinoma.',
        links: [],
      },
    ],
  },
  {
    title: 'Master\'s Students',
    members: [
      {
        name: 'Liu Xueying',
        role: 'Master\'s Student',
        image: liuxueyingAvatar,
        bio: 'Liu Xueying, Master\'s Student, received her Bachelor\'s degree in Biology from China Pharmaceutical University in 2023. She is currently pursuing a Master\'s degree in Biostatistics at Shandong University. Her research interests lie in cancer genomics and computational methods for understanding tumor biology.',
        links: [
          { type: 'email', url: 'mailto:xueyingliuu@126.com', label: 'xueyingliuu@126.com' },
        ],
      },
      {
        name: 'Hao Yueqi',
        role: 'Master\'s Student',
        image: haoyueqiAvatar,
        bio: 'Hao Yueqi, Master\'s Student, graduated from Hainan Normal University with a Bachelor\'s degree in Statistics. She is currently a Master\'s student in the laboratory, and her research direction is bioinformatics.',
        links: [
          { type: 'email', url: 'mailto:haoyueqi0724@163.com', label: 'haoyueqi0724@163.com' },
        ],
      },
      {
        name: 'Wang Ziyi',
        role: 'Master\'s Student',
        image: wangziyiAvatar,
        bio: 'Wang Ziyi, Master\'s Student, graduated from Shanxi Medical University with a Bachelor\'s degree in Information Management and Information Systems. She entered Shandong University in 2024 to pursue a Master\'s degree in Public Health (Biostatistics). Her current research focuses on using transcriptomics technologies to identify the tissue of origin for Cancers of Unknown Primary (CUP).',
        links: [
          { type: 'email', url: 'mailto:1303610295@qq.com', label: '1303610295@qq.com' },
        ],
      },
      {
        name: 'Bian Maowang',
        role: 'Master\'s Student',
        image: bianmaowangAvatar,
        bio: 'Bian Maowang, Master\'s Student, holds a Bachelor\'s degree in Preventive Medicine. He is currently pursuing a Master\'s degree in Biostatistics in the laboratory, with research interests in biomedicine. His hobbies include fitness and playing badminton.',
        links: [
          { type: 'email', url: 'mailto:bianmaowang2002@163.com', label: 'bianmaowang2002@163.com' },
        ],
      },
      {
        name: 'Yin Shumin',
        role: 'Master\'s Student',
        image: yinshumingAvatar,
        bio: 'Yin Shumin, Master\'s Student, graduated from Shandong University with a Bachelor\'s degree. Her research focuses on algorithms for identifying marker genes in single-cell transcriptomics.',
        links: [
          { type: 'email', url: 'mailto:shuminyin@mail.sdu.edu.cn', label: 'shuminyin@mail.sdu.edu.cn' },
        ],
      },
      {
        name: 'Zhang Sirui',
        role: 'Master\'s Student',
        image: zhangsiruiAvatar,
        bio: 'Zhang Sirui, Master\'s Student, graduated from Shandong University with a Bachelor\'s degree in Preventive Medicine. His research involves using statistical learning to evaluate the perturbing effects of the Hepatitis B Virus (HBV) on alternative splicing in hepatocytes.',
        links: [
          { type: 'email', url: 'mailto:3494747883@qq.com', label: '3494747883@qq.com' },
        ],
      },
    ],
  },
  {
    title: 'Undergraduate Students',
    members: [
      {
        name: 'Yu Jifeng',
        role: 'Undergraduate Student',
        image: yujifengAvatar,
        bio: 'Yu Jifeng, Undergraduate Student, majors in Biomedical Data Science at Shandong University. His research focuses on enhancing the interpretability of autoencoder models in genomics by mapping latent neurons to biological pathways, aiming to develop methods for linking model activations to tissue-specific functions to discover biomarkers.',
        links: [
          { type: 'email', url: 'mailto:202200222007@mail.sdu.edu.cn', label: '202200222007@mail.sdu.edu.cn' },
        ],
      },
      {
        name: 'Lei Fuhan',
        role: 'Undergraduate Student',
        image: leifuhanAvatar,
        bio: 'Lei Fuhan, Undergraduate Student, majors in Biomedical Data Science at Shandong University. Her research direction involves interdisciplinary studies in bioinformatics and artificial intelligence.',
        links: [
          { type: 'email', url: 'mailto:202200222005@mail.sdu.edu.cn', label: '202200222005@mail.sdu.edu.cn' },
        ],
      },
      {
        name: 'Ju Weihang',
        role: 'Undergraduate Student',
        image: juweihangAvatar,
        bio: 'Ju Weihang, Undergraduate Student, majors in Biomedical Data Science at Shandong University.',
        links: [
          { type: 'email', url: 'mailto:772853178@qq.com', label: '772853178@qq.com' },
        ],
      },
      {
        name: 'Sha Shihang',
        role: 'Undergraduate Student',
        image: shashihangAvatar,
        bio: 'Sha Shihang, Undergraduate Student, majors in Biomedical Data Science at Shandong University.',
        links: [
          { type: 'email', url: 'mailto:sha714204078@outlook.com', label: 'sha714204078@outlook.com' },
        ],
      },
      {
        name: 'Huang Yinzhi',
        role: 'Undergraduate Student',
        image: huangyinzhiAvatar,
        bio: 'Huang Yinzhi, Undergraduate Student, majors in Biomedical Data Science at Shandong University.',
        links: [
          { type: 'email', url: 'mailto:huangyinzhi@mail.sdu.edu.cn', label: 'huangyinzhi@mail.sdu.edu.cn' },
        ],
      },
      {
        name: 'Sun Qichen',
        role: 'Undergraduate Student',
        image: sunqichenAvatar,
        bio: 'Sun Qichen, Undergraduate Student, majors in Biomedical Data Science at Shandong University.',
        links: [
          { type: 'email', url: 'mailto:1207478481@qq.com', label: '1207478481@qq.com' },
        ],
      },
    ],
  },
]

const { fadeInUp, staggerFadeInUp } = useScrollAnimation()

onMounted(() => {
  fadeInUp('.animate-title')
  fadeInUp('.animate-section-title')
  staggerFadeInUp('.animate-card')
})
</script>

<template>
  <main class="max-w-7xl mx-auto px-6 py-12">
    <h1 class="animate-title text-4xl font-light text-gray-800 mb-12">People</h1>

    <!-- 团队 -->
    <div class="space-y-16">
      <section v-for="(section, sectionIndex) in team" :key="sectionIndex">
        <!-- 标题 -->
        <h2
          class="animate-section-title text-2xl font-semibold text-gray-800 mb-8 border-b-2 border-gray-200 pb-3"
        >
          {{ section.title }}
        </h2>

        <!-- 成员卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="animate-card"
            v-for="(member, memberIndex) in section.members"
            :key="memberIndex"
          >
            <PersonCard :person="member" @click="openPersonModal(member)" />
          </div>
        </div>
      </section>
    </div>

    <!-- 人员详情 -->
    <PersonModal :person="selectedPerson" :is-open="isModalOpen" @close="closePersonModal" />
  </main>
</template>

<style scoped></style>

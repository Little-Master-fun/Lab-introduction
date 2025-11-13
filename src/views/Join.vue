<script setup lang="ts">
import { onMounted } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { fadeInUp, staggerFadeInUp,slideInLeft } = useScrollAnimation()

onMounted(() => {
  // fadeInUp('.animate-image')
  staggerFadeInUp('.animate-title')
  slideInLeft('.animate-section')
})
</script>

<template>
  <main>
    <!-- 机构图片 -->
    <div class="w-full animate-image">
      <img
        src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=400&fit=crop"
        alt="Salk Institute"
        class="w-full h-72 md:h-96 xl:h-128 object-cover"
      />
    </div>
    <!-- 主要介绍内容，一个p标签代表一段，可以添加链接，第一个为不加链接示例，第二个为添加链接示例 -->
    <div class="max-w-6xl mx-auto px-6 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <!-- Left -->
        <div class="animate-title">
          <h1 class="text-3xl font-semibold text-gray-900 mb-6">Join Us!</h1>
          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We are an interdisciplinary research team dedicated to leveraging artificial intelligence and
              statistical learning methods to analyze biomedical big data, with the goal of tackling major health
              challenges such as cancer and genetic diseases. We welcome students and colleagues with
              backgrounds in life sciences, medicine, mathematical statistics, physics, and related fields to join
              us. Our lab focuses on the intersection of biomedical big data and advanced computational
              methods. Key research areas include cell-specific transcriptional regulation based on single-cell
              omics data, interpretability research in deep learning, and the analysis of cancer metastasis
              mechanisms coupled with computational screening for anti-metastatic drugs using multi-omics
              data. We emphasize the integration of computational method development with real-world
              biological and medical questions, driving translational research from data to discovery.
            </p>
          </div>
        </div>

        <!-- Right -->
        <div class="animate-title">
          <h2 class="text-3xl font-semibold text-gray-900 mb-6">About the National Institute of Healthcare Big Data</h2>
          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Our lab is centrally supported by the National Institute of Healthcare Big Data. This institute is a
              national-level innovation platform for healthcare big data, possessing unique, population-scale
              life-cycle health data resources covering tens of millions of individuals. This provides unparalleled
              conditions for conducting real-world research with significant societal impact. Here, you will not
              only engage in cutting-edge research on a first-class academic platform but also personally
              contribute to advancing the field of national health medical big data.
            </p>
          </div>
        </div>
      </div>

      <!-- 进一步信息 -->
      <div class="space-y-12">
        <!-- 研究生 -->
        <section class="animate-section border-l-4 border-gray-800 pl-8 py-4">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">Graduate Students</h2>
          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We recruit doctoral and master's students interested in bioinformatics and computational
              biology. Students can join the lab through relevant programs at Shandong University, such as
              Biostatistics, Bioinformatics, and Data Science. We provide systematic interdisciplinary research
              training, high-performance computing resources, and encourage students to pursue innovative
              research aligned with their interests. We also welcome inquiries and potential rotations for
              students from other related schools and departments within the university.
            </p>
          </div>
        </section>

        <!-- 博士后 -->
        <section class="animate-section border-l-4 border-gray-800 pl-8 py-4">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">Postdoctoral Fellows</h2>
          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We sincerely invite applications for postdoctoral researchers who have obtained or are about to
              obtain a Ph.D. in bioinformatics, computational biology, computer science, statistics, or related
              fields. Applicants should possess strong programming and data analysis skills, or have extensive
              experience with omics data. We offer competitive compensation, excellent career development
              support, and are committed to assisting successful applicants in applying for various research
              grants. If you are interested in applying or would like more information, please send your CV, a
              statement of research interests, and other relevant materials to:
              <a href="mailto:keliu.iluke@email.sdu.edu.cn" class="text-blue-600 hover:underline"
                >keliu.iluke@email.sdu.edu.cn</a
              >
            </p>
          </div>
        </section>

        <!-- 其他人员 -->
        <section class="animate-section border-l-4 border-gray-800 pl-8 py-4">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">Other Inquiries</h2>
          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p>
              If you are interested in our research direction but do not see a suitable position listed above, you
              are also welcome to contact us via email to inquire about potential collaborations or visiting
              opportunities.
            </p>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<style scoped></style>

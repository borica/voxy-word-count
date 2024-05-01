<template>
  <div>
    <div>
      <textarea
        class="word-text-area element-scroll"
        rows="10"
        maxlength="10000"
        v-model="wordInput"
      />
    </div>
    <div class="actions">
      <button class="btn" @click="onSubmit">Submit</button>
      <button class="btn clear-btn" @click="onClean">Clear</button>
    </div>
    <div v-if="showTokens">
      <div class="token-count-container">
        <div>
          <div>Words</div>
          <span>{{ wordCount }}</span>
        </div>
        <div class="token-count-spacer">
          <div>Tokens</div>
          <span>{{ tokenCount }}</span>
        </div>
        <div class="token-count-spacer">
          <div>Characters</div>
          <span>{{ charCount }}</span>
        </div>
      </div>
      <div>
        Tokens:
        <div class="token-container element-scroll">
          <template v-for="(token, index) in tokens" :key="index">
            <span
              class="token"
              :style="{ 'background-color': tokensColors[(index + 1) % tokensColors.length] }"
            >
              {{ `${token}` }}</span
            >
          </template>
        </div>
      </div>
    </div>
  </div>
  <dialog class="no-data-dialog" ref="noDataDialog" :open="visible">
    <p style="color: var(--color-text)">Error! Please provide the input at the Textarea.</p>
    <form class="no-data-form" method="dialog">
      <button class="btn">Confirm</button>
    </form>
  </dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { spaceTokenizer } from '@/tokenizers/SpaceWordTokenizer'

const tokensColors = ['#3E2F7D', '#12444d', '#8d960d', '#960d0d']
const noDataDialog = ref<HTMLDialogElement>()
const visible = ref(false)

const showNoDataModal = () => {
  noDataDialog.value?.showModal()
  visible.value = true
}

const wordInput = ref<string>()

const showTokens = ref<boolean>(false)
const wordCount = ref<string[]>(0)
const tokenCount = ref<number>(0)
const charCount = ref<number>(0)
const tokens = ref<string[]>([])

const onSubmit = () => {
  if (!wordInput.value) {
    showNoDataModal()
    return
  }

  const resultTokens = spaceTokenizer(wordInput.value)
  tokens.value = resultTokens.tokens
  tokenCount.value = resultTokens.tokenCount
  charCount.value = resultTokens.charCount
  wordCount.value = resultTokens.wordCount
  showTokens.value = true
}

const onClean = () => {
  showTokens.value = false
  wordInput.value = ''
}
</script>

<style scoped>
.word-text-area {
  background-color: #181818;
  padding: 10px;
  color: #ffffff;
  border: 2px solid #715ad2;
  border-radius: 10px;
  font-size: 18px;
  width: 100%;
}

.word-text-area:focus {
  outline: none !important;
  border: 2px solid #00c5e1;
  transition: 0.5s;
}

.actions {
  margin-top: 5px;
}

.btn {
  padding: 10px;
  background-color: transparent;
  border: 2px solid #715ad2;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
}

.btn:hover {
  border: 2px solid #00c5e1;
  color: #a8a8a8;
  transition: 0.5s;
}

.clear-btn {
  margin-left: 10px;
}

.token-count-container {
  margin-top: 15px;
  display: flex;
}

.token-count-spacer {
  margin-left: 20px;
}

.token-container {
  max-height: 350px;
  overflow-y: auto;
  scroll-behavior: smooth;
}

.token {
  color: #fff;
  padding: 2px;
  white-space: break-spaces;
}

.element-scroll::-webkit-scrollbar {
  background-color: transparent;
  width: 4px;
}

.element-scroll::-webkit-scrollbar-track {
  background-color: transparent;
}
.element-scroll::-webkit-scrollbar-track:hover {
  background-color: transparent;
}

.element-scroll::-webkit-scrollbar-thumb {
  background-color: #babac0;
  border-radius: 16px;
}
.element-scroll::-webkit-scrollbar-thumb:hover {
  background-color: #a0a0a5;
  border: 4px solid #f4f4f4;
}

.element-scroll::-webkit-scrollbar-button {
  display: none;
}

.no-data-dialog {
  position: absolute;
  margin: auto;
  border: 2px solid #715ad2;
  background-color: var(--color-background);
}

.no-data-dialog p {
  text-align: center;
}

.no-data-dialog::backdrop {
  background-color: var(--color-background);
  opacity: 0.8;
}

.no-data-form {
  margin-top: 40px;
  min-width: 200px;
  min-height: 20px;
}

.no-data-dialog button {
  width: 100%;
}
</style>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { FwbAlert,FwbButton  } from 'flowbite-vue'
import { pushFunctions } from './datas/hardware.ts'
import { OPERATION_TYPE, ADDITIONAL_OPERATION_TYPE } from './utils/constant.ts'
import { sendData } from './api/sendData.ts'
import { getCurrentTimeFormatted } from './utils/time.ts'

const data = ref(pushFunctions)

const deviceCodeData = ref('9fb60739349f43bdb08f0cb2d9b3ebae')

const alertType = ref('success')
const alertMessage = ref('执行成功')
const showAlert = ref(false);

const chageDeviceCodel = () => {
  console.log(deviceCodeData.value)
}

const SendData = (curr) => {
  console.log(curr)
  const rebuildData = {
    topic: curr.MQType + '_' + deviceCodeData.value,
    data: {
      typeflag: curr.typeflag, //  推送类型
      jsonData: curr.jsonData,//json格式的内容 
      deviceCode: deviceCodeData.value,//设备编码
      now: getCurrentTimeFormatted(),//时间
    }
  }

  console.log(rebuildData)
  sendData(rebuildData).then(() => {
    showAlert.value = true
    alertType.value = 'success'
    alertMessage.value = '执行成功'
  })
    .catch(() => {
      showAlert.value = true
      alertType.value = 'danger'
      alertMessage.value = '执行失败'
    });
}



// initialize components based on data attribute selectors
onMounted(() => {

})
</script>

<template>

  <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">

        <div class="flex items-center justify-start rtl:justify-end">
          <button 
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
              </path>
            </svg>
          </button>
          <a href="https://infantai.tech" class="flex ms-2 md:me-24">
            <img src="./assets/assets-logo-full.svg" class="h-8 me-3" alt="InfantAI Logo" />
            <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">InfantAI
              Debug</span>
          </a>
        </div>
        <fwb-alert v-if="showAlert" :type="alertType" @close="showAlert = false" closable icon>
          {{ alertMessage }}
        </fwb-alert>
        <div class="flex items-center">
          <div class="flex items-center ms-3">
            <div>
              <button type="button"
                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="user photo">
              </button>
            </div>
            <div
              class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
              id="dropdown-user">
              <div class="px-4 py-3" role="none">
                <p class="text-sm text-gray-900 dark:text-white" role="none">
                  Debug Now
                </p>
                <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                  tech@infantai.tech
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <aside id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidebar">
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li>
          <a href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg
              class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
              <path
                d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
              <path
                d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
            </svg>
            <span class="ms-3">HardWare Trigger</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>

  <div class="p-4 sm:ml-64">

    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div class="flex items-center justify-center rounded h-28 dark:bg-gray-800">
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Device
            Code</label>
          <input type="text" id="first_name" v-model="deviceCodeData"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="9fb60739349f43bdb08f0cb2d9b3ebae" required />
        </div>
        <div class="flex items-center justify-center h-24 rounded  dark:bg-gray-800">
          <button type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            @click="chageDeviceCodel">Change</button>
        </div>
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Function Name
              </th>
              <th scope="col" class="px-6 py-3">
                MQ-Topic
              </th>
              <th scope="col" class="px-6 py-3">
                Data Type
              </th>
              <th scope="col" class="px-6 py-3">
                Data Details
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="index"
              class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ item.FunctionName }}
              </th>
              <td class="px-6 py-4">
                {{ item.MQType }}
              </td>
              <td class="px-6 py-4">
                {{ MQType === 'devicedoll_msg' ? OPERATION_TYPE.get(item.typeflag) :
                  ADDITIONAL_OPERATION_TYPE.get(item.typeflag) }}
              </td>
              <td class="px-6 py-4">
                {{ JSON.stringify(item.jsonData) }}
              </td>
              <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  @click="SendData(item)">Send</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


    </div>
  </div>


</template>

<style scoped></style>

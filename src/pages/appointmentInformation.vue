<script setup>
import {ref} from "vue";
import authorize from "../composable/authorize";

</script>
<template>
<div class="flex items-center justify-center text-red-500 text-5xl text-center bg-gray-500">
<img class="w-40 h-20" src="/src/assets/Appointmentinformationimage.png" alt="Appointment Information Image"/>
</div>
<div class="flex flex-col items-center mx-auto text-red-700">
<div ><img class="h-60 px-80 py-3" src="/src/assets/appointmentinfo.png" alt="Appointment Information IMG"></div>
</div>
<div class="mx-auto text-red-700">
    <div class="text-3xl text-center py-11 border-black border-8 rounded-xl">
        <h1 class="text-5xl py-11 border-b-4 border-black">Appointment Info</h1>
        <p class="py-8 border-b-4 border-gray-500">FullName: Brandon Lopez</p>
        <p class="py-8 border-b-4 border-gray-500">Email Address: blope165@stu.southtexascollege.edu</p>
        <p class="py-8 border-b-4 border-gray-500">Phone Number: (956)123-1234</p>
        <p class="py-8 border-b-4 border-gray-500">Appointment Date: 11/26/2021</p>
        <p class="py-8 border-b-4 border-gray-500">Scheduled Time: 4:11 PM</p>
        <p class="py-8 border-b-4 border-gray-500">Selected Barber: Luis Escobedo</p>
        <p class="py-8">Optional Comments: I would like a 4 on the sides and the top with scissors.</p>
    </div>
</div>
</template>
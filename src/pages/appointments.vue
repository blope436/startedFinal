<script setup>

import {ref} from "vue";

import { useRouter } from "vue-router";

import authorize from "../composable/authorize";

const {authStatus, signin} = authorize();

const router = useRouter();

const fullname = ref("");

const username = ref("");

const phonenumber = ref("");

const enterdate = ref("");

const apptime = ref("");

const barbers = ref("");

const comments = ref("");

const submitButton = async () => {
    await signin(fullname.value, username.value, phonenumber.value, enterdate.value, apptime.value, barbers.value, comments.value)
    if (authStatus.value)
    {
        router.push("/");
    }
};

const clear = () => {
    fullnames.value = "";
    usernames.value = "";
    phonenumbers.value = "";
    enterdates.value = "";
    apptimes.value = "";
    barber.value = "";
    comment.value = "";
}
const checktime = () => {
    if(enterdate.value > 8)
    {
        apptimes.value = "";
        window.alert("Enter a correct time");
    }
}
</script>

<template>
<div class="flex items-center justify-center text-red-500 text-5xl text-center bg-gray-500">
<img class="w-40 h-20" src="/src/assets/appointmentimage.png" alt="Appointment Image"/>
</div>
<div class="text-center text-4xl text-red-700">
    <h1 class="py-3">Welcome to the Appointment page!</h1>
    <h1 class="py-3">Here you will enter the information in order to book an appointment at Extreme Cuts!!</h1>
    <h1 class="py-3">We look forward to seeing you!! Once you finish making an appointment you can login with information that you entered to see your appointment details.</h1>
    <span class="flex flex-col py-3 border-8 border-blue-500">Appointment Made: {{authStatus}}</span>
</div>
<div class="flex flex-col items-center mx-auto text-red-700">
<div ><img class="h-60 px-80 py-3" src="/src/assets/appointment.png" alt="Appointment IMG"></div>
</div>
<div class="mx-auto text-red-700 border-8 border-gray-500 bg-blue-400">
    <form @submit.prevent="submitButton" class="text-center text-xl space-x-3 space-y-4 py-7">
        <input required id="fullnames" name="fullname" type="text" class="rounded-lg border-4" placeholder="Enter Full Name" v-model="fullname"/>
        <input required id="usernames" name="username" type="email" class="rounded-lg border-4" placeholder="Enter Email address" v-model="username"/>
        <input required id="phonenumbers" name="phonenumber" type="tel" class="rounded-lg border-4" placeholder="Phone: (111)111-1111" v-model="phonenumber"/>
        <h1 class="text-2xl text-black">Enter desired date for appointment:</h1>
        <input required id="enterdates" name="enterdate" type="date" class="rounded-lg border-4" v-model="enterdate"/>
        <div class="space-x-3 space-y-5">
            <span class="text-2xl text-black">Time:</span>
            <input required id="apptimes" name="apptime" type="time" class="rounded-lg border-4" v-model="apptime"/>
            <label class="text-2xl text-black">Select a barber from list:</label>
            <select id="barber" name="barbers">
                <option value="barber1">Luis Escobedo</option>
                <option value="barber2">Brandon Garza</option>
                <option value="barber3">Juan Garcia</option>
                <option value="barber4">John Smith</option>
                <option value="barber5">Alex Rodriguez</option>
                <option value="barber6">Ruben Martinez</option>
                <option value="barber7">Joe Ortiz</option>
                <option value="barber8">Tony Gonzalez</option>
                <option value="barber9">Baker Smith</option>
                <option value="barber10">John Velazquez</option>
            </select>
            <input id="comment" name="comments" type="text" class="rounded-lg border-4" placeholder="Optional* Extra Comments" v-model="comments"/>
        </div>
        <button @click="checktime()" type="submit" @submit.prevent="submitButton" class="bg-blue-500 text-black">Submit</button>
        <button @click="clear()" class="bg-red-500 text-black">Cancel</button>
    </form>
</div>
</template>
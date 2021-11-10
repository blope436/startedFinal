<template>
<div class="flex items-center justify-center text-red-500 text-5xl text-center bg-gray-500">
<img class="w-40 h-20" src="/src/assets/appointmentimage.png" alt="Appointment Image"/>
</div>
<div class="text-center text-4xl text-red-700">
    <h1>Welcome to the Appointment page!</h1>
    <h1>Here you will enter the information in order to book an appointment at Extreme Cuts!!</h1>
    <h1>We look forward to seeing you!! Once you finish making an appointment you can login with information that you entered to see your appointment details.</h1>
</div>
<div class="flex flex-col items-center mx-auto text-red-700">
<div ><img class="h-60 px-80 py-3" src="/src/assets/appointment.png" alt="Appointment IMG"></div>
</div>
<div class="mx-auto text-red-700">
    <form class="text-center text-xl space-x-3 space-y-4 py-7">
        <input required name="fullname" type="text" class="rounded-lg border-4" placeholder="Enter Full Name" v-model="fullname"/>
        <input required name="username" type="email" class="rounded-lg border-4" placeholder="Enter Email address" v-model="username"/>
        <input required name="phonenumber" type="tel" class="rounded-lg border-4" placeholder="Phone: (111)111-1111" v-model="phonenumber"/>
        <h1 class="text-2xl text-black">Enter desired date for appointment:</h1>
        <input required name="enterdate" type="date" class="rounded-lg border-4" v-model="fullname"/>
        <div class="space-x-3 space-y-5">
            <span class="text-2xl text-black">Time:</span>
            <input required name="apptime" type="time" class="rounded-lg border-4" placeholder="Enter Full Name" v-model="appname"/>
            <label class="text-2xl text-black">Select a barber from list:</label>
            <select required id="barbers" name="barbers">
                <option value="barber1">Luis</option>
                <option value="barber2">Brandon</option>
                <option value="barber3">Any</option>
            </select>
            <input name="comments" type="text" class="rounded-lg border-4" placeholder="Optional* Extra Comments" v-model="comments"/>
        </div>
        <button class="bg-blue-500 text-black">Submit</button>
        <button class="bg-red-500 text-black">Cancel</button>
    </form>
</div>
</template>
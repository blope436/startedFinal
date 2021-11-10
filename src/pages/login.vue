<template>
<div class="flex items-center justify-center text-red-500 text-5xl text-center bg-gray-500">
<img class="w-40 h-20" src="/src/assets/loginimage.png" alt="Login Image"/>
</div>
<div class="text-center text-4xl text-red-700">
    <h1>Welcome to the login page!</h1>
    <h1>Here you will enter the information that you entered when you made an appointment</h1>
    <h1>You must make an appointment to continue. When you login you will be able to access the Appointment Information page.</h1>
</div>
<div class="flex flex-col items-center mx-auto text-red-700">
<div ><img class="h-60 px-80 py-3" src="/src/assets/loginimage2.jpg" alt="Login IMG"></div>
</div>
<div class="flex justify-center mx-auto text-red-700">
    <form class="text-center text-xl space-y-7 py-3 ">
        <img class="h-10 rounded-lg mx-auto" src="/src/assets/loginicon.png" alt="Name"/>
        <input name="name" type="text" class="rounded-lg border-4" placeholder="Enter Full Name" v-model="name"/>
        <div>
        <img class="h-10 rounded-lg mx-auto" src="/src/assets/email.jpg" alt="Name"/>
        <input name="email" type="text" class="rounded-lg border-4" placeholder="Enter Email Address" v-model="email"/>
        </div>
        <div class="space-x-2">
        <button class="bg-blue-500 text-black">Submit</button>
        <button class="bg-red-500 text-black">Cancel</button>
        </div>
    </form>
</div>
</template>
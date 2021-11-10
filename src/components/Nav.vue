<script setup>

</script>

<template>
<div class="bg-black text-blue-700">
<div class="container mx-auto flex items-center justify-between">
   
    <div class="mx-auto">
    <img class="h-40" src="/src/assets/barber2.jpg" alt="Main Image">
    </div>
    
    <nav>
        <ul class="flex">
            <router-link to="/"><li class="py-8 px-4 hover:cursor-pointer hover:bg-red-900 hover:text-blue-400 text-xl">Home</li></router-link>
            <router-link to="/about"><li class="py-8 px-4 hover:cursor-pointer hover:bg-red-900 hover:text-blue-400 text-xl">About</li></router-link>
            <router-link to="/contacts"><li class="py-8 px-4 hover:cursor-pointer hover:bg-red-900 hover:text-blue-400 text-xl">Contact</li></router-link>
            <router-link to="/appointments"><li class="py-8 px-4 hover:cursor-pointer hover:bg-red-900 hover:text-blue-400 text-xl">Appointments</li></router-link>
            <router-link to="/login"><li class="py-8 px-4 hover:cursor-pointer hover:bg-red-900 hover:text-blue-400 text-xl">Login</li></router-link>
            <div class="flex">
            <router-link to="/appointmentInformation"><li class="py-8 px-4 hover:cursor-pointer hover:bg-red-900 hover:text-blue-400 text-xl">Appointment Information</li></router-link>
            <button><li class="py-8 px-4 hover:cursor-pointer hover:bg-red-900 hover:text-blue-400 text-xl">Logout</li></button>
            </div>
        </ul>
    </nav>
</div>
</div>
</template>

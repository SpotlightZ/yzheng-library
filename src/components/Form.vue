<template>
<div class="container mt-5">
    <div class="row">
        <div class="col-md-8 offset-md-2">
            <h1 class="text-center">User Information Form</h1>
            <form @submit.prevent="submitForm">
                <div class="row mb-3">
                    <div class="col-6">
                        <label for="username" class="form-label">Username</label><br>
                        <input type="text" class="form-control" id="username" name="username" v-model="formData.username"><br>
                    </div>
                    <div class="col-6">
                        <label for="password" class="form-label">Password</label><br>
                        <input type="password" class="form-control" id="password" v-model="formData.password" name="password"><br>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-6">
                        <div class="form-check d-flex align-items-center">
                            <input type="checkbox" class="form-check-input" id="isAustralian" name="isAustralian" v-model="formData.isAustralian"><br>
                            <label class="form-check-label" for="isAustralian">Australian Resident?</label><br>
                        </div>
                    </div>
                    <div class="col-6">
                        <label for="gender" class="form-label">Gender</label><br>
                        <select class="form-select" id="gender" v-model="formData.gender">
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="reason">Reason For Joining</label><br>
                    <textarea class="form-control" id="reason" name="reason" rows="3" v-model="formData.reason"></textarea><br>
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-primary me-2">Submit</button>
                    <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
                </div>
            </form>
        </div>
    </div>
</div>

<div class="row mt-5" v-if="submittedCards.length">
    <div class="d-flex flex-wrap justify-content-start">
        <div v-for="(card, index) in submittedCards" :key="index" class="card m-2" style="width: 18rem;">
            <div class="card-header">
               User Information
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Username: {{ card.username }}</li>
                <li class="list-group-item">Password: {{ card.password }}</li>
                <li class="list-group-item">Australian Resident: {{ card.isAustralian ? 'Yes' : 'No' }}</li>
                <li class="list-group-item">Gender: {{ card.gender }}</li>
                <li class="list-group-item">Reason: {{ card.reason }}</li>
            </ul>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
  
const formData = ref({
    username: '',
    password: '',
    isAustralian: false,
    reason: '',
    gender: ''
});

const submittedCards = ref([]);

const submitForm = () => {
    submittedCards.value.push({
        ...formData.value
    });
};

const clearForm = () => {
    formData.value = ref({
        username: '',
        password: '',
        isAustralian: false,
        reason: '',
        gender: ''
    })
}
</script>

<style scoped>
    .card {
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .card-header {
        background-color: #275FDA;
        color: white;
        padding: 10px;
        border-radius: 10px 10px 0 0;
    }
    .list-group-item {
        padding: 10px;
    }

    .form-check-label {
        padding-left: 10px;
    }
</style>
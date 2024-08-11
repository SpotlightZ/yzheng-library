<template>
    <div class="form">
        <h1>User Information Form / Credentials</h1>
        <form>
            <label for="username">Username:</label><br>
            <input type="text" id="username" name="username"><br>
            
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password"><br>
            
            <label for="isAustralian">Australian Resident?</label><br>
            <input type="checkbox" id="isAustralian" name="isAustralian"><br>
            
            <label for="reason">Reason For Joining:</label><br>
            <textarea id="reason" name="reason" rows="3"></textarea><br>
            
            <label for="gender">Gender</label><br>
            <select id="gender">
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
            </select>
        </form>
    </div>

    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <h1 class="text-center">User Information Form</h1>
                <form @submit.prevent="submitForm">
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="username" class="form-label">Username:</label><br>
                            <input type="text" class="form-control" id="username" name="username" v-model="formData.username"><br>
                        </div>
                        <div class="col-md-6">
                            <label for="password" class="form-label">Password:</label><br>
                            <input type="password" class="form-control" id="password" v-model="formData.password" name="password"><br>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <div class="form-check">
                                <label class="form-check-label" for="isAustralian">Australian Resident?</label><br>
                                <input type="checkbox" class="form-check-input" id="isAustralian" name="isAustralian" v-model="formData.isAustralian"><br>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="gender" class="form-label">Gender</label><br>
                            <select class="form-select" id="gender" v-model="formData.gender">
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="reason">Reason For Joining:</label><br>
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
</template>

<script setup>
// Our logic will go here
</script>

<style scoped>

</style>
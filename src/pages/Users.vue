<template> 
  <div>
    <h6 class="text-center mb-5">
      Users are pulled from API 
      <span class="text-danger">/api/users</span>
    </h6>

    <ul class="list-group" v-if="users.length">
      <li class="list-group-item"
        v-for="user in users" :key="user.id"
      >
        {{user.name}}
      </li> 
    </ul>
    <div class="alert alert-default" v-else>
      No Users Found.
    </div>
  </div>
</template>

<script>


export default {
  name: 'Users',
  components: {
    
  },
  data() {
    return {
      users: []
    }
  }, 
  mounted(){
    /*
    * fetch the users upon loading this page
    */
    this.fetchUsers();
  },
  methods: {
    /*
    * Method to fetch users from API
    * and set the users array value
    */
    fetchUsers() {
      this.$http.get('/api/users')
        .then((response)=>{   
          this.users = response.data;
        }).catch((error)=>{
          console.log(error) 
        }); 
    }
  }
}
</script>

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let company = document.getElementById("companyName");
let address = document.getElementById("address");
let email = document.getElementById("email");
let addUserBtn = document.getElementById("addUserBtn");
let logoutBtn = document.getElementById("logoutBtn");
let userTableBody = document.getElementById("userTableBody");



async function addUser() {
    try {
      const { error } = await supabase
        .from("user-data")
        .insert({
          firstName: firstName.value,
          lastName: lastName.value,
          email:  email.value,
          address: address.value,
          company: company.value,
          
        });
  
      if (error) throw error;
      firstName.value = "";
      lastName.value = "";
      email.value = "";
      address.value = "";
      company.value = "";
      
  
      Swal.fire({
        title: "User Added",
        text: "User Sucesfully Added ",
        icon: "success",
      });
  
      userTableBody.innerHTML = "";
  
      getUser();
    } catch (error) {
      console.log(error);
    }
  }
  
  async function getUser() {
    try {
      const { data, error } = await supabase.from("user-data").select();
      if (error) throw error;
  
      userTableBody.innerHTML = ''
  
      if (data)
          console.log(data)
           {
        data.map((val, index) => {
          return (userTableBody.innerHTML += `
       <tr>
                          <td scope="col">${val.id}</td>
                          <td scope="col">${val.firstName}</td>
                          <td scope="col">${val.lastName}</td>
                          <td scope="col">${val.email}</td>
                          <td scope="col">${val.address}</td>
                          <td scope="col">${val.company}</td>

                        </tr>
      `);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  if(addUserBtn) {
    addUserBtn.addEventListener("click", addUser);
  }
  
  window.onload = getUser();

//SIR WORK
// async function addUser() {
//   try {
//     const { error } = await supabase
//       .from("user-data")
//       .insert({
//     firstName: firstName.value,
//     lastName: lastName.value,
//     company: company.value,
//     address: address.value,
//     email: email.value,
//       });
//     if (error) throw error;
//     firstName.value = "",
//     lastName.value = "",
//     company.value = "",
//     address.value = "",
//     email.value = ""
//     Swal.fire({
//       title: "User Added",
//       text: "User Sucesfully Added in the System",
//       icon: "success",
//     });
//     userTableBody.innerHTML = "";
//     getUser();
//   } catch (error) {
//     console.log(error);
//   }
// }
// async function getUser() {
//   try {
//     const { data, error } = await supabase.from("user-data").select();
//     if (error) throw error;
//     console.log(data);
//     if (data) {
//       data.map((val, index) => {
//         return (userTableBody.innerHTML += `
//      <tr>
//                         <td scope="col">${val.firstName}</td>
//                         <td scope="col">${val.lastName}</td>
//                         <td scope="col">${val.company}</td>
//                         <td scope="col">${val.email}</td>
//                         <td scope="col">${val.address}</td>
//                         <td> <span> <i id="delete_user" onclick="deleteUser(${val.id})" class="fa-solid fa-trash"></i> </span> </td>
//                       </tr>
//     `);
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
// async function deleteUser() {
//   console.log('User')
// }
// let deleteBtn = document.getElementById("delete_user");
// if(deleteBtn) {
//   deleteBtn.addEventListener('click' , function() {
//     let deleteUserId = localStorage.getItem('deleteUserId')
//     console.log(deleteUserId)
//   })
  
// }
// addUserBtn.addEventListener("click", addUser);
// window.onload = getUser();
         // MY WORK
// async function addUser(params) {
//     try {
//         const { error } = await supabase
//   .from(user-data)
//   .insert({ 
//     firstName: firstName.value,
//     lastName: lastName.value,
//     company: company.value,
//     address: address.value,
//     email: email.value,
//    })
//    if(error) throw error
//     firstName.value = "",
//     lastName.value = "",
//     company.value = "",
//     address.value = "",
//     email.value = ""
//     Swal.fire({
//         title: "User Added",
//         text: "User Sucesfully Added in the System",
//         icon: "success",
//       });
//       if(data){
//         console.log(data)
//       }
   
//     } catch (error) {
        
//     }
    
// }

// async function getUser(params) {
//     try {
//         const { data, error } = await supabase
//   .from(user-data)
//   .select()
//   if(error) throw error
//   if (data){
//     console.log(data)
//   }

//     } catch (error) {
        
//     }
// }
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
    const { error } = await supabase.from("user-data").insert({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
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

    if (data) console.log(data);
    {
      data.map((val, index) => {
        return (userTableBody.innerHTML += `
       <tr>
                          
                          <td scope="col">${val.firstName}</td>
                          <td scope="col">${val.lastName}</td>
                          <td scope="col">${val.email}</td>
                          <td scope="col">${val.address}</td>
                          <td scope="col">${val.company}</td>
                          <td scope="col"><i id="delete_user" onclick="deleteUser(${val.id})" class="fa-solid fa-trash"></i></td>

       </tr>   
      `);
      });
    }
  } catch (error) {
    console.log(error);
  }
}
addUserBtn.addEventListener("click", addUser);
window.onload = getUser();


var mysession= JSON.parse(localStorage.getItem("currentUser"))

async function deleteUser(userId) {
  try {
    Swal.fire({
      title: "Are you sure want to delete the user",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data, error } = await supabase
          .from("user-data")
          .delete()
          .eq("id",id)
          .select();
        if (error) throw error;
      
        if(data) {
          Swal.fire({
            icon: 'success' ,
            title: 'User Deleted Succesfully '
          })
          getUser()
        }
       
      }
    });
  } catch (error) {
    console.log(error);
  }
}


if (deleteBtn) {
  deleteBtn.addEventListener("click",deleteUser);
}





  

async function logout(params) {
  try {
    const { error } = await supabase.auth.signOut()
     
  if (error) throw error
 
  window.location.href = '/login.html'
  
  } catch (error) {
    console.log("error")
    Swal.fire({
      title: "Error!",
      icon: "error",
      draggable: true,
    });
  }
  
}
if(logoutBtn){
  logoutBtn.addEventListener("click",logout)
}

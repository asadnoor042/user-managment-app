const signupName = document.getElementById("fullName");
const signupEmail = document.getElementById("signupEmail");
const signupPass = document.getElementById("signupPass");
const signupBtn = document.getElementById("signupBtn");
const loginEmail = document.getElementById("loginEmail");
const loginPass = document.getElementById("loginPass");
const loginBtn = document.getElementById("loginBtn");

async function signup() {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: signupEmail.value,
      password: signupPass.value,
    });

    if (error) throw error;

    if (data) {
      console.log(data);
      console.log(data.user);

      try {
        const { data: userData, error: userError } = await supabase
          .from("users")
          .insert({
            userId: data.user.id,
            fullName: signupName.value,
            email: signupEmail.value,
          })
          .select();

        if (userError) throw userError;

        if (userData) {
          console.log(userData);
          Swal.fire({
            title: "Signup Successfully",
            text: "Your account has been created",
            icon: "success",
          });
          window.location.href = "/login.html";
        }
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: "Something went wrong",
          text: "Try Again",
          icon: "error",
        });
      }
    }
  } catch (error) {
    console.log(error);
    Swal.fire({
      title: "Something went wrong",
      text: "Try Again",
      icon: "error",
    });
  }
}

// Attach event listener for signup button
if (signupBtn) {
  signupBtn.addEventListener("click", signup);
}

async function loginsession() {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginEmail.value,
      password: loginPass.value,
    });

    if (error) throw error;

    if (data) {
      console.log(data);
      Swal.fire({
        title: "Login Successfully",
        text: "You are ready to go!",
        icon: "success",
      });
      window.location.href = "/dashboard.html";
    }
  } catch (error) {
    console.log(error);
    Swal.fire({
      title: "Something went wrong",
      text: "Invalid login credentials",
      icon: "error",
    });
  }
}

// Attach event listener for login button
if (loginBtn) {
  loginBtn.addEventListener("click", loginsession);
}

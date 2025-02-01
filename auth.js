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
      Swal.fire({
        title: "Signup Successfully",
        text: "your account has been created",
        icon: "success",
      });
      window.location.href = "/login.html";
    }
    return data;
  } catch (error) {
    console.log(error);
    Swal.fire({
      title: "something went wrong",
      text: " Try Again",
      icon: "error",
    });
  }
}
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
      title: "something went wrong",
      text: " invalid login credentials",
      icon: "error",
    });
  }
}
if (loginBtn) {
  loginBtn.addEventListener("click", loginsession);
}

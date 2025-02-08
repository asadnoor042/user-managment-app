async function checkSession(params) {
  try {
    const { data, error } = await supabase.auth.getSession();
    const authpages = ["/index.html", "/login.html", "/"];
    const currentPath = window.location.pathname;
    const isAuthPage = authpages.some((page) => page.includes(currentPath));
    const { session } = data;
    if (session) {
      if (isAuthPage) {
        window.location.href = "/dashboard.html";
      }
    } else {
      if (!isAuthPage) {
        window.location.href = "/login.html";
      }
    }
    
    if (session) {
      localStorage.setItem("session", JSON.stringify(session));
    }
    console.log("Session:", session); 
    if(error) throw error
    console.log(session);
  } catch (error) {
    console.log("error");
  }
}

window.onload = checkSession;

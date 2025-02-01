const {createClient} = supabase
console.log(supabase)

const supabaseUrl = "https://ygwiuimowqzwylaebcgm.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlnd2l1aW1vd3F6d3lsYWViY2dtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2Njg2OTMsImV4cCI6MjA1MjI0NDY5M30.DKrK6Re_yOEpqUv55QQpv8oTHzFwoiYpLJvaBCvodXs"
const supabaseClient = createClient(supabaseUrl,supabaseKey)

window.supabase = supabaseClient;
window.supabase = supabaseClient
window.supabase = supabaseClient
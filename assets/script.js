
const menuBtn=document.querySelector(".menu-btn");
const navLinks=document.querySelector(".nav-links");
if(menuBtn){menuBtn.addEventListener("click",()=>navLinks.classList.toggle("show"))}
document.querySelectorAll(".nav-links a").forEach(link=>link.addEventListener("click",()=>navLinks.classList.remove("show")));

const revealItems=document.querySelectorAll(".reveal");
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add("show"); }});
},{threshold:.12});
revealItems.forEach(item=>observer.observe(item));

const introOverlay=document.getElementById("introOverlay");
const introText=document.getElementById("introText");
const introSub=document.getElementById("introSub");
const profileRing=document.getElementById("profileRing");
const welcomeBadge=document.getElementById("welcomeBadge");

const messages=[
  ["Welcome to my Cloud Portfolio","Preparing my profile..."],
  ["AWS","Cloud services and infrastructure fundamentals"],
  ["Linux","Server operations and troubleshooting"],
  ["Python Automation","Reports, scripts and cloud workflow practice"],
  ["Cloud Support Mindset","Thank you for visiting my portfolio."]
];

let i=0;
const messageTimer=setInterval(()=>{
  i++;
  if(i < messages.length){
    introText.textContent=messages[i][0];
    introSub.textContent=messages[i][1];
  } else {
    clearInterval(messageTimer);
    introOverlay.classList.add("hide");
    profileRing.classList.add("ready");
    welcomeBadge.classList.add("show");
  }
},1700);

setTimeout(()=>{
  introOverlay.classList.add("hide");
  profileRing.classList.add("ready");
  welcomeBadge.classList.add("show");
},9000);

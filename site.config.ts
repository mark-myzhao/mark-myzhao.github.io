import { defineSiteConfig } from "./src/config/site";
export const siteConfig = defineSiteConfig({
 author: "Mingyu Zhao", title: "Mingyu Zhao | Senior Machine Learning Engineer",
 siteUrl: "https://mark-myzhao.github.io",
 description: "Mingyu Zhao is a Senior Machine Learning Engineer on Shopify's Sidekick team, working on distillation platforms and reinforcement learning infrastructure.",
 hero: { headline: "Distillation platforms & reinforcement learning infrastructure", subheadline: "I'm a Senior Machine Learning Engineer on Shopify's Sidekick team. My work focuses on distillation platforms and reinforcement learning infrastructure, including simulation environments. Previously, I worked on LLM training, reward services, and speech systems at Amazon. Outside of work, I enjoy photography.", profileImage: "/profile.svg", profileAlt: "Mingyu Zhao monogram" },
 affiliations: [{role:"Senior Machine Learning Engineer",department:"Sidekick",institution:"Shopify",url:"https://www.shopify.com"}],
 researchInterests: ["Model distillation", "Reinforcement learning", "Simulation environments", "LLM evaluation"],
 socialLinks: [
 { label: "GitHub", href: "https://github.com/mark-myzhao", icon: "i-mdi:github" },
 { label: "LinkedIn", href: "https://www.linkedin.com/in/mingyu-zhao-70a687172", icon: "i-mdi:linkedin" },
 { label: "Email", href: "mailto:mingyusysu@gmail.com", icon: "i-mdi:email-outline" }
 ],
 navLinks: [{label:"About",href:"/about"},{label:"Projects",href:"/projects"},{label:"Research",href:"/research"},{label:"Photography",href:"/photography"}],
 footer: {showProfileLinks:true},
 pageTitles: {
 about:{description:"Senior Machine Learning Engineer at Shopify · Experience, education, and technical background."},
 projects:{description:"Engineering projects, systems, and experiments."},
 researches:{title:"Research",description:"Publications and ongoing research."}
 },
 homeBlocks: {
 showcase:{enabled:true,title:"Selected Projects",description:"Engineering work and experiments."},
 publications:{enabled:true,title:"Selected Publications",description:"Research and publications."},
 posts:{enabled:false}
 }
});
export default siteConfig;

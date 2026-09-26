import { defineSiteConfig } from "./src/config/site";
export const siteConfig = defineSiteConfig({
 author: "Mingyu Zhao", title: "Mingyu Zhao | Senior Machine Learning Engineer",
 siteUrl: "https://mark-myzhao.github.io",
 description: "Mingyu Zhao is a Senior Machine Learning Engineer in Agentic Foundation Modeling at Shopify, building distributed data systems, efficient LLM training infrastructure, and RL simulation and reward systems.",
 hero: { headline: "Distillation platforms & reinforcement learning infrastructure", subheadline: "I'm a Senior MLE on the Agentic Foundation Modeling team at Shopify. My work focuses on LLM RL and pretraining infrastructure, distillation platforms, and large-scale multimodal data processing. Previously, I worked on LLM training (Rufus), reward services, and speech recognition systems at Amazon. Outside of work, I enjoy photography, the outdoors, and coffee.", profileImage: "/profile.svg", profileAlt: "Mingyu Zhao monogram" },
 affiliations: [{role:"Senior Machine Learning Engineer",department:"Agentic Foundation Modeling",institution:"Shopify",url:"https://www.shopify.com"}],
 researchInterests: ["Model distillation", "Reinforcement learning", "Simulation environments", "LLM evaluation"],
 socialLinks: [
 { label: "GitHub", href: "https://github.com/mark-myzhao", icon: "i-mdi:github" },
 { label: "LinkedIn", href: "https://www.linkedin.com/in/mingyu-zhao-70a687172", icon: "i-mdi:linkedin" },
 { label: "Instagram", href: "https://www.instagram.com/mark_mingyuzhao/", icon: "i-mdi:instagram" }
 ],
 navLinks: [{label:"About",href:"/about"},{label:"Projects",href:"/projects"},{label:"Research",href:"/research"},{label:"Photography",href:"/photography"}],
 footer: {showProfileLinks:true},
 pageTitles: {
 about:{description:"Building scalable infrastructure for data processing, LLM training, and reinforcement learning."},
 projects:{description:"Engineering projects, systems, and experiments."},
 researches:{title:"Research",description:"Publications and ongoing research."}
 },
 homeBlocks: {
 showcase:{enabled:true,title:"Selected Projects",description:"Engineering work and experiments."},
 publications:{enabled:true,title:"Publications",description:"Research and publications."},
 posts:{enabled:false}
 }
});
export default siteConfig;

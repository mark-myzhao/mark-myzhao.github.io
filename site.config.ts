import { defineSiteConfig } from "./src/config/site";
export const siteConfig = defineSiteConfig({
 author: "Mark Zhao", title: "Mark Zhao | Machine Learning Engineer",
 siteUrl: "https://mark-myzhao.github.io",
 description: "Machine learning engineering, research, and photography.",
 hero: { headline: "Machine Learning Engineer", subheadline: "A space for my engineering projects, research, and photography.", profileImage: "/profile.svg", profileAlt: "MZ monogram" },
 socialLinks: [{ label: "GitHub", href: "https://github.com/mark-myzhao", icon: "i-mdi:github" }],
 navLinks: [{label:"About",href:"/about"},{label:"Projects",href:"/projects"},{label:"Research",href:"/research"},{label:"Photography",href:"/photography"},{label:"CV",href:"/cv"}],
 footer: {showProfileLinks:true},
 pageTitles: {
 about:{description:"I'm Mark, a machine learning engineer. Outside of work, I enjoy photography."},
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

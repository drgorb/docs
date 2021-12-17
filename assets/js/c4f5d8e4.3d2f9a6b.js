"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[195],{2924:function(e,t,a){var r=a(7294).createContext(void 0);t.Z=r},5350:function(e,t,a){var r=a(7294),n=a(2924);t.Z=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},6252:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var r=a(7462),n=a(7294),l=a(6010),i=a(5186),o=a(8465),c=(a(6742),a(2263)),s=a(4996),m={heroBanner:"heroBanner_3P7f",buttons:"buttons_1r9m",features:"features_3azU",featureImage:"featureImage_ZtzX",featureLink:"featureLink_1-Up"},u=[[{title:"Become a Collator",imageUrl:"img/community_light.svg",imageUrlDark:"img/community_dark.svg",link:"docs/chain/collator",description:n.createElement(n.Fragment,null,"Become a collator in for our Peregrine Testnet and later help decentralizing the KILT Blockchain.")},{title:"Workshop",imageUrl:"img/expert_light.svg",imageUrlDark:"img/expert_dark.svg",link:"docs/sdk/workshop/welcome",description:n.createElement(n.Fragment,null,"Explore the most fundamental features of the KILTprotocol.")},{title:"Whitepaper",imageUrl:"img/whitepaper_light.svg",imageUrlDark:"img/whitepaper_dark.svg",link:"https://www.kilt.io/wp-content/uploads/2020/01/KILT-White-Paper-v2020-Jan-15.pdf",description:n.createElement(n.Fragment,null,"Read up on the theoretical concepts behind KILT Protocol.")}]];function h(e){var t=e.imageUrl,a=e.imageUrlDark,r=e.title,i=e.description,c=e.link,u=(0,s.Z)(t),h=(0,s.Z)(a);return n.createElement("div",{className:(0,l.Z)("col col--4",m.feature)},n.createElement("a",{href:(0,s.Z)(c),className:m.featureLink},u&&n.createElement("div",{className:"text--center"},n.createElement(o.Z,{alt:r,className:m.featureImage,sources:{light:u,dark:h}})),n.createElement("h3",null,r),n.createElement("p",null,i)))}function g(){var e=(0,c.Z)().siteConfig,t=void 0===e?{}:e;return n.createElement(i.Z,{title:t.title,description:"Description will go into a meta tag in <head />"},n.createElement("header",{className:(0,l.Z)("hero hero--primary",m.heroBanner)},n.createElement("div",{className:"container"},n.createElement("h1",{className:"hero__title"},t.title),n.createElement("p",{className:"hero__subtitle"},t.tagline))),n.createElement("main",null,u&&u.length>0&&n.createElement("section",{className:m.features},n.createElement("div",{className:"container"},u.map((function(e,t){return n.createElement("div",{className:"row",key:t},e.map((function(e,a){return n.createElement(h,(0,r.Z)({key:t+"-"+a},e))})))}))))))}}}]);
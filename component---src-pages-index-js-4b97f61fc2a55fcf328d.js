(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{DxCv:function(e,t,a){"use strict";a("E5k/");var n=a("q1tI"),i=a.n(n),r=a("ap0H"),s=a("9eSz"),c=a.n(s),m=a("ma3e"),l=function(e){var t=e.description,a=e.github,n=(e.id,e.title),r=e.url,s=e.image,l=e.stack,o=e.index;return i.a.createElement("article",{className:"project"},i.a.createElement(c.a,{fluid:s.childImageSharp.fluid,className:"project-img"}),i.a.createElement("div",{className:"project-info"},i.a.createElement("span",{className:"project-number"},"0",o+1,"."),i.a.createElement("h3",null,n),i.a.createElement("p",{className:"project-desc"},t),i.a.createElement("div",{className:"project-stack"},l.map((function(e){return i.a.createElement("span",{key:e.id},e.title)}))),i.a.createElement("div",{className:"project-links"},i.a.createElement("a",{href:a},i.a.createElement(m.f,{className:"project-icon"})),i.a.createElement("a",{href:r},i.a.createElement(m.g,{className:"project-icon"})))))},o=a("Wbzz");t.a=function(e){var t=e.projects,a=e.title,n=e.showLink;return i.a.createElement("section",{className:"section projects"},i.a.createElement(r.a,{title:a}),i.a.createElement("div",{className:"section-center projects-center"},t.map((function(e,t){return i.a.createElement(l,Object.assign({key:e.id,index:t},e))}))),n&&i.a.createElement(o.a,{to:"/projects",className:"btn center-btn"},"Projects"))}},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return v}));var n=a("q1tI"),i=a.n(n),r=a("7oih"),s=a("nLSR"),c=a("9eSz"),m=a.n(c),l=a("Wbzz"),o=a("PNo/"),d=function(){var e=s.data.file.childImageSharp.fluid;return i.a.createElement("header",{className:"hero"},i.a.createElement("div",{className:"section-center hero-center"},i.a.createElement("article",{className:"hero-info"},i.a.createElement("div",null,i.a.createElement("div",{className:"underline"}),i.a.createElement("h1",null,"i'm abel"),i.a.createElement("h4",null,"JavaScript Engineer(Frontend & Backend)"),i.a.createElement(l.a,{to:"/contact",className:"btn"},"contact Me"),i.a.createElement(o.a,null))),i.a.createElement(m.a,{fluid:e,className:"hero-img"})))},p=a("ap0H"),u=a("ma3e"),h=[{id:1,icon:i.a.createElement(u.d,{className:"service-icon"}),title:"web development",text:"I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia."},{id:2,icon:i.a.createElement(u.i,{className:"service-icon"}),title:"web design",text:"I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia."},{id:3,icon:i.a.createElement(u.b,{className:"service-icon"}),title:"app design",text:"I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia."}],f=function(){return i.a.createElement("section",{className:"section bg-grey"},i.a.createElement(p.a,{title:"services"}),i.a.createElement("div",{className:"section-center services-center"},h.map((function(e){var t=e.id,a=e.icon,n=e.title,r=e.text;return i.a.createElement("article",{key:t,className:"service"},a,i.a.createElement("h4",null,n),i.a.createElement("div",{className:"underline"}),r)}))))},y=(a("pJf4"),a("Sgxp")),b=function(){var e=y.data.allStrapiJobs.nodes,t=Object(n.useState)(0),a=t[0],r=t[1],s=e[a],c=s.company,m=s.position,o=s.date,d=s.desc;return i.a.createElement("section",{className:"section jobs"},i.a.createElement(p.a,{title:"Experience"}),i.a.createElement("div",{className:"jobs-center"},i.a.createElement("div",{className:"btn-container"},e.map((function(e,t){return i.a.createElement("button",{key:e.strapiId,className:"job-btn "+(t===a&&"active-btn"),onClick:function(){return r(t)}},e.company)}))),i.a.createElement("article",{className:"job-info"},i.a.createElement("h3",null,m),i.a.createElement("h4",null,c),i.a.createElement("p",{className:"job-date"},o),d.map((function(e){return i.a.createElement("div",{key:e.id,className:"job-desc"},i.a.createElement(u.c,{className:"job-icon"}),i.a.createElement("p",null,e.name))})))),i.a.createElement(l.a,{to:"/about",className:"btn center-btn"},"more info"))},g=a("DxCv"),E=a("Rfp1"),k=a("EYWl"),v=(t.default=function(e){var t=e.data,a=t.allStrapiProjects.nodes,n=t.allStrapiBlogs.nodes;return i.a.createElement(r.a,null,i.a.createElement(k.a,{title:"Home"}),i.a.createElement(d,null),i.a.createElement(f,null),i.a.createElement(b,null),i.a.createElement(g.a,{projects:a,title:"featured Projects",showLink:!0}),i.a.createElement(E.a,{blogs:n,title:"latest articles",showLink:!0}))},"2136014379")},Rfp1:function(e,t,a){"use strict";a("E5k/");var n=a("q1tI"),i=a.n(n),r=a("ap0H"),s=a("9eSz"),c=a.n(s),m=a("Wbzz"),l=function(e){var t=e.slug,a=e.title,n=e.desc,r=e.date,s=e.id,l=e.category,o=e.image;return i.a.createElement(m.a,{to:"/blogs/"+t,key:s,className:"blog"},i.a.createElement("article",null,i.a.createElement(c.a,{fluid:o.childImageSharp.fluid,className:"blog-img"}),i.a.createElement("div",{className:"blog-card"},i.a.createElement("h4",null,a),i.a.createElement("p",null,n),i.a.createElement("div",{className:"blog-footer"},i.a.createElement("p",null,l),i.a.createElement("p",null,r)))))};t.a=function(e){var t=e.blogs,a=e.title,n=e.showLink;return i.a.createElement("section",{className:"section"},i.a.createElement(r.a,{title:a}),i.a.createElement("div",{className:"section-center blogs-center"},t.map((function(e,t){return i.a.createElement(l,Object.assign({key:e.id,index:t},e))}))),n&&i.a.createElement(m.a,{to:"/blog",className:"btn center-btn"},"Blog"))}},Sgxp:function(e){e.exports=JSON.parse('{"data":{"allStrapiJobs":{"nodes":[{"strapiId":1,"company":"Andela Ltd","date":"3rd June 2019- Present","position":"Software Engineer","desc":[{"id":1,"name":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "},{"id":2,"name":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "},{"id":3,"name":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}]},{"strapiId":2,"company":"Mookh Africa","date":"May 2018-June 2019","position":"Sr Frontend Engineer","desc":[{"id":4,"name":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "},{"id":6,"name":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "},{"id":5,"name":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}]},{"strapiId":3,"company":"Software Dynamics Ltd","date":"June 2016-Dec 2017","position":"Software Developer","desc":[{"id":7,"name":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "},{"id":8,"name":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "},{"id":9,"name":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}]}]}}}')},nLSR:function(e){e.exports=JSON.parse('{"data":{"file":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAEcElEQVQ4y32Ua2wUVRTH7+6G2MQPWnARtQaRiAJG1KgRQvwAgUiMiR+QSFpf4QMhirxS08gHE5GQGBOJNobUAEVDVih029rudtqddnber52d2e1u99Eibru2JVjLagO2u/d4Z7a72Nhwk5tzZ+49v/mfc88chP4zng+yjm1STbSyg0a1HbTL20G7HyPT20m7l3eHXXWUgPabKefcFlZHS4613QxCvoCzfqRzwOVpozzoXiPAe1YxhnuDknQevax5d2/1L4PVtetK32LQRcqLfNQmdIna6lgf/dCi/ZDpXq0Ou+xlDT+E9g7nbPwb5U1f0G2bjUH2QXS5r3FFez+/o2egcKCPwZ+GWPiY2Leo8ExdgOVRr3Ty8XB0U4W7Qkk5vm4lU1EScF6g9tDry6705feyGrQrGuiyBHEy0xEdj1gWWJoGQd2AD7U4uGkdarj4xZ1G2lFduwBFqK2vvLga2vZwBw3NrAgJgZ/TRaHICwIWZAX7/X58/txZLIgStnS9mFWk+VOcgpGVg/vkVPIVa9Tr5F/PuqrpWNcRUi5LKsR4bm6AZYHlOAfAhvrxmWMH4P0tz8GhD+rxIMNgUdVwRpbwQUG/g1I34YHItXMORMqWxdV2MStb+gdmIxwHA2EWsyyLOTJFSYL282fB//lhOPHOLti85lE40/wdmLEYViQJc7JcWqWPAIrmJrYmx71VdTzDvMgODhYZWxm7ACRwThBg0Pcj/Ny4D07s3g71rz4LXzQeBdO0QJBknFAk/KaaBGTl/3liaHz93dsPhbaTUIBAMM/zNsxWSIAicP42CJw8Dqf27IJ3X3sZWn9oASMaJUAJD5GwP9ITgOKTt9Yn809WgRRF1dE0/ZdAFDkwMsPhMBYEHno6O+GrQwdh24an4IVn1kEgEABFUTBPgElZKh6JZQElblgwnirXsCRJTiJJmD9FyZeJnSMwsIGyYkAvFYZjDfWwd+cOOPLJcQgGw2AYcQKUISmJc/szeUCpPz6zGcsSkx5E1DhAWZbXEkiBAIHnuWIqfQ3U6HVMh1Twnf4WqB4BJG2UXMivIKsZYBipGDMisM9Imeg21Dh/XfpGOWQCcuSS/L0tk0I2zTiMXJ8u5idm4LfxaZzMTuCxyQJkR/I4mR7HujGCA90hkhq+1GXFXrJ9v9ctTwWGCoUCIjl0lAo8f1iWVYjGRqEwW5rL5f8sTc/cxmMTM9hI5GB07BYO0ZE7PKeQXMp+2+dLXnfDpaPo/uQUAQiCAzYMA1G95f+ZhPyeKIrz+YlpmLo5CzN/l0qWnipSzafnL3z9TYlhZPtipizLXGOfj+i6a1HTIM6OjcXiqLu7y4GKgrAxzDAtqqrlhtOjEJMV4K76INTlB0kSacOIPG2fUzXVvXC5i1sc+aJjAcCuS3flfTDQtZzq7dnMSeJufTizJ5n7vdpl9Ii+NKwy7LAbGhqq5cQw4SUb7YXWVqRpWjnnJGWZTOae/RiZpomampoqYJddWqQCPMTZQ8rLbe/bg0D/5/svmD4TBPCqH2UAAAAASUVORK5CYII=","aspectRatio":1,"src":"/masila.dev/static/117b0af4fd9b15cc6c9a0e32f4797f1b/ee604/hero.png","srcSet":"/masila.dev/static/117b0af4fd9b15cc6c9a0e32f4797f1b/69585/hero.png 200w,\\n/masila.dev/static/117b0af4fd9b15cc6c9a0e32f4797f1b/497c6/hero.png 400w,\\n/masila.dev/static/117b0af4fd9b15cc6c9a0e32f4797f1b/ee604/hero.png 800w,\\n/masila.dev/static/117b0af4fd9b15cc6c9a0e32f4797f1b/f3583/hero.png 1200w,\\n/masila.dev/static/117b0af4fd9b15cc6c9a0e32f4797f1b/4cc43/hero.png 1220w","sizes":"(max-width: 800px) 100vw, 800px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-4b97f61fc2a55fcf328d.js.map
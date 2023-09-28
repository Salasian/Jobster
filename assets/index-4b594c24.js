import{s as h,j as e,I as pe,M as ge,F as he,a as ue,u,b as be,c as w,d as P,Q as l,e as y,f as xe,r as v,g as fe,h as je,i as ve,m as ye,k as we,l as Se,n as ke,H as Ce,o as Ne,p as G,B as Le,C as Z,X as ee,Y as te,T as re,q as Je,A as Te,t as $e,v as Oe,w as ze,x as Re,y as Fe,z as We,D as Ue,P as Be}from"./vendor-a2a80544.js";import{L as V,N as De,u as Me,a as Ae,O as Ee,B as Pe,R as Ve,b as k}from"./@react-router-a6472e25.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}})();const Ye="https://salasian.github.io/Jobster/assets/not-found-b9d8cb5b.svg",Ke=h.main`
  text-align: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }
`,He=()=>e.jsx(Ke,{className:"full-page",children:e.jsxs("div",{children:[e.jsx("img",{src:Ye,alt:"not found"}),e.jsx("h3",{children:"text"}),e.jsx("p",{children:"text"}),e.jsx(V,{to:"/",children:"back home"})]})}),qe="https://salasian.github.io/Jobster/assets/logo-7710ebb6.svg",$=()=>e.jsx("img",{src:qe,alt:"jobify",className:"logo"}),x=({type:r,name:t,value:a,handleChange:s,labelText:n})=>e.jsxs("div",{className:"form-row",children:[e.jsx("label",{htmlFor:t,className:"form-label",children:n||t}),e.jsx("input",{type:r,name:t,value:a,onChange:s,className:"form-input"})]}),L=({labelText:r,name:t,value:a,handleChange:s,list:n})=>e.jsxs("div",{className:"form-row",children:[e.jsx("label",{htmlFor:t,className:"form-label",children:r||t}),e.jsx("select",{name:t,value:a,id:t,onChange:s,className:"form-select",children:n.map((o,i)=>e.jsx("option",{value:o,children:o},i))})]}),_e=[{id:1,text:"stats",path:"/",icon:e.jsx(pe,{})},{id:2,text:"all jobs",path:"all-jobs",icon:e.jsx(ge,{})},{id:3,text:"add job",path:"add-job",icon:e.jsx(he,{})},{id:4,text:"profile",path:"profile",icon:e.jsx(ue,{})}],ae=({toggleSidebar:r})=>e.jsx("div",{className:"nav-links",children:_e.map(t=>{const{text:a,path:s,id:n,icon:o}=t;return e.jsxs(De,{to:s,className:({isActive:i})=>i?"nav-link active":"nav-link",onClick:r,end:!0,children:[e.jsx("span",{className:"icon",children:o}),a]},n)})}),Ie=h.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--white);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: var(--transition);
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--grey-500);
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: var(--transition);
    }
    .nav-link:hover {
      background: var(--grey-50);
      padding-left: 3rem;
      color: var(--grey-900);
    }
    .nav-link:hover .icon {
      color: var(--primary-500);
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
      transition: var(--transition);
    }
    .active {
      color: var(--grey-900);
    }
    .active .icon {
      color: var(--primary-500);
    }
  }
`,Qe=()=>{const{isSidebarOpen:r}=u(t=>t.user);return e.jsx(Ie,{children:e.jsx("div",{className:r?"sidebar-container ":"sidebar-container show-sidebar",children:e.jsxs("div",{className:"content",children:[e.jsx("header",{children:e.jsx($,{})}),e.jsx(ae,{})]})})})},Xe=h.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }
  .content {
    background: var(--white);
    width: var(--fluid-width);
    height: 95vh;
    border-radius: var(--borderRadius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--red-dark);
    cursor: pointer;
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--grey-500);
    padding: 1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--grey-900);
  }
  .nav-link:hover .icon {
    color: var(--primary-500);
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    transition: var(--transition);
  }
  .active {
    color: var(--grey-900);
  }
  .active .icon {
    color: var(--primary-500);
  }
`,D=r=>{localStorage.setItem("user",JSON.stringify(r))},Ge=()=>{localStorage.removeItem("user")},Y=()=>{const r=localStorage.getItem("user");return r?JSON.parse(r):null},S=be.create({baseURL:"https://jobify-prod.herokuapp.com/api/v1/toolkit"});S.interceptors.request.use(r=>{const t=Y();return t&&(r.headers.Authorization=`Bearer ${t.token}`),r});const O=(r,t)=>r.response.status===401?(t.dispatch(K()),t.rejectWithValue("Unauthorized! Logging Out...")):t.rejectWithValue(r.response.data.msg),Ze=async(r,t)=>{const{page:a,search:s,searchStatus:n,searchType:o,sort:i}=t.getState().allJobs;let c=`/jobs?status=${n}&jobType=${o}&sort=${i}&page=${a}`;s&&(c=c+`&search=${s}`);try{return(await S.get(c)).data}catch(g){return O(g,t)}},et=async(r,t)=>{try{return(await S.get("/jobs/stats")).data}catch(a){return O(a,t)}},se={search:"",searchStatus:"all",searchType:"all",sort:"latest",sortOptions:["latest","oldest","a-z","z-a"]},q={isLoading:!0,jobs:[],totalJobs:0,numOfPages:1,page:1,stats:{},monthlyApplications:[],...se},J=w("allJobs/getJobs",Ze),z=w("allJobs/showStats",et),ne=P({name:"allJobs",initialState:q,reducers:{showLoading:r=>{r.isLoading=!0},hideLoading:r=>{r.isLoading=!1},handleChange:(r,{payload:{name:t,value:a}})=>{r.page=1,r[t]=a},clearFilters:r=>({...r,...se}),changePage:(r,{payload:t})=>{r.page=t},clearAllJobsState:()=>q},extraReducers:r=>{r.addCase(J.pending,t=>{t.isLoading=!0}).addCase(J.fulfilled,(t,{payload:a})=>{t.isLoading=!1,t.jobs=a.jobs,t.numOfPages=a.numOfPages,t.totalJobs=a.totalJobs}).addCase(J.rejected,(t,{payload:a})=>{t.isLoading=!1,l.error(a)}).addCase(z.pending,t=>{t.isLoading=!0}).addCase(z.fulfilled,(t,{payload:a})=>{t.isLoading=!1,t.stats=a.defaultStats,t.monthlyApplications=a.monthlyApplications}).addCase(z.rejected,(t,{payload:a})=>{t.isLoading=!1,l.error(a)})}}),{showLoading:tt,hideLoading:rt,handleChange:_,clearFilters:at,changePage:M,clearAllJobsState:st}=ne.actions,nt=ne.reducer,it=async(r,t)=>{let a="/jobs";try{const s=await S.post(a,r);return t.dispatch(B()),s.data}catch(s){return s.response.status===401?(t.dispatch(H()),t.rejectWithValue("Unauthorized! Logging Out...")):O(s,t)}},ot=async(r,t)=>{let a="/jobs";t.dispatch(tt());try{const s=await S.delete(`${a}/${r}`);return t.dispatch(J()),s.data}catch(s){return t.dispatch(rt()),O(s,t)}},ct=async({jobId:r,job:t},a)=>{let s="/jobs";try{const n=await S.patch(`${s}/${r}`,t);return a.dispatch(B()),n.data}catch(n){return a.rejectWithValue(n.response.data.msg)}},I={isLoading:!1,position:"",company:"",jobLocation:"",jobTypeOptions:["full-time","part-time","remote","internship"],jobType:"full-time",statusOptions:["interview","declined","pending"],status:"pending",isEditing:!1,editJobId:""},R=w("job/createJob",it),E=w("job/deleteJob",ot),F=w("job/editJob",ct),ie=P({name:"job",initialState:I,reducers:{handleChange:(r,{payload:{name:t,value:a}})=>{r[t]=a},clearValues:()=>{var r;return{...I,jobLocation:((r=Y())==null?void 0:r.location)||""}},setEditJob:(r,{payload:t})=>(console.log(t),{...r,isEditing:!0,...t})},extraReducers:r=>{r.addCase(R.pending,t=>{t.isLoading=!0}).addCase(R.fulfilled,t=>{t.isLoading=!1,l.success("Job Created")}).addCase(R.rejected,(t,{payload:a})=>{t.isLoading=!1,l.error(a)}).addCase(E.fulfilled,(t,{payload:a})=>{l.success(a)}).addCase(E.rejected,(t,{payload:a})=>{l.error(a)}).addCase(F.pending,t=>{t.isLoading=!0}).addCase(F.fulfilled,t=>{t.isLoading=!1,l.success("Job Modified...")}).addCase(F.rejected,(t,{payload:a})=>{t.isLoading=!1,l.error(a)})}}),{handleChange:Q,clearValues:B,setEditJob:lt}=ie.actions,dt=ie.reducer,mt=async(r,t,a)=>{try{return(await S.post(r,t)).data}catch(s){return a.rejectWithValue(s.response.data.msg)}},pt=async(r,t,a)=>{try{return(await S.post(r,t)).data}catch(s){return a.rejectWithValue(s.response.data.msg)}},gt=async(r,t,a)=>{try{return(await S.patch(r,t)).data}catch(s){return s.response.status===401?(a.dispatch(H()),a.rejectWithValue("Unauthorized! Logging Out...")):O(s,a)}},ht=async(r,t)=>{try{return t.dispatch(H(r)),t.dispatch(st()),t.dispatch(B()),Promise.resolve()}catch{return Promise.reject()}},ut={isLoading:!1,isSidebarOpen:!1,user:Y()},W=w("user/registerUser",async(r,t)=>mt("/auth/register",r,t)),T=w("user/loginUser",async(r,t)=>pt("/auth/login",r,t)),U=w("user/updateUser",async(r,t)=>gt("/auth/updateUser",r,t)),K=w("user/clearStore",ht),oe=P({name:"user",initialState:ut,reducers:{toggleSidebar:r=>{r.isSidebarOpen=!r.isSidebarOpen},logoutUser:(r,{payload:t})=>{r.user=null,r.isSidebarOpen=!1,l.success("Logout Successful!"),Ge(),t&&l.success(t)}},extraReducers:r=>{r.addCase(W.pending,t=>{t.isLoading=!0}),r.addCase(W.fulfilled,(t,{payload:a})=>{const{user:s}=a;t.isLoading=!1,t.user=s,D(s),l.success(`Hello There ${s.name}`)}),r.addCase(W.rejected,(t,{payload:a})=>{t.isLoading=!1,l.error(a)}),r.addCase(T.pending,t=>{t.isLoading=!0}),r.addCase(T.fulfilled,(t,{payload:a})=>{const{user:s}=a;t.isLoading=!1,t.user=s,D(s),l.success(`Welcome Back ${s.name}`)}),r.addCase(T.rejected,(t,{payload:a})=>{t.isLoading=!1,l.error(a)}),r.addCase(U.pending,t=>{t.isLoading=!0}),r.addCase(U.fulfilled,(t,{payload:a})=>{const{user:s}=a;t.isLoading=!1,t.user=s,D(s),l.success("User Updated")}),r.addCase(U.rejected,(t,{payload:a})=>{t.isLoading=!1,l.error(a)}),r.addCase(K.rejected,()=>{l.error("There was an error")})}}),{toggleSidebar:ce,logoutUser:H}=oe.actions,bt=oe.reducer,xt=()=>{const{isSidebarOpen:r}=u(s=>s.user),t=y(),a=()=>{t(ce())};return e.jsx(Xe,{children:e.jsx("div",{className:r?"sidebar-container show-sidebar":"sidebar-container",children:e.jsxs("div",{className:"content",children:[e.jsx("button",{className:"close-btn",onClick:a,children:e.jsx(xe,{})}),e.jsx("header",{children:e.jsx($,{})}),e.jsx(ae,{toggleSidebar:a})]})})})},ft=h.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  background: var(--white);
  .btn-container {
    position: relative;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
  .logo-text {
    display: none;
    margin: 0;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`,jt=()=>{const[r,t]=v.useState(!1),{user:a}=u(o=>o.user),s=y(),n=()=>{s(ce())};return e.jsx(ft,{children:e.jsxs("div",{className:"nav-center",children:[e.jsx("button",{type:"button",className:"toggle-btn",onClick:()=>n(),children:e.jsx(fe,{})}),e.jsxs("div",{children:[e.jsx($,{}),e.jsx("h3",{className:"logo-text",children:"dashboard"})]}),e.jsxs("div",{className:"btn-container",children:[e.jsxs("button",{type:"button",className:"btn",onClick:()=>t(!r),children:[e.jsx(je,{}),a==null?void 0:a.name,e.jsx(ve,{})]}),e.jsx("div",{className:r?"dropdown show-dropdown":"dropdown ",children:e.jsx("button",{type:"button",className:"dropdown-btn",onClick:()=>s(K("Logout Successful...")),children:"logout"})})]})]})})},vt=h.section`
  .form {
    width: 100%;
    max-width: 100%;
  }
  .form-input,
  .form-select,
  .btn-block {
    height: 35px;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2rem;
    row-gap: 0.5rem;
  }
  h5 {
    font-weight: 700;
  }
  .btn-block {
    align-self: end;
    margin-top: 1rem;
  }
  @media (min-width: 768px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .btn-block {
      margin-top: 0;
    }
  }
`,yt=()=>{const[r,t]=v.useState(""),{isLoading:a,search:s,searchStatus:n,searchType:o,sort:i,sortOptions:c}=u(b=>b.allJobs),{jobTypeOptions:g,statusOptions:d}=u(b=>b.job),m=y(),p=b=>{const N=b.target.name,me=b.target.value;m(_({name:N,value:me}))},C=()=>{let b;return N=>{t(N.target.value),clearTimeout(b),b=setTimeout(()=>{m(_({name:N.target.name,value:N.target.value}))},1e3)}},f=b=>{b.preventDefault(),t(""),m(at())},j=v.useMemo(()=>C(),[]);return e.jsx(vt,{children:e.jsxs("form",{className:"form",children:[e.jsx("h4",{children:"search form"}),e.jsxs("div",{className:"form-center",children:[e.jsx(x,{type:"text",name:"search",value:r,handleChange:j}),e.jsx(L,{labelText:"status",name:"searchStatus",value:n,handleChange:p,list:["all",...d]}),e.jsx(L,{labelText:"type",name:"searchType",value:o,handleChange:p,list:["all",...g]}),e.jsx(L,{name:"sort",value:i,handleChange:p,list:c}),e.jsx("button",{className:"btn btn-block btn-danger",disabled:a,onClick:f,children:"clear filters"})]})]})})},wt=h.article`
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);

  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    h5 {
      letter-spacing: 0;
    }
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--borderRadius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;
  }
  .info {
    h5 {
      margin-bottom: 0.25rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: var(--grey-400);
      letter-spacing: var(--letterSpacing);
    }
  }
  .pending {
    background: #fcefc7;
    color: #e9b949;
  }
  .interview {
    background: #e0e8f9;
    color: #647acb;
  }
  .declined {
    color: #d66a6a;
    background: #ffeeee;
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .status {
    border-radius: var(--borderRadius);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: center;
    width: 100px;
    height: 30px;
    margin-top: 0.5rem;
  }
  footer {
    margin-top: 1rem;
  }
  .edit-btn,
  .delete-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 30px;
  }
  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
    margin-right: 0.5rem;
  }
  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
  }
  &:hover .actions {
    visibility: visible;
  }
`,St=h.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;

  .icon {
    font-size: 1rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    svg {
      color: var(--grey-400);
    }
  }
  .text {
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }
`,A=({icon:r,text:t})=>e.jsxs(St,{children:[e.jsx("span",{className:"icon",children:r}),e.jsx("span",{className:"text",children:t})]}),kt=({_id:r,position:t,company:a,jobLocation:s,jobType:n,createdAt:o,status:i})=>{const c=y(),g=ye(o).format("MMM Do, YYYY");return e.jsxs(wt,{children:[e.jsxs("header",{children:[e.jsx("div",{className:"main-icon",children:a.charAt(0)}),e.jsxs("div",{className:"info",children:[e.jsx("h5",{children:t}),e.jsx("p",{children:a})]})]}),e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:"content-center",children:[e.jsx(A,{icon:e.jsx(we,{}),text:s}),e.jsx(A,{icon:e.jsx(Se,{}),text:g}),e.jsx(A,{icon:e.jsx(ke,{}),text:n}),e.jsx("div",{className:`status ${i}`,children:i})]}),e.jsx("footer",{children:e.jsxs("div",{className:"actions",children:[e.jsx(V,{to:"/add-job",className:"btn edit-btn",onClick:()=>{c(lt({editJobId:r,position:t,company:a,jobLocation:s,jobType:n,status:i}))},children:"Edit"}),e.jsx("button",{type:"button",className:"btn delete-btn",onClick:()=>{c(E(r))},children:"Delete"})]})})]})]})},X=h.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 992px) {
    .jobs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`,le=({center:r})=>e.jsx("div",{className:r?"loading loading-center":"loading"}),Ct=h.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1rem;
  .btn-container {
    background: var(--primary-100);
    border-radius: var(--borderRadius);
  }
  .pageBtn {
    background: transparent;
    border-color: transparent;
    width: 50px;
    height: 40px;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--primary-500);
    transition: var(--transition);
    border-radius: var(--borderRadius);
    cursor: pointer;
  }
  .active {
    background: var(--primary-500);
    color: var(--white);
  }
  .prev-btn,
  .next-btn {
    width: 100px;
    height: 40px;
    background: var(--white);
    border-color: transparent;
    border-radius: var(--borderRadius);
    color: var(--primary-500);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: var(--transition);
  }
  .prev-btn:hover,
  .next-btn:hover {
    background: var(--primary-500);
    color: var(--white);
  }
`,Nt=()=>{const{numOfPages:r,page:t}=u(i=>i.allJobs),a=y(),s=Array.from({length:r},(i,c)=>c+1),n=()=>{let i=t+1;i>r&&(i=1),a(M(i))},o=()=>{let i=t-1;i<1&&(i=r),a(M(i))};return e.jsxs(Ct,{children:[e.jsxs("button",{className:"prev-btn",onClick:o,children:[e.jsx(Ce,{}),"prev"]}),e.jsx("div",{className:"btn-container",children:s.map(i=>e.jsx("button",{type:"button",className:i===t?"pageBtn active":"pageBtn",onClick:()=>a(M(i)),children:i},i))}),e.jsxs("button",{className:"next-btn",onClick:n,children:["next",e.jsx(Ne,{})]})]})},Lt=()=>{const{jobs:r,isLoading:t,page:a,totalJobs:s,numOfPages:n,search:o,searchStatus:i,searchType:c,sort:g}=u(m=>m.allJobs),d=y();return v.useEffect(()=>{d(J())},[a,o,i,c,g]),t?e.jsx(le,{center:!0}):r.length===0?e.jsx(X,{children:e.jsx("h2",{children:"No jobs to display..."})}):e.jsxs(X,{children:[e.jsxs("h5",{children:[s," job",r.length>1&&"s"," found"]}),e.jsx("div",{className:"jobs",children:r.map(m=>e.jsx(kt,{...m},m._id))}),n>1&&e.jsx(Nt,{})]})},Jt=({data:r})=>e.jsx(G,{width:"100%",height:300,children:e.jsxs(Le,{data:r,margin:{top:50},children:[e.jsx(Z,{strokeDasharray:"3 3 "}),e.jsx(ee,{dataKey:"date"}),e.jsx(te,{allowDecimals:!1}),e.jsx(re,{}),e.jsx(Je,{dataKey:"count",fill:"#3b82f6",barSize:75})]})}),Tt=({data:r})=>e.jsx(G,{width:"100%",height:300,children:e.jsxs(Te,{data:r,margin:{top:50},children:[e.jsx(Z,{strokeDasharray:"3 3"}),e.jsx(ee,{dataKey:"date"}),e.jsx(te,{allowDecimals:!1}),e.jsx(re,{}),e.jsx($e,{type:"monotone",dataKey:"count",stroke:"#1e3a8a",fill:"#3b82f6"})]})}),$t=h.section`
  margin-top: 4rem;
  text-align: center;
  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: var(--primary-500);
    font-size: 1.25rem;
    cursor: pointer;
  }
  h4 {
    text-align: center;
    margin-bottom: 0.75rem;
  }
`,Ot=()=>{const[r,t]=v.useState(!0),{monthlyApplications:a}=u(s=>s.allJobs);return e.jsxs($t,{children:[e.jsx("h4",{children:"Monthly Applications"}),e.jsx("button",{type:"button",onClick:()=>t(!r),children:r?"Area Chart":"Bar Chart"}),r?e.jsx(Jt,{data:a}):e.jsx(Tt,{data:a})]})},zt=h.article`
  padding: 2rem;
  background: var(--white);
  border-radius: var(--borderRadius);
  border-bottom: 5px solid ${r=>r.color};
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .count {
    display: block;
    font-weight: 700;
    font-size: 50px;
    color: ${r=>r.color};
  }
  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: left;
    margin-top: 0.5rem;
  }
  .icon {
    width: 70px;
    height: 60px;
    background: ${r=>r.bcg};
    border-radius: var(--borderRadius);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 2rem;
      color: ${r=>r.color};
    }
  }
`,Rt=({count:r,title:t,icon:a,color:s,bcg:n})=>e.jsxs(zt,{color:s,bcg:n,children:[e.jsxs("header",{children:[e.jsx("span",{className:"count",children:r}),e.jsx("span",{className:"icon",children:a})]}),e.jsx("h5",{className:"title",children:t})]}),Ft=h.section`
  display: grid;
  row-gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
  }
`,Wt=()=>{const{stats:r}=u(a=>a.allJobs),t=[{title:"pending applications",count:r.pending||0,icon:e.jsx(Oe,{}),color:"#e9b949",bcg:"#fcefc7"},{title:"interviews scheduled",count:r.interview||0,icon:e.jsx(ze,{}),color:"#647acb",bcg:"#e0e8f9"},{title:"jobs declined",count:r.declined||0,icon:e.jsx(Re,{}),color:"#d66a6a",bcg:"#ffeeee"}];return e.jsx(Ft,{children:t.map((a,s)=>e.jsx(Rt,{...a},s))})},Ut=h.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`,Bt={name:"",email:"",password:"",isMember:!0};function Dt(){const r=y(),t=Me(),{isLoading:a,user:s}=u(d=>d.user),[n,o]=v.useState(Bt),i=d=>{const m=d.target.name,p=d.target.value;o({...n,[m]:p})},c=()=>{o({...n,isMember:!n.isMember})},g=d=>{d.preventDefault();const{name:m,email:p,password:C,isMember:f}=n;if(!p||!C||!f&&!m){l.error("Please Fill Out All Fields");return}if(f){r(T({email:p,password:C}));return}r(W({name:m,email:p,password:C}))};return v.useEffect(()=>{s&&setTimeout(()=>{t("/")},3e3)},[s,t]),e.jsx(Ut,{className:"full-page",children:e.jsxs("form",{className:"form",onSubmit:g,children:[e.jsx($,{}),e.jsx("h3",{children:n.isMember?"Login":"Register"}),!n.isMember&&e.jsx(x,{type:"text",name:"name",value:n.name,handleChange:i}),e.jsx(x,{type:"email",name:"email",value:n.email,handleChange:i}),e.jsx(x,{type:"password",name:"password",value:n.password,handleChange:i}),e.jsx("button",{type:"submit",className:"btn btn-block",disabled:a,children:a?"Loading...":"submit"}),e.jsx("button",{type:"button",className:"btn btn-block btn-hipster",disabled:a,onClick:()=>{r(T({email:"testUser@test.com",password:"secret"}))},children:a?"loading...":"demo"}),e.jsxs("p",{children:[n.isMember?"Not a member yet?":"Already a member?",e.jsx("button",{type:"button",onClick:c,className:"member-btn",children:n.isMember?"Register":"Login"})]})]})})}const Mt="https://salasian.github.io/Jobster/assets/main-618999f2.svg",At=h.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`,Et=()=>e.jsxs(At,{children:[e.jsx("nav",{children:e.jsx($,{})}),e.jsxs("div",{className:"container page",children:[e.jsxs("div",{className:"info",children:[e.jsxs("h1",{children:["job ",e.jsx("span",{children:"tracking"})," app"]}),e.jsxs("p",{children:["Messenger bag sustainable single-origin coffee, artisan before they sold out green juice adaptogen activated charcoal. Tilde yuccie meh mustache, kombucha ennui pickled enamel pin leggings. Taxidermy meh la croix praxis migas dreamcatcher."," "]}),e.jsx(V,{to:"/register",className:"btn btn-hero",children:"Login / Register"})]}),e.jsx("img",{src:Mt,alt:"job hunt",className:"img main-img"})]})]}),Pt=({children:r})=>{const{user:t}=u(a=>a.user);return t?r:e.jsx(Ae,{to:"/landing"})};const de=h.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  h3 {
    margin-top: 0;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`,Vt=()=>{const{user:r}=u(j=>j.user),{isLoading:t,position:a,company:s,jobLocation:n,jobType:o,jobTypeOptions:i,status:c,statusOptions:g,isEditing:d,editJobId:m}=u(j=>j.job),p=y(),C=j=>{if(j.preventDefault(),!a||!s||!n){l.error("Please Fill Out All Fields");return}if(d){p(F({jobId:m,job:{position:a,company:s,jobLocation:n,jobType:o,status:c}}));return}p(R({position:a,company:s,jobLocation:n,status:c}))},f=j=>{const b=j.target.name,N=j.target.value;p(Q({name:b,value:N}))};return v.useEffect(()=>{d||p(Q({name:"jobLocation",value:r.location}))},[]),e.jsxs(de,{children:[" ",e.jsxs("form",{className:"form",children:[e.jsx("h3",{children:d?"edit job":"add job"}),e.jsxs("div",{className:"form-center",children:[e.jsx(x,{type:"text",name:"position",value:a,handleChange:f}),e.jsx(x,{type:"text",name:"company",value:s,handleChange:f}),e.jsx(x,{name:"jobLocation",type:"text",labelText:"job location",value:n,handleChange:f}),e.jsx(L,{name:"status",value:c,labelText:"status",handleChange:f,list:g}),e.jsx(L,{name:"jobType",labelText:"job type",value:o,handleChange:f,list:i}),e.jsxs("div",{className:"btn-container",children:[e.jsx("button",{type:"button",className:"btn btn-block clear-btn",onClick:()=>p(B()),children:"clear"}),e.jsx("button",{type:"submit",className:"btn btn-block submit-btn",onClick:C,disabled:t,children:"submit"})]})]})]})]})},Yt=()=>e.jsxs(e.Fragment,{children:[e.jsx(yt,{}),e.jsx(Lt,{})]}),Kt=()=>{const{isLoading:r,user:t}=u(c=>c.user),a=y(),[s,n]=v.useState({name:(t==null?void 0:t.name)||"",email:(t==null?void 0:t.email)||"",lastName:(t==null?void 0:t.lastName)||"",location:(t==null?void 0:t.location)||""}),o=c=>{c.preventDefault();const{name:g,email:d,lastName:m,location:p}=s;if(!g||!d||!m||!p){l.error("Please Fill Out All Fields");return}a(U(s))},i=c=>{const g=c.target.name,d=c.target.value;n({...s,[g]:d})};return e.jsx(de,{children:e.jsxs("form",{className:"form",onSubmit:o,children:[e.jsx("h3",{children:"profile"}),e.jsxs("div",{className:"form-center",children:[e.jsx(x,{type:"text",name:"name",value:s.name,handleChange:i}),e.jsx(x,{type:"text",labelText:"last name",name:"lastName",value:s.lastName,handleChange:i}),e.jsx(x,{type:"email",name:"email",value:s.email,handleChange:i}),e.jsx(x,{type:"text",name:"location",value:s.location,handleChange:i}),e.jsx("button",{className:"btn btn-block",type:"submit",disabled:r,children:r?"Please Wait...":"save changes"})]})]})})},Ht=h.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`,qt=()=>e.jsx("div",{children:e.jsx(Ht,{children:e.jsxs("main",{className:"dashboard",children:[e.jsx(xt,{}),e.jsx(Qe,{}),e.jsxs("div",{children:[e.jsx(jt,{}),e.jsx("div",{className:"dashboard-page",children:e.jsx(Ee,{})})]})]})})}),_t=()=>{const{isLoading:r,monthlyApplications:t}=u(s=>s.allJobs),a=y();return v.useEffect(()=>{a(z())},[]),r?e.jsx(le,{center:!0}):e.jsxs(e.Fragment,{children:[e.jsx(Wt,{}),t.length>0&&e.jsx(Ot,{})]})};function It(){return e.jsxs(Pe,{children:[e.jsxs(Ve,{children:[e.jsxs(k,{path:"/",element:e.jsx(Pt,{children:e.jsx(qt,{})}),children:[e.jsx(k,{index:!0,element:e.jsx(_t,{})}),e.jsx(k,{path:"all-jobs",element:e.jsx(Yt,{})}),e.jsx(k,{path:"add-job",element:e.jsx(Vt,{})}),e.jsx(k,{path:"profile",element:e.jsx(Kt,{})})]}),e.jsx(k,{path:"landing",element:e.jsx(Et,{})}),e.jsx(k,{path:"register",element:e.jsx(Dt,{})}),e.jsx(k,{path:"*",element:e.jsx(He,{})})]}),e.jsx(Fe,{position:"top-center"})]})}const Qt=We({reducer:{user:bt,job:dt,allJobs:nt}}),Xt=document.getElementById("root"),Gt=Ue(Xt);Gt.render(e.jsx(Be,{store:Qt,children:e.jsx(It,{tab:"home"})}));

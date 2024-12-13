"use strict";(self.webpackChunkDishDiaries=self.webpackChunkDishDiaries||[]).push([[301],{9301:(h,r,i)=>{i.r(r),i.d(r,{RecipeDetailsModule:()=>d});var a=i(177),s=i(6448),n=i(540),c=i(7429);function l(t,f){if(1&t&&(n.j41(0,"div",1)(1,"div",2),n.nrm(2,"img",3),n.k0s(),n.j41(3,"div",4)(4,"ul")(5,"li"),n.nrm(6,"i",5),n.k0s(),n.j41(7,"li"),n.nrm(8,"i",6),n.k0s(),n.j41(9,"li"),n.nrm(10,"i",7),n.k0s(),n.j41(11,"li"),n.nrm(12,"i",8),n.k0s(),n.j41(13,"li"),n.nrm(14,"i",9),n.k0s()(),n.j41(15,"div",10)(16,"h3"),n.EFF(17),n.k0s(),n.j41(18,"p"),n.EFF(19),n.k0s(),n.j41(20,"div",11)(21,"p"),n.EFF(22),n.k0s(),n.nrm(23,"i",12),n.k0s()(),n.j41(24,"div",13)(25,"button",14),n.nrm(26,"i",15),n.EFF(27,"Ingredients"),n.k0s(),n.j41(28,"button",16),n.nrm(29,"i",17),n.EFF(30,"Rating"),n.k0s()()()()),2&t){const e=f.ngIf;n.R7$(2),n.FS9("src",e.bgImage,n.B4B),n.R7$(15),n.JRh(e.name),n.R7$(2),n.JRh(e.recipe),n.R7$(3),n.SpI("",e.mins,"mins")}}const g=[{path:"",component:(()=>{class t{constructor(e,o){this.route=e,this.getRecipe=o,console.log("Recipe Details Component Initialized")}ngOnInit(){const e=this.route.snapshot.paramMap.get("id");console.log(e),e&&(this.recipeDetails$=this.getRecipe.getRecipesById(e))}static#n=this.\u0275fac=function(o){return new(o||t)(n.rXU(s.nX),n.rXU(c.K))};static#t=this.\u0275cmp=n.VBU({type:t,selectors:[["app-recipe-details"]],decls:5,vars:3,consts:[["class","recipe-container",4,"ngIf"],[1,"recipe-container"],["appHoverEffect","",1,"recipe-img"],["alt","",3,"src"],[1,"recipe-info"],[1,"fa-solid","fa-seedling"],[1,"fa-solid","fa-pepper-hot"],[1,"fa-solid","fa-shrimp"],[1,"fa-solid","fa-champagne-glasses"],[1,"fa-solid","fa-bowl-rice"],[1,"info"],[1,"like"],[1,"fa-regular","fa-heart"],[1,"more-details"],["routerLink","ingredients"],[1,"fa-solid","fa-utensils"],["routerLink","ratings"],[1,"fa-solid","fa-star"]],template:function(o,m){1&o&&(n.j41(0,"h1"),n.EFF(1,"Recipe"),n.k0s(),n.DNE(2,l,31,4,"div",0),n.nI1(3,"async"),n.nrm(4,"router-outlet")),2&o&&(n.R7$(2),n.Y8G("ngIf",n.bMT(3,1,m.recipeDetails$)))},dependencies:[a.bT,s.n3,s.Wk,a.Jj],styles:['h1[_ngcontent-%COMP%]{font-size:48px;font-weight:600;margin:20px 0;text-align:center}.recipe-container[_ngcontent-%COMP%]{color:#000;display:flex;flex-direction:column;align-items:center;margin:20px 0}ul[_ngcontent-%COMP%]{margin-bottom:20px;text-align:center}ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{display:inline-block;margin-right:30px;color:#143d01;transition:transform .3s ease,color .3s ease}ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:hover{transform:translateY(-10px) scale(1.1);color:#7a1}.recipe-img[_ngcontent-%COMP%]{width:100%;height:300px;overflow:hidden;border-radius:20px}.recipe-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.recipe-info[_ngcontent-%COMP%]{padding:30px 30px 40px;background-color:#fff;border-radius:30px;box-shadow:#959da533 0 8px 24px}.info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}.info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;transition:.2s}.info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover{transform:translate(10px)}.like[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;color:#143d01;font-weight:600}.like[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#143d01;transition:transform .6s ease,color .3s ease}.like[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{transform:translateY(-10px) scale(1.2) rotate(360deg);color:#7a1}.like[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover:before{content:"\\f004";font-weight:900}.like[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:before{content:"\\f004";font-weight:400}.more-details[_ngcontent-%COMP%]{display:flex;margin-top:15px;gap:10px}.more-details[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;font-size:10px;padding:10px 12px;border-radius:30px;background-color:#7a1;color:#fff;transition:.2s;font-weight:600}.more-details[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{transform:translateY(-5px)}.more-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px;transition:.3s}.more-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{transform:rotate(360deg) scale(1.2)}@media (max-width: 480px){ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{display:none}}']})}return t})(),children:[{path:"ingredients",loadChildren:()=>i.e(619).then(i.bind(i,4619)).then(t=>t.IngredientsModule)},{path:"ratings",loadChildren:()=>i.e(256).then(i.bind(i,3256)).then(t=>t.RatingModule)}]}];let p=(()=>{class t{static#n=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275mod=n.$C({type:t});static#e=this.\u0275inj=n.G2t({imports:[s.iI.forChild(g),s.iI]})}return t})(),d=(()=>{class t{constructor(){console.log("Recipe Details Page")}static#n=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275mod=n.$C({type:t});static#e=this.\u0275inj=n.G2t({imports:[a.MD,p]})}return t})()}}]);
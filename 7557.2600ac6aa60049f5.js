"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7557],{7557:(L,g,a)=>{a.r(g),a.d(g,{SubDealerListPageModule:()=>k});var d=a(6814),m=a(6223),l=a(878),u=a(6800),h=a(5861),p=a(9421),P=a(3637),e=a(9212),f=a(6530),x=a(3864),v=a(8378);function S(r,c){if(1&r){const o=e.EpF();e.TgZ(0,"ion-item",4)(1,"ion-avatar",5),e.NdJ("click",function(){const i=e.CHM(o).$implicit,n=e.oxw();return e.KtG(n.userSelected(i))}),e._UZ(2,"img",6),e.qZA(),e.TgZ(3,"ion-label",7),e.NdJ("click",function(){const i=e.CHM(o).$implicit,n=e.oxw();return e.KtG(n.userSelected(i))}),e.TgZ(4,"h2"),e._uU(5),e.qZA(),e.TgZ(6,"h3"),e._uU(7),e.qZA(),e.TgZ(8,"p"),e._uU(9),e.qZA()(),e._UZ(10,"img",8),e.TgZ(11,"ion-icon",9),e.NdJ("click",function(){const i=e.CHM(o).$implicit,n=e.oxw();return e.KtG(n.EditButtonClicked(i))}),e.qZA()()}if(2&r){const o=c.$implicit;e.xp6(2),e.Q6J("src",o.icon,e.LSH),e.xp6(3),e.hij("",o.name," "),e.xp6(2),e.Oqu(o.userRole),e.xp6(2),e.AsE("",o.email," - ",o.phoneNumber,""),e.xp6(),e.Q6J("src",o.statusIcon,e.LSH)}}const C=[{path:"",component:(()=>{var r;class c{constructor(t,s,i,n){this.userService=t,this.loaderService=s,this.router=i,this.localStorageService=n,this.skip=0,this.totalRecords=-1,this.totalPages=-1,this.countPerPage=10,this.limit=this.countPerPage,this.currentPage=1,this.pages=new Array,this.showPagination=!1,this.editUserIcon="",this.searchToggle=!1,this.searchText="",this.allowNext=!1,this.allowPrev=!1,this.allowFirst=!1,this.allowLast=!1,this.message="This modal example uses triggers to automatically open a modal when the button is clicked.",this.users=new Array,this.router.events.forEach(_=>{})}ngOnInit(){this.loggedInUser=this.localStorageService.StoredPreference.LoggedInUser,this.loadusers()}loadusers(){var t=this;this.loaderService.customLoader("Loading Users...",5e3),""!==this.searchText?this.userService.listBykeyword(this.searchText,this.skip,this.limit,function(){var s=(0,h.Z)(function*(i){t.handleResponse(i),t.loaderService.dismissLoader()});return function(i){return s.apply(this,arguments)}}(),()=>{this.loaderService.dismissLoader()}):this.userService.listbyRole(P.K.ROLE_SUB_DEALDER,!0,this.skip,this.limit,function(){var s=(0,h.Z)(function*(i){t.handleResponse(i),t.loaderService.dismissLoader()});return function(i){return s.apply(this,arguments)}}(),()=>{this.loaderService.dismissLoader()})}handleResponse(t){this.users=new Array,t.data.Items.length>0&&t.data.Items.forEach(s=>{let i=new p.n(s);(i.userName!==this.loggedInUser.userName||i.email!==this.loggedInUser.email)&&(i.icon="/assets/icon/"+s.userRole+".png",this.users.push(i))})}handleRefresh(t){var s=this;""!==this.searchText?this.userService.listBykeyword(this.searchText,this.skip,this.limit,function(){var i=(0,h.Z)(function*(n){s.handleResponse(n),t.target.complete()});return function(n){return i.apply(this,arguments)}}(),()=>{t.target.complete()}):this.userService.list(this.skip,this.limit,function(){var i=(0,h.Z)(function*(n){s.handleResponse(n),t.target.complete()});return function(n){return i.apply(this,arguments)}}(),()=>{t.target.complete()})}ClearTextButtonClicked(){this.searchText="",this.skip=0,this.currentPage=1,this.loadusers()}SearchToggleButtonClicked(){this.searchToggle=!this.searchToggle}FilterButtonClicked(){}SearchTextButtonClicked(){this.skip=0,this.currentPage=1,""!=this.searchText&&this.loadusers()}userSelected(t){this.userService.selectedUser=t;let s={queryParams:{Id:t.id,ts:(new Date).getMilliseconds()}};this.router.navigate(["home/view-sub-dealer"],s)}EditButtonClicked(t){const s={queryParams:{Id:t.id,ts:(new Date).getMilliseconds()}};this.router.navigate(["home/update-sub-dealer"],s)}AddUserButtonClicked(){const t={queryParams:{ts:(new Date).getMilliseconds()}};this.router.navigate(["home/create-sub-dealer"],t)}cancel(){this.modal.dismiss(null,"cancel")}confirm(){this.modal.dismiss(this.name,"confirm")}onWillDismiss(t){"confirm"===t.detail.role&&(this.message=`Hello, ${t.detail.data}!`)}FirstClicked(){this.currentPage=1,this.limit=this.countPerPage,this.skip=this.countPerPage*(this.currentPage-1),this.loadusers()}PrevClicked(){this.currentPage--,this.limit=this.countPerPage,this.skip=this.countPerPage*(this.currentPage-1),this.loadusers()}NextClicked(){this.currentPage++,this.limit=this.countPerPage,this.skip=this.countPerPage*(this.currentPage-1),this.loadusers()}LastClicked(){this.currentPage=this.totalPages,this.limit=this.countPerPage,this.skip=this.countPerPage*(this.currentPage-1),this.loadusers()}PageClicked(t){this.currentPage=t,this.limit=this.countPerPage,this.skip=this.countPerPage*(this.currentPage-1),this.loadusers()}}return(r=c).\u0275fac=function(t){return new(t||r)(e.Y36(f.K),e.Y36(x.D),e.Y36(u.F0),e.Y36(v.n))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-sub-dealer-list"]],viewQuery:function(t,s){if(1&t&&e.Gf(l.ki,5),2&t){let i;e.iGM(i=e.CRH())&&(s.modal=i.first)}},decls:8,vars:4,consts:[["slot","fixed",3,"pullFactor","pullMin","pullMax","ionRefresh"],[1,"user-results"],["class","user-result-cell",4,"ngFor","ngForOf"],[1,"open-space"],[1,"user-result-cell"],["slot","start",3,"click"],["alt","User",3,"src"],[3,"click"],["slot","end",1,"status-icon",3,"src"],["name","create-sharp","slot","end",3,"click"]],template:function(t,s){1&t&&(e.TgZ(0,"ion-content")(1,"ion-refresher",0),e.NdJ("ionRefresh",function(n){return s.handleRefresh(n)}),e._UZ(2,"ion-refresher-content"),e.qZA(),e.TgZ(3,"ion-list",1),e.YNc(4,S,12,6,"ion-item",2),e.qZA(),e.TgZ(5,"ion-grid")(6,"ion-row"),e._UZ(7,"ion-col",3),e.qZA()()()),2&t&&(e.xp6(),e.Q6J("pullFactor",.5)("pullMin",100)("pullMax",200),e.xp6(3),e.Q6J("ngForOf",s.users))},dependencies:[d.sg,l.BJ,l.wI,l.W2,l.jY,l.gu,l.Ie,l.Q$,l.q_,l.nJ,l.Wo,l.Nd],styles:["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--background: url(/assets/bg20.JPG) 0 0/100% 100% no-repeat;background-size:cover}.toolbar-backgorund[_ngcontent-%COMP%]{color:#000}.filter-search-buttons[_ngcontent-%COMP%]{text-align:center}ion-note[_ngcontent-%COMP%]{display:inline-block;font-size:16px;color:#000}ion-item.selected[_ngcontent-%COMP%]{color:#000}ion-card[_ngcontent-%COMP%]{color:#2c1d1d;background-color:#7fffd4;padding:0;margin:0;border-radius:10px}ion-card-content[_ngcontent-%COMP%]{color:#130d0d}.user-results[_ngcontent-%COMP%]{background:transparent}.user-results-list-header[_ngcontent-%COMP%]{background-color:#3da7a7}.user-result-cell[_ngcontent-%COMP%]{margin-top:10px;border-bottom-width:1px;border-bottom-color:#000;border-bottom-style:groove}.list-image[_ngcontent-%COMP%]{font-size:50px;color:#000}.status-icon[_ngcontent-%COMP%]{width:20px;height:20px}.search-icon[_ngcontent-%COMP%]{width:25px;height:25px}.search-text[_ngcontent-%COMP%]{font-size:x-large;color:gray}.search-text-field[_ngcontent-%COMP%]{font-size:larger;color:gray}.pagination-area[_ngcontent-%COMP%]{position:fixed;left:0;bottom:0;right:0;background-color:gray;height:45px;margin-bottom:0}.pagination-button[_ngcontent-%COMP%]{border-width:1px;border-color:#3e2c2c;color:#fff;font-size:larger;font-weight:800;border-style:solid;text-align:center}.selected[_ngcontent-%COMP%]{background-color:#e9c0c0;color:#645858}.open-space[_ngcontent-%COMP%]{margin-bottom:50px}"]}),c})()}];let b=(()=>{var r;class c{}return(r=c).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[u.Bz.forChild(C),u.Bz]}),c})();var M=a(9864);let k=(()=>{var r;class c{}return(r=c).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[d.ez,m.u5,l.Pc,M.aw.forChild(),b]}),c})()}}]);
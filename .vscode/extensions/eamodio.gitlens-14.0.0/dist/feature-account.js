exports.id=809,exports.ids=[809],exports.modules={420:(i,t,s)=>{s.d(t,{AccountWebviewProvider:()=>AccountWebviewProvider});var e=s(9496),o=s(8388),n=s(9529),a=s(9796);const r=new(s(5798).jH)("subscription/didChange");class AccountWebviewProvider{constructor(i,t){this.container=i,this.host=t,this._validateSubscriptionDebounced=void 0,this._disposable=e.Disposable.from(this.container.subscription.onDidChange(this.onSubscriptionChanged,this))}dispose(){this._disposable.dispose()}onSubscriptionChanged(i){this.notifyDidChangeSubscription(i.current)}registerCommands(){return[(0,n.xR)(`${this.host.id}.refresh`,(()=>this.host.refresh(!0)),this)]}includeBootstrap(){return this.getState()}onReloaded(){this.notifyDidChangeSubscription()}onVisibilityChanged(i){i?queueMicrotask((()=>{this.validateSubscription()})):this._validateSubscriptionDebounced?.cancel()}onWindowFocusChanged(i){i&&this.host.visible?queueMicrotask((()=>{this.validateSubscription()})):this._validateSubscriptionDebounced?.cancel()}async getRepoVisibility(){return await this.container.git.visibility()}async getSubscription(i){const t=i??await this.container.subscription.getSubscription(!0);let s;return s=t.account?.email?(0,o.GV)(t.account.email,34).toString():`${this.host.getWebRoot()??""}/media/gitlens-logo.webp`,{subscription:t,avatar:s}}async getState(i){const t=await this.getSubscription(i);return{timestamp:Date.now(),webroot:this.host.getWebRoot(),subscription:t.subscription,avatar:t.avatar}}notifyDidChangeSubscription(i){return e.window.withProgress({location:{viewId:this.host.id}},(async()=>{const t=await this.getSubscription(i);return this.host.notify(r,{...t})}))}async validateSubscription(){null==this._validateSubscriptionDebounced&&(this._validateSubscriptionDebounced=(0,a.Ds)(this.validateSubscriptionCore,1e3)),await this._validateSubscriptionDebounced()}async validateSubscriptionCore(){if(null==this._validating){this._validating=this.container.subscription.validate();try{await this._validating}finally{this._validating=void 0}}}}}};
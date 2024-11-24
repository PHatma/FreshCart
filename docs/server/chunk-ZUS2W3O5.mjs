import './polyfills.server.mjs';
import{a}from"./chunk-URVFTESO.mjs";import{t as l}from"./chunk-5K4QWS3Q.mjs";import{R as c,X as p}from"./chunk-S4W2THA2.mjs";var s=class extends Error{};s.prototype.name="InvalidTokenError";function u(r){return decodeURIComponent(atob(r).replace(/(.)/g,(t,o)=>{let e=o.charCodeAt(0).toString(16).toUpperCase();return e.length<2&&(e="0"+e),"%"+e}))}function f(r){let t=r.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return u(t)}catch{return atob(t)}}function d(r,t){if(typeof r!="string")throw new s("Invalid token specified: must be a string");t||(t={});let o=t.header===!0?0:1,e=r.split(".")[o];if(typeof e!="string")throw new s(`Invalid token specified: missing part #${o+1}`);let i;try{i=f(e)}catch(n){throw new s(`Invalid token specified: invalid base64 for part #${o+1} (${n.message})`)}try{return JSON.parse(i)}catch(n){throw new s(`Invalid token specified: invalid json for part #${o+1} (${n.message})`)}}var y=(()=>{let t=class t{constructor(){this._HttpClient=p(l),this.userData=""}setRegisterForm(e){return this._HttpClient.post(`${a.baseURL}/api/v1/auth/signup`,e)}setLoginFrom(e){return this._HttpClient.post(`${a.baseURL}/api/v1/auth/signin`,e)}saveUserData(){localStorage.getItem("userToken")!==null&&(this.userData=d(localStorage.getItem("userToken")))}setVerifiyEmail(e){return this._HttpClient.post(`${a.baseURL}/api/v1/auth/forgotPasswords`,e)}setVerifyCode(e){return this._HttpClient.post(`${a.baseURL}/api/v1/auth/verifyResetCode`,e)}setResetPassword(e){return this._HttpClient.put(`${a.baseURL}/api/v1/auth/resetPassword`,e)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{y as a};
import './polyfills.server.mjs';
import{a as s}from"./chunk-URVFTESO.mjs";import{t as p}from"./chunk-5K4QWS3Q.mjs";import{R as o,X as n}from"./chunk-S4W2THA2.mjs";var u=(()=>{let t=class t{constructor(){this._HttpClient=n(p)}checkOutCart(r,e){return this._HttpClient.post(`${s.baseURL}/api/v1/orders/checkout-session/${r}?url=${s.serverURL}`,{shippingAddress:e})}orderCash(r,e){return this._HttpClient.post(`${s.baseURL}/api/v1/orders/${r}`,{shippingAddress:e})}allOrders(r){return this._HttpClient.get(`${s.baseURL}/api/v1/orders/user/${r}`)}};t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{u as a};
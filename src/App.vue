<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
:root {
  --violet: #7d25a9;
  --coral: #FF7F50FF;
  --white: #fff;
  --gray: #808080FF;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 20px;
  min-width: 100vw;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-image: linear-gradient(90deg, var(--violet), var(--coral));
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: var(--white);
}
body {
  margin: 0;
  overflow-x: hidden;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
.btn:hover {
  background-color: var(--white);
  box-shadow: 1px 1px 10px var(--violet);
}
.btn:active {
  box-shadow: 1px 1px 10px var(--gray);
}

.btn {
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  position: relative;
}
.btn svg,
.btn svg {
  width: 20px;
  height: 20px;
}

.checkbox:checked,
.checkbox:not(:checked){
  position: absolute;
  left:-9999px;
}
.checkbox:checked + label,
.checkbox:not(:checked) + label{
  position: relative;
  padding-left: 35px;
  cursor:pointer;
}
.checkbox:checked + label::before{
  content:'';
  position: absolute;
  width: 16px;
  height: 16px;
  left:0;
  top:calc(50% - 10px);
  background-color: transparent;
  border-radius: 2px;
  border: 2px solid var(--violet);
}
.checkbox:checked + label::after{
  content:'';
  position: absolute;
  width: 12px;
  height: 12px;
  transition: all .2s ease;
  opacity: 1;
  left: 4px;
  top: calc(50% - 6px);
  background-color: var(--violet);
}
.checkbox:not(:checked) + label::before{
  content:'';
  position: absolute;
  width: 16px;
  height: 16px;
  left:0;
  top:calc(50% - 10px);
  background-color: transparent;
  border-radius: 2px;
  border: 2px solid var(--gray);
}
.checkbox:not(:checked) + label::after{
  content:'';
  position: absolute;
  width: 12px;
  height: 12px;
  transition: all .2s ease;
  opacity: 0;
  left: 4px;
  top: calc(50% - 6px);
  background-color: var(--violet);
}
.btn:disabled {
  cursor: not-allowed;
}
.text_btn{
  font-size: 20px;
  text-decoration: none;
  color: var(--violet);
  text-transform: uppercase;
  font-weight: 700;
  transition: color 0.5s;
}
button {
  cursor: pointer;
}
.text_btn {
  background-color: var(--white);
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 10px lightgrey;
  border: none;
  margin-top: 30px;
}
.text_btn:hover a{
  color: coral;
}
.input {
  padding: 10px 10px;
  border-radius: 10px;
  border: 1px solid lightgrey;
}
input:focus {
  box-shadow: 1px 1px 10px var(--gray);
  outline: none;
}
.fade-enter-active, .fade-leave-active {
  transition: transform .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  transform: translateX(-200%);
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px;
}
.btn-fixed {
  position: fixed;
  top: 50px;
  left:50px;
}
h1 {
  font-size: 50px;
}
.glass-effect {
  background: linear-gradient(135deg, rgba(255,25,255,0.1), rgba(25,255,255,0));
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.37);
  border: 1px solid rgba(255,25,255,0.18);
  border-radius: 32px;

  padding: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btn:hover:before {
  content: attr(data-name);
  position: absolute;
  top: -50%;
  right: -50%;
  padding: 1px 7px;
  background-color: rgba(97, 97, 0, 0.5);
  color: var(--white);
  border-radius: 5px;
  border-bottom-left-radius: 0;
  white-space: nowrap;
}
input {
  min-width: 200px;
}
@media(max-width: 1240px) {
  .glass-effect {
    padding: 50px;
    width: 80%;
  }
  h1 {
    font-size: 40px;
  }
  .container {
    padding: 50px;
  }
}
@media(max-width: 720px) {
  .container {
    width: 80%;
    padding: 30px 10px;
  }
  h1 {
    font-size: 22px;
  }
  h2 {
    font-size: 18px;
  }
  p {
    font-size: 14px;
  }
  ul {
    padding: 0px;
    margin: 0px;
  }
  .btn-fixed {
    top: 90%;
    left:5px;
  }
}
</style>

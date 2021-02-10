<template>
  <div id="app">
    
    <header>
        
        <div class="header-item ">
            <div class="header-profile">
                <img src="assets/img/profile-ico.svg" alt="profile">
                <h3>Иванов п.п</h3>
            </div>
        </div>

        <div class="header-item">
            <div class="header-form">
                <form action="#">
                    <div class="form-period">
                        <p class="calendarIcon"><input type='text' class="datepicker-here" data-position="right top" placeholder="Начало периода"/></p>
                        <span></span>
                        <p class="calendarIcon"><input type='text' class="datepicker-here" data-position="right top" placeholder="Конец периода"/></p>
                    </div>
                    <div class="form-search">
                        <p class="searchIcon"><input type="text" name="search" id="search" placeholder="Поиск по ключевым словам"></p>
                    </div>
                    <div class="form-status">
                        <p class="questionIcon">
                            <select name="status" id="status" >
                                <option  value="Статус заявки">Статус заявки</option>
                                <option value="Ожидание">Ожидание</option>
                                <option value="Выполняеться">Выполняеться</option>
                                <option value="Готово">Готово</option>
                            </select>
                        </p>
                    </div>
                </form>
            </div>
        </div>

        <div class="header-item">
            <div class="header-logo">
                <img src="assets/img/spk logo.svg" alt="">
            </div>
        </div>
        
    </header>

    <main>

        <div class='modal' id='modal1'>
            <div class="modal-tittle">
                <label>Добавление новой заявки</label>
            </div>
            <div class='content'>
                <span>Выберите СП</span>
                <div class="sp">
                    <select name="sp" id="sp">
                    <option value="СП-1">СП-1</option>
                    <option value="СП-2">СП-2</option>
                    <option value="СП-3">СП-3</option>
                    <option value="СП-4">СП-4</option>
                    <option value="СП-5">СП-5</option>
                </select>
                </div>
                <span>Сотрудник</span>
                <div class="sotrudnik">
                    <input type="text">
                </div>
                <span>Кабинет</span>
                <div class="kabinet">
                    <input type="number">
                </div>
                <span>Проблема</span>
                <div class="problem">
                    <textarea  name="problem" id="problem" cols="30" rows="4"></textarea>
                </div>
            </div>	
            <div class="send-req">
                <button data-modal="#modal1" class="close-modal">Отправить</button>
            </div>
        </div>
        <div class="main-container">

            <div class="main-tittle">
                <div class="main-tittle-item">
                    <p>Дата подачи</p>
                </div>
                <div class="main-tittle-item">
                    <p>Сотрудник</p>
                </div>
                <div class="main-tittle-item">
                    <p>Номер кабинета</p>
                </div>
                <div class="main-tittle-item">
                    <p>Проблема</p>
                </div>
                <div class="main-tittle-item">
                    <p>Статус</p>
                </div>
            </div>
            <div class="new-request">
                <button class='new-r open-modal'  data-modal="#modal1">Добавить новую заявку <img class="plus2" src="assets/img/plus 2.svg" alt=""></button>
            </div>
        <router-view
                v-for="post in posts"
                v-bind="post"
                :key="post.id"
        ></router-view>
        </div>
      <div class="content">
        
      </div>
    </main>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        posts: [],
        endpoint: 'http://3612d488699a.ngrok.io/posts/',
      }
    },
    created() {
      this.getAllPosts();
    },
    methods: {
      getAllPosts() {
        axios.get(this.endpoint)
          .then(response => {
            this.posts = response.data;
          })
          .catch(error => {
            console.log('-----error-------');
            console.log(error);
          })
      }
    }
  }
</script>

<style lang="css">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Roboto;
  outline: none;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  padding: 0 62px;
  background: #23539C;
}

.header-item {
  /* width: 33%; */
  height: 100%;
}

.header-profile {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

.header-profile h3 {
  color: white;
  font-weight: normal;
  text-align: center;
  font-size: 14px;
  margin-top: 5px;
}

.d-block {
  display: flex;
  justify-content: start;
  align-items: center;
}

.d-none {
  opacity: 0;
}

.header-link {
  color: white;
  font-weight: normal;
  text-decoration: underline;
  /* margin-left: 68px; */
  font-size: 14px;
  display: block;
  width: 130px;
}

.header-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

.header-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.header-form form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.header-form form input {
  padding: 5px 15px;
  background: rgba(255, 255, 255, 0);
  border: 1px solid white;
  color: white;
  border-radius: 8px;
  display: block;
  height: 33px;
  margin: 0 5px;
}

select {
  padding: 5px 15px;
  background: rgba(255, 255, 255, 0);
  border: 1px solid white;
  color: white;
  border-radius: 8px;
  display: block;
  height: 33px;
  margin: 0 5px;
}

.header-form input::placeholder {
  color: white;
}

.form-search input {
  width: 230px;
}

.form-period {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-period span {
  display: block;
  width: 15px;
  height: 1px;
  background: #ffffff70;
  color: white;
  margin: 0 -2px;
}

.form-status select {
  appearance: none;
  padding-right: 40px;
  transition: .3s all;
}

.calendarIcon {
  position: relative;
}

.calendarIcon::before {
  content: '';
  height: 11px;
  width: 11px;
  background: url("assets/img/calendar.svg") center no-repeat;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(-50%, -50%);
}

.searchIcon {
  position: relative;
}

.searchIcon::before {
  content: '';
  height: 11px;
  width: 11px;
  background: url("assets/img/search.svg") center no-repeat;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(-50%, -50%);
}

.questionIcon {
  position: relative;
}

.questionIcon::before {
  content: '';
  height: 12px;
  width: 12px;
  background: url("assets/img/question.svg") center no-repeat;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(-50%, -50%);
}

.form-status select:focus {
  color: #23539C;
}

.main-tittle {
  width: 926px;
  height: 50px;
  background: #23539C;
  border-radius: 8px;
  margin-top: 37px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.main-tittle-item {
  color: white;
  font-size: 12px;
  border-right: 1px solid;
  height: 27px;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-tittle-item:nth-child(4) {
  width: 50%;
}

.main-tittle-item:nth-child(5) {
  border-right: none;
}

.main-request {
  width: 926px;
  margin-top: 7px;
  height: 62px;
  background: #FFFFFF;
  border: 1px solid #3F69A9;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-request-item {
  color: #616161;
  font-size: 12px;
  border-right: 1px solid #979797;
  height: 27px;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-request-item:nth-child(4) {
  width: 50%;
}

.main-request-item:nth-child(5) {
  border-right: none;
}

.main-request-item-progress {
  color: #23539C;
  font-size: 13px;
  height: 27px;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-request-item-progress img {
  margin-left: 6px;
}

.new-request {
  margin-top: 7px;
}

.new-r {
  color: #23539C;
  width: 926px;
  height: 50px;
  background: #FFFFFF;
  border: 1px solid rgba(35, 83, 156, 0.87);
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.new-r:hover {
  background: #23539C;
  color: white;
}

.new-r:hover .plus2 path {
  fill: white;
}

.plus2 {
  margin-left: 8px;
  transition: 0.5s;
}

.content span:nth-child(3) {
  margin-top: 6px;
}

.content span:nth-child(4) {
  margin-top: 6px;
}

.content span:nth-child(5) {
  margin-top: 6px;
}

.content span:nth-child(7) {
  margin-top: 6px;
}

.sp select {
  color: black;
  margin: 0;
  padding: 0;
  margin-top: 9px;
  height: 23px;
  border: 1px solid rgba(35, 83, 156, 0.87);
  box-sizing: border-box;
  border-radius: 8px;
  width: 133px;
}

.content span {
  font-size: 15px;
  line-height: 15px;
}

.content input {
  border: 1px solid rgba(35, 83, 156, 0.87);
  border-radius: 8px;
  height: 23px;
  padding-left: 5px;
}

.sotrudnik input {
  width: 372px;
}

.sotrudnik {
  margin-top: 6px;
}

.kabinet input {
  width: 133px;
  margin-top: 6px;
}

.problem textarea {
  width: 493px;
  height: 120px;
  border: 1px solid rgba(35, 83, 156, 0.87);
  border-radius: 8px;
  padding-left: 5px;
  margin-top: 6px;
}

.send-req button {
  border: none;
  color: white;
  width: 196px;
  height: 33px;
  background: #23539C;
  border-radius: 8px;
}

img.rot {
  animation: 2s linear 0s normal none infinite running rot;
  -webkit-animation: 2s linear 0s normal none infinite running rot;
}

@keyframes rot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
* {
  box-sizing: border-box;
}


.btn {
  padding: 20px 50px;
  display: inline-block;
  background: #EF233C;
  color: white;
  text-decoration: none;
  transition: 0.35s ease-in-out;
  font-weight: 700;
}
.btn:hover {
  background: #dc1029;
}

.overlay {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.75);
  opacity: 0;
  pointer-events: none;
  transition: 0.35s ease-in-out;
  max-height: 100vh;
  overflow-y: auto;
}
.overlay.open {
  opacity: 1;
  pointer-events: inherit;
}
.overlay .modal {
  background: white;
  text-align: center;
  padding: 0px;
  width: 40%;
  height: 471px;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
  opacity: 0;
  border-radius: 8px;
  pointer-events: none;
  transition: 0.35s ease-in-out;
  max-height: 100vh;
  overflow-y: auto;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
}
.overlay .modal.open {
  opacity: 1;
  pointer-events: inherit;
}
.overlay .modal.open .content {
  transform: translate(0, 0px);
  opacity: 1;
}
.overlay .modal .content {
  transform: translate(0, -10px);
  opacity: 0;
  transition: 0.35s ease-in-out;
}
.overlay .modal .title {
  margin-top: 0;
}
.modal-tittle{
  background-color: #23539C;
  color: white;
  height: 42px;
  display: flex;
  align-items: center;

}
.modal-tittle label{
  margin-left: 13px;
}
.content{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 34px 10px 10px 94px;
}
</style>

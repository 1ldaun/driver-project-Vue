<template>
  <div class="chat">
    <div class="chat-header">
      <img class="header-logo" src="../assets/logo.jpg" alt="">
      <h1 class="chat-header-h1">Начальник колонны</h1>
      <img src="../assets/close.png" alt="close" class="chat-header-img">
    </div>
    <div class="chat-body">
      <p class="chat-body-date">3 марта</p>
      <ul class="dialog">

        <div class="dialog-div">
          <p class="dialog-p">Евгений,  машина барахлит, необходим ремонт</p>
          <p class="dialog-time">10:16</p>
        </div>

        <div class="dialog-div">
          <p class="dialog-p">Кирилл, понял Вас! Направляю адрес сервиса
          </p>
          <p class="dialog-time">10:30</p>
        </div>

      </ul>

      <div class="message">
        <input type="text" class="message-input" placeholder="Введите сообщение" />
        <img src="../assets/send.png" alt="send" class="message-img">
      </div>
    </div>

    <div class="footer">
      <ul class="footer-nav">
        <li class="footer-nav-li"> <img src="../assets/chat.png" alt=""> Чат</li>
        <li class="footer-nav-li"> <img src="../assets/home.png" alt="">Главная</li>
        <li class="footer-nav-li"> <img src="../assets/navigation.png" alt="">Навигация</li>
      </ul>
    </div>
  </div>
</template>

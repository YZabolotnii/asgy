<template>
    <footer>
        <div class="footer">
            <div class="footer__container">
              <div>by @yrszb</div>
              <div>АСГУ</div>
            </div>
        </div>
    </footer>
</template>
<style>
    .footer {
        background: #420;
        width: 100%;
    }
    .footer__container {
      padding: 50px;
      display: flex;
      justify-content: space-between;
    }
    .footer__container div {
      font-size: 20px;
      color: #ffffff;
    }
    .footer__container div:hover {
      transition: all 0.2s ease-in-out;
      transform: scale(1.2);
    }
</style>
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function YandexMetrika() {
  const location = useLocation(); // отслеживаем путь

  useEffect(() => {
    // вставляем скрипт один раз
    if (!window.ym) {
      (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) return;
        }
        k=e.createElement(t),a=e.getElementsByTagName(t)[0];
        k.async=1;k.src=r;a.parentNode.insertBefore(k,a)
      })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104658217', 'ym');

      window.ym && window.ym(104658217, 'init', {
        ssr:true,
        webvisor:true,
        clickmap:true,
        ecommerce:"dataLayer",
        accurateTrackBounce:true,
        trackLinks:true
      });
    }

    // фиксируем просмотр текущей страницы
    window.ym && window.ym(104658217, 'hit', location.pathname + location.search);
  }, [location]);

  return null;
}

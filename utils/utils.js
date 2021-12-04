// знаки доллара аналогичные jquery для абстрагирования обращения к dom

export const $ = query => document.querySelector( query )
export const $$ = query => [ ...document.querySelectorAll( query ) ] // по строчным названиям стилей которые мы передаем сюда через query мы формируем массив html элементов для дальнейшего парсинга и рендеринга
export const $$$ = (element, query) => element.querySelector( query ) // для обращения к дочернему компоненту уже ранее найденного нами элемента
export const deepclone = obj => JSON.parse( JSON.stringify( obj ) )

window.$ = $
window.$$ = $$
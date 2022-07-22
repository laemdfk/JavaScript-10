$(function() {
  $('.menu-trigger').on('click', function(event) {
    // .menu-triggerクリック時に行われる処理の設定
    $(this).toggleClass('active');
    // .toggleClass()は、指定されているclass（ここではactive）をトグル処理するメソッド
    $('#sp-menu').fadeToggle();
    // .fadeToggle()は、要素のフェードイン・フェードアウトを切り替えるメソッド
    event.preventDefault();
  });
});
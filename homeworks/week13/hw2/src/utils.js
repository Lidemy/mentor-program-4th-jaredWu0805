/* eslint-disable */
import $ from 'jquery';

export function escapeHtml(unsafe) {
  return unsafe.replace(/&/g, "&amp;")
       .replace(/</g, "&lt;")
       .replace(/>/g, "&gt;")
       .replace(/"/g, "&quot;")
       .replace(/'/g, "&#039;");
}

export function moreBtnShow(noMoreData) {
  if(noMoreData) {
    $('.more__btn').hide();
  } else {
    $('.more__btn').show().blur();
  }
}

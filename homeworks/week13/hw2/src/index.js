/* eslint-disable */
import 'jquery';
import { addApiPost, getApiPosts } from './api';
import { escapeHtml, moreBtnShow } from './utils';
import { template } from './templates';
import "bootswatch/dist/lux/bootstrap.min.css";

let cursor = 0;
let siteName = "";
let apiUrl = "";
let commentArea = null;

export function init(options) {
  siteName = options.siteName;
  apiUrl = options.apiUrl;
  commentArea = $(options.commentSelector);
  commentArea.append(template);

  getPosts(5, null);

  $("form").submit((e)=>{
    e.preventDefault();
    let name = $("#nickname").val();
    let cnt = $("#text").val();
    let data = {
        site_name: siteName,
        nickname: name,
        content: cnt};
    addApiPost(apiUrl, data, cnt, function(data){
      if (!data.success) {
        console.log(data.message);
      } else {
        $('.list-group').html("");
        getPosts(5, null);
        $("#nickname").val("");
        $("#text").val("");
        $("#btn1").blur();
      }
    });
  });

  $('.more__btn').on('click', () => {
    getPosts(5, cursor);
  });
}

function getPosts(lmt, csr) {
  let data = {
      site_name: siteName,
      limit: lmt,
      cursor: csr};
  getApiPosts(apiUrl, data, function(data) {
      const posts = data.posts;
      const list_container = $('.list-group');
      posts.forEach( post =>{
        let t = post['created_at'].split(/[- :]/);
        list_container.append(`
          <li class="list-group-item">
            <div class="card-body px-1">
              <div class="d-inline-flex justify-content-between col-md-12 pl-0">
                <h5 class="card-title m-0 text-capitalize">${escapeHtml(post['nickname'])}</h5>
                <h6 class="card-subtitle text-muted m-0 mt-1">${escapeHtml(t[0] + '/' + t[1] + '/' + t[2])}</h6>
              </div>
              <p class="card-text">${escapeHtml(post['content'])}</p>
            </div>
          </li>
        `)
      });
      cursor = data.cursor;
      moreBtnShow(data.noMoreData);
    });
}

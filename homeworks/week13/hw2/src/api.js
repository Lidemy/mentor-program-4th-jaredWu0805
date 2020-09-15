/* eslint-disable */
import 'jquery';

export function getApiPosts(apiUrl, data, cb) {
	$.ajax({
	  url: apiUrl + "api_get_posts.php",
	  method: "POST",
	  data: data,
	  success: function(data) {
	  	cb(data);
	  }
	});
}


export function addApiPost (apiUrl, data, cnt, cb) {
	$.ajax({
      url: apiUrl + "api_add_post.php",
      method: "POST",
      data: data,
      success: function(data){
        cb(data);
      }
    });
}

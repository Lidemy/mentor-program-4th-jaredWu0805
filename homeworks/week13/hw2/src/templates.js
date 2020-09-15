/* eslint-disable */
export const template = `
<div class="container" style="margin-top: 30px">
  <form class="add-post-form">
    <div class="row">
        <div class="col-md-6 offset-md-2">
          <div class="input-group">
            <textarea class="form-control" id="text" aria-label="With textarea" style="height: 150px" placeholder="Say something.."></textarea>
          </div>
        </div>
        <div class="col-md-2">
          <label for="nickname">Your nickname</label>
          <div class="input-group">
            <input type="text" class="form-control" id="nickname" aria-describedby="basic-addon3">
          </div>
          <div class="input-group justify-content-end mt-4">
            <div class="input-group-prepend">
                <button class="btn btn-outline-secondary" type="submit" id="btn1">Submit</button>
              </div>
          </div>
        </div>
    </div>
  <form>
</div>
<div class="container mt-4 col-md-6 offset-md-3">
  <div class="card" style="width: 100%">
    <div class="card-header">
      過往留言
    </div>
    <ul class="list-group list-group-flush">
    </ul>
  </div>
  <div class="input-group-prepend my-2">
    <button class="btn btn-outline-secondary more__btn" style="display: none">More</button>
  </div>
</div> `;

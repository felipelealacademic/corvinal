<template>
  <span>
    <div class="bg-nav"></div>
    <div class="container">
      <div class="row adjust-top justify-content-center align-items-center" style="height: 60vh;">
        <div class="col-10 pb-2 px-0">
          <h1 class="h4 text-white">LOGIN</h1>
        </div>
        <div class="col-10 card p-5">
          <div class="row justify-content-center">
            <!-- <img class="py-3" src="\DevUTFPR\corvinal\src\assets\images\logo.png" alt="" width="150"> -->
            <img class="py-3" width="125" height="150" src="http://www.utfpr.edu.br/santahelena/cursos/licenciaturas/Ofertados-neste-Campus/licenciatura-em-ciencias-biologicas-1/informacoes/UTFPR%20Campus%20Santa%20Helena.png/image_preview" alt="">
          </div>
          <div class="row justify-content-center">
            <div class="col-8">
              <form>
                <input type="hidden">
                <div class="form-group">
                  <label for="">Email</label>
                  <input type="email" class="form-control" id="email">
                </div>
                <div class="form-group">
                  <label for="">Senha</label>
                  <input type="password" class="form-control" id="senha">
                </div>
                <div class="form-row">
                  <div class="mr-auto form-check">
                    <input type="checkbox" class="form-check-input" id="">
                    <label class="form-check-label" for="">Lembrar-me</label>
                  </div>
                  <div class="ml-auto">
                    <a href="">Ainda não tenho cadastro</a>
                  </div>
                </div>
                <div class="text-center pt-4">
                  <button type="submit" class="btn btn-warning text-white">LOGIN</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
export default {

};
</script>

<style>
.bg-nav {
  height: 150px;
  background-color: black;
}
.adjust-top {
  position: relative;
  top: -100px;
}
</style>

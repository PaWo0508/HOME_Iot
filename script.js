const $form = $('#form')
$('.btn btn-pc-sp btn-pc-sp--2 btn-pc-sp--contact').on('click', evt => {
  $form.submit()
  $form[0].reset()
  return false
})

const $form = $('#form2')
$('.btn btn-pc-sp btn-pc-sp--2 btn-pc-sp--off').on('click', evt => {
  $form.submit()
  $form[0].reset()
  return false
})

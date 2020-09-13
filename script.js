const $form = $('#form')
$('.btn-send').on('click', evt => {
  $form.submit()
  $form[0].reset()
  return false
})

const $form = $('#form2')
$('.btn-send2').on('click', evt => {
  $form.submit()
  $form[0].reset()
  return false
})
